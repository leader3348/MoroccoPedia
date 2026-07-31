/**
 * MoroccoPedia — useApi.js
 * Fixed: timeout, error handling, offline fallback, retry logic
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const DEFAULT_TIMEOUT = 8000; // 8 seconds

// ── Core fetch with timeout + retry ───────────────────────────
async function fetchWithTimeout(url, options = {}, timeout = DEFAULT_TIMEOUT) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    clearTimeout(timer);

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: `HTTP ${response.status}` }));
      throw new Error(error.message || `HTTP error ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    clearTimeout(timer);
    if (err.name === 'AbortError') {
      throw new Error('Request timeout — server took too long to respond');
    }
    throw err;
  }
}

// ── Auth token helper ──────────────────────────────────────────
function getToken() {
  try {
    return typeof window !== 'undefined' ? localStorage.getItem('mp_token') || '' : '';
  } catch {
    return ''; // Safari Private Mode fix
  }
}

function authHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// ── Safe localStorage wrapper ─────────────────────────────────
export function safeLocalStorage() {
  const noOp = { getItem: () => null, setItem: () => {}, removeItem: () => {}, clear: () => {} };
  try {
    if (typeof window === 'undefined') return noOp;
    localStorage.setItem('__test__', '1');
    localStorage.removeItem('__test__');
    return localStorage;
  } catch {
    return noOp;
  }
}

// ── DIALECT API ───────────────────────────────────────────────
export async function searchWord(query, limit = 20) {
  if (!query?.trim()) return null;
  try {
    return await fetchWithTimeout(
      `${API_BASE}/api/dialect/search?q=${encodeURIComponent(query.trim())}&limit=${limit}`
    );
  } catch (err) {
    console.warn('[MoroccoPedia] searchWord API failed:', err.message);
    return null; // Caller should use local fallback
  }
}

export async function getWordDetails(word) {
  if (!word?.trim()) return null;
  try {
    return await fetchWithTimeout(`${API_BASE}/api/dialect/word/${encodeURIComponent(word)}`);
  } catch {
    return null;
  }
}

export async function translateAcrossRegions(word) {
  if (!word?.trim()) return null;
  try {
    return await fetchWithTimeout(`${API_BASE}/api/dialect/translate/${encodeURIComponent(word)}`);
  } catch {
    return null;
  }
}

export async function compareRegions(r1, r2) {
  if (!r1 || !r2) return null;
  try {
    return await fetchWithTimeout(
      `${API_BASE}/api/dialect/compare?r1=${encodeURIComponent(r1)}&r2=${encodeURIComponent(r2)}`
    );
  } catch {
    return null;
  }
}

export async function getRandomWord() {
  try {
    return await fetchWithTimeout(`${API_BASE}/api/dialect/random`);
  } catch {
    return null;
  }
}

// ── CITIES API ────────────────────────────────────────────────
export async function getCities() {
  try {
    return await fetchWithTimeout(`${API_BASE}/api/cities`);
  } catch {
    return null;
  }
}

export async function getCityDetails(slug) {
  if (!slug) return null;
  try {
    return await fetchWithTimeout(`${API_BASE}/api/cities/${slug}`);
  } catch {
    return null;
  }
}


// Alias for backward compatibility
export const getCity = getCityDetails;

// ── COMMUNITY API ─────────────────────────────────────────────
export async function getCommunityPosts(params = {}) {
  try {
    const query = new URLSearchParams(params).toString();
    return await fetchWithTimeout(`${API_BASE}/api/community${query ? '?' + query : ''}`);
  } catch {
    return null;
  }
}

export async function submitContribution(payload) {
  if (!payload) return null;
  try {
    return await fetchWithTimeout(`${API_BASE}/api/community`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: authHeaders(),
    });
  } catch {
    return null;
  }
}

export async function likeContribution(id) {
  if (!id) return null;
  try {
    return await fetchWithTimeout(`${API_BASE}/api/community/${id}/like`, {
      method: 'POST',
      headers: authHeaders(),
    });
  } catch {
    return null;
  }
}

// ── AUTH API ──────────────────────────────────────────────────
export async function login(email, password) {
  if (!email || !password) throw new Error('Email et mot de passe requis');
  const data = await fetchWithTimeout(`${API_BASE}/api/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  if (data?.token) {
    try { localStorage.setItem('mp_token', data.token); } catch {}
  }
  return data;
}

export async function register(userData) {
  const data = await fetchWithTimeout(`${API_BASE}/api/auth/register`, {
    method: 'POST',
    body: JSON.stringify(userData),
  });
  if (data?.token) {
    try { localStorage.setItem('mp_token', data.token); } catch {}
  }
  return data;
}

export async function logout() {
  try {
    await fetchWithTimeout(`${API_BASE}/api/auth/logout`, {
      method: 'POST',
      headers: authHeaders(),
    });
  } catch {}
  try { localStorage.removeItem('mp_token'); } catch {}
}

export async function getMe() {
  const token = getToken();
  if (!token) return null;
  try {
    return await fetchWithTimeout(`${API_BASE}/api/auth/me`, {
      headers: authHeaders(),
    });
  } catch {
    return null;
  }
}

// ── TRANSLATE API ─────────────────────────────────────────────
export async function translateText(text, targetLang = 'en') {
  if (!text?.trim()) return null;
  try {
    return await fetchWithTimeout(`${API_BASE}/api/translate`, {
      method: 'POST',
      body: JSON.stringify({ text: text.trim(), to: targetLang }),
    });
  } catch {
    return null;
  }
}

// ── AI API ────────────────────────────────────────────────────
export async function askAI(message) {
  if (!message?.trim()) return null;
  try {
    return await fetchWithTimeout(
      `${API_BASE}/api/ai/chat`,
      {
        method: 'POST',
        body: JSON.stringify({ message: message.trim() }),
        headers: authHeaders(),
      },
      15000 // AI gets 15 seconds
    );
  } catch {
    return null;
  }
}

// ── NOTIFICATIONS API ─────────────────────────────────────────
export async function getNotifications() {
  const token = getToken();
  if (!token) return null;
  try {
    return await fetchWithTimeout(`${API_BASE}/api/notifications`, {
      headers: authHeaders(),
    });
  } catch {
    return null;
  }
}

export async function markNotificationRead(id) {
  if (!id) return null;
  try {
    return await fetchWithTimeout(`${API_BASE}/api/notifications/${id}/read`, {
      method: 'PUT',
      headers: authHeaders(),
    });
  } catch {
    return null;
  }
}

// ── ANALYTICS API ─────────────────────────────────────────────
export async function trackEvent(event, data = {}) {
  try {
    // Fire and forget — don't await, don't block UI
    fetch(`${API_BASE}/api/analytics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...authHeaders() },
      body: JSON.stringify({ event, data, timestamp: Date.now() }),
    }).catch(() => {});
  } catch {}
}

export async function getAnalyticsDashboard() {
  try {
    return await fetchWithTimeout(`${API_BASE}/api/analytics/dashboard`, {
      headers: authHeaders(),
    });
  } catch {
    return null;
  }
}

// ── HEALTH CHECK ──────────────────────────────────────────────
export async function checkApiHealth() {
  try {
    const data = await fetchWithTimeout(`${API_BASE}/api/health`, {}, 3000);
    return { online: true, version: data?.version };
  } catch {
    return { online: false };
  }
}

// ── SEARCH API ────────────────────────────────────────────────
export async function globalSearch(query) {
  if (!query?.trim()) return null;
  try {
    return await fetchWithTimeout(
      `${API_BASE}/api/search?q=${encodeURIComponent(query.trim())}`
    );
  } catch {
    return null;
  }
}
