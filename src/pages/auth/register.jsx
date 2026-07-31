import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const S = { fontFamily: 'Playfair Display, Georgia, serif' };
const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const STEPS = [
  { id: 1, label: 'Compte',  icon: '👤' },
  { id: 2, label: 'Profil',  icon: '🗺️' },
];

const CITIES = ['Marrakesh','Fès','Casablanca','Tanger','Chefchaouen','Essaouira','Agadir','Rabat','Meknes','Oujda','Autre'];
const DIALECTS = ['Marrakshi','Fassi','Casawi','Tanjawi','Tachelhit','Tarifit','Hassaniya','Je ne sais pas'];
const LANGUAGES = [{ v:'fr', l:'Français' },{ v:'ar', l:'العربية' },{ v:'en', l:'English' },{ v:'es', l:'Español' }];

function Zellige({ id = 'rz' }) {
  return (
    <svg style={{ position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none' }}>
      <defs>
        <pattern id={id} x="0" y="0" width="70" height="70" patternUnits="userSpaceOnUse">
          <polygon points="35,3.5 44.1,18.9 59.5,18.9 48.1,28.5 52.5,44.1 35,35 17.5,44.1 21.9,28.5 10.5,18.9 25.9,18.9"
            fill="none" stroke="#c0390a" strokeWidth="1" opacity="0.18"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  );
}

export default function RegisterPage() {
  const router = useRouter();
  const [step,    setStep]    = useState(1);
  const [form,    setForm]    = useState({ name:'', email:'', password:'', city:'', dialect:'', language:'fr' });
  const [error,   setError]   = useState('');
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  const up = (field, val) => setForm(f => ({ ...f, [field]: val }));

  const validateStep1 = () => {
    if (!form.name.trim() || form.name.length < 2) return 'Nom minimum 2 caractères.';
    if (!form.email || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) return 'Email invalide.';
    if (!form.password || form.password.length < 6) return 'Mot de passe minimum 6 caractères.';
    return null;
  };

  const handleNext = () => {
    const err = validateStep1();
    if (err) { setError(err); return; }
    setError('');
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${API}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Erreur lors de l\'inscription.');
        setLoading(false);
        return;
      }

      try { localStorage.setItem('mp_token', data.token); } catch {}
      try { localStorage.setItem('mp_user', JSON.stringify(data.user)); } catch {}

      router.push('/');
    } catch {
      setError('Erreur de connexion. Vérifiez votre internet.');
      setLoading(false);
    }
  };

  return (
    <Layout>
      <SEO title="Créer un compte — MoroccoPedia"/>

      <div style={{ minHeight:'100vh', background:'linear-gradient(155deg,#1c1007,#0a2318)', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 16px', position:'relative', overflow:'hidden' }}>
        <Zellige id="rz"/>
        <div style={{ position:'absolute', width:350, height:350, background:'#0a7a6a', filter:'blur(130px)', opacity:.08, left:'-3%', bottom:'-3%', borderRadius:'50%', pointerEvents:'none' }}/>

        <div style={{ width:'100%', maxWidth:460, position:'relative', zIndex:2 }}>
          {/* Logo */}
          <div style={{ textAlign:'center', marginBottom:28 }}>
            <Link href="/" style={{ textDecoration:'none' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:10 }}>
                <div style={{ width:40, height:40, background:'linear-gradient(135deg,#c0390a,#c47b0a)', borderRadius:11, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 16px rgba(192,57,10,.4)' }}>
                  <span style={{ fontFamily:'Amiri,serif', fontSize:20, color:'#fff', fontWeight:700 }}>م</span>
                </div>
                <span style={{ ...S, fontSize:20, color:'#fff', fontWeight:700 }}>Morocco<span style={{ color:'var(--gold2)' }}>Pedia</span></span>
              </div>
            </Link>
          </div>

          {/* Progress */}
          <div style={{ display:'flex', gap:8, marginBottom:28, padding:'0 4px' }}>
            {STEPS.map(s => (
              <div key={s.id} style={{ flex:1, display:'flex', alignItems:'center', gap:8 }}>
                <div style={{ width:28, height:28, borderRadius:8, background: step >= s.id ? 'linear-gradient(135deg,#c0390a,#c47b0a)' : 'rgba(255,255,255,.08)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:700, color: step >= s.id ? '#fff' : 'rgba(255,255,255,.3)', flexShrink:0, transition:'all .3s' }}>
                  {step > s.id ? '✓' : s.id}
                </div>
                <span style={{ fontSize:12, color: step >= s.id ? 'rgba(245,237,220,.7)' : 'rgba(245,237,220,.3)', fontFamily:'Outfit,sans-serif', fontWeight: step === s.id ? 600 : 400 }}>{s.label}</span>
                {s.id < STEPS.length && <div style={{ flex:1, height:1, background: step > s.id ? 'rgba(192,57,10,.6)' : 'rgba(255,255,255,.1)', transition:'all .3s' }}/>}
              </div>
            ))}
          </div>

          {/* Card */}
          <div style={{ background:'rgba(253,248,242,.04)', border:'1px solid rgba(255,255,255,.1)', borderRadius:20, padding:'clamp(24px,5vw,40px)', backdropFilter:'blur(16px)' }}>
            {step === 1 && (
              <>
                <h1 style={{ ...S, fontSize:24, color:'#fff', marginBottom:6, textAlign:'center' }}>Créer un compte</h1>
                <p style={{ fontSize:13, color:'rgba(245,237,220,.4)', textAlign:'center', marginBottom:24, fontFamily:'Outfit,sans-serif' }}>
                  Déjà inscrit ?{' '}
                  <Link href="/auth/login" style={{ color:'var(--gold2)', fontWeight:600, textDecoration:'none' }}>Se connecter</Link>
                </p>

                {error && <div style={{ background:'rgba(192,57,10,.15)', border:'1px solid rgba(192,57,10,.4)', borderRadius:10, padding:'10px 14px', marginBottom:16, fontSize:13.5, color:'#ff8070', fontFamily:'Outfit,sans-serif' }}>{error}</div>}

                {[
                  { field:'name',     label:'Nom complet',      type:'text',     placeholder:'Votre nom',           autoComplete:'name' },
                  { field:'email',    label:'Adresse e-mail',   type:'email',    placeholder:'vous@exemple.com',    autoComplete:'email' },
                ].map(f => (
                  <div key={f.field} style={{ marginBottom:16 }}>
                    <label style={{ display:'block', fontSize:11.5, fontWeight:700, color:'rgba(245,237,220,.5)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:7, fontFamily:'Outfit,sans-serif' }}>{f.label}</label>
                    <input type={f.type} required autoComplete={f.autoComplete} placeholder={f.placeholder}
                      value={form[f.field]} onChange={e => up(f.field, e.target.value)}
                      style={{ width:'100%', padding:'12px 14px', borderRadius:11, border:'1.5px solid rgba(255,255,255,.12)', background:'rgba(255,255,255,.06)', color:'#fff', fontSize:14, fontFamily:'Outfit,sans-serif', outline:'none', boxSizing:'border-box', transition:'border .18s' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(196,123,10,.6)'}
                      onBlur={e  => e.target.style.borderColor = 'rgba(255,255,255,.12)'}
                    />
                  </div>
                ))}

                {/* Password */}
                <div style={{ marginBottom:22 }}>
                  <label style={{ display:'block', fontSize:11.5, fontWeight:700, color:'rgba(245,237,220,.5)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:7, fontFamily:'Outfit,sans-serif' }}>Mot de passe</label>
                  <div style={{ position:'relative' }}>
                    <input type={showPwd ? 'text' : 'password'} required placeholder="Minimum 6 caractères" autoComplete="new-password"
                      value={form.password} onChange={e => up('password', e.target.value)}
                      style={{ width:'100%', padding:'12px 44px 12px 14px', borderRadius:11, border:'1.5px solid rgba(255,255,255,.12)', background:'rgba(255,255,255,.06)', color:'#fff', fontSize:14, fontFamily:'Outfit,sans-serif', outline:'none', boxSizing:'border-box', transition:'border .18s' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(196,123,10,.6)'}
                      onBlur={e  => e.target.style.borderColor = 'rgba(255,255,255,.12)'}
                    />
                    <button type="button" onClick={() => setShowPwd(!showPwd)} style={{ position:'absolute', right:12, top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', color:'rgba(245,237,220,.4)', fontSize:16, padding:4 }}>
                      {showPwd ? '🙈' : '👁'}
                    </button>
                  </div>
                  {form.password && (
                    <div style={{ marginTop:8, display:'flex', gap:4 }}>
                      {[...Array(4)].map((_, i) => (
                        <div key={i} style={{ flex:1, height:3, borderRadius:2, background: form.password.length >= (i+1)*2 ? (form.password.length >= 8 ? '#0a7a6a' : '#c47b0a') : 'rgba(255,255,255,.1)', transition:'all .2s' }}/>
                      ))}
                      <span style={{ fontSize:10, color:'rgba(245,237,220,.4)', marginLeft:4, fontFamily:'Outfit,sans-serif' }}>
                        {form.password.length >= 8 ? 'Fort' : form.password.length >= 6 ? 'Moyen' : 'Faible'}
                      </span>
                    </div>
                  )}
                </div>

                <button type="button" onClick={handleNext}
                  style={{ width:'100%', padding:'13px', borderRadius:11, border:'none', background:'linear-gradient(135deg,#c0390a,#c47b0a)', color:'#fff', fontSize:15, fontWeight:700, cursor:'pointer', fontFamily:'Outfit,sans-serif', boxShadow:'0 4px 20px rgba(192,57,10,.3)' }}>
                  Continuer →
                </button>
              </>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit}>
                <h1 style={{ ...S, fontSize:24, color:'#fff', marginBottom:6, textAlign:'center' }}>Votre profil culturel</h1>
                <p style={{ fontSize:13, color:'rgba(245,237,220,.4)', textAlign:'center', marginBottom:24, fontFamily:'Outfit,sans-serif' }}>Optionnel — personnalise votre expérience</p>

                {error && <div style={{ background:'rgba(192,57,10,.15)', border:'1px solid rgba(192,57,10,.4)', borderRadius:10, padding:'10px 14px', marginBottom:16, fontSize:13.5, color:'#ff8070', fontFamily:'Outfit,sans-serif' }}>{error}</div>}

                {/* City */}
                <div style={{ marginBottom:16 }}>
                  <label style={{ display:'block', fontSize:11.5, fontWeight:700, color:'rgba(245,237,220,.5)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:7, fontFamily:'Outfit,sans-serif' }}>Votre ville</label>
                  <select value={form.city} onChange={e => up('city', e.target.value)}
                    style={{ width:'100%', padding:'12px 14px', borderRadius:11, border:'1.5px solid rgba(255,255,255,.12)', background:'#1c1007', color: form.city ? '#fff' : 'rgba(245,237,220,.3)', fontSize:14, fontFamily:'Outfit,sans-serif', outline:'none', boxSizing:'border-box' }}>
                    <option value="">Choisir une ville...</option>
                    {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Dialect */}
                <div style={{ marginBottom:16 }}>
                  <label style={{ display:'block', fontSize:11.5, fontWeight:700, color:'rgba(245,237,220,.5)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:7, fontFamily:'Outfit,sans-serif' }}>Votre dialecte</label>
                  <select value={form.dialect} onChange={e => up('dialect', e.target.value)}
                    style={{ width:'100%', padding:'12px 14px', borderRadius:11, border:'1.5px solid rgba(255,255,255,.12)', background:'#1c1007', color: form.dialect ? '#fff' : 'rgba(245,237,220,.3)', fontSize:14, fontFamily:'Outfit,sans-serif', outline:'none', boxSizing:'border-box' }}>
                    <option value="">Choisir un dialecte...</option>
                    {DIALECTS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                {/* Language */}
                <div style={{ marginBottom:24 }}>
                  <label style={{ display:'block', fontSize:11.5, fontWeight:700, color:'rgba(245,237,220,.5)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:7, fontFamily:'Outfit,sans-serif' }}>Langue d'interface</label>
                  <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8 }}>
                    {LANGUAGES.map(l => (
                      <button key={l.v} type="button" onClick={() => up('language', l.v)}
                        style={{ padding:'10px 6px', borderRadius:10, fontSize:13, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif', border:`1.5px solid ${form.language === l.v ? '#c0390a' : 'rgba(255,255,255,.12)'}`, background: form.language === l.v ? 'rgba(192,57,10,.2)' : 'rgba(255,255,255,.04)', color: form.language === l.v ? '#e04b18' : 'rgba(245,237,220,.5)', transition:'all .18s' }}>
                        {l.l}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:10 }}>
                  <button type="button" onClick={() => setStep(1)}
                    style={{ padding:'13px', borderRadius:11, border:'1.5px solid rgba(255,255,255,.15)', background:'transparent', color:'rgba(245,237,220,.6)', fontSize:14, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>
                    ← Retour
                  </button>
                  <button type="submit" disabled={loading}
                    style={{ padding:'13px', borderRadius:11, border:'none', background: loading ? 'rgba(192,57,10,.5)' : 'linear-gradient(135deg,#c0390a,#c47b0a)', color:'#fff', fontSize:15, fontWeight:700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily:'Outfit,sans-serif', boxShadow:'0 4px 20px rgba(192,57,10,.3)' }}>
                    {loading ? (
                      <span style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}>
                        <span style={{ width:15, height:15, border:'2px solid rgba(255,255,255,.3)', borderTopColor:'#fff', borderRadius:'50%', animation:'spin .7s linear infinite', display:'inline-block' }}/>
                        Création...
                      </span>
                    ) : 'Créer mon compte 🎉'}
                  </button>
                </div>
              </form>
            )}
          </div>

          <p style={{ textAlign:'center', marginTop:16, fontSize:12, color:'rgba(245,237,220,.25)', fontFamily:'Outfit,sans-serif' }}>
            En créant un compte, vous acceptez nos{' '}
            <Link href="/terms" style={{ color:'rgba(196,123,10,.6)', textDecoration:'none' }}>CGU</Link>{' '}et{' '}
            <Link href="/privacy" style={{ color:'rgba(196,123,10,.6)', textDecoration:'none' }}>Politique de confidentialité</Link>
          </p>
        </div>
      </div>
      <style>{`@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>
    </Layout>
  );
}