import { useState, useEffect } from 'react';
import Link from 'next/link';
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


const TABS = [
  { id:'words',  label:'Mots Darija',    icon: <Ic name="book"/> },
  { id:'cities', label:'Villes',         icon: <Ic name="building"/> },
  { id:'places', label:'Lieux',          icon: <Ic name="pin"/> },
];

const SAMPLE_CITIES = [
  { slug:'marrakesh', name:'Marrakesh',    flag:<Ic name="building"/>, nickname:'Ville Rouge' },
  { slug:'fes',       name:'Fès',         flag:<Ic name="archive"/>, nickname:'Capitale Culturelle' },
  { slug:'chefchaouen', name:'Chefchaouen', flag:'▪', nickname:'Ville Bleue' },
];

function Zellige({ opacity=.08, id='z' }) {
  return (
    <svg style={{ position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none' }}>
      <defs>
        <pattern id={id} x="0" y="0" width={70} height={70} patternUnits="userSpaceOnUse">
          <polygon points="35,3.5 44.1,18.9 66.5,18.9 51.1,31.5 57.4,53.2 35,42 12.6,53.2 18.9,31.5 3.5,18.9 25.9,18.9"
            fill="none" stroke="#c0390a" strokeWidth="1" opacity={opacity}/>
          <circle cx="35" cy="35" r="2.5" fill="#c47b0a" opacity={opacity*.5}/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  );
}

const safeStorage = {
  get: (k) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : []; } catch { return []; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

export default function FavoritesPage() {
  const [tab,          setTab]          = useState('words');
  const [favWords,     setFavWords]     = useState([]);
  const [favCities,    setFavCities]    = useState([]);
  const [favPlaces,    setFavPlaces]    = useState([]);
  const [mounted,      setMounted]      = useState(false);

  useEffect(() => {
    setMounted(true);
    setFavWords(safeStorage.get('mp_fav_words'));
    setFavCities(safeStorage.get('mp_fav_cities'));
    setFavPlaces(safeStorage.get('mp_fav_places'));
  }, []);

  const removeWord = (word) => {
    const updated = favWords.filter(w => w !== word);
    setFavWords(updated);
    safeStorage.set('mp_fav_words', updated);
  };

  const removeCity = (slug) => {
    const updated = favCities.filter(c => c !== slug);
    setFavCities(updated);
    safeStorage.set('mp_fav_cities', updated);
  };

  const clearAll = () => {
    if (!confirm('Effacer tous vos favoris ?')) return;
    setFavWords([]);
    setFavCities([]);
    setFavPlaces([]);
    safeStorage.set('mp_fav_words', []);
    safeStorage.set('mp_fav_cities', []);
    safeStorage.set('mp_fav_places', []);
  };

  const wordObjects = favWords.map(w => DIALECT_DATA.find(d => d.word === w)).filter(Boolean);
  const cityObjects = SAMPLE_CITIES.filter(c => favCities.includes(c.slug));

  const totals = { words: favWords.length, cities: favCities.length, places: favPlaces.length };
  const totalAll = totals.words + totals.cities + totals.places;

  if (!mounted) return null;

  return (
    <Layout>
      <SEO title="Mes favoris — MoroccoPedia" description="Vos mots Darija, villes et lieux sauvegardés sur MoroccoPedia."/>

      {/* Hero */}
      <section style={{ background:'linear-gradient(155deg,#1a0800,#0a2318)', padding:'clamp(48px,6vw,72px) 0', position:'relative', overflow:'hidden' }}>
        <Zellige opacity={0.12} id="fh"/>
        <div style={{ maxWidth:900, margin:'0 auto', padding:'0 clamp(20px,4vw,48px)', position:'relative', zIndex:2 }}>
          <h1 style={{ ...S, fontSize:'clamp(28px,5vw,52px)', color:'#fff', lineHeight:1.05, marginBottom:10 }}>
            Mes <span style={{ color:'var(--gold2)' }}>Favoris</span>
          </h1>
          <p style={{ fontSize:15, color:'rgba(245,237,220,.5)', marginBottom:20 }}>
            {totalAll > 0 ? `${totalAll} élément${totalAll>1?'s':''} sauvegardé${totalAll>1?'s':''}` : 'Aucun favori pour l\'instant'}
          </p>
          {totalAll > 0 && (
            <button onClick={clearAll}
              style={{ fontSize:12, color:'rgba(245,237,220,.35)', background:'none', border:'1px solid rgba(255,255,255,.1)', borderRadius:20, padding:'4px 12px', cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>
              Tout effacer
            </button>
          )}
        </div>
      </section>

      {/* Tabs */}
      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)', position:'sticky', top:62, zIndex:100 }}>
        <div style={{ maxWidth:900, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)', display:'flex', gap:0 }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding:'clamp(11px,2vw,16px) clamp(16px,2.5vw,28px)', fontSize:13.5, fontWeight:tab===t.id?700:400, cursor:'pointer', border:'none', background:'transparent', fontFamily:'Outfit,sans-serif',
                color: tab===t.id ? 'var(--terra)' : 'var(--muted)',
                borderBottom:`3px solid ${tab===t.id?'var(--terra)':'transparent'}`,
                transition:'all .18s', display:'flex', alignItems:'center', gap:7 }}>
              {t.icon} {t.label}
              {totals[t.id] > 0 && (
                <span style={{ background:tab===t.id?'var(--terra)':'var(--bg2)', color:tab===t.id?'#fff':'var(--muted)', fontSize:10, fontWeight:700, padding:'1px 7px', borderRadius:20 }}>
                  {totals[t.id]}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'clamp(24px,4vw,40px) clamp(16px,4vw,48px)' }}>

        {/* Words tab */}
        {tab === 'words' && (
          favWords.length === 0 ? (
            <EmptyState
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>}
              title="Aucun mot sauvegardé"
              desc="Explorez le dictionnaire et cliquez sur le cœur pour sauvegarder vos mots Darija préférés."
              cta="Dictionnaire Darija"
              href="/dialect"
            />
          ) : (
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:14 }}>
              {wordObjects.map(w => (
                <div key={w.word} style={{ background:'#fff', borderRadius:14, border:'1px solid var(--border)', overflow:'hidden', transition:'all .22s' }}
                  onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 28px rgba(192,57,10,.08)';}}
                  onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none';}}>
                  <div style={{ height:4, background:'linear-gradient(90deg,var(--terra),var(--gold))' }}/>
                  <div style={{ padding:'16px 18px' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                      <div>
                        <div style={{ ...S, fontSize:22, color:'var(--terra)', marginBottom:2 }}>{w.word}</div>
                        {w.arabic && <div style={{ fontFamily:'Amiri,serif', fontSize:15, color:'var(--muted)', direction:'rtl' }}>{w.arabic}</div>}
                      </div>
                      <button onClick={() => removeWord(w.word)}
                        style={{ background:'none', border:'none', cursor:'pointer', fontSize:16, color:'var(--terra)', opacity:.6, transition:'opacity .2s' }}
                        onMouseEnter={e=>e.currentTarget.style.opacity='1'}
                        onMouseLeave={e=>e.currentTarget.style.opacity='.6'}
                        title="Retirer des favoris"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>
                    </div>
                    <p style={{ fontSize:12.5, color:'var(--muted)', lineHeight:1.55, marginTop:8, marginBottom:12 }}>
                      {w.definition?.slice(0,90)}...
                    </p>
                    <Link href={`/dialect?q=${encodeURIComponent(w.word)}`} style={{ fontSize:12.5, color:'var(--teal)', fontWeight:600, textDecoration:'none' }}>
                      Voir le mot complet →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )
        )}

        {/* Cities tab */}
        {tab === 'cities' && (
          favCities.length === 0 ? (
            <EmptyState
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><polyline points="5 22 5 7 9 7 9 22"/><polyline points="13 22 13 2 21 2 21 22"/><rect x="9" y="7" width="4" height="5"/></svg>}
              title="Aucune ville sauvegardée"
              desc="Explorez les guides de villes et sauvegardez vos villes marocaines préférées."
              cta="Guides de villes"
              href="/home-culture"
            />
          ) : (
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))', gap:14 }}>
              {cityObjects.map(c => (
                <div key={c.slug} style={{ background:'#fff', borderRadius:14, border:'1px solid var(--border)', overflow:'hidden', transition:'all .22s' }}
                  onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 28px rgba(10,122,106,.08)';}}
                  onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none';}}>
                  <div style={{ padding:'20px', textAlign:'center' }}>
                    <div style={{ fontSize:40, marginBottom:10 }}>{c.flag}</div>
                    <div style={{ ...S, fontSize:20, color:'var(--ink)', marginBottom:4 }}>{c.name}</div>
                    <div style={{ fontSize:13, color:'var(--muted)', marginBottom:14 }}>{c.nickname}</div>
                    <div style={{ display:'flex', gap:8, justifyContent:'center' }}>
                      <Link href={`/city/${c.slug}`} style={{ textDecoration:'none' }}>
                        <button className="btn-primary" style={{ fontSize:12 }}>Guide →</button>
                      </Link>
                      <button onClick={() => removeCity(c.slug)}
                        style={{ padding:'7px 12px', borderRadius:9, border:'1px solid var(--border)', background:'none', color:'var(--muted)', fontSize:12, cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>
                        Retirer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        )}

        {/* Places tab */}
        {tab === 'places' && (
          <EmptyState
            icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
            title="Aucun lieu sauvegardé"
            desc="Explorez les lieux touristiques et sauvegardez vos coups de cœur pour les retrouver facilement."
            cta="Lieux touristiques"
            href="/tourism"
          />
        )}

        {/* Discover more */}
        {totalAll > 0 && (
          <div style={{ marginTop:40, display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12 }}>
            {[
              { icon: <Ic name="book"/>, title:'Dictionnaire',  href:'/dialect',      desc:'355+ mots Darija' },
              { icon: <Ic name="building"/>, title:'Villes',        href:'/home-culture', desc:'9 guides complets' },
              { icon: <Ic name="archive"/>, title:'Histoire',      href:'/history',      desc:'1,200 ans' },
              { icon: <Ic name="map"/>, title:'Carte',         href:'/map',          desc:'Carte interactive' },
            ].map(item => (
              <Link key={item.title} href={item.href} style={{ textDecoration:'none' }}>
                <div className="card-hover" style={{ padding:'16px', textAlign:'center' }}>
                  <div style={{ fontSize:24, marginBottom:6 }}>{item.icon}</div>
                  <div style={{ fontSize:13.5, fontWeight:600, color:'var(--ink)', marginBottom:3 }}>{item.title}</div>
                  <div style={{ fontSize:11.5, color:'var(--muted)' }}>{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

function EmptyState({ icon, title, desc, cta, href }) {
  return (
    <div style={{ textAlign:'center', padding:'clamp(48px,8vw,80px) 20px' }}>
      <div style={{ fontSize:52, marginBottom:16 }}>{icon}</div>
      <div style={{ fontFamily:'Playfair Display,Georgia,serif', fontSize:22, color:'var(--ink)', marginBottom:10 }}>{title}</div>
      <p style={{ fontSize:14.5, color:'var(--muted)', lineHeight:1.75, marginBottom:24, maxWidth:360, margin:'0 auto 24px' }}>{desc}</p>
      <Link href={href} style={{ textDecoration:'none' }}>
        <button className="btn-primary">{cta} →</button>
      </Link>
    </div>
  );
}
