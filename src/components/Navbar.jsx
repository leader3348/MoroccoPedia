import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';

const S = { fontFamily: 'Playfair Display, Georgia, serif' };

// ── SVG Icons ──────────────────────────────────────────────────
const Icons = {
  book:    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  search:  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  message: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  compare: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><polyline points="8 7 3 12 8 17"/><polyline points="16 7 21 12 16 17"/></svg>,
  dialect: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  city:    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><polyline points="5 22 5 7 9 7 9 22"/><polyline points="13 22 13 2 21 2 21 22"/><rect x="9" y="7" width="4" height="5"/></svg>,
  map:     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>,
  pin:     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  history: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  crown:   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M5 20h14"/></svg>,
  layers:  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  timeline:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="17" y1="12" x2="22" y2="12"/><line x1="2" y1="12" x2="7" y2="12"/><circle cx="12" cy="12" r="5"/><line x1="12" y1="2" x2="12" y2="7"/><line x1="12" y1="17" x2="12" y2="22"/></svg>,
  globe:   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  camera:  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  users:   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  cpu:     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
  target:  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  pen:     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  heart:   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  overview:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
};

const NAV_ITEMS = [
  {
    label: 'Dictionnaire', labelAr: 'القاموس',
    href: '/dialect', color: '#c0390a',
    children: [
      { href:'/dialect',           icon: Icons.search,  label:'Chercher un mot',      desc:'355+ mots Darija' },
      { href:'/phrase-book',       icon: Icons.message, label:'Guide de phrases',      desc:'50+ phrases de voyage' },
      { href:'/compare',           icon: Icons.compare, label:'Comparer dialectes',    desc:'2 régions côte à côte' },
      { href:'/dialect/marrakshi', icon: Icons.dialect, label:'Marrakshi',            desc:'Dialecte de la Ville Rouge' },
      { href:'/dialect/fassi',     icon: Icons.dialect, label:'Fassi',                desc:'Le plus classique du Maroc' },
      { href:'/dialect/tanjawi',   icon: Icons.dialect, label:'Tanjawi',              desc:'Tanger, porte de l\'Europe' },
      { href:'/dialect/tachelhit', icon: Icons.dialect, label:'Tachelhit Amazigh',    desc:'Langue du Souss' },
      { href:'/dialect/casawi',    icon: Icons.dialect, label:'Casawi',               desc:'L\'accent de Casablanca' },
    ],
  },
  {
    label: 'Villes', labelAr: 'المدن',
    href: '/home-culture', color: '#0a7a6a',
    children: [
      { href:'/home-culture',     icon: Icons.overview, label:'Tous les guides',   desc:'9 villes marocaines' },
      { href:'/city/marrakesh',   icon: Icons.city,     label:'Marrakech',         desc:'La Ville Rouge' },
      { href:'/city/fes',         icon: Icons.city,     label:'Fès',               desc:'Capitale Culturelle' },
      { href:'/city/casablanca',  icon: Icons.city,     label:'Casablanca',        desc:'Cœur économique' },
      { href:'/city/chefchaouen', icon: Icons.pin,      label:'Chefchaouen',       desc:'La Ville Bleue' },
      { href:'/city/essaouira',   icon: Icons.pin,      label:'Essaouira',         desc:'Capitale Gnawa' },
      { href:'/city/tangier',     icon: Icons.pin,      label:'Tanger',            desc:'14km de l\'Europe' },
      { href:'/city/agadir',      icon: Icons.pin,      label:'Agadir',            desc:'300 jours de soleil' },
    ],
  },
  {
    label: 'Histoire', labelAr: 'التاريخ',
    href: '/history', color: '#c47b0a',
    children: [
      { href:'/history',                icon: Icons.history,  label:'Vue d\'ensemble',    desc:'1,200 ans d\'histoire' },
      { href:'/history?tab=figures',    icon: Icons.crown,    label:'Figures légendaires', desc:'Ibn Battuta, Averroès...' },
      { href:'/history?tab=dynasties',  icon: Icons.layers,   label:'Les Dynasties',      desc:'6 grandes dynasties' },
      { href:'/history?tab=timeline',   icon: Icons.timeline, label:'Timeline interactif', desc:'De 788 CE à 2030' },
    ],
  },
  {
    label: 'Explorer', labelAr: 'استكشف',
    href: '#', color: '#c0390a', showChevron: true,
    children: [
      { href:'/map',       icon: Icons.map,      label:'Carte Culturelle',   desc:'Carte interactive' },
      { href:'/tourism',   icon: Icons.camera,   label:'Tourisme',            desc:'28 lieux incontournables' },
      { href:'/community', icon: Icons.users,    label:'Communauté',         desc:'Patrimoine vivant' },
      { href:'/ai',        icon: Icons.cpu,      label:'IA Culturelle',       desc:'6 modèles AI' },
      { href:'/quiz',      icon: Icons.target,   label:'Quiz Culturel',       desc:'Testez vos connaissances' },
      { href:'/blog',      icon: Icons.pen,      label:'Blog Culturel',       desc:'Articles approfondis' },
      { href:'/search',    icon: Icons.search,   label:'Recherche globale',   desc:'Tout MoroccoPedia' },
      { href:'/favorites', icon: Icons.heart,    label:'Mes Favoris',         desc:'Vos sauvegardes' },
    ],
  },
];

