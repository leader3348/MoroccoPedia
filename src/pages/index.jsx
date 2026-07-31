import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Newsletter from '../components/Newsletter';
import { getCities, getRandomWord } from '../hooks/useApi';
import { HERO_STATS, STATIC_CITIES } from '../data/constants';

const S = { fontFamily: 'Playfair Display,serif' };

// ── Zellige SVG pattern — pure CSS, no images needed ──────────
function ZelligeSVG({ opacity = 0.18, color1 = '#c0390a', color2 = '#c47b0a', color3 = '#0a7a6a', size = 100 }) {
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="zellige-main" x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
          {/* 8-pointed star */}
          <polygon points={`${size*.5},${size*.04} ${size*.62},${size*.28} ${size*.96},${size*.28} ${size*.72},${size*.46} ${size*.82},${size*.78} ${size*.5},${size*.62} ${size*.18},${size*.78} ${size*.28},${size*.46} ${size*.04},${size*.28} ${size*.38},${size*.28}`}
            fill="none" stroke={color1} strokeWidth="1.2" opacity={opacity} />
          {/* Inner diamond */}
          <polygon points={`${size*.5},${size*.2} ${size*.65},${size*.5} ${size*.5},${size*.8} ${size*.35},${size*.5}`}
            fill={color3} opacity={opacity * 0.4} stroke={color3} strokeWidth="0.6" />
          {/* Cross lines */}
          <line x1={size * .5} y1="0" x2={size * .5} y2={size} stroke={color2} strokeWidth="0.5" opacity={opacity * 0.5} />
          <line x1="0" y1={size * .5} x2={size} y2={size * .5} stroke={color2} strokeWidth="0.5" opacity={opacity * 0.5} />
          {/* Diagonal lines */}
          <line x1="0" y1="0" x2={size} y2={size} stroke={color1} strokeWidth="0.4" opacity={opacity * 0.4} />
          <line x1={size} y1="0" x2="0" y2={size} stroke={color1} strokeWidth="0.4" opacity={opacity * 0.4} />
          {/* Corner dots */}
          <circle cx="0"       cy="0"       r="3" fill={color2} opacity={opacity * 0.6} />
          <circle cx={size}    cy="0"       r="3" fill={color2} opacity={opacity * 0.6} />
          <circle cx="0"       cy={size}    r="3" fill={color2} opacity={opacity * 0.6} />
          <circle cx={size}    cy={size}    r="3" fill={color2} opacity={opacity * 0.6} />
          <circle cx={size*.5} cy={size*.5} r="4" fill={color1} opacity={opacity * 0.5} />
          {/* Border */}
          <rect x="0" y="0" width={size} height={size} fill="none" stroke={color1} strokeWidth="0.4" opacity={opacity * 0.3} />
        </pattern>
        {/* Fine grid overlay */}
        <pattern id="zellige-fine" x="0" y="0" width={size / 2} height={size / 2} patternUnits="userSpaceOnUse">
          <rect width={size / 2} height={size / 2} fill="none" stroke={color1} strokeWidth="0.3" opacity={opacity * 0.25} />
          <line x1="0" y1={size / 4} x2={size / 2} y2={size / 4} stroke={color3} strokeWidth="0.2" opacity={opacity * 0.2} />
          <line x1={size / 4} y1="0" x2={size / 4} y2={size / 2} stroke={color3} strokeWidth="0.2" opacity={opacity * 0.2} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#zellige-fine)" />
      <rect width="100%" height="100%" fill="url(#zellige-main)" />
    </svg>
  );
}

// ── Large decorative star ──────────────────────────────────────
function ZelligeStar({ size = 200, color = '#c0390a', opacity = 0.08, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ pointerEvents: 'none', ...style }}>
      <polygon points="100,8 124,56 188,56 136,90 158,148 100,116 42,148 64,90 12,56 76,56"
        fill="none" stroke={color} strokeWidth="2" opacity={opacity} />
      <polygon points="100,28 118,62 154,62 126,82 138,118 100,96 62,118 74,82 46,62 82,62"
        fill={color} opacity={opacity * 0.5} />
      <rect x="74" y="74" width="52" height="52" transform="rotate(45 100 100)"
        fill="none" stroke={color} strokeWidth="1.5" opacity={opacity * 0.7} />
      <circle cx="100" cy="100" r="12" fill="none" stroke={color} strokeWidth="1" opacity={opacity * 0.6} />
      <circle cx="100" cy="100" r="4" fill={color} opacity={opacity * 0.8} />
    </svg>
  );
}

