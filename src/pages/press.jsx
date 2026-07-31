import Layout from '../components/Layout';
import SEO from '../components/SEO';
const S = { fontFamily: 'Playfair Display, Georgia, serif' };

// ── SVG Icon paths ────────────────────────────────────────────────
const IC = {
  compass:   '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  archive:   '<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>',
  tea:       '<path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/>',
  moon:      '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  ring:      '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/>',
  bath:      '<path d="M2 12h20v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5z"/><path d="M7 12V5c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v7"/>',
  utensils:  '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>',
  home:      '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  map:       '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',
  camera:    '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  music:     '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  book:      '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  users:     '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  city:      '<line x1="3" y1="22" x2="21" y2="22"/><polyline points="5 22 5 7 9 7 9 22"/><polyline points="13 22 13 2 21 2 21 22"/><rect x="9" y="7" width="4" height="5"/>',
  heart:     '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  globe:     '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  clock:     '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  pin:       '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  search:    '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  craft:     '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  message:   '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  newspaper: '<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><line x1="18" y1="14" x2="12" y2="14"/>',
  hotel:     '<path d="M3 22V8l9-4 9 4v14"/><path d="M9 22V12h6v10"/>',
  mail:      '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  tool:      '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  filetext:  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  code:      '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  target:    '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  pen:       '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
  cpu:       '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
  zap:       '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  dollar:    '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  layers:    '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  check:     '<polyline points="20 6 9 17 4 12"/>',
  x:         '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
};

// ── Icon renderer ──────────────────────────────────────────────
function Ic({ name, size=16, color='currentColor', style={} }) {
  const path = IC[name?.replace('ICON_','')];
  if (!path) return <span style={{ opacity:.4, fontSize:12 }}>□</span>;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ display:'inline-block', flexShrink:0, verticalAlign:'middle', ...style }}
      dangerouslySetInnerHTML={{ __html: path }}/>
  );
}


