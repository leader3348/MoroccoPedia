import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
// ✅ FIX: Use checkApiHealth (renamed in useApi.js v3)
import { checkApiHealth } from '../hooks/useApi';

const BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// ── Safe localStorage (Safari Private Mode fix) ───────────────
const storage = {
  get: (key) => { try { return typeof window !== 'undefined' ? localStorage.getItem(key) : null; } catch { return null; } },
  set: (key, val) => { try { if (typeof window !== 'undefined') localStorage.setItem(key, val); } catch {} },
  remove: (key) => { try { if (typeof window !== 'undefined') localStorage.removeItem(key); } catch {} },
};

// ── Context ───────────────────────────────────────────────────
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user,          setUser]          = useState(null);
  const [loading,       setLoading]       = useState(true);
  const [language,      setLanguageState] = useState('fr');
  const [notifications, setNotifications] = useState([]);
  const [unreadCount,   setUnreadCount]   = useState(0);
  const [apiOnline,     setApiOnline]     = useState(null);
  const socketRef = useRef(null);

  // ── API helper ────────────────────────────────────────────
  const apiFetch = useCallback(async (path, options = {}) => {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 8000);

      const res = await fetch(`${BASE}${path}`, {
        credentials: 'include',
        headers: { 'Content-Type': 'application/json', ...options.headers },
        signal: controller.signal,
        ...options,
      });
      clearTimeout(timer);

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      return { data, ok: true };
    } catch (err) {
      if (err.name === 'AbortError') return { error: 'Request timeout', ok: false };
      return { error: err.message, ok: false };
    }
  }, []);

  // ── Init on mount ─────────────────────────────────────────
  useEffect(() => {
    const init = async () => {
      // ✅ FIX: checkApiHealth (not checkHealth)
      try {
        const health = await checkApiHealth();
        setApiOnline(health?.online === true);
      } catch {
        setApiOnline(false);
      }

      // Restore session
      const token = storage.get('mp_token');
      if (token) {
        const { data, ok } = await apiFetch('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (ok && data?.user) {
          setUser(data.user);
          setLanguageState(data.user.language || 'fr');
          loadNotifications(token);
          connectSocket(token);
        } else {
          storage.remove('mp_token');
        }
      }
      setLoading(false);
    };
    init();
  }, []);

  // ── Socket.IO ─────────────────────────────────────────────
  const connectSocket = useCallback((token) => {
    if (typeof window === 'undefined') return;
    try {
      const { io } = require('socket.io-client');
      const socket = io(BASE, {
        auth: { token },
        transports: ['websocket'],
        reconnection: true,
        reconnectionAttempts: 3,
        timeout: 5000,
      });
      socket.on('notification', (notif) => {
        setNotifications(prev => [notif, ...prev]);
        setUnreadCount(prev => prev + 1);
      });
      socket.on('connect_error', () => {}); // Ignore socket errors silently
      socketRef.current = socket;
    } catch {}
  }, []);

  // ── Load notifications ─────────────────────────────────────
  const loadNotifications = useCallback(async (token) => {
    const { data, ok } = await apiFetch('/api/notifications?limit=10', {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (ok) {
      setNotifications(data.notifications || []);
      setUnreadCount(data.unreadCount || 0);
    }
  }, [apiFetch]);

  // ── Register ──────────────────────────────────────────────
  const register = useCallback(async (formData) => {
    const { data, ok, error } = await apiFetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    if (ok && data?.token) {
      storage.set('mp_token', data.token);
      setUser(data.user);
      setLanguageState(data.user?.language || 'fr');
      loadNotifications(data.token);
      connectSocket(data.token);
    }
    return { ok, error };
  }, [apiFetch, loadNotifications, connectSocket]);

  // ── Login ─────────────────────────────────────────────────
  const login = useCallback(async (email, password) => {
    const { data, ok, error } = await apiFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (ok && data?.token) {
      storage.set('mp_token', data.token);
      setUser(data.user);
      setLanguageState(data.user?.language || 'fr');
      loadNotifications(data.token);
      connectSocket(data.token);
    }
    return { ok, error };
  }, [apiFetch, loadNotifications, connectSocket]);

  // ── Logout ────────────────────────────────────────────────
  const logout = useCallback(async () => {
    await apiFetch('/api/auth/logout', { method: 'POST' });
    storage.remove('mp_token');
    setUser(null);
    setNotifications([]);
    setUnreadCount(0);
    if (socketRef.current) {
      socketRef.current.disconnect();
      socketRef.current = null;
    }
  }, [apiFetch]);

  // ── Update profile ────────────────────────────────────────
  const updateProfile = useCallback(async (updates) => {
    const token = storage.get('mp_token');
    const { data, ok, error } = await apiFetch('/api/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(updates),
      headers: { Authorization: `Bearer ${token}` },
    });
    if (ok && data?.user) {
      setUser(data.user);
      if (updates.language) setLanguageState(updates.language);
    }
    return { ok, error };
  }, [apiFetch]);

  // ── Language ──────────────────────────────────────────────
  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    storage.set('mp_lang', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    }
    if (user) updateProfile({ language: lang });
  }, [user, updateProfile]);

  // ── Notifications ─────────────────────────────────────────
  const markAllRead = useCallback(async () => {
    const token = storage.get('mp_token');
    await apiFetch('/api/notifications/mark-all-read', {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
    });
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    setUnreadCount(0);
  }, [apiFetch]);

  const markRead = useCallback(async (id) => {
    const token = storage.get('mp_token');
    await apiFetch(`/api/notifications/${id}/read`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
    });
    setNotifications(prev => prev.map(n => n._id === id ? { ...n, read: true } : n));
    setUnreadCount(prev => Math.max(0, prev - 1));
  }, [apiFetch]);

  // ── Analytics ─────────────────────────────────────────────
  const track = useCallback((event, data = {}) => {
    const token = storage.get('mp_token');
    fetch(`${BASE}/api/analytics/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        event, data,
        page: typeof window !== 'undefined' ? window.location.pathname : null,
        device: typeof window !== 'undefined'
          ? (window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop')
          : 'unknown',
      }),
    }).catch(() => {});
  }, []);

  // ── Translation ───────────────────────────────────────────
  const t = useCallback((key) => {
    try {
      const { t: translate } = require('../i18n/translations');
      return translate(key, language);
    } catch {
      return key;
    }
  }, [language]);

  const value = {
    user, loading, register, login, logout, updateProfile,
    isAuthenticated: !!user,
    isAdmin:         user?.role === 'admin',
    isModerator:     ['admin', 'moderator'].includes(user?.role),
    language, setLanguage,
    isRTL: language === 'ar',
    t,
    notifications, unreadCount, markAllRead, markRead,
    refreshNotifications: () => loadNotifications(storage.get('mp_token')),
    apiOnline,
    track,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
};
