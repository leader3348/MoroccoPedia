import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('mp_cookie_consent');
    if (!consent) setTimeout(() => setVisible(true), 1500);
  }, []);

  const accept = () => {
    localStorage.setItem('mp_cookie_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('mp_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 20, left: 20, right: 20, zIndex: 9999,
      maxWidth: 520, margin: '0 auto',
      background: '#fff', border: '1px solid var(--border)',
      borderRadius: 16, padding: '18px 22px',
      boxShadow: '0 8px 40px rgba(0,0,0,.14)',
      display: 'flex', gap: 16, alignItems: 'center',
      animation: 'fadeUp .4s ease',
    }}>
      {/* Icon */}
      <div style={{ fontSize: 28, flexShrink: 0 }}>🍪</div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>
          We use cookies
        </div>
        <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.55 }}>
          We use cookies to improve your experience and analyse site traffic. No data is sold to third parties.
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0 }}>
        <button onClick={accept}
          style={{ padding: '8px 16px', borderRadius: 8, background: 'linear-gradient(135deg,var(--terra),var(--gold))', border: 'none', color: '#fff', fontSize: 12.5, fontWeight: 600, cursor: 'pointer', fontFamily: 'Outfit,sans-serif', whiteSpace: 'nowrap' }}>
          Accept
        </button>
        <button onClick={decline}
          style={{ padding: '8px 16px', borderRadius: 8, background: 'transparent', border: '1px solid var(--border)', color: 'var(--muted)', fontSize: 12, cursor: 'pointer', fontFamily: 'Outfit,sans-serif', whiteSpace: 'nowrap' }}>
          Decline
        </button>
      </div>
    </div>
  );
}
