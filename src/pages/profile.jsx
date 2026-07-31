import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { useAuth } from '../context/AuthContext';

const S = { fontFamily: 'Playfair Display, Georgia, serif' };

export default function ProfilePage() {
  const { user, logout, updateProfile, loading } = useAuth();
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name:'', bio:'', city:'', language:'fr' });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (!loading && !user) router.push('/auth/login');
    if (user) setForm({ name: user.name || '', bio: user.bio || '', city: user.city || '', language: user.language || 'fr' });
  }, [user, loading]);

  const handleSave = async () => {
    setSaving(true);
    const { ok, error } = await updateProfile(form);
    setSaving(false);
    if (ok) { setMsg('Profil mis à jour !'); setEditing(false); }
    else setMsg(error || 'Erreur');
    setTimeout(() => setMsg(''), 3000);
  };

  if (loading) return <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center' }}><div style={{ fontSize:14, color:'var(--muted)' }}>Chargement...</div></div>;
  if (!user) return null;

  const STATS = [
    { v: user.stats?.dialectSearches || 0, l: 'Recherches' },
    { v: user.stats?.contributions || 0,   l: 'Contributions' },
    { v: user.savedWords?.length || 0,     l: 'Mots sauvés' },
    { v: user.stats?.points || 0,          l: 'Points' },
  ];

  return (
    <Layout>
      <SEO title={`${user.name} — Profil MoroccoPedia`}/>

      {/* Hero */}
      <div style={{ background:'linear-gradient(155deg,#1a0800,#0a2318)', padding:'clamp(40px,5vw,64px) 0', position:'relative', overflow:'hidden' }}>
        <div style={{ maxWidth:900, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)', position:'relative', zIndex:2 }}>
          <div style={{ display:'flex', gap:24, alignItems:'flex-start', flexWrap:'wrap' }}>
            {/* Avatar */}
            <div style={{ width:80, height:80, borderRadius:20, background:'linear-gradient(135deg,var(--terra),var(--gold))', display:'flex', alignItems:'center', justifyContent:'center', ...S, fontSize:32, color:'#fff', flexShrink:0, boxShadow:'0 6px 24px rgba(192,57,10,.3)' }}>
              {user.name?.charAt(0)?.toUpperCase() || '?'}
            </div>
            <div style={{ flex:1, minWidth:200 }}>
              <h1 style={{ ...S, fontSize:'clamp(24px,4vw,40px)', color:'#fff', marginBottom:4 }}>{user.name}</h1>
              <div style={{ fontSize:13, color:'rgba(245,237,220,.45)', marginBottom:8 }}>@{user.username || user.email?.split('@')[0]}</div>
              {user.bio && <p style={{ fontSize:14, color:'rgba(245,237,220,.6)', lineHeight:1.7 }}>{user.bio}</p>}
              <div style={{ display:'flex', gap:12, marginTop:10, flexWrap:'wrap' }}>
                {user.city && <span style={{ fontSize:12, color:'var(--gold2)', background:'rgba(196,123,10,.12)', padding:'3px 10px', borderRadius:20 }}>📍 {user.city}</span>}
                {user.dialect && <span style={{ fontSize:12, color:'var(--teal2)', background:'rgba(10,122,106,.12)', padding:'3px 10px', borderRadius:20 }}>🗣 {user.dialect}</span>}
                <span style={{ fontSize:12, color:'rgba(245,237,220,.4)' }}>{user.email}</span>
              </div>
            </div>
            <div style={{ display:'flex', gap:8, flexShrink:0 }}>
              <button onClick={() => setEditing(!editing)} style={{ padding:'8px 18px', borderRadius:10, border:'1.5px solid rgba(255,255,255,.2)', background:'rgba(255,255,255,.08)', color:'#fff', fontSize:13, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>
                {editing ? 'Annuler' : 'Modifier'}
              </button>
              <button onClick={() => { logout(); router.push('/'); }} style={{ padding:'8px 18px', borderRadius:10, border:'1.5px solid rgba(192,57,10,.4)', background:'rgba(192,57,10,.1)', color:'var(--terra)', fontSize:13, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>
                Déconnexion
              </button>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10, marginTop:24 }}>
            {STATS.map(s => (
              <div key={s.l} style={{ background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.1)', borderRadius:12, padding:'14px', textAlign:'center' }}>
                <div style={{ ...S, fontSize:24, color:'var(--gold2)', lineHeight:1, marginBottom:3 }}>{s.v}</div>
                <div style={{ fontSize:11, color:'rgba(245,237,220,.4)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'clamp(24px,4vw,40px) clamp(16px,4vw,48px)' }}>

        {/* Edit form */}
        {editing && (
          <div style={{ background:'#fff', borderRadius:16, padding:'clamp(20px,3vw,32px)', border:'1px solid var(--border)', marginBottom:24 }}>
            <h2 style={{ ...S, fontSize:20, color:'var(--ink)', marginBottom:20 }}>Modifier le profil</h2>
            {[
              { key:'name', label:'Nom complet', placeholder:'Votre nom' },
              { key:'city', label:'Ville', placeholder:'Votre ville' },
              { key:'bio', label:'Bio', placeholder:'Décrivez-vous en quelques mots...', textarea: true },
            ].map(field => (
              <div key={field.key} style={{ marginBottom:16 }}>
                <label style={{ fontSize:11.5, fontWeight:700, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.08em', display:'block', marginBottom:6 }}>{field.label}</label>
                {field.textarea ? (
                  <textarea value={form[field.key]} onChange={e => setForm(f => ({...f, [field.key]: e.target.value}))} placeholder={field.placeholder} rows={3}
                    style={{ width:'100%', padding:'10px 14px', borderRadius:10, border:'1.5px solid var(--border)', fontSize:14, fontFamily:'Outfit,sans-serif', outline:'none', resize:'vertical', boxSizing:'border-box' }}/>
                ) : (
                  <input value={form[field.key]} onChange={e => setForm(f => ({...f, [field.key]: e.target.value}))} placeholder={field.placeholder}
                    style={{ width:'100%', padding:'10px 14px', borderRadius:10, border:'1.5px solid var(--border)', fontSize:14, fontFamily:'Outfit,sans-serif', outline:'none', boxSizing:'border-box' }}/>
                )}
              </div>
            ))}
            {msg && <div style={{ padding:'10px 14px', borderRadius:10, background: msg.includes('Erreur') ? '#fff0f0' : '#f0fff8', color: msg.includes('Erreur') ? '#c00' : '#0a7a6a', fontSize:13.5, marginBottom:14 }}>{msg}</div>}
            <button onClick={handleSave} disabled={saving} className="btn-primary" style={{ width:'100%', justifyContent:'center' }}>
              {saving ? 'Enregistrement...' : 'Enregistrer les modifications'}
            </button>
          </div>
        )}

        {/* Saved words */}
        <div style={{ background:'#fff', borderRadius:16, padding:'clamp(18px,3vw,28px)', border:'1px solid var(--border)', marginBottom:18 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
            <h2 style={{ ...S, fontSize:20, color:'var(--ink)' }}>Mots sauvegardés</h2>
            <Link href="/favorites" style={{ fontSize:13, color:'var(--teal)', fontWeight:600, textDecoration:'none' }}>Voir tout →</Link>
          </div>
          {user.savedWords?.length > 0 ? (
            <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
              {user.savedWords.slice(0,12).map(w => (
                <Link key={w} href={`/dialect?q=${encodeURIComponent(w)}`} style={{ textDecoration:'none' }}>
                  <span style={{ padding:'5px 14px', borderRadius:20, background:'var(--terra3)', color:'var(--terra)', fontSize:13, fontWeight:600, cursor:'pointer' }}>{w}</span>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ textAlign:'center', padding:'28px 0', color:'var(--muted)', fontSize:14 }}>
              Aucun mot sauvegardé.<br/>
              <Link href="/dialect" style={{ color:'var(--teal)', fontWeight:600 }}>Explorez le dictionnaire →</Link>
            </div>
          )}
        </div>

        {/* Quick links */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:12 }}>
          {[
            { href:'/dialect',    label:'Dictionnaire',   desc:'Chercher des mots' },
            { href:'/favorites',  label:'Mes Favoris',    desc:'Villes & mots sauvés' },
            { href:'/community',  label:'Communauté',     desc:'Mes contributions' },
            { href:'/history',    label:'Histoire',       desc:'Figures & dynasties' },
          ].map(item => (
            <Link key={item.href} href={item.href} style={{ textDecoration:'none' }}>
              <div className="card-hover" style={{ padding:'16px', textAlign:'center' }}>
                <div style={{ fontSize:14, fontWeight:700, color:'var(--ink)', marginBottom:4 }}>{item.label}</div>
                <div style={{ fontSize:12, color:'var(--muted)' }}>{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
