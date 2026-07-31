import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const LANGS = [
  { code: 'en', label: 'English', native: 'EN', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', native: 'FR', flag: '🇫🇷' },
  { code: 'ar', label: 'العربية', native: 'AR', flag: '🇲🇦' },
  { code: 'es', label: 'Español', native: 'ES', flag: '🇪🇸' },
];

export default function LanguageSwitcher({ compact = false }) {
  const { language, setLanguage } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGS.find(l => l.code === language) || LANGS[0];

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: compact ? '5px 10px' : '7px 13px',
          borderRadius: 9, border: '1px solid var(--border)',
          background: open ? 'var(--bg2)' : 'transparent',
          cursor: 'pointer', fontSize: 12.5, fontWeight: 600,
          color: 'var(--ink2)', fontFamily: 'Outfit,sans-serif',
          transition: 'all .18s',
        }}>
        <span style={{ fontSize: 14 }}>{current.flag}</span>
        {!compact && <span>{current.native}</span>}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .18s' }}>
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 6px)', right: 0,
          background: '#fff', border: '1px solid var(--border)',
          borderRadius: 12, boxShadow: '0 8px 32px rgba(0,0,0,.1)',
          overflow: 'hidden', minWidth: 140, zIndex: 500,
        }}>
          {LANGS.map(lang => (
            <button key={lang.code}
              onClick={() => { setLanguage(lang.code); setOpen(false); }}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                padding: '9px 14px', background: language === lang.code ? 'var(--terra3)' : 'transparent',
                border: 'none', cursor: 'pointer', fontSize: 13,
                color: language === lang.code ? 'var(--terra)' : 'var(--ink)',
                fontWeight: language === lang.code ? 600 : 400,
                fontFamily: lang.code === 'ar' ? 'Amiri,serif' : 'Outfit,sans-serif',
                direction: lang.code === 'ar' ? 'rtl' : 'ltr',
                transition: 'background .15s', textAlign: 'left',
              }}>
              <span style={{ fontSize: 16 }}>{lang.flag}</span>
              <span>{lang.label}</span>
              {language === lang.code && (
                <span style={{ marginLeft: 'auto', fontSize: 10, color: 'var(--terra)' }}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