const LANGS = [
  { code:'fr', label:'FR', flag:'🇫🇷' },
  { code:'en', label:'EN', flag:'🇬🇧' },
  { code:'ar', label:'AR', flag:'🇲🇦' },
  { code:'es', label:'ES', flag:'🇪🇸' },
];

function MegaMenu({ item, onClose }) {
  return (
    <div style={{
      position:'absolute', top:'calc(100% + 1px)',
      left:0,
      background:'#fff', borderRadius:'0 0 18px 18px',
      boxShadow:'0 20px 60px rgba(28,16,7,.16)',
      border:'1px solid var(--border)',
      borderTop:`3px solid ${item.color}`,
      minWidth: item.children.length > 4 ? 560 : 360,
      zIndex:500, overflow:'hidden',
      animation:'megaDrop .18s ease',
    }}>
      {/* Header */}
      <div style={{ background:`${item.color}0a`, padding:'12px 18px', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'center', gap:10 }}>
        <span style={{ fontSize:20 }}>{item.icon}</span>
        <div style={{ flex:1 }}>
          <div style={{ ...S, fontSize:15, color:item.color, fontWeight:700 }}>{item.label}</div>
          <div style={{ fontSize:10.5, color:'var(--muted)', marginTop:1 }}>{item.children.length} sections disponibles</div>
        </div>
        {item.href !== '#' && (
          <Link href={item.href} onClick={onClose} style={{ fontSize:12, color:item.color, fontWeight:700, textDecoration:'none', padding:'4px 10px', borderRadius:20, background:`${item.color}12`, border:`1px solid ${item.color}25` }}>
            Tout voir →
          </Link>
        )}
      </div>

      {/* Grid */}
      <div style={{ display:'grid', gridTemplateColumns: item.children.length > 4 ? '1fr 1fr' : '1fr 1fr', padding:'8px' }}>
        {item.children.map((child, i) => (
          <Link key={i} href={child.href} onClick={onClose} style={{ textDecoration:'none' }}>
            <div style={{ display:'flex', gap:10, alignItems:'flex-start', padding:'9px 11px', borderRadius:10, transition:'background .15s', cursor:'pointer' }}
              onMouseEnter={e => e.currentTarget.style.background = `${item.color}08`}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <div style={{ width:32, height:32, borderRadius:8, background:`${item.color}12`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:item.color }}>
                {child.icon}
              </div>
              <div>
                <div style={{ fontSize:12.5, fontWeight:600, color:'var(--ink)', marginBottom:2 }}>{child.label}</div>
                <div style={{ fontSize:11, color:'var(--muted)', lineHeight:1.4 }}>{child.desc}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div style={{ background:'var(--bg2)', borderTop:'1px solid var(--border)', padding:'9px 18px' }}>
        <span style={{ fontSize:11, color:'var(--muted)', fontStyle:'italic' }}>
          {item.label === 'Dictionnaire' && '355+ mots · 7 dialectes · 461 variantes régionales'}
          {item.label === 'Villes' && '9 guides complets · food, artisanat, musique, dialecte'}
          {item.label === 'Histoire' && '1,200 ans · 10 figures · 6 dynasties · timeline interactif'}
          {item.label === 'Explorer' && 'Carte interactive, IA culturelle, communauté & plus'}
        </span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const router = useRouter();
  const [scrolled,   setScrolled]   = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTab,  setMobileTab]  = useState(null);
  const [apiOnline,  setApiOnline]  = useState(null);
  const [lang,       setLang]       = useState('fr');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal,  setSearchVal]  = useState('');
  const navRef    = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', fn, { passive:true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setActiveMenu(null);
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  useEffect(() => { setActiveMenu(null); setMobileOpen(false); setSearchOpen(false); }, [router.pathname]);

  useEffect(() => {
    const check = async () => {
      try {
        const r = await fetch((process.env.NEXT_PUBLIC_API_URL||'http://localhost:5000')+'/api/health');
        setApiOnline(r.ok);
      } catch { setApiOnline(false); }
    };
    check();
    const iv = setInterval(check, 30000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => { try { const l = localStorage.getItem('mp_lang'); if (l) setLang(l); } catch {} }, []);

  const changeLang = (code) => {
    setLang(code);
    try { localStorage.setItem('mp_lang', code); } catch {}
    if (typeof document !== 'undefined') {
      document.documentElement.dir  = code === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = code;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchVal.trim())}`);
      setSearchVal(''); setSearchOpen(false);
    }
  };

  const isActive = (href) => {
    if (!href || href === '#') return false;
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href.split('?')[0]);
  };

  const isGroupActive = (item) =>
    item.href !== '#' ? isActive(item.href) : item.children?.some(c => isActive(c.href));

  return (
    <>
      <nav ref={navRef} style={{
        position:'sticky', top:0, zIndex:300,
        background: scrolled ? 'rgba(253,248,242,.97)' : '#fff',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: '1px solid var(--border)',
        boxShadow: scrolled ? '0 4px 24px rgba(28,16,7,.08)' : 'none',
        transition:'all .25s',
      }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 clamp(16px,3vw,40px)', display:'flex', alignItems:'center', height:66, gap:6 }}>

          {/* ── Logo ──────────────────────────────── */}
          <Link href="/" style={{ textDecoration:'none', flexShrink:0, marginRight:16 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              {/* Zellige emblem */}
              <div style={{ position:'relative', width:38, height:38 }}>
                <div style={{ width:38, height:38, background:'linear-gradient(135deg,#c0390a,#c47b0a)', borderRadius:11, boxShadow:'0 3px 14px rgba(192,57,10,.32)', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <svg width="22" height="22" viewBox="0 0 200 200" style={{ position:'absolute', opacity:.25 }}>
                    <polygon points="100,8 124,56 188,56 136,90 158,148 100,116 42,148 64,90 12,56 76,56"
                      fill="none" stroke="white" strokeWidth="14"/>
                  </svg>
                  <span style={{ fontFamily:'Amiri,serif', fontSize:18, fontWeight:700, color:'#fff', position:'relative', zIndex:1 }}>م</span>
                </div>
              </div>
              <div>
                <div style={{ fontFamily:'Playfair Display,Georgia,serif', fontSize:18, fontWeight:700, color:'var(--ink)', lineHeight:1.1, letterSpacing:'-.01em' }}>
                  Morocco<span style={{ color:'var(--terra)' }}>Pedia</span>
                </div>
                <div style={{ fontSize:8.5, color:'var(--muted)', fontWeight:600, letterSpacing:'.15em', textTransform:'uppercase', lineHeight:1, marginTop:2, fontFamily:'Outfit,sans-serif' }}>
                  موسوعة المغرب
                </div>
              </div>
            </div>
          </Link>

          {/* ── Desktop nav ─────────────────────── */}
          <div style={{ display:'flex', alignItems:'stretch', gap:0, flex:1, height:'100%' }} className="hide-mobile">

            {/* Accueil */}
            <Link href="/" style={{ textDecoration:'none', display:'flex', alignItems:'center' }}>
              <div style={{ padding:'0 13px', height:'100%', display:'flex', alignItems:'center', fontSize:13, fontWeight: router.pathname==='/'?700:500, fontFamily:'Outfit,sans-serif', color:router.pathname==='/'?'var(--terra)':'var(--muted)', borderBottom:`3px solid ${router.pathname==='/'?'var(--terra)':'transparent'}`, cursor:'pointer', transition:'all .18s', whiteSpace:'nowrap' }}
                onMouseEnter={e=>{ if(router.pathname!=='/'){e.currentTarget.style.color='var(--ink)';} }}
                onMouseLeave={e=>{ if(router.pathname!=='/'){e.currentTarget.style.color='var(--muted)';} }}>
                Accueil
              </div>
            </Link>

            {/* Mega items */}
            {NAV_ITEMS.map(item => {
              const active = isGroupActive(item);
              const open   = activeMenu === item.label;
              return (
                <div key={item.label} style={{ position:'relative', display:'flex', alignItems:'stretch' }}>
                  <button onClick={() => setActiveMenu(open ? null : item.label)} style={{
                    padding:'0 14px', height:'100%', background: open ? `${item.color}08` : 'none',
                    border:'none', cursor:'pointer', fontSize:13,
                    fontWeight: active||open ? 700 : 500,
                    fontFamily:'Outfit,sans-serif',
                    color: active||open ? item.color : 'var(--muted)',
                    borderBottom:`3px solid ${active||open ? item.color : 'transparent'}`,
                    transition:'all .18s',
                    display:'flex', alignItems:'center', gap:5, whiteSpace:'nowrap',
                  }}
                  onMouseEnter={e=>{ if(!active&&!open){ e.currentTarget.style.color='var(--ink)'; } }}
                  onMouseLeave={e=>{ if(!active&&!open){ e.currentTarget.style.color='var(--muted)'; } }}>
                    {item.label}
                    {item.showChevron && (
                      <svg width="10" height="7" viewBox="0 0 10 7" style={{ transition:'transform .2s', transform:open?'rotate(180deg)':'none', opacity:.55, flexShrink:0 }}>
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
                      </svg>
                    )}
                  </button>
                  {open && <MegaMenu item={item} onClose={() => setActiveMenu(null)}/>}
                </div>
              );
            })}

            {/* Tarifs */}
            <Link href="/pricing" style={{ textDecoration:'none', display:'flex', alignItems:'center' }}>
              <div style={{ padding:'0 13px', height:'100%', display:'flex', alignItems:'center', fontSize:13, fontWeight:isActive('/pricing')?700:500, fontFamily:'Outfit,sans-serif', color:isActive('/pricing')?'#c47b0a':'var(--muted)', borderBottom:`3px solid ${isActive('/pricing')?'#c47b0a':'transparent'}`, cursor:'pointer', transition:'all .18s', whiteSpace:'nowrap' }}
                onMouseEnter={e=>{ if(!isActive('/pricing')){e.currentTarget.style.color='var(--ink)';} }}
                onMouseLeave={e=>{ if(!isActive('/pricing')){e.currentTarget.style.color='var(--muted)';} }}>
                Tarifs
              </div>
            </Link>
          </div>

          {/* ── Right controls ─────────────────── */}
          <div style={{ display:'flex', alignItems:'center', gap:8, flexShrink:0 }}>

            {/* Search */}
            <div ref={searchRef} style={{ position:'relative' }}>
              <button onClick={() => setSearchOpen(!searchOpen)} style={{
                width:36, height:36, borderRadius:10,
                background: searchOpen ? 'var(--terra3)' : 'var(--bg2)',
                border:`1.5px solid ${searchOpen?'rgba(192,57,10,.3)':'var(--border)'}`,
                cursor:'pointer', fontSize:15, display:'flex', alignItems:'center', justifyContent:'center', transition:'all .18s',
                color: searchOpen ? 'var(--terra)' : 'var(--muted)',
              }}>🔍</button>

              {searchOpen && (
                <form onSubmit={handleSearch} style={{ position:'absolute', top:'calc(100% + 10px)', right:0, background:'#fff', borderRadius:14, boxShadow:'0 12px 48px rgba(0,0,0,.14)', border:'1px solid var(--border)', padding:10, minWidth:290, zIndex:500, animation:'megaDrop .15s ease' }}>
                  <div style={{ display:'flex', gap:8, marginBottom:8 }}>
                    <input value={searchVal} onChange={e=>setSearchVal(e.target.value)} placeholder="Chercher dans MoroccoPedia..." autoFocus
                      style={{ flex:1, padding:'10px 14px', borderRadius:10, border:'1.5px solid var(--border)', fontSize:13.5, fontFamily:'Outfit,sans-serif', outline:'none', background:'var(--bg2)' }}
                      onFocus={e=>e.target.style.borderColor='var(--terra)'}
                      onBlur={e=>e.target.style.borderColor='var(--border)'}/>
                    <button type="submit" style={{ padding:'10px 14px', borderRadius:10, background:'linear-gradient(135deg,var(--terra),var(--gold))', border:'none', color:'#fff', fontSize:14, fontWeight:700, cursor:'pointer', boxShadow:'0 3px 10px rgba(192,57,10,.25)' }}>→</button>
                  </div>
                  <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                    {['zwina','labas','tagine','gnawa','zellige'].map(w=>(
                      <button key={w} type="button" onClick={()=>setSearchVal(w)}
                        style={{ padding:'3px 10px', borderRadius:20, background:'var(--bg2)', border:'1px solid var(--border)', fontSize:11.5, fontWeight:600, color:'var(--muted)', cursor:'pointer', fontFamily:'Outfit,sans-serif', transition:'all .15s' }}
                        onMouseEnter={e=>{e.currentTarget.style.background='var(--terra3)';e.currentTarget.style.color='var(--terra)';}}
                        onMouseLeave={e=>{e.currentTarget.style.background='var(--bg2)';e.currentTarget.style.color='var(--muted)';}}>
                        {w}
                      </button>
                    ))}
                  </div>
                </form>
              )}
            </div>

            {/* API status */}
            {apiOnline !== null && (
              <div style={{ display:'flex', alignItems:'center', gap:5, padding:'5px 11px', borderRadius:20, background:apiOnline?'rgba(10,122,106,.07)':'var(--bg2)', border:`1px solid ${apiOnline?'rgba(10,122,106,.22)':'var(--border)'}`, fontSize:11.5, fontWeight:600, color:apiOnline?'var(--teal)':'var(--muted)', whiteSpace:'nowrap' }} className="hide-mobile">
                <div style={{ width:7, height:7, borderRadius:'50%', background:apiOnline?'var(--teal)':'#ccc', boxShadow:apiOnline?'0 0 5px var(--teal2)':'none' }}/>
                {apiOnline ? 'API Online' : 'API Offline'}
              </div>
            )}

            {/* Language switcher */}
            <div style={{ display:'flex', background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:10, overflow:'hidden', padding:2, gap:1 }} className="hide-mobile">
              {LANGS.map(l=>(
                <button key={l.code} onClick={()=>changeLang(l.code)} style={{
                  padding:'5px 8px', borderRadius:7, fontSize:11.5, fontWeight:700,
                  cursor:'pointer', fontFamily:'Outfit,sans-serif', border:'none',
                  background: lang===l.code ? '#fff' : 'transparent',
                  color: lang===l.code ? 'var(--ink)' : 'var(--muted)',
                  boxShadow: lang===l.code ? '0 1px 4px rgba(0,0,0,.08)' : 'none',
                  transition:'all .18s',
                }}>
                  {l.flag} {l.label}
                </button>
              ))}
            </div>

            {/* Login */}
            <Link href="/auth/login" style={{ textDecoration:'none' }} className="hide-mobile">
              <button style={{ padding:'7px 16px', borderRadius:10, fontSize:13, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif', background:'#fff', color:'var(--ink)', border:'1.5px solid var(--border)', transition:'all .18s' }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--terra)';e.currentTarget.style.color='var(--terra)';}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.color='var(--ink)';}}>
                Connexion
              </button>
            </Link>

            {/* Register */}
            <Link href="/auth/register" style={{ textDecoration:'none' }}>
              <button style={{ padding:'7px 18px', borderRadius:10, fontSize:13, fontWeight:700, cursor:'pointer', fontFamily:'Outfit,sans-serif', background:'linear-gradient(135deg,var(--terra),var(--gold))', color:'#fff', border:'none', boxShadow:'0 3px 14px rgba(192,57,10,.28)', transition:'all .18s' }}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-1px)';e.currentTarget.style.boxShadow='0 6px 20px rgba(192,57,10,.38)';}}
                onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='0 3px 14px rgba(192,57,10,.28)';}}>
                S'inscrire
              </button>
            </Link>

            {/* Hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} style={{ width:38, height:38, borderRadius:10, background:mobileOpen?'var(--terra3)':'var(--bg2)', border:`1.5px solid ${mobileOpen?'rgba(192,57,10,.3)':'var(--border)'}`, cursor:'pointer', fontSize:17, display:'none', alignItems:'center', justifyContent:'center', transition:'all .18s', color:mobileOpen?'var(--terra)':'var(--ink)' }} className="show-mobile">
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ───────────────────────── */}
        {mobileOpen && (
          <div style={{ background:'#fff', borderTop:'1px solid var(--border)', maxHeight:'85vh', overflowY:'auto', padding:'12px 16px 24px' }}>
            <form onSubmit={handleSearch} style={{ display:'flex', gap:8, marginBottom:14 }}>
              <input value={searchVal} onChange={e=>setSearchVal(e.target.value)} placeholder="Rechercher..." style={{ flex:1, padding:'11px 14px', borderRadius:11, border:'1.5px solid var(--border)', fontSize:14, fontFamily:'Outfit,sans-serif', outline:'none', background:'var(--bg2)' }}/>
              <button type="submit" style={{ padding:'11px 16px', borderRadius:11, background:'var(--terra)', border:'none', color:'#fff', fontSize:14, fontWeight:700, cursor:'pointer' }}>→</button>
            </form>
            <Link href="/" style={{ textDecoration:'none' }}>
              <div style={{ padding:'12px 14px', borderRadius:11, marginBottom:6, fontSize:14, fontWeight:router.pathname==='/'?700:500, color:router.pathname==='/'?'var(--terra)':'var(--ink2)', background:router.pathname==='/'?'var(--terra3)':'transparent' }}>🏠 Accueil</div>
            </Link>
            {NAV_ITEMS.map(item=>(
              <div key={item.label} style={{ marginBottom:4 }}>
                <button onClick={()=>setMobileTab(mobileTab===item.label?null:item.label)} style={{ width:'100%', padding:'12px 14px', borderRadius:11, background:mobileTab===item.label?`${item.color}10`:'var(--bg2)', border:`1px solid ${mobileTab===item.label?item.color+'30':'var(--border)'}`, display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:14, fontWeight:600, color:item.color, cursor:'pointer', fontFamily:'Outfit,sans-serif', transition:'all .18s' }}>
                  <span>{item.icon} {item.label}</span>
                  <span style={{ fontSize:10, transition:'transform .2s', transform:mobileTab===item.label?'rotate(180deg)':'none' }}>▼</span>
                </button>
                {mobileTab===item.label && (
                  <div style={{ padding:'6px 0 4px 8px' }}>
                    {item.children.map((child,i)=>(
                      <Link key={i} href={child.href} style={{ textDecoration:'none' }}>
                        <div style={{ display:'flex', gap:10, alignItems:'center', padding:'9px 12px', borderRadius:9, marginBottom:3 }}
                          onMouseEnter={e=>e.currentTarget.style.background='var(--bg2)'}
                          onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
                          <div style={{ width:28, height:28, borderRadius:7, background:`${item.color}12`, display:'flex', alignItems:'center', justifyContent:'center', color:item.color, flexShrink:0 }}>{child.icon}</div>
                          <div>
                            <div style={{ fontSize:13.5, fontWeight:600, color:'var(--ink)' }}>{child.label}</div>
                            <div style={{ fontSize:11, color:'var(--muted)' }}>{child.desc}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {[{ href:'/pricing', icon:'💰', label:'Tarifs', c:'#c47b0a' },{ href:'/contact', icon:'✉️', label:'Contact', c:'#0a7a6a' },{ href:'/api-docs', icon:'⚡', label:'API', c:'#c0390a' }].map(item=>(
              <Link key={item.href} href={item.href} style={{ textDecoration:'none' }}>
                <div style={{ padding:'12px 14px', borderRadius:11, marginBottom:4, fontSize:14, fontWeight:500, color:item.c, background:'var(--bg2)' }}>{item.icon} {item.label}</div>
              </Link>
            ))}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:5, marginTop:14, paddingTop:14, borderTop:'1px solid var(--border)' }}>
              {LANGS.map(l=>(
                <button key={l.code} onClick={()=>changeLang(l.code)} style={{ padding:'8px 4px', borderRadius:9, fontSize:12, fontWeight:700, cursor:'pointer', fontFamily:'Outfit,sans-serif', border:`1.5px solid ${lang===l.code?'var(--terra)':'var(--border)'}`, background:lang===l.code?'var(--terra3)':'var(--bg2)', color:lang===l.code?'var(--terra)':'var(--muted)' }}>{l.flag} {l.label}</button>
              ))}
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginTop:10 }}>
              <Link href="/auth/login" style={{ textDecoration:'none' }}><button style={{ width:'100%', padding:'11px', borderRadius:11, border:'1.5px solid var(--border)', background:'#fff', color:'var(--ink)', fontSize:13.5, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>Connexion</button></Link>
              <Link href="/auth/register" style={{ textDecoration:'none' }}><button style={{ width:'100%', padding:'11px', borderRadius:11, border:'none', background:'linear-gradient(135deg,var(--terra),var(--gold))', color:'#fff', fontSize:13.5, fontWeight:700, cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>S'inscrire</button></Link>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes megaDrop { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
        .hide-mobile {} .show-mobile { display:none!important; }
        @media(max-width:900px){ .hide-mobile{display:none!important;} .show-mobile{display:flex!important;} }
      `}</style>
    </>
  );
}