// ── Zellige divider ────────────────────────────────────────────
function ZelligeDivider({ color = 'var(--terra)', light = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '0 auto', maxWidth: 300 }}>
      <div style={{ flex: 1, height: 1, background: light ? 'rgba(255,255,255,.2)' : 'var(--border)' }} />
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <div style={{ width: 6, height: 6, background: light ? 'rgba(255,255,255,.3)' : 'var(--border)', transform: 'rotate(45deg)' }} />
        <div style={{ width: 10, height: 10, background: color, transform: 'rotate(45deg)' }} />
        <div style={{ width: 6, height: 6, background: light ? 'rgba(255,255,255,.3)' : 'var(--border)', transform: 'rotate(45deg)' }} />
      </div>
      <div style={{ flex: 1, height: 1, background: light ? 'rgba(255,255,255,.2)' : 'var(--border)' }} />
    </div>
  );
}

const FEATURES = [
  { title: 'Cultural Map', desc: 'Interactive map of 60+ Moroccan cities — click any city to explore its traditions, dialect, food and history.', href: '/map', icon: '◎', color: 'var(--terra)' },
  { title: 'Darija Dictionary', desc: '12,000+ words in Moroccan Arabic with regional variations across all 7 dialects from Marrakesh to the Sahara.', href: '/dialect', icon: '◈', color: 'var(--teal)' },
  { title: 'City Guides', desc: 'In-depth cultural guides for every major Moroccan city — food, crafts, music, history and local dialect.', href: '/city/marrakesh', icon: '◉', color: 'var(--gold)' },
  { title: 'Tourism Mode', desc: '25 verified destinations with correct photos, insider tips and cultural context for every iconic location.', href: '/tourism', icon: '◆', color: 'var(--terra)' },
  { title: 'AI Assistant', desc: 'Chat in Moroccan Arabic. Get cultural explanations, dialect translation and historical storytelling.', href: '/ai', icon: '◫', color: 'var(--teal)' },
  { title: 'Community', desc: 'Share your cultural knowledge, stories and heritage. Help preserve Morocco\'s living traditions.', href: '/community', icon: '◬', color: 'var(--gold)' },
  { title: 'Cultural Quiz', desc: 'Test your knowledge of Morocco — 12 questions on dialect, history, food, music and geography.', href: '/quiz', icon: '◧', color: 'var(--terra)' },
  { title: 'About / Mission', desc: 'Our mission to preserve Moroccan cultural heritage for 36 million Darija speakers worldwide.', href: '/about', icon: '◩', color: 'var(--teal)' },
];

const CITIES_BELT = [
  { slug: 'marrakesh',   name: 'Marrakesh',   arabicName: 'مراكش',  color: '#c0390a', nickname: 'The Red City' },
  { slug: 'casablanca',  name: 'Casablanca',  arabicName: 'البيضاء', color: '#c47b0a', nickname: 'The White City' },
  { slug: 'fes',         name: 'Fès',         arabicName: 'فاس',    color: '#0a7a6a', nickname: 'The Cultural Capital' },
  { slug: 'tangier',     name: 'Tangier',     arabicName: 'طنجة',   color: '#1a6b9a', nickname: 'The Gateway to Africa' },
  { slug: 'chefchaouen', name: 'Chefchaouen', arabicName: 'شفشاون', color: '#1a4b9a', nickname: 'The Blue City' },
  { slug: 'essaouira',   name: 'Essaouira',   arabicName: 'الصويرة', color: '#0a7a6a', nickname: 'The Windy City' },
  { slug: 'agadir',      name: 'Agadir',      arabicName: 'أكادير', color: '#c47b0a', nickname: 'The Beach Capital' },
  { slug: 'ouarzazate',  name: 'Ouarzazate',  arabicName: 'ورزازات', color: '#8a3500', nickname: 'Hollywood of Africa' },
  { slug: 'ifrane',      name: 'Ifrane',      arabicName: 'إفران',  color: '#0a5050', nickname: 'Switzerland of Morocco' },
];

