import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const S = { fontFamily: 'Playfair Display, Georgia, serif' };
const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

function Zellige({ id = 'z' }) {
  return (
    <svg style={{ position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none' }}>
      <defs>
        <pattern id={id} x="0" y="0" width="70" height="70" patternUnits="userSpaceOnUse">
          <polygon points="35,3.5 44.1,18.9 59.5,18.9 48.1,28.5 52.5,44.1 35,35 17.5,44.1 21.9,28.5 10.5,18.9 25.9,18.9"
            fill="none" stroke="#c0390a" strokeWidth="1" opacity="0.18"/>
          <circle cx="35" cy="35" r="2.5" fill="#c47b0a" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [form,    setForm]    = useState({ email: '', password: '' });
  const [error,   setError]   = useState('');
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Identifiants incorrects.');
        setLoading(false);
        return;
      }

      // Save token
      try { localStorage.setItem('mp_token', data.token); } catch {}
      try { localStorage.setItem('mp_user', JSON.stringify(data.user)); } catch {}

      // Redirect
      const redirect = router.query.redirect || '/';
      router.push(redirect);
    } catch {
      setError('Erreur de connexion. Vérifiez votre internet.');
      setLoading(false);
    }
  };

  return (
    <Layout>
      <SEO title="Connexion — MoroccoPedia" description="Connectez-vous à votre compte MoroccoPedia."/>

      <div style={{ minHeight:'100vh', background:'linear-gradient(155deg,#1c1007,#0a2318)', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 16px', position:'relative', overflow:'hidden' }}>
        <Zellige id="lz"/>
        <div style={{ position:'absolute', width:400, height:400, background:'#c0390a', filter:'blur(140px)', opacity:.1, right:'-5%', top:'-5%', borderRadius:'50%', pointerEvents:'none' }}/>

        <div style={{ width:'100%', maxWidth:420, position:'relative', zIndex:2 }}>
          {/* Logo */}
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <Link href="/" style={{ textDecoration:'none' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:8 }}>
                <div style={{ width:44, height:44, background:'linear-gradient(135deg,#c0390a,#c47b0a)', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 16px rgba(192,57,10,.4)' }}>
                  <span style={{ fontFamily:'Amiri,serif', fontSize:22, color:'#fff', fontWeight:700 }}>م</span>
                </div>
                <span style={{ ...S, fontSize:22, color:'#fff', fontWeight:700 }}>Morocco<span style={{ color:'var(--gold2)' }}>Pedia</span></span>
              </div>
            </Link>
            <p style={{ fontSize:13, color:'rgba(245,237,220,.4)', fontFamily:'Outfit,sans-serif' }}>موسوعة المغرب الحية</p>
          </div>

          {/* Card */}
          <div style={{ background:'rgba(253,248,242,.04)', border:'1px solid rgba(255,255,255,.1)', borderRadius:20, padding:'clamp(24px,5vw,40px)', backdropFilter:'blur(16px)' }}>
            <h1 style={{ ...S, fontSize:26, color:'#fff', marginBottom:6, textAlign:'center' }}>Connexion</h1>
            <p style={{ fontSize:13.5, color:'rgba(245,237,220,.45)', textAlign:'center', marginBottom:28, fontFamily:'Outfit,sans-serif' }}>
              Pas encore de compte ?{' '}
              <Link href="/auth/register" style={{ color:'var(--gold2)', fontWeight:600, textDecoration:'none' }}>S'inscrire</Link>
            </p>

            {error && (
              <div style={{ background:'rgba(192,57,10,.15)', border:'1px solid rgba(192,57,10,.4)', borderRadius:10, padding:'10px 14px', marginBottom:18, fontSize:13.5, color:'#ff8070', fontFamily:'Outfit,sans-serif' }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div style={{ marginBottom:16 }}>
                <label style={{ display:'block', fontSize:11.5, fontWeight:700, color:'rgba(245,237,220,.5)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:7, fontFamily:'Outfit,sans-serif' }}>
                  Adresse e-mail
                </label>
                <input
                  type="email" required autoComplete="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="vous@exemple.com"
                  style={{ width:'100%', padding:'12px 14px', borderRadius:11, border:'1.5px solid rgba(255,255,255,.12)', background:'rgba(255,255,255,.06)', color:'#fff', fontSize:14, fontFamily:'Outfit,sans-serif', outline:'none', boxSizing:'border-box', transition:'border .18s' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(196,123,10,.6)'}
                  onBlur={e  => e.target.style.borderColor = 'rgba(255,255,255,.12)'}
                />
              </div>

              {/* Password */}
              <div style={{ marginBottom:10 }}>
                <label style={{ display:'block', fontSize:11.5, fontWeight:700, color:'rgba(245,237,220,.5)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:7, fontFamily:'Outfit,sans-serif' }}>
                  Mot de passe
                </label>
                <div style={{ position:'relative' }}>
                  <input
                    type={showPwd ? 'text' : 'password'} required autoComplete="current-password"
                    value={form.password}
                    onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                    placeholder="Votre mot de passe"
                    style={{ width:'100%', padding:'12px 44px 12px 14px', borderRadius:11, border:'1.5px solid rgba(255,255,255,.12)', background:'rgba(255,255,255,.06)', color:'#fff', fontSize:14, fontFamily:'Outfit,sans-serif', outline:'none', boxSizing:'border-box', transition:'border .18s' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(196,123,10,.6)'}
                    onBlur={e  => e.target.style.borderColor = 'rgba(255,255,255,.12)'}
                  />
                  <button type="button" onClick={() => setShowPwd(!showPwd)}
                    style={{ position:'absolute', right:12, top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', color:'rgba(245,237,220,.4)', fontSize:16, padding:4 }}>
                    {showPwd ? '🙈' : '👁'}
                  </button>
                </div>
              </div>

              {/* Forgot password */}
              <div style={{ textAlign:'right', marginBottom:22 }}>
                <Link href="/auth/forgot-password" style={{ fontSize:12.5, color:'rgba(196,123,10,.8)', textDecoration:'none', fontFamily:'Outfit,sans-serif' }}>
                  Mot de passe oublié ?
                </Link>
              </div>

              {/* Submit */}
              <button type="submit" disabled={loading}
                style={{ width:'100%', padding:'13px', borderRadius:11, border:'none', background: loading ? 'rgba(192,57,10,.5)' : 'linear-gradient(135deg,#c0390a,#c47b0a)', color:'#fff', fontSize:15, fontWeight:700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily:'Outfit,sans-serif', boxShadow:'0 4px 20px rgba(192,57,10,.3)', transition:'all .2s' }}>
                {loading ? (
                  <span style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}>
                    <span style={{ width:16, height:16, border:'2px solid rgba(255,255,255,.3)', borderTopColor:'#fff', borderRadius:'50%', animation:'spin .7s linear infinite', display:'inline-block' }}/>
                    Connexion...
                  </span>
                ) : 'Se connecter →'}
              </button>
            </form>

            {/* Divider */}
            <div style={{ display:'flex', alignItems:'center', gap:12, margin:'20px 0' }}>
              <div style={{ flex:1, height:1, background:'rgba(255,255,255,.1)' }}/>
              <span style={{ fontSize:12, color:'rgba(245,237,220,.3)', fontFamily:'Outfit,sans-serif' }}>ou</span>
              <div style={{ flex:1, height:1, background:'rgba(255,255,255,.1)' }}/>
            </div>

            <Link href="/auth/register" style={{ textDecoration:'none' }}>
              <button style={{ width:'100%', padding:'12px', borderRadius:11, border:'1.5px solid rgba(255,255,255,.15)', background:'transparent', color:'rgba(245,237,220,.7)', fontSize:14, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif', transition:'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(196,123,10,.5)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.15)'; e.currentTarget.style.color = 'rgba(245,237,220,.7)'; }}>
                Créer un compte gratuit
              </button>
            </Link>
          </div>

          <p style={{ textAlign:'center', marginTop:20, fontSize:12, color:'rgba(245,237,220,.25)', fontFamily:'Outfit,sans-serif' }}>
            En vous connectant, vous acceptez nos{' '}
            <Link href="/terms" style={{ color:'rgba(196,123,10,.6)', textDecoration:'none' }}>CGU</Link>{' '}et{' '}
            <Link href="/privacy" style={{ color:'rgba(196,123,10,.6)', textDecoration:'none' }}>Politique de confidentialité</Link>
          </p>
        </div>
      </div>
      <style>{`@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>
    </Layout>
  );
}