function Zellige({ opacity=.12, id='z' }) {
  return (
    <svg style={{ position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none' }}>
      <defs>
        <pattern id={id} x="0" y="0" width={80} height={80} patternUnits="userSpaceOnUse">
          <polygon points="40,4 50.4,21.6 76,21.6 58.4,36 65.2,60.8 40,48 14.8,60.8 21.6,36 4,21.6 29.6,21.6"
            fill="none" stroke="#c0390a" strokeWidth="1" opacity={opacity}/>
          <circle cx="40" cy="40" r="3" fill="#c47b0a" opacity={opacity*.5}/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  );
}

const FACTS = [
  { v:'355+', l:'Mots Darija documentés', sub:'avec 461 variantes régionales' },
  { v:'9', l:'Guides de villes complets', sub:'Marrakech à Ifrane' },
  { v:'7', l:'Dialectes couverts', sub:'du Rif au Sahara' },
  { v:'1,200', l:'Ans d\'histoire', sub:'de 788 CE à 2030' },
  { v:'10', l:'Figures historiques', sub:'Ibn Battuta, Averroès...' },
  { v:'36M', l:'Locuteurs Darija', sub:'Marché adressable mondial' },
  { v:'2030', l:'Coupe du Monde FIFA', sub:'Maroc co-hôte' },
  { v:'4', l:'Langues d\'interface', sub:'AR · FR · EN · ES' },
];

const TEAM = [
  { name:'[Fondateur 1]', role:'CEO & Co-fondateur', bg:'Développement Full-Stack, Culture Marocaine', city:'Casablanca' },
  { name:'[Fondateur 2]', role:'CTO & Co-fondateur', bg:'Architecture logicielle, IA/NLP', city:'Rabat' },
  { name:'[Fondateur 3]', role:'CMO & Co-fondateur', bg:'Marketing digital, Linguistique', city:'Marrakech' },
];

const MENTIONS = [
  { outlet:'Hackathon 2025', type:'1ère Place — Cultural Heritage Tech', date:'Mars 2026' },
  { outlet:'Morocco Digital', type:'Projet sélectionné Programme d\'Excellence', date:'2026' },
  { outlet:'TechTalk Africa', type:'Top 10 Startups à surveiller — MENA 2026', date:'2026' },
];

export default function PressPage() {
  return (
    <Layout>
      <SEO title="Presse & Médias — MoroccoPedia" description="Kit presse MoroccoPedia — chiffres clés, équipe fondatrice, logos et informations pour les journalistes et investisseurs."/>

      {/* Hero */}
      <section style={{ background:'linear-gradient(155deg,#1a0800,#2e1200,#0a2318)', padding:'clamp(56px,7vw,88px) 0', position:'relative', overflow:'hidden', textAlign:'center' }}>
        <Zellige opacity={0.12} id="ph"/>
        <div style={{ position:'relative', zIndex:2, maxWidth:620, margin:'0 auto', padding:'0 24px' }}>
          <div style={{ fontFamily:'Amiri,serif', fontSize:16, color:'var(--gold2)', marginBottom:12 }}>Press Kit</div>
          <h1 style={{ ...S, fontSize:'clamp(30px,5vw,54px)', color:'#fff', lineHeight:1.05, marginBottom:14 }}>
            MoroccoPedia<br/><span style={{ color:'var(--gold2)', fontSize:'70%' }}>Presse & Médias</span>
          </h1>
          <p style={{ fontSize:15, color:'rgba(245,237,220,.55)', lineHeight:1.8, marginBottom:28 }}>
            Pour toute demande presse, collaboration ou interview : <a href="mailto:press@moroccoPedia.app" style={{ color:'var(--teal2)', fontWeight:600 }}>press@moroccoPedia.app</a>
          </p>
          <div style={{ display:'inline-flex', gap:8, background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.14)', borderRadius:10, padding:'10px 20px', fontSize:13, color:'rgba(245,237,220,.6)' }}>
            ⏱ Délai de réponse presse : <strong style={{ color:'#fff', marginLeft:4 }}>moins de 4 heures</strong>
          </div>
        </div>
      </section>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'clamp(32px,5vw,60px) clamp(16px,4vw,48px)' }}>

        {/* One-liner */}
        <div style={{ background:'var(--bg2)', borderRadius:18, padding:'clamp(24px,4vw,40px)', marginBottom:40, borderLeft:'6px solid var(--terra)', textAlign:'center' }}>
          <h2 style={{ ...S, fontSize:'clamp(18px,3vw,28px)', color:'var(--ink)', lineHeight:1.5 }}>
            "MoroccoPedia est la première encyclopédie culturelle numérique marocaine — dictionnaire Darija avec 355+ mots et 7 dialectes, guides de 9 villes, 1 200 ans d'histoire et une IA culturelle, construite offline-first."
          </h2>
        </div>

        {/* Key facts */}
        <div style={{ marginBottom:48 }}>
          <h2 style={{ ...S, fontSize:28, color:'var(--ink)', marginBottom:22 }}>Chiffres clés</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:14 }}>
            {FACTS.map(f => (
              <div key={f.l} style={{ background:'#fff', borderRadius:14, padding:'18px 20px', border:'1px solid var(--border)', textAlign:'center' }}>
                <div style={{ ...S, fontSize:32, color:'var(--terra)', lineHeight:1, marginBottom:5 }}>{f.v}</div>
                <div style={{ fontSize:13, fontWeight:700, color:'var(--ink)', marginBottom:3 }}>{f.l}</div>
                <div style={{ fontSize:11, color:'var(--muted)' }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div style={{ marginBottom:48 }}>
          <h2 style={{ ...S, fontSize:28, color:'var(--ink)', marginBottom:18 }}>À propos</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20 }}>
            <div>
              <h3 style={{ ...S, fontSize:18, color:'var(--terra)', marginBottom:10 }}>Le projet</h3>
              <p style={{ fontSize:14.5, color:'var(--muted)', lineHeight:1.85 }}>
                MoroccoPedia a été fondé lors du Hackathon Cultural Heritage Tech 2025 par une équipe de développeurs marocains passionnés de culture et de linguistique. Le projet répond à un constat simple : 36 millions de locuteurs de Darija n'avaient aucun dictionnaire numérique structuré ni encyclopédie culturelle digne de ce nom.
              </p>
            </div>
            <div>
              <h3 style={{ ...S, fontSize:18, color:'var(--teal)', marginBottom:10 }}>La mission</h3>
              <p style={{ fontSize:14.5, color:'var(--muted)', lineHeight:1.85 }}>
                Préserver et valoriser le patrimoine culturel marocain à travers la technologie. MoroccoPedia ambitionne de devenir la plateforme culturelle de référence pour le Maroc — utilisée par les touristes, les MRE, les chercheurs et les Marocains eux-mêmes, en particulier lors de la Coupe du Monde FIFA 2030.
              </p>
            </div>
          </div>
        </div>

        {/* Mentions */}
        <div style={{ marginBottom:48 }}>
          <h2 style={{ ...S, fontSize:28, color:'var(--ink)', marginBottom:18 }}>Mentions & Prix</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {MENTIONS.map((m, i) => (
              <div key={i} style={{ display:'flex', gap:16, alignItems:'center', padding:'14px 20px', background:'#fff', borderRadius:12, border:'1px solid var(--border)', flexWrap:'wrap' }}>
                <div style={{ width:8, height:8, borderRadius:'50%', background:'var(--gold)', flexShrink:0 }}/>
                <div style={{ flex:1 }}>
                  <span style={{ fontWeight:700, color:'var(--ink)', fontSize:14.5 }}>{m.outlet}</span>
                  <span style={{ color:'var(--muted)', fontSize:13.5, marginLeft:10 }}>{m.type}</span>
                </div>
                <span style={{ fontSize:12, color:'var(--muted)', flexShrink:0 }}>{m.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div style={{ marginBottom:48 }}>
          <h2 style={{ ...S, fontSize:28, color:'var(--ink)', marginBottom:18 }}>Équipe fondatrice</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:16 }}>
            {TEAM.map(m => (
              <div key={m.name} style={{ background:'#fff', borderRadius:16, padding:'20px 24px', border:'1px solid var(--border)' }}>
                <div style={{ width:52, height:52, borderRadius:14, background:'linear-gradient(135deg,var(--terra),var(--gold))', marginBottom:14, display:'flex', alignItems:'center', justifyContent:'center', ...S, fontSize:22, color:'#fff' }}>
                  {m.name.charAt(1) || '?'}
                </div>
                <div style={{ ...S, fontSize:18, color:'var(--ink)', marginBottom:4 }}>{m.name}</div>
                <div style={{ fontSize:13, fontWeight:700, color:'var(--terra)', marginBottom:6, textTransform:'uppercase', letterSpacing:'.05em' }}>{m.role}</div>
                <div style={{ fontSize:12.5, color:'var(--muted)', lineHeight:1.6, marginBottom:6 }}>{m.bg}</div>
                <div style={{ fontSize:11.5, color:'var(--teal)', fontWeight:600 }}{m.city}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Downloads */}
        <div style={{ background:'linear-gradient(135deg,#1c1007,#0a2318)', borderRadius:20, padding:'clamp(28px,4vw,44px)', position:'relative', overflow:'hidden' }}>
          <Zellige opacity={0.1} id="press-z"/>
          <div style={{ position:'relative', zIndex:1 }}>
            <h2 style={{ ...S, fontSize:26, color:'#fff', marginBottom:14 }}>Télécharger le kit presse</h2>
            <p style={{ fontSize:14.5, color:'rgba(245,237,220,.55)', marginBottom:24, maxWidth:480 }}>
              Logos haute résolution, images de présentation, données structurées et fiche produit.
            </p>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              {[
                { label:'Logo Pack (SVG + PNG)', icon: <Ic name="image"/> },
                { label:'Product Screenshots', icon: <Ic name="code"/> },
                { label:'Fiche Produit PDF', icon: <Ic name="filetext"/> },
                { label:'Données JSON', icon: null },
              ].map(item => (
                <button key={item.label} style={{ padding:'10px 18px', borderRadius:11, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.2)', color:'rgba(255,255,255,.8)', fontSize:13, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif', display:'flex', alignItems:'center', gap:7, transition:'all .18s' }}
                  onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,.15)'}
                  onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,.08)'}>
                  {item.icon} {item.label}
                </button>
              ))}
            </div>
            <p style={{ marginTop:20, fontSize:12, color:'rgba(245,237,220,.35)' }}>
              Pour toute demande spéciale : <a href="mailto:press@moroccoPedia.app" style={{ color:'var(--teal2)' }}>press@moroccoPedia.app</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