export default function HomePage() {
  const [wordOfDay, setWordOfDay] = useState(null);
  const [copied,    setCopied]    = useState('');

  useEffect(() => {
    getRandomWord().then(d => { if (d?.word) setWordOfDay(d); }).catch(() => {});
  }, []);

  const copyPhrase = (text) => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(text);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <Layout>
      <SEO />

      {/* ══════════════════════════════════════════════════════
          HERO — Full zellige background
      ══════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 'clamp(560px,90vh,820px)', display: 'flex', alignItems: 'center', background: 'linear-gradient(155deg,#1a0800 0%,#2a1000 35%,#0a2318 70%,#061408 100%)' }}>

        {/* Zellige pattern layer */}
        <ZelligeSVG opacity={0.22} color1="#c0390a" color2="#c47b0a" color3="#0a7a6a" size={100} />

        {/* Finer zellige overlay */}
        <ZelligeSVG opacity={0.1} color1="#c47b0a" color2="#0a7a6a" color3="#c0390a" size={50} />

        {/* Decorative large stars */}
        <ZelligeStar size={320} color="#c0390a" opacity={0.07} style={{ position: 'absolute', right: '-60px', top: '-60px' }} />
        <ZelligeStar size={240} color="#c47b0a" opacity={0.06} style={{ position: 'absolute', left: '-40px', bottom: '-40px' }} />
        <ZelligeStar size={180} color="#0a7a6a" opacity={0.05} style={{ position: 'absolute', left: '30%', top: '10%' }} />
        <ZelligeStar size={120} color="#c0390a" opacity={0.06} style={{ position: 'absolute', right: '20%', bottom: '15%' }} />

        {/* Radial glows */}
        <div style={{ position: 'absolute', width: 600, height: 600, background: '#c0390a', filter: 'blur(120px)', opacity: .14, right: '-5%', top: '-5%', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 500, height: 500, background: '#0a7a6a', filter: 'blur(120px)', opacity: .12, left: '-5%', bottom: '-5%', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, background: '#c47b0a', filter: 'blur(100px)', opacity: .1, left: '40%', top: '30%', borderRadius: '50%', pointerEvents: 'none' }} />

        {/* Content */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,60px)', position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'center', width: '100%' }}>

          {/* LEFT — Text */}
          <div>
            {/* Arabic badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(232,154,26,.14)', border: '1px solid rgba(232,154,26,.3)', borderRadius: 30, padding: '7px 18px', marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#e89a1a' }} />
              <span style={{ fontFamily: 'Amiri,serif', fontSize: 15, color: '#e89a1a', direction: 'rtl' }}>موسوعة المغرب الحية</span>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#e89a1a' }} />
            </div>

            {/* Main title */}
            <h1 style={{ ...S, fontSize: 'clamp(42px,7vw,76px)', lineHeight: 1.0, color: '#fff', marginBottom: 18 }}>
              Discover<br />
              <span style={{ color: 'var(--gold2)', position: 'relative' }}>Morocco</span><br />
              <span style={{ fontSize: 'clamp(28px,5vw,52px)', color: 'rgba(255,255,255,.65)', fontStyle: 'italic' }}>
                city by city
              </span>
            </h1>

            {/* Zellige divider */}
            <div style={{ marginBottom: 22 }}>
              <ZelligeDivider color="var(--terra2)" light />
            </div>

            <p style={{ fontSize: 'clamp(14px,2vw,17px)', lineHeight: 1.8, color: 'rgba(245,237,220,.62)', maxWidth: 480, marginBottom: 32, fontWeight: 300 }}>
              The national platform for exploring Moroccan cities, dialects, traditions and living heritage — for Moroccans, the diaspora, tourists and cultural institutions worldwide.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 44 }}>
              <Link href="/map" style={{ textDecoration: 'none' }}>
                <button style={{ padding: 'clamp(11px,1.5vw,14px) clamp(20px,3vw,28px)', borderRadius: 12, background: 'linear-gradient(135deg,var(--terra),var(--gold))', border: 'none', color: '#fff', fontSize: 'clamp(13px,1.5vw,15px)', fontWeight: 700, cursor: 'pointer', fontFamily: 'Outfit,sans-serif', transition: 'all .2s', boxShadow: '0 6px 28px rgba(192,57,10,.35)', display: 'flex', alignItems: 'center', gap: 8 }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(192,57,10,.45)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(192,57,10,.35)'; }}>
                  Explore the Map
                  <span>→</span>
                </button>
              </Link>
              <Link href="/dialect" style={{ textDecoration: 'none' }}>
                <button style={{ padding: 'clamp(11px,1.5vw,14px) clamp(20px,3vw,28px)', borderRadius: 12, background: 'rgba(255,255,255,.08)', border: '1.5px solid rgba(255,255,255,.25)', color: '#fff', fontSize: 'clamp(13px,1.5vw,15px)', fontWeight: 600, cursor: 'pointer', fontFamily: 'Outfit,sans-serif', transition: 'all .2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.16)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.45)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.25)'; }}>
                  Open Dictionary
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 'clamp(18px,4vw,36px)', flexWrap: 'wrap' }}>
              {[
                { value: '12K+', label: 'Darija Words', sub: '7 dialects' },
                { value: '10',   label: 'Cities',       sub: 'complete guides' },
                { value: '103',  label: 'Traditions',   sub: 'documented' },
                { value: '4',    label: 'Languages',    sub: 'AR · FR · EN · ES' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ ...S, fontSize: 'clamp(22px,3vw,30px)', color: 'var(--gold2)', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 11.5, color: 'rgba(245,237,220,.8)', fontWeight: 600, marginTop: 3 }}>{s.label}</div>
                  <div style={{ fontSize: 10, color: 'rgba(245,237,220,.38)', marginTop: 1 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

            {/* Word of the Day */}
            {wordOfDay && (
              <div style={{ background: 'rgba(245,237,220,.06)', border: '1px solid rgba(245,237,220,.12)', borderRadius: 16, padding: 20, position: 'relative', overflow: 'hidden' }}
                onClick={() => copyPhrase(wordOfDay.word)} style2={{ cursor: 'pointer' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,var(--terra),var(--gold),var(--teal))' }} />
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.16em', color: 'rgba(232,154,26,.7)', marginBottom: 10 }}>Word of the Day</div>
                <div style={{ ...S, fontSize: 'clamp(26px,4vw,34px)', color: 'var(--gold2)', marginBottom: 4, lineHeight: 1 }}>{wordOfDay.word}</div>
                {wordOfDay.phonetic && <div style={{ fontSize: 12, color: 'rgba(245,237,220,.4)', marginBottom: 8, fontStyle: 'italic' }}>{wordOfDay.phonetic}</div>}
                <div style={{ fontSize: 13.5, color: 'rgba(245,237,220,.65)', lineHeight: 1.6, marginBottom: 12 }}>
                  {(wordOfDay.definition || wordOfDay.meaning || '').slice(0, 90)}...
                </div>
                <Link href="/dialect" style={{ textDecoration: 'none' }}>
                  <button style={{ padding: '7px 16px', borderRadius: 9, background: 'rgba(192,57,10,.25)', border: '1px solid rgba(192,57,10,.45)', color: '#ff8c6a', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'Outfit,sans-serif', transition: 'all .2s' }}>
                    Explore in dictionary →
                  </button>
                </Link>
              </div>
            )}

            {/* Feature quick links */}
            {[
              { title: 'Interactive Cultural Map',    sub: 'Explore all Moroccan cities',       href: '/map',       color: 'rgba(192,57,10,.9)' },
              { title: 'Darija Dictionary',           sub: 'Search 12,000+ dialect words',      href: '/dialect',   color: 'rgba(10,122,106,.9)' },
              { title: 'Tourism Guide — 25 Places',  sub: 'Verified photos & insider tips',     href: '/tourism',   color: 'rgba(196,123,10,.9)' },
              { title: 'Cultural Quiz',               sub: 'Test your Morocco knowledge',        href: '/quiz',      color: 'rgba(192,57,10,.9)' },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', borderRadius: 13, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', cursor: 'pointer', transition: 'all .22s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.13)'; e.currentTarget.style.transform = 'translateX(5px)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.22)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)'; }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: '#fff' }}>{item.title}</div>
                    <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.4)', marginTop: 2 }}>{item.sub}</div>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,.3)', fontSize: 14, flexShrink: 0 }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ARABIC CALLIGRAPHY BAND
      ══════════════════════════════════════════════════════ */}
      <div style={{ background: 'linear-gradient(135deg,#1c1007,#0a2318)', padding: '20px 0', borderTop: '1px solid rgba(255,255,255,.06)', borderBottom: '1px solid rgba(255,255,255,.06)', position: 'relative', overflow: 'hidden' }}>
        <ZelligeSVG opacity={0.08} color1="#c47b0a" color2="#0a7a6a" color3="#c0390a" size={60} />
        <div style={{ display: 'flex', gap: 0, overflowX: 'auto', scrollbarWidth: 'none', whiteSpace: 'nowrap', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          {[
            { arabic: 'مراكش', french: 'Marrakesh' },
            { arabic: '·', french: '' },
            { arabic: 'فاس', french: 'Fès' },
            { arabic: '·', french: '' },
            { arabic: 'طنجة', french: 'Tangier' },
            { arabic: '·', french: '' },
            { arabic: 'الصويرة', french: 'Essaouira' },
            { arabic: '·', french: '' },
            { arabic: 'شفشاون', french: 'Chefchaouen' },
            { arabic: '·', french: '' },
            { arabic: 'أكادير', french: 'Agadir' },
            { arabic: '·', french: '' },
            { arabic: 'الدار البيضاء', french: 'Casablanca' },
            { arabic: '·', french: '' },
            { arabic: 'ورزازات', french: 'Ouarzazate' },
            { arabic: '·', french: '' },
            { arabic: 'عرق الشبي', french: 'Erg Chebbi' },
          ].map((item, i) => (
            <span key={i} style={{ padding: '0 clamp(8px,2vw,16px)', fontFamily: 'Amiri,serif', fontSize: item.arabic === '·' ? 16 : 18, color: item.arabic === '·' ? 'rgba(255,255,255,.2)' : 'rgba(255,255,255,.55)', direction: 'rtl' }}>
              {item.arabic}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          CITIES SECTION — Zellige card grid
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(48px,6vw,80px) 0', background: '#fdf8f2', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle zellige background */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <ZelligeSVG opacity={0.06} color1="#c0390a" color2="#c47b0a" color3="#0a7a6a" size={120} />
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px,4vw,48px)', position: 'relative', zIndex: 1 }}>
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px,5vw,52px)' }}>
            <div style={{ fontFamily: 'Amiri,serif', fontSize: 20, color: 'rgba(192,57,10,.45)', direction: 'rtl', marginBottom: 8 }}>استكشف المدن المغربية</div>
            <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--terra)', marginBottom: 12 }}>City Guides</span>
            <h2 style={{ ...S, fontSize: 'clamp(28px,4vw,44px)', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 12 }}>
              Morocco City by City
            </h2>
            <ZelligeDivider color="var(--terra)" />
            <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 500, margin: '16px auto 0', lineHeight: 1.75, fontWeight: 300 }}>
              Each Moroccan city has its own dialect, cuisine, crafts and identity. Discover them all.
            </p>
          </div>

          {/* City cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 'clamp(12px,2vw,18px)' }}>
            {CITIES_BELT.map((city, i) => (
              <Link key={city.slug} href={`/city/${city.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  borderRadius: 16, overflow: 'hidden', cursor: 'pointer',
                  background: '#fff', border: `1.5px solid ${city.color}22`,
                  transition: 'all .28s', position: 'relative',
                  animation: `fadeUp .4s ease ${i * 0.06}s both`,
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 48px ${city.color}22`; e.currentTarget.style.borderColor = `${city.color}55`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = `${city.color}22`; }}>

                  {/* Zellige colored header */}
                  <div style={{ height: 100, background: `linear-gradient(135deg,${city.color}18,${city.color}08)`, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ZelligeSVG opacity={0.25} color1={city.color} color2={city.color} color3={city.color} size={60} />
                    {/* Arabic name */}
                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                      <div style={{ fontFamily: 'Amiri,serif', fontSize: 28, color: city.color, direction: 'rtl', lineHeight: 1, opacity: 0.9 }}>{city.arabicName}</div>
                      <div style={{ width: 30, height: 2, background: city.color, opacity: 0.3, margin: '6px auto 0', borderRadius: 1 }} />
                    </div>
                  </div>

                  <div style={{ padding: '14px 16px' }}>
                    <div style={{ ...S, fontSize: 17, color: 'var(--ink)', marginBottom: 4 }}>{city.name}</div>
                    <div style={{ fontSize: 11, color: city.color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 6 }}>{city.nickname}</div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <span style={{ fontSize: 11.5, color: city.color, fontWeight: 600 }}>Explore →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DIALECT SHOWCASE — Dark zellige section
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(155deg,#1c1007,#0a2318)', padding: 'clamp(48px,6vw,80px) 0', position: 'relative', overflow: 'hidden' }}>
        <ZelligeSVG opacity={0.18} color1="#c0390a" color2="#c47b0a" color3="#0a7a6a" size={90} />
        <ZelligeStar size={400} color="#c0390a" opacity={0.04} style={{ position: 'absolute', right: '-80px', top: '-80px' }} />
        <ZelligeStar size={300} color="#0a7a6a" opacity={0.04} style={{ position: 'absolute', left: '-60px', bottom: '-60px' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px,4vw,48px)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: 'Amiri,serif', fontSize: 24, color: 'rgba(232,154,26,.45)', direction: 'rtl', marginBottom: 10 }}>قاموس الدارجة</div>
              <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--teal2)', marginBottom: 14 }}>Darija Dictionary</span>
              <h2 style={{ ...S, fontSize: 'clamp(26px,4vw,42px)', color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>
                One Word.<br />Seven Dialects.
              </h2>
              <ZelligeDivider color="var(--teal2)" light />
              <p style={{ fontSize: 15, color: 'rgba(245,237,220,.55)', lineHeight: 1.8, margin: '16px 0 28px', fontWeight: 300 }}>
                The same Moroccan word sounds different in Marrakesh, Fès, Tangier, Essaouira and the Sahara. MoroccoPedia maps every regional variation.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/dialect"><button className="btn-teal" style={{ padding: '12px 26px', fontSize: 14 }}>Open Dictionary</button></Link>
                <Link href="/quiz"><button style={{ padding: '12px 22px', borderRadius: 10, background: 'transparent', border: '1px solid rgba(255,255,255,.2)', color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'Outfit,sans-serif', transition: 'all .2s' }}>Take the Quiz</button></Link>
              </div>
            </div>

            {/* Dialect cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { word: 'Zwina', marrakesh: 'زوينة', tanger: 'مليحة', fes: 'زوينة', souss: 'إيفيلكي', meaning: 'Beautiful' },
                { word: 'Bezzaf', marrakesh: 'بزاف', tanger: 'واجد', fes: 'بزاف', souss: 'أطاس', meaning: 'A lot / very' },
                { word: 'Labas', marrakesh: 'لاباس', tanger: 'لاباس', fes: 'لاباس', souss: 'مامنون', meaning: 'Fine / okay' },
              ].map((item, i) => (
                <Link key={item.word} href={`/dialect?q=${item.word}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: 'rgba(245,237,220,.06)', border: '1px solid rgba(245,237,220,.1)', borderRadius: 13, padding: '14px 18px', transition: 'all .22s', cursor: 'pointer' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,237,220,.12)'; e.currentTarget.style.borderColor = 'rgba(245,237,220,.22)'; e.currentTarget.style.transform = 'translateX(5px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,237,220,.06)'; e.currentTarget.style.borderColor = 'rgba(245,237,220,.1)'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      <div style={{ ...S, fontSize: 22, color: 'var(--gold2)' }}>{item.word}</div>
                      <div style={{ fontSize: 12, color: 'rgba(245,237,220,.45)', fontStyle: 'italic' }}>{item.meaning}</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
                      {[
                        { city: 'Marrakesh', word: item.marrakesh },
                        { city: 'Tanger',    word: item.tanger },
                        { city: 'Fès',       word: item.fes },
                        { city: 'Souss',     word: item.souss },
                      ].map(r => (
                        <div key={r.city} style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '6px 8px', textAlign: 'center' }}>
                          <div style={{ fontFamily: 'Amiri,serif', fontSize: 15, color: 'rgba(245,237,220,.85)', direction: 'rtl', marginBottom: 2 }}>{r.word}</div>
                          <div style={{ fontSize: 9, color: 'rgba(245,237,220,.3)', textTransform: 'uppercase', letterSpacing: '.07em' }}>{r.city}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
              <Link href="/dialect" style={{ textDecoration: 'none' }}>
                <div style={{ textAlign: 'center', padding: '12px', fontSize: 13, color: 'var(--teal2)', fontWeight: 600, cursor: 'pointer', fontFamily: 'Outfit,sans-serif' }}>
                  Explore all 12,000+ words →
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FEATURES GRID — Light zellige background
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(48px,6vw,80px) 0', background: '#fdf8f2', position: 'relative', overflow: 'hidden' }}>
        <ZelligeSVG opacity={0.05} color1="#c0390a" color2="#c47b0a" color3="#0a7a6a" size={140} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px,4vw,48px)', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(28px,4vw,48px)' }}>
            <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--terra)', marginBottom: 12 }}>Platform Features</span>
            <h2 style={{ ...S, fontSize: 'clamp(26px,4vw,40px)', color: 'var(--ink)', marginBottom: 12, lineHeight: 1.2 }}>
              Eight Ways to Discover Morocco
            </h2>
            <ZelligeDivider />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 'clamp(10px,2vw,16px)' }}>
            {FEATURES.map((f, i) => (
              <Link key={f.title} href={f.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: 14, padding: 'clamp(16px,2vw,22px)', border: '1px solid var(--border)', cursor: 'pointer', transition: 'all .26s', height: '100%', position: 'relative', overflow: 'hidden', animation: `fadeUp .4s ease ${i * 0.05}s both` }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = f.color; e.currentTarget.style.boxShadow = `0 12px 40px ${f.color}18`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${f.color}15`, border: `1px solid ${f.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: f.color, marginBottom: 14 }}>{f.icon}</div>
                  <h3 style={{ ...S, fontSize: 17, color: 'var(--ink)', marginBottom: 8, lineHeight: 1.2 }}>{f.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>{f.desc}</p>
                  <div style={{ position: 'absolute', bottom: 14, right: 14, fontSize: 11, color: f.color, fontWeight: 600, fontFamily: 'Outfit,sans-serif' }}>→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DARIJA PHRASES — Interactive
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(155deg,#0a1c10,#1c0a00)', padding: 'clamp(40px,5vw,64px) 0', position: 'relative', overflow: 'hidden' }}>
        <ZelligeSVG opacity={0.15} color1="#0a7a6a" color2="#c47b0a" color3="#c0390a" size={80} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px,4vw,48px)', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h2 style={{ ...S, fontSize: 'clamp(24px,3vw,36px)', color: '#fff', marginBottom: 8 }}>Essential Darija Phrases</h2>
            <p style={{ fontSize: 14, color: 'rgba(245,237,220,.45)' }}>Tap any card to copy · Use these in Morocco today</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 12 }}>
            {[
              { moroccan: 'Labas alik?', phonetic: 'La-bas a-lik?', meaning: 'How are you?', category: 'Greeting' },
              { moroccan: 'Shukran bezzaf', phonetic: 'Shoo-kran be-zzaf', meaning: 'Thank you very much', category: 'Politeness' },
              { moroccan: 'Zwina bezzaf!', phonetic: 'Zwi-na be-zzaf', meaning: 'Very beautiful!', category: 'Compliment' },
              { moroccan: 'Wach andek afia?', phonetic: 'Wach an-dek a-fia', meaning: 'Do you have WiFi?', category: 'Tourism' },
              { moroccan: 'Bshal had shi?', phonetic: 'B-shal had shi?', meaning: 'How much is this?', category: 'Shopping' },
              { moroccan: 'Mrhba bik!', phonetic: 'Mar-hba bik', meaning: 'Welcome!', category: 'Greeting' },
            ].map(p => (
              <div key={p.moroccan} onClick={() => copyPhrase(p.moroccan)}
                style={{ borderRadius: 13, padding: '15px 16px', background: 'rgba(245,237,220,.06)', border: `1px solid ${copied === p.moroccan ? 'var(--teal2)' : 'rgba(245,237,220,.1)'}`, cursor: 'pointer', transition: 'all .22s', position: 'relative' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,237,220,.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,237,220,.06)'; }}>
                <div style={{ fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--teal2)', marginBottom: 8 }}>{p.category}</div>
                <div style={{ ...S, fontSize: 20, color: 'var(--gold2)', marginBottom: 3, lineHeight: 1 }}>{p.moroccan}</div>
                <div style={{ fontSize: 11, color: 'rgba(245,237,220,.35)', marginBottom: 8, fontStyle: 'italic' }}>{p.phonetic}</div>
                <div style={{ fontSize: 13, color: 'rgba(245,237,220,.65)' }}>{p.meaning}</div>
                <div style={{ position: 'absolute', top: 10, right: 12, fontSize: 10, color: copied === p.moroccan ? 'var(--teal2)' : 'rgba(245,237,220,.2)' }}>
                  {copied === p.moroccan ? '✓ Copied' : 'Tap'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          NEWSLETTER
      ══════════════════════════════════════════════════════ */}
      <Newsletter variant="banner" />

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </Layout>
  );
}
