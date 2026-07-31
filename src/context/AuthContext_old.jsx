import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { checkHealth } from '../hooks/useApi';

const BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// ── Context ──────────────────────────────────────────────────
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user,          setUser]          = useState(null);
  const [loading,       setLoading]       = useState(true);
  const [language,      setLanguageState] = useState('en');
  const [notifications, setNotifications] = useState([]);
  const [unreadCount,   setUnreadCount]   = useState(0);
  const [apiOnline,     setApiOnline]     = useState(null);
  const socketRef = useRef(null);

  // ── API helper ─────────────────────────────────────────────
  const apiFetch = useCallback(async (path, options = {}) => {
    try {
      const res = await fetch(`${BASE}${path}`, {
        credentials: 'include',
        headers: { 'Content-Type': 'application/json', ...options.headers },
        ...options,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      return { data, ok: true };
    } catch (err) {
      return { error: err.message, ok: false };
    }
  }, []);

  // ── Load current user on mount ─────────────────────────────
  useEffect(() => {
    const init = async () => {
      // Check API health
      const health = await checkHealth();
      setApiOnline(!!health);

      // Try to restore session
      const token = typeof window !== 'undefined' ? localStorage.getItem('mp_token') : null;
      if (token) {
        const { data, ok } = await apiFetch('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (ok) {
          setUser(data.user);
          setLanguageState(data.user.language || 'en');
          loadNotifications(token);
          connectSocket(token);
        } else {
          localStorage.removeItem('mp_token');
        }
      }
      setLoading(false);
    };
    init();
  }, []);

  // ── Socket.IO for real-time notifications ──────────────────
  const connectSocket = useCallback((token) => {
    if (typeof window === 'undefined') return;
    try {
      const { io } = require('socket.io-client');
      const socket = io(BASE, { auth: { token }, transports: ['websocket'] });

      socket.on('notification', (notif) => {
        setNotifications(prev => [notif, ...prev]);
        setUnreadCount(prev => prev + 1);
      });

      socketRef.current = socket;
    } catch (e) {
      // socket.io-client not installed — notifications still work via polling
    }
  }, []);

  // ── Load notifications ─────────────────────────────────────
  const loadNotifications = useCallback(async (token) => {
    const authHeader = token ? { Authorization: `Bearer ${token}` } : {};
    const { data, ok } = await apiFetch('/api/notifications?limit=10', { headers: authHeader });
    if (ok) {
      setNotifications(data.notifications || []);
      setUnreadCount(data.unreadCount || 0);
    }
  }, [apiFetch]);

  // ── Auth actions ───────────────────────────────────────────
  const register = useCallback(async (formData) => {
    const { data, ok, error } = await apiFetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    if (ok) {
      localStorage.setItem('mp_token', data.token);
      setUser(data.user);
      setLanguageState(data.user.language || 'en');
      loadNotifications(data.token);
      connectSocket(data.token);
    }
    return { ok, error };
  }, [apiFetch, loadNotifications, connectSocket]);

  const login = useCallback(async (email, password) => {
    const { data, ok, error } = await apiFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (ok) {
      localStorage.setItem('mp_token', data.token);
      setUser(data.user);
      setLanguageState(data.user.language || 'en');
      loadNotifications(data.token);
      connectSocket(data.token);
    }
    return { ok, error };
  }, [apiFetch, loadNotifications, connectSocket]);

  const logout = useCallback(async () => {
    await apiFetch('/api/auth/logout', { method: 'POST' });
    localStorage.removeItem('mp_token');
    setUser(null);
    setNotifications([]);
    setUnreadCount(0);
    if (socketRef.current) {
      socketRef.current.disconnect();
      socketRef.current = null;
    }
  }, [apiFetch]);

  const updateProfile = useCallback(async (updates) => {
    const token = localStorage.getItem('mp_token');
    const { data, ok, error } = await apiFetch('/api/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(updates),
      headers: { Authorization: `Bearer ${token}` },
    });
    if (ok) {
      setUser(data.user);
      if (updates.language) setLanguageState(updates.language);
    }
    return { ok, error };
  }, [apiFetch]);

  // ── Language ───────────────────────────────────────────────
  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('mp_lang', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    }
    if (user) updateProfile({ language: lang });
  }, [user, updateProfile]);

  // ── Notifications actions ──────────────────────────────────
  const markAllRead = useCallback(async () => {
    const token = localStorage.getItem('mp_token');
    await apiFetch('/api/notifications/mark-all-read', {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
    });
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    setUnreadCount(0);
  }, [apiFetch]);

  const markRead = useCallback(async (id) => {
    const token = localStorage.getItem('mp_token');
    await apiFetch(`/api/notifications/${id}/read`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
    });
    setNotifications(prev => prev.map(n => n._id === id ? { ...n, read: true } : n));
    setUnreadCount(prev => Math.max(0, prev - 1));
  }, [apiFetch]);

  // ── Track analytics event ──────────────────────────────────
  const track = useCallback(async (event, data = {}) => {
    const token = localStorage.getItem('mp_token');
    apiFetch('/api/analytics/track', {
      method: 'POST',
      body: JSON.stringify({
        event, data,
        page: typeof window !== 'undefined' ? window.location.pathname : null,
        device: typeof window !== 'undefined'
          ? (window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop')
          : 'unknown',
      }),
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }).catch(() => {});
  }, [apiFetch]);

  // ── Translation helper ─────────────────────────────────────
  const t = useCallback((key) => {
    try {
      const { t: translate } = require('../i18n/translations');
      return translate(key, language);
    } catch {
      return key;
    }
  }, [language]);

  const value = {
    // Auth
    user, loading, register, login, logout, updateProfile,
    isAuthenticated: !!user,
    isAdmin:        user?.role === 'admin',
    isModerator:    ['admin', 'moderator'].includes(user?.role),

    // Language
    language, setLanguage,
    isRTL: language === 'ar',
    t,

    // Notifications
    notifications, unreadCount, markAllRead, markRead,
    refreshNotifications: () => loadNotifications(localStorage.getItem('mp_token')),

    // API status
    apiOnline,

    // Analytics
    track,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
};
