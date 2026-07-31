import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { useAuth } from '../../context/AuthContext';

const S = { fontFamily: 'Playfair Display, Georgia, serif' };

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [tab, setTab] = useState('overview');

  useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      router.push('/');
    }
  }, [user, loading]);

  useEffect(() => {
    if (user?.role === 'admin') {
      fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/analytics/dashboard`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('mp_token')}` },
      }).then(r => r.json()).then(setStats).catch(() => {});
    }
  }, [user]);

  if (loading || !user) return null;
  if (user.role !== 'admin') return null;

  const OVERVIEW = [
    { label: 'Utilisateurs', v: stats?.totalUsers || '—', color: '#c0390a' },
    { label: 'Mots Darija', v: '355+', color: '#0a7a6a' },
    { label: 'Contributions', v: stats?.totalContributions || '—', color: '#c47b0a' },
    { label: 'Sessions (24h)', v: stats?.dailySessions || '—', color: '#c0390a' },
    { label: 'Villes actives', v: '9', color: '#0a7a6a' },
    { label: 'API requests', v: stats?.apiRequests || '—', color: '#c47b0a' },
  ];

  return (
    <Layout>
      <SEO title="Admin Dashboard — MoroccoPedia"/>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(24px,4vw,40px) clamp(16px,4vw,48px)' }}>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:28 }}>
          <div>
            <h1 style={{ ...S, fontSize:28, color:'var(--ink)', marginBottom:4 }}>Dashboard Admin</h1>
            <div style={{ fontSize:13, color:'var(--muted)' }}>Bienvenue, {user.name} ·
              <span style={{ color:'var(--terra)', fontWeight:700, marginLeft:4 }}>Administrateur</span>
            </div>
          </div>
          <div style={{ display:'flex', gap:8 }}>
            {['overview', 'users', 'content'].map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding:'7px 16px', borderRadius:9, fontSize:13, fontWeight:tab===t?700:500, cursor:'pointer', fontFamily:'Outfit,sans-serif', border:`1px solid ${tab===t?'var(--terra)':'var(--border)'}`, background:tab===t?'var(--terra3)':'#fff', color:tab===t?'var(--terra)':'var(--muted)', textTransform:'capitalize' }}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {tab === 'overview' && (
          <>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:14, marginBottom:28 }}>
              {OVERVIEW.map(s => (
                <div key={s.label} style={{ background:'#fff', borderRadius:14, padding:'18px 20px', border:'1px solid var(--border)', borderLeft:`4px solid ${s.color}` }}>
                  <div style={{ ...S, fontSize:28, color:s.color, lineHeight:1, marginBottom:4 }}>{s.v}</div>
                  <div style={{ fontSize:12.5, color:'var(--muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18 }}>
              <div style={{ background:'#fff', borderRadius:14, padding:'20px', border:'1px solid var(--border)' }}>
                <h3 style={{ ...S, fontSize:16, color:'var(--ink)', marginBottom:14 }}>Statut du système</h3>
                {[
                  { label:'Frontend (Next.js)', ok: true },
                  { label:'Backend (Node.js)', ok: true },
                  { label:'MongoDB', ok: !!stats },
                  { label:'Socket.IO', ok: true },
                  { label:'API Darija', ok: true },
                ].map(s => (
                  <div key={s.label} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid var(--border)' }}>
                    <span style={{ fontSize:13.5, color:'var(--muted)' }}>{s.label}</span>
                    <span style={{ fontSize:12, fontWeight:700, color:s.ok?'var(--teal)':'var(--terra)' }}>{s.ok?'✓ En ligne':'✗ Hors ligne'}</span>
                  </div>
                ))}
              </div>

              <div style={{ background:'#fff', borderRadius:14, padding:'20px', border:'1px solid var(--border)' }}>
                <h3 style={{ ...S, fontSize:16, color:'var(--ink)', marginBottom:14 }}>Actions rapides</h3>
                {[
                  { label:'Gérer les utilisateurs', href:'/admin/dashboard?tab=users' },
                  { label:'Voir les contributions', href:'/community' },
                  { label:'Dictionnaire Darija', href:'/dialect' },
                  { label:'Page d\'accueil publique', href:'/' },
                ].map(a => (
                  <a key={a.label} href={a.href} style={{ display:'block', padding:'10px 0', borderBottom:'1px solid var(--border)', fontSize:13.5, color:'var(--terra)', fontWeight:600, textDecoration:'none' }}>
                    {a.label} →
                  </a>
                ))}
              </div>
            </div>
          </>
        )}

        {tab === 'users' && (
          <div style={{ background:'#fff', borderRadius:14, padding:'20px', border:'1px solid var(--border)' }}>
            <h3 style={{ ...S, fontSize:18, color:'var(--ink)', marginBottom:16 }}>Gestion utilisateurs</h3>
            <p style={{ fontSize:14, color:'var(--muted)', lineHeight:1.7 }}>
              Interface de gestion des utilisateurs. Pour gérer les comptes, utilisez l'API :<br/>
              <code style={{ background:'var(--bg2)', padding:'2px 8px', borderRadius:5, fontSize:13 }}>GET /api/auth/users</code> (Admin seulement)
            </p>
          </div>
        )}

        {tab === 'content' && (
          <div style={{ background:'#fff', borderRadius:14, padding:'20px', border:'1px solid var(--border)' }}>
            <h3 style={{ ...S, fontSize:18, color:'var(--ink)', marginBottom:16 }}>Gestion du contenu</h3>
            <p style={{ fontSize:14, color:'var(--muted)', lineHeight:1.7 }}>
              Modération des contributions communautaires et gestion du dictionnaire Darija.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
