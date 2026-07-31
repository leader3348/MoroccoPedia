import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import DIALECT_DATA from '../data/dialectData';
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


// ── LOCAL SEARCH ENGINE ──────────────────────────────────────
const CITIES = [
  { name:'Marrakesh', slug:'marrakesh', desc:'La Ville Rouge — fondée en 1062, capitale impériale', tags:['tagine','tangia','gnawa','zellige'] },
  { name:'Fès', slug:'fes', desc:'La capitale culturelle — plus ancienne université du monde', tags:['pastilla','zellige','medersa','malhoun'] },
  { name:'Casablanca', slug:'casablanca', desc:'La Ville Blanche — capitale économique du Maroc', tags:['mosquée hassan II','chaabi','sardines'] },
  { name:'Tanger', slug:'tangier', desc:'Où deux mers se rencontrent — 14km de l\'Europe', tags:['byesar','détroit','port','café hafa'] },
  { name:'Chefchaouen', slug:'chefchaouen', desc:'La Ville Bleue — dans les montagnes du Rif', tags:['bleu','jebli','fromage','cannabis'] },
  { name:'Essaouira', slug:'essaouira', desc:'La Ville des Vents — capitale mondiale de la musique Gnawa', tags:['gnawa','thuya','sardines','ramparts'] },
  { name:'Agadir', slug:'agadir', desc:'La capitale des plages — 300 jours de soleil par an', tags:['argan','plage','tachelhit','amlou'] },
  { name:'Ouarzazate', slug:'ouarzazate', desc:'Hollywood d\'Afrique — porte du Sahara', tags:['ait benhaddou','sahara','draa','films'] },
  { name:'Ifrane', slug:'ifrane', desc:'La Suisse du Maroc — forêts de cèdres à 1650m', tags:['neige','cèdres','singes','ski'] },
];

const FIGURES = [
  { name:'Youssef Ibn Tachfin', slug:'yusuf-ibn-tashfin', desc:'Fondateur de Marrakech · Sauveur de l\'Andalousie', era:'11e siècle' },
  { name:'Fatima Al-Fihriya', slug:'fatima-al-fihri', desc:'Fondatrice de la première université du monde', era:'9e siècle' },
  { name:'Ibn Battuta', slug:'ibn-battuta', desc:'Le plus grand voyageur de l\'histoire — 120 000 km', era:'14e siècle' },
  { name:'Ibn Khaldoun', slug:'ibn-khaldun', desc:'Père de la sociologie et de l\'économie', era:'14e siècle' },
  { name:'Averroès (Ibn Rushd)', slug:'averroes', desc:'Philosophe qui a sauvé Aristote pour l\'Occident', era:'12e siècle' },
  { name:'Al-Idrisi', slug:'al-idrisi', desc:'Le plus grand cartographe médiéval du monde', era:'12e siècle' },
  { name:'Mohammed V', slug:'mohammed-v', desc:'Père de la nation — roi de l\'indépendance 1956', era:'20e siècle' },
  { name:'Hassan II', slug:'hassan-ii', desc:'38 ans de règne · Mosquée Hassan II · Marche Verte', era:'20e siècle' },
  { name:'Ahmed Al-Mansour', slug:'ibn-battuta-2', desc:'L\'Or de Marrakech · Vainqueur du Portugal 1578', era:'16e siècle' },
  { name:'Moulay Ismail', slug:'moulay-ismail', desc:'Le Versailles marocain — 55 ans de règne', era:'17-18e siècle' },
];

