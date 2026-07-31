import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/SEO';

const BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function ForgotPasswordPage() {
  const [email,     setEmail]     = useState('');
  const [sent,      setSent]      = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState('');

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${BASE}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Unable to send reset link.');
      setSent(true);
    } catch (err) {
      setError(err.message || 'Unable to send reset link.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="Forgot Password" noIndex />

      <div style={{ minHeight:'100vh', display:'flex', position:'relative', overflow:'hidden' }}>

        {/* Zellige left panel */}
        <div style={{ flex:1, position:'relative', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(145deg,#1a0800,#2e1200 50%,#0a1c28 100%)' }} />
          <div style={{ position:'absolute', inset:0, backgroundImage:`repeating-linear-gradient(45deg,rgba(192,57,10,.16) 0,rgba(192,57,10,.16) 1px,transparent 1px,transparent 40px),repeating-linear-gradient(-45deg,rgba(192,57,10,.16) 0,rgba(192,57,10,.16) 1px,transparent 1px,transparent 40px),repeating-linear-gradient(0deg,rgba(196,123,10,.07) 0,rgba(196,123,10,.07) 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,rgba(10,122,106,.07) 0,rgba(10,122,106,.07) 1px,transparent 1px,transparent 40px)` }} />
          <div style={{ position:'absolute', inset:0, backgroundImage:`repeating-linear-gradient(45deg,rgba(10,122,106,.1) 0,rgba(10,122,106,.1) 1px,transparent 1px,transparent 20px),repeating-linear-gradient(-45deg,rgba(196,123,10,.08) 0,rgba(196,123,10,.08) 1px,transparent 1px,transparent 20px)` }} />
          <div style={{ position:'absolute', width:400, height:400, background:'#c0390a', filter:'blur(120px)', opacity:.14, left:'10%', top:'20%', borderRadius:'50%', pointerEvents:'none' }} />
          <div style={{ position:'absolute', width:350, height:350, background:'#0a7a6a', filter:'blur(100px)', opacity:.12, right:'5%', bottom:'10%', borderRadius:'50%', pointerEvents:'none' }} />

          {/* Decorative stars */}
          {[
            {s:150,t:'8%',l:'8%',c:'#c0390a',o:.12},
            {s:120,t:'20%',r:'10%',c:'#c47b0a',o:.1},
            {s:160,b:'8%',l:'5%',c:'#0a7a6a',o:.1},
            {s:100,b:'20%',r:'8%',c:'#c0390a',o:.1},
          ].map((p,i)=>(
            <svg key={i} width={p.s} height={p.s} viewBox="0 0 100 100"
              style={{ position:'absolute', top:p.t, left:p.l, right:p.r, bottom:p.b, opacity:p.o, pointerEvents:'none' }}>
              <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" fill="none" stroke={p.c} strokeWidth="1.5"/>
              <polygon points="50,20 58,38 78,38 63,50 69,70 50,58 31,70 37,50 22,38 42,38" fill={p.c} opacity=".7"/>
              <rect x="38" y="38" width="24" height="24" transform="rotate(45 50 50)" fill="none" stroke={p.c} strokeWidth="1"/>
            </svg>
          ))}

          <div style={{ position:'relative', zIndex:2, textAlign:'center', padding:'0 40px', maxWidth:380 }}>
            <Link href="/" style={{ textDecoration:'none' }}>
              <div style={{ fontFamily:'Playfair Display,serif', fontSize:30, color:'#e89a1a', marginBottom:12, cursor:'pointer' }}>
                Morocco<span style={{ color:'#fff' }}>Pedia</span>
              </div>
            </Link>
            {/* Lock icon decoration */}
            <div style={{ width:80, height:80, borderRadius:'50%', background:'rgba(192,57,10,.15)', border:'2px solid rgba(192,57,10,.3)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c0390a" strokeWidth="1.5" strokeLinecap="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div style={{ fontFamily:'Amiri,serif', fontSize:22, color:'rgba(232,150,10,.5)', marginBottom:16, direction:'rtl', lineHeight:1.5 }}>
              نسيت كلمة المرور؟
            </div>
            <p style={{ fontSize:14, color:'rgba(245,237,220,.5)', lineHeight:1.75, fontWeight:300 }}>
              No worries — it happens to everyone. We'll send you a secure link to reset your password in seconds.
            </p>
          </div>
        </div>

        {/* Right form panel */}
        <div style={{ width:'100%', maxWidth:480, background:'var(--bg)', display:'flex', flexDirection:'column', justifyContent:'center', padding:'clamp(32px,5vw,56px) clamp(24px,4vw,48px)', position:'relative' }}>
          <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(90deg,var(--terra),var(--gold),var(--teal))' }} />

          {!sent ? (
            <>
              <div style={{ marginBottom:32 }}>
                <Link href="/auth/login" style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:13, color:'var(--muted)', textDecoration:'none', marginBottom:20, transition:'color .18s' }}
                  onMouseEnter={e=>e.currentTarget.style.color='var(--terra)'}
                  onMouseLeave={e=>e.currentTarget.style.color='var(--muted)'}>
                  ← Back to login
                </Link>
                <h1 style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(24px,3vw,32px)', color:'var(--ink)', marginBottom:8, lineHeight:1.15 }}>
                  Reset your password
                </h1>
                <p style={{ fontSize:14.5, color:'var(--muted)', lineHeight:1.65 }}>
                  Enter your email and we'll send you a link to reset your password.
                </p>
              </div>

              {error && (
                <div style={{ background:'rgba(192,57,10,.08)', border:'1px solid rgba(192,57,10,.25)', borderRadius:10, padding:'11px 14px', fontSize:13, color:'var(--terra)', marginBottom:18, display:'flex', alignItems:'center', gap:8 }}>
                  <span>⚠</span> {error}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <div>
                  <label style={{ display:'block', fontSize:12, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', color:'var(--ink2)', marginBottom:7 }}>
                    Email address
                  </label>
                  <div style={{ position:'relative' }}>
                    <input type="email" value={email} onChange={e=>{setEmail(e.target.value);setError('');}}
                      placeholder="your@email.com" autoComplete="email"
                      style={{ width:'100%', padding:'13px 16px 13px 44px', borderRadius:11, border:'1.5px solid var(--border)', background:'#fff', fontSize:14, fontFamily:'Outfit,sans-serif', color:'var(--ink)', outline:'none', transition:'border-color .18s, box-shadow .18s' }}
                      onFocus={e=>{e.target.style.borderColor='var(--terra)';e.target.style.boxShadow='0 0 0 3px rgba(192,57,10,.08)';}}
                      onBlur={e=>{e.target.style.borderColor='var(--border)';e.target.style.boxShadow='none';}} />
                    <div style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'var(--muted)', pointerEvents:'none' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                  </div>
                </div>

                <button type="submit" disabled={loading}
                  style={{ width:'100%', padding:'14px', borderRadius:11, background:loading?'rgba(192,57,10,.6)':'linear-gradient(135deg,var(--terra),var(--gold))', border:'none', color:'#fff', fontSize:15, fontWeight:700, cursor:loading?'not-allowed':'pointer', fontFamily:'Outfit,sans-serif', transition:'all .2s', display:'flex', alignItems:'center', justifyContent:'center', gap:10, boxShadow:loading?'none':'0 4px 20px rgba(192,57,10,.3)' }}>
                  {loading ? (
                    <><div style={{ width:16, height:16, borderRadius:'50%', border:'2px solid rgba(255,255,255,.3)', borderTopColor:'#fff', animation:'spin .7s linear infinite' }} />Sending link...</>
                  ) : 'Send Reset Link →'}
                </button>
              </form>
            </>
          ) : (
            /* Success state */
            <div style={{ textAlign:'center', animation:'fadeUp .4s ease' }}>
              <div style={{ width:80, height:80, borderRadius:'50%', background:'var(--teal3)', border:'2px solid rgba(10,122,106,.3)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 24px' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h2 style={{ fontFamily:'Playfair Display,serif', fontSize:28, color:'var(--ink)', marginBottom:12 }}>Check your email</h2>
              <p style={{ fontSize:15, color:'var(--muted)', lineHeight:1.75, maxWidth:320, margin:'0 auto 8px' }}>
                We've sent a password reset link to:
              </p>
              <div style={{ fontWeight:700, color:'var(--terra)', fontSize:15, marginBottom:28 }}>{email}</div>
              <p style={{ fontSize:13, color:'var(--muted)', lineHeight:1.65, marginBottom:32 }}>
                Check your inbox and click the link in the email. It will expire in 1 hour.
              </p>
              <Link href="/auth/login">
                <button className="btn-primary" style={{ padding:'12px 28px', fontSize:14 }}>Back to Login</button>
              </Link>
              <div style={{ marginTop:20, fontSize:13, color:'var(--muted)' }}>
                Didn't receive the email?{' '}
                <button onClick={()=>setSent(false)} style={{ background:'none', border:'none', color:'var(--terra)', fontWeight:600, cursor:'pointer', fontSize:13, fontFamily:'Outfit,sans-serif' }}>
                  Try again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform:rotate(360deg); } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </>
  );
}
