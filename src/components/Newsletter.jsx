import { useState } from 'react';

const S = { fontFamily: 'Playfair Display,serif' };

export default function Newsletter({ variant = 'banner' }) {
  const [email,     setEmail]     = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState('');

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!email || !email.includes('@')) { setError('Please enter a valid email.'); return; }
    setLoading(true); setError('');
    // Simulate API call — replace with real endpoint when backend ready
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    // Track analytics
    if (typeof window !== 'undefined') {
      fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/analytics/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'newsletter_signup', data: { email, variant } }),
      }).catch(() => {});
    }
  };

  // ── Inline variant (small, inside a section) ─────────────
  if (variant === 'inline') {
    return (
      <div style={{ background: 'var(--bg2)', borderRadius: 14, padding: '20px 22px', border: '1px solid var(--border)' }}>
        {submitted ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ ...S, fontSize: 17, color: 'var(--teal)', marginBottom: 4 }}>Shukran!</div>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>You'll receive a Darija word every day.</div>
          </div>
        ) : (
          <>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>Daily Darija word</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12, lineHeight: 1.5 }}>Get one Moroccan word per day in your inbox.</div>
            {error && <div style={{ fontSize: 12, color: 'var(--terra)', marginBottom: 8 }}>{error}</div>}
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                placeholder="your@email.com"
                style={{ flex: 1, padding: '9px 12px', borderRadius: 9, border: '1px solid var(--border)', fontSize: 13, fontFamily: 'Outfit,sans-serif', outline: 'none', background: '#fff', color: 'var(--ink)' }} />
              <button onClick={handleSubmit} disabled={loading}
                className="btn-primary" style={{ padding: '9px 16px', fontSize: 12.5, flexShrink: 0 }}>
                {loading ? '...' : 'Subscribe'}
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  // ── Banner variant (full width section) ──────────────────
  return (
    <section style={{ background: 'linear-gradient(135deg,#1c1007,#0a2318)', padding: '56px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg,rgba(245,237,220,.02) 0,rgba(245,237,220,.02) 1px,transparent 1px,transparent 24px),repeating-linear-gradient(-45deg,rgba(245,237,220,.02) 0,rgba(245,237,220,.02) 1px,transparent 1px,transparent 24px)' }} />
      <div style={{ maxWidth: 580, margin: '0 auto', padding: '0 20px', position: 'relative', textAlign: 'center' }}>
        {submitted ? (
          <div>
            <div style={{ ...S, fontSize: 28, color: 'var(--gold2)', marginBottom: 10 }}>Shukran bezzaf!</div>
            <div style={{ fontSize: 15, color: 'rgba(255,255,255,.55)', lineHeight: 1.7 }}>
              You're subscribed. Every morning you'll receive a new Moroccan word with its regional variations across all 7 dialects.
            </div>
          </div>
        ) : (
          <>
            <span style={{ display: 'inline-block', padding: '4px 14px', borderRadius: 20, background: 'rgba(232,154,26,.15)', border: '1px solid rgba(232,154,26,.3)', fontSize: 10, fontWeight: 700, color: '#d4a030', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 18 }}>
              Free Newsletter
            </span>
            <h2 style={{ ...S, fontSize: 'clamp(24px,4vw,34px)', color: '#fff', marginBottom: 12, lineHeight: 1.2 }}>
              One Darija Word Every Day
            </h2>
            <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,.50)', lineHeight: 1.75, marginBottom: 28, maxWidth: 420, margin: '0 auto 28px' }}>
              Each morning: one Moroccan word, its meaning, phonetics and how it changes across all 7 regional dialects — from Marrakesh to the Sahara.
            </p>
            {error && <div style={{ fontSize: 13, color: '#f87a6a', marginBottom: 12 }}>{error}</div>}
            <div style={{ display: 'flex', gap: 0, maxWidth: 420, margin: '0 auto', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,.15)' }}>
              <input type="email" value={email} onChange={e => { setEmail(e.target.value); setError(''); }}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                placeholder="your@email.com"
                style={{ flex: 1, padding: '14px 18px', background: 'rgba(255,255,255,.08)', border: 'none', color: '#fff', fontSize: 14, fontFamily: 'Outfit,sans-serif', outline: 'none' }} />
              <button onClick={handleSubmit} disabled={loading}
                style={{ padding: '14px 22px', background: 'linear-gradient(135deg,var(--terra),var(--gold))', border: 'none', color: '#fff', fontSize: 13, fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'Outfit,sans-serif', whiteSpace: 'nowrap', transition: 'opacity .2s', opacity: loading ? .7 : 1 }}>
                {loading ? 'Subscribing...' : 'Subscribe — Free'}
              </button>
            </div>
            <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.28)', marginTop: 14 }}>
              No spam. Unsubscribe anytime. 100% free forever.
            </div>
          </>
        )}
      </div>
    </section>
  );
}