function searchAll(query) {
  if (!query || query.trim().length < 2) return { words:[], cities:[], figures:[], total:0 };
  const q = query.toLowerCase().trim();

  const words = DIALECT_DATA.filter(w =>
    w.word.toLowerCase().includes(q) ||
    (w.arabic||'').includes(q) ||
    (w.definition||'').toLowerCase().includes(q) ||
    (w.themes||[]).some(t=>t.toLowerCase().includes(q)) ||
    (w.regionalVariants||[]).some(v=>(v.word||'').toLowerCase().includes(q))
  ).slice(0, 8);

  const cities = CITIES.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.desc.toLowerCase().includes(q) ||
    c.tags.some(t=>t.toLowerCase().includes(q))
  );

  const figures = FIGURES.filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.desc.toLowerCase().includes(q) ||
    f.era.toLowerCase().includes(q)
  );

  return { words, cities, figures, total: words.length + cities.length + figures.length };
}

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState(router.query.q || '');
  const [results, setResults] = useState({ words:[], cities:[], figures:[], total:0 });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (router.query.q) setQuery(router.query.q);
  }, [router.query.q]);

  useEffect(() => {
    if (query.trim().length >= 2) {
      setResults(searchAll(query));
    } else {
      setResults({ words:[], cities:[], figures:[], total:0 });
    }
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`, undefined, { shallow:true });
  };

  const POPULAR = ['labas','tagine','zwina','gnawa','zellige','bezzaf','mrhba','atay','hammam','darija'];

  return (
    <Layout>
      <SEO title={`Recherche${query ? ` — "${query}"` : ''} — MoroccoPedia`} description="Recherchez dans toute la base de données MoroccoPedia — mots Darija, villes, figures historiques et patrimoine culturel marocain."/>

      {/* Search hero */}
      <div style={{ background:'linear-gradient(155deg,#1a0800,#0a2318)', padding:'clamp(40px,5vw,64px) 0', position:'relative', overflow:'hidden' }}>
        <div style={{ maxWidth:700, margin:'0 auto', padding:'0 clamp(20px,4vw,48px)', position:'relative', zIndex:2, textAlign:'center' }}>
          <h1 style={{ ...S, fontSize:'clamp(26px,4.5vw,44px)', color:'#fff', marginBottom:10 }}>
            Rechercher dans<br/><span style={{ color:'var(--gold2)' }}>MoroccoPedia</span>
          </h1>
          <p style={{ fontSize:14, color:'rgba(245,237,220,.5)', marginBottom:24 }}>Mots Darija · Villes · Figures historiques · Patrimoine</p>

          <form onSubmit={handleSubmit}>
            <div style={{ display:'flex', background:'rgba(255,255,255,.1)', border:'1.5px solid rgba(255,255,255,.2)', borderRadius:14, overflow:'hidden', maxWidth:600, margin:'0 auto' }}>
              <span style={{ padding:'0 14px', display:'flex', alignItems:'center', fontSize:18, color:'rgba(255,255,255,.4)' }}>—</span>
              <input value={query} onChange={e=>setQuery(e.target.value)}
                placeholder="Rechercher un mot, une ville, une figure..."
                autoFocus
                style={{ flex:1, padding:'14px 4px', background:'none', border:'none', color:'#fff', fontSize:15, fontFamily:'Outfit,sans-serif', outline:'none' }}/>
              {query && (
                <button type="button" onClick={()=>setQuery('')}
                  style={{ padding:'0 12px', background:'none', border:'none', color:'rgba(255,255,255,.4)', cursor:'pointer' }}>✕</button>
              )}
              <button type="submit" style={{ padding:'0 22px', background:'var(--teal)', border:'none', color:'#fff', fontSize:13.5, fontWeight:700, cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>
                Chercher
              </button>
            </div>
          </form>

          {!query && (
            <div style={{ marginTop:18, display:'flex', gap:7, flexWrap:'wrap', justifyContent:'center' }}>
              <span style={{ fontSize:11, color:'rgba(255,255,255,.35)', alignSelf:'center' }}>Populaire :</span>
              {POPULAR.map(w => (
                <button key={w} onClick={()=>setQuery(w)}
                  style={{ padding:'4px 12px', borderRadius:20, fontSize:11.5, fontWeight:600, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.15)', color:'rgba(255,255,255,.7)', cursor:'pointer', fontFamily:'Outfit,sans-serif', transition:'all .15s' }}
                  onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,.18)';e.currentTarget.style.color='#fff';}}
                  onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.08)';e.currentTarget.style.color='rgba(255,255,255,.7)';}}>
                  {w}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'clamp(24px,4vw,40px) clamp(16px,4vw,40px)' }}>

        {query.trim().length >= 2 && (
          <>
            {/* Results summary + filter */}
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:22, flexWrap:'wrap', gap:10 }}>
              <div style={{ fontSize:14.5, color:'var(--muted)' }}>
                <strong style={{ color:'var(--ink)' }}>{results.total}</strong> résultat{results.total !== 1 ? 's' : ''} pour{' '}
                <strong style={{ color:'var(--terra)' }}>"{query}"</strong>
              </div>
              <div style={{ display:'flex', gap:7 }}>
                {[
                  { id:'all', label:`Tout (${results.total})` },
                  { id:'words', label:`Darija (${results.words.length})` },
                  { id:'cities', label:`Villes (${results.cities.length})` },
                  { id:'figures', label:`Figures (${results.figures.length})` },
                ].map(f => (
                  <button key={f.id} onClick={() => setFilter(f.id)}
                    className={`tag-chip${filter === f.id ? ' active' : ''}`}
                    style={{ fontFamily:'Outfit,sans-serif', fontSize:11.5 }}>
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {results.total === 0 && (
              <div style={{ textAlign:'center', padding:'60px 20px' }}>
                <div style={{ fontSize:40, marginBottom:12 }}>— </div>
                <div style={{ ...S, fontSize:22, marginBottom:8, color:'var(--ink)' }}>Aucun résultat</div>
                <div style={{ fontSize:14, color:'var(--muted)', marginBottom:20 }}>
                  Essayez un autre terme — la recherche fonctionne en Darija, arabe, français et anglais.
                </div>
                <div style={{ display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap' }}>
                  {POPULAR.slice(0,4).map(w => (
                    <button key={w} onClick={()=>setQuery(w)} style={{ padding:'7px 16px', borderRadius:20, background:'var(--terra3)', border:'1px solid var(--terra)', color:'var(--terra)', fontSize:12.5, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>
                      Essayer "{w}"
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Darija words */}
            {(filter === 'all' || filter === 'words') && results.words.length > 0 && (
              <div style={{ marginBottom:32 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14 }}>
                  <h2 style={{ ...S, fontSize:20, color:'var(--ink)' }}>Mots Darija</h2>
                  <Link href={`/dialect?q=${encodeURIComponent(query)}`} style={{ fontSize:13, color:'var(--teal)', fontWeight:600, textDecoration:'none' }}>Voir tout →</Link>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))', gap:12 }}>
                  {results.words.map(w => (
                    <Link key={w.word} href={`/dialect?q=${encodeURIComponent(w.word)}`} style={{ textDecoration:'none' }}>
                      <div className="card-hover" style={{ padding:'14px 18px' }}>
                        <div style={{ display:'flex', gap:10, alignItems:'baseline', marginBottom:6 }}>
                          <span style={{ ...S, fontSize:22, color:'var(--terra)' }}>{w.word}</span>
                          {w.arabic && <span style={{ fontFamily:'Amiri,serif', fontSize:16, color:'var(--muted)', direction:'rtl' }}>{w.arabic}</span>}
                        </div>
                        <div style={{ fontSize:12.5, color:'var(--muted)', lineHeight:1.5 }}>{w.definition?.slice(0,80)}...</div>
                        {w.partOfSpeech && <span style={{ marginTop:7, display:'inline-block', padding:'2px 8px', borderRadius:10, background:'var(--terra3)', color:'var(--terra)', fontSize:10, fontWeight:700, textTransform:'uppercase' }}>{w.partOfSpeech}</span>}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Cities */}
            {(filter === 'all' || filter === 'cities') && results.cities.length > 0 && (
              <div style={{ marginBottom:32 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14 }}>
                  <h2 style={{ ...S, fontSize:20, color:'var(--ink)' }}>Villes</h2>
                  <Link href="/home-culture" style={{ fontSize:13, color:'var(--teal)', fontWeight:600, textDecoration:'none' }}>Toutes les villes →</Link>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  {results.cities.map(c => (
                    <Link key={c.slug} href={`/city/${c.slug}`} style={{ textDecoration:'none' }}>
                      <div className="card-hover" style={{ padding:'14px 18px', display:'flex', alignItems:'center', gap:16 }}>
                        <div style={{ width:44, height:44, borderRadius:12, background:'var(--terra3)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--terra)', flexShrink:0 }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><polyline points="5 22 5 7 9 7 9 22"/><polyline points="13 22 13 2 21 2 21 22"/><rect x="9" y="7" width="4" height="5"/></svg></div>
                        <div>
                          <div style={{ ...S, fontSize:17, color:'var(--ink)', marginBottom:3 }}>{c.name}</div>
                          <div style={{ fontSize:13, color:'var(--muted)' }}>{c.desc}</div>
                        </div>
                        <span style={{ marginLeft:'auto', fontSize:13, fontWeight:600, color:'var(--terra)', flexShrink:0 }}>Guide →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Figures */}
            {(filter === 'all' || filter === 'figures') && results.figures.length > 0 && (
              <div style={{ marginBottom:32 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14 }}>
                  <h2 style={{ ...S, fontSize:20, color:'var(--ink)' }}>Figures historiques</h2>
                  <Link href="/history" style={{ fontSize:13, color:'var(--teal)', fontWeight:600, textDecoration:'none' }}>Toutes les figures →</Link>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  {results.figures.map(f => (
                    <Link key={f.slug} href={`/history?figure=${f.slug}`} style={{ textDecoration:'none' }}>
                      <div className="card-hover" style={{ padding:'14px 18px', display:'flex', alignItems:'center', gap:16 }}>
                        <div style={{ width:44, height:44, borderRadius:12, background:'var(--gold3)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--gold)', flexShrink:0 }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M5 20h14"/></svg></div>
                        <div>
                          <div style={{ ...S, fontSize:17, color:'var(--ink)', marginBottom:3 }}>{f.name}</div>
                          <div style={{ fontSize:13, color:'var(--muted)' }}>{f.desc}</div>
                        </div>
                        <span style={{ marginLeft:'auto', fontSize:11, color:'var(--muted)', flexShrink:0 }}>{f.era}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Empty state — no query */}
        {!query.trim() && (
          <div style={{ textAlign:'center', padding:'40px 0' }}>
            <div style={{ ...S, fontSize:24, color:'var(--muted)', marginBottom:8 }}>Que cherchez-vous ?</div>
            <p style={{ fontSize:14, color:'var(--muted)', lineHeight:1.7, marginBottom:28 }}>
              Tapez un mot en Darija, le nom d'une ville marocaine, ou une figure historique.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:14, maxWidth:700, margin:'0 auto' }}>
              {[
                { icon: <Ic name="book"/>, title:'Dictionnaire Darija', desc:'355+ mots avec dialectes', link:'/dialect' },
                { icon: <Ic name="building"/>, title:'Guides de villes', desc:'9 villes marocaines', link:'/home-culture' },
                { icon: <Ic name="archive"/>, title:'Histoire', desc:'1,200 ans de dynasties', link:'/history' },
                { icon: <Ic name="map"/>, title:'Carte culturelle', desc:'Carte interactive', link:'/map' },
              ].map(item => (
                <Link key={item.title} href={item.link} style={{ textDecoration:'none' }}>
                  <div className="card-hover" style={{ padding:'18px', textAlign:'center' }}>
                    <div style={{ fontSize:28, marginBottom:8 }}>{item.icon}</div>
                    <div style={{ fontSize:14, fontWeight:600, color:'var(--ink)', marginBottom:4 }}>{item.title}</div>
                    <div style={{ fontSize:12, color:'var(--muted)' }}>{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
