import { useState, useEffect } from 'react';
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


const REGIONS_LIST = [
  { id:'Marrakesh',       label:'Marrakesh',    color:'#c0390a', flag:<Ic name="building"/> },
  { id:'Casablanca',      label:'Casablanca',   color:'#c47b0a', flag:<Ic name="building"/> },
  { id:'Fes',             label:'Fès',          color:'#0a7a6a', flag:<Ic name="archive"/> },
  { id:'North (Tangier)', label:'Tanger',       color:'#1a6b9a', flag:<Ic name="compass"/> },
  { id:'Souss (Agadir)',  label:'Agadir',       color:'#8a4500', flag:<Ic name="compass"/> },
  { id:'Oujda (East)',    label:'Oujda',        color:'#6a3090', flag:<Ic name="compass"/> },
  { id:'Sahara',          label:'Sahara',       color:'#c47b0a', flag:<Ic name="compass"/> },
];

function Zellige({ opacity=.08, c1='#c0390a', id='z' }) {
  return (
    <svg style={{ position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none' }}>
      <defs>
        <pattern id={id} x="0" y="0" width={80} height={80} patternUnits="userSpaceOnUse">
          <polygon points="40,4 50.4,21.6 76,21.6 58.4,36 65.2,60.8 40,48 14.8,60.8 21.6,36 4,21.6 29.6,21.6"
            fill="none" stroke={c1} strokeWidth="1" opacity={opacity}/>
          <circle cx="40" cy="40" r="3" fill={c1} opacity={opacity*.5}/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  );
}

function getVariant(word, regionId) {
  const variants = word.regionalVariants || [];
  return variants.find(v => v.region === regionId || v.region.includes(regionId.split(' ')[0]));
}

function compareRegions(r1id, r2id, limit = 20) {
  const results = [];
  for (const word of DIALECT_DATA) {
    const v1 = getVariant(word, r1id);
    const v2 = getVariant(word, r2id);
    if (v1 && v2) {
      results.push({
        word: word.word,
        arabic: word.arabic,
        definition: word.definition,
        v1: v1,
        v2: v2,
        different: v1.word.toLowerCase() !== v2.word.toLowerCase(),
      });
    }
    if (results.length >= limit) break;
  }
  return results;
}

export default function ComparePage() {
  const [r1, setR1] = useState('Marrakesh');
  const [r2, setR2] = useState('North (Tangier)');
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all' | 'different' | 'same'

  const r1data = REGIONS_LIST.find(r => r.id === r1);
  const r2data = REGIONS_LIST.find(r => r.id === r2);

  useEffect(() => {
    setResults(compareRegions(r1, r2, 40));
  }, [r1, r2]);

  const filtered = results.filter(r => {
    if (filter === 'different') return r.different;
    if (filter === 'same') return !r.different;
    return true;
  });

  const diffCount  = results.filter(r => r.different).length;
  const sameCount  = results.filter(r => !r.different).length;
  const diffPct    = results.length > 0 ? Math.round((diffCount / results.length) * 100) : 0;

  return (
    <Layout>
      <SEO
        title={`Comparer ${r1data?.label} vs ${r2data?.label} — MoroccoPedia`}
        description={`Comparez les dialectes Darija de ${r1data?.label} et ${r2data?.label} — découvrez les différences et similarités mot par mot.`}
      />

      {/* Hero */}
      <section style={{ background:'linear-gradient(155deg,#1a0800,#0a2318)', padding:'clamp(48px,6vw,72px) 0', position:'relative', overflow:'hidden', textAlign:'center' }}>
        <Zellige opacity={0.12} c1="#c0390a" id="ch"/>
        <div style={{ position:'relative', zIndex:2, maxWidth:640, margin:'0 auto', padding:'0 24px' }}>
          <div style={{ fontFamily:'Amiri,serif', fontSize:16, color:'var(--gold2)', marginBottom:12 }}>مقارنة اللهجات</div>
          <h1 style={{ ...S, fontSize:'clamp(28px,5vw,50px)', color:'#fff', lineHeight:1.05, marginBottom:14 }}>
            Comparer deux<br/><span style={{ color:'var(--gold2)' }}>dialectes</span>
          </h1>
          <p style={{ fontSize:15, color:'rgba(245,237,220,.5)', lineHeight:1.8 }}>
            Voir comment les mêmes concepts s'expriment différemment d'une région à l'autre.
          </p>
        </div>
      </section>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'clamp(24px,4vw,40px) clamp(16px,4vw,48px)' }}>

        {/* Region selectors */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr', gap:16, alignItems:'center', marginBottom:28 }}>
          {/* R1 */}
          <div style={{ background:'#fff', borderRadius:16, padding:20, border:`2px solid ${r1data?.color || 'var(--border)'}`, boxShadow:`0 4px 24px ${r1data?.color || '#000'}18` }}>
            <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:'var(--muted)', marginBottom:10 }}>Dialecte 1</div>
            <select value={r1} onChange={e => setR1(e.target.value)}
              style={{ width:'100%', padding:'10px 12px', borderRadius:10, border:`1.5px solid ${r1data?.color || 'var(--border)'}`, background:'white', fontSize:15, fontFamily:'Outfit,sans-serif', fontWeight:700, color:r1data?.color, outline:'none', cursor:'pointer' }}>
              {REGIONS_LIST.map(r => <option key={r.id} value={r.id}>{r.flag} {r.label}</option>)}
            </select>
          </div>

          {/* VS */}
          <div style={{ textAlign:'center' }}>
            <div style={{ ...S, fontSize:28, color:'var(--muted)', marginBottom:4 }}>VS</div>
            <button onClick={() => { setR1(r2); setR2(r1); }}
              style={{ fontSize:11, color:'var(--terra)', fontWeight:700, background:'none', border:'1px solid var(--terra)', borderRadius:20, padding:'4px 12px', cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>
              ⇄ Inverser
            </button>
          </div>

          {/* R2 */}
          <div style={{ background:'#fff', borderRadius:16, padding:20, border:`2px solid ${r2data?.color || 'var(--border)'}`, boxShadow:`0 4px 24px ${r2data?.color || '#000'}18` }}>
            <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:'var(--muted)', marginBottom:10 }}>Dialecte 2</div>
            <select value={r2} onChange={e => setR2(e.target.value)}
              style={{ width:'100%', padding:'10px 12px', borderRadius:10, border:`1.5px solid ${r2data?.color || 'var(--border)'}`, background:'white', fontSize:15, fontFamily:'Outfit,sans-serif', fontWeight:700, color:r2data?.color, outline:'none', cursor:'pointer' }}>
              {REGIONS_LIST.map(r => <option key={r.id} value={r.id}>{r.flag} {r.label}</option>)}
            </select>
          </div>
        </div>

        {/* Stats bar */}
        {results.length > 0 && (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:24 }}>
            {[
              { v: results.length, l: 'Mots comparés', c: 'var(--ink)' },
              { v: diffCount + ' (' + diffPct + '%)', l: 'Différents', c: 'var(--terra)' },
              { v: sameCount, l: 'Identiques', c: 'var(--teal)' },
            ].map(s => (
              <div key={s.l} style={{ background:'#fff', borderRadius:14, padding:'16px 20px', border:'1px solid var(--border)', textAlign:'center' }}>
                <div style={{ ...S, fontSize:24, color:s.c, lineHeight:1, marginBottom:4 }}>{s.v}</div>
                <div style={{ fontSize:12, color:'var(--muted)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        )}

        {/* Filter tabs + results */}
        <div style={{ display:'flex', gap:8, marginBottom:18, flexWrap:'wrap' }}>
          {[
            { id:'all',       label:`Tous (${results.length})` },
            { id:'different', label:`Différents (${diffCount})` },
            { id:'same',      label:`Identiques (${sameCount})` },
          ].map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)}
              className={`tag-chip${filter===f.id?' active':''}`}
              style={{ fontFamily:'Outfit,sans-serif', fontSize:12 }}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Results table */}
        {filtered.length > 0 ? (
          <div style={{ background:'#fff', borderRadius:16, overflow:'hidden', border:'1px solid var(--border)' }}>
            {/* Header */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:0 }}>
              <div style={{ padding:'12px 16px', background:'var(--bg2)', fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', color:'var(--muted)', borderBottom:'2px solid var(--border)' }}>
                Concept
              </div>
              <div style={{ padding:'12px 16px', background:`${r1data?.color}15`, fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', color:r1data?.color, borderBottom:`2px solid ${r1data?.color}`, textAlign:'center' }}>
                {r1data?.flag} {r1data?.label}
              </div>
              <div style={{ padding:'12px 16px', background:`${r2data?.color}15`, fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', color:r2data?.color, borderBottom:`2px solid ${r2data?.color}`, textAlign:'center' }}>
                {r2data?.flag} {r2data?.label}
              </div>
            </div>

            {filtered.map((row, i) => (
              <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:0, borderBottom:'1px solid var(--border)', background: row.different ? 'rgba(192,57,10,.02)' : 'rgba(10,122,106,.02)' }}>
                {/* Concept */}
                <div style={{ padding:'12px 16px', borderRight:'1px solid var(--border)' }}>
                  <div style={{ fontSize:13.5, fontWeight:600, color:'var(--ink)', marginBottom:3 }}>{row.word}</div>
                  {row.arabic && <div style={{ fontFamily:'Amiri,serif', fontSize:13, color:'var(--muted)', direction:'rtl', marginBottom:2 }}>{row.arabic}</div>}
                  <div style={{ fontSize:11.5, color:'var(--muted)', lineHeight:1.45 }}>{row.definition?.slice(0,60)}...</div>
                  {row.different && (
                    <span style={{ display:'inline-block', marginTop:5, padding:'2px 7px', borderRadius:10, background:'var(--terra3)', color:'var(--terra)', fontSize:9.5, fontWeight:700 }}>DIFFÉRENT</span>
                  )}
                </div>
                {/* R1 variant */}
                <div style={{ padding:'12px 16px', borderRight:'1px solid var(--border)', textAlign:'center' }}>
                  <div style={{ ...S, fontSize:20, color:r1data?.color, marginBottom:2 }}>{row.v1.word}</div>
                  {row.v1.phonetic && <div style={{ fontSize:11, color:'var(--muted)', fontStyle:'italic', marginBottom:3 }}>{row.v1.phonetic}</div>}
                  <div style={{ fontSize:12, color:'var(--muted)' }}>{row.v1.meaning}</div>
                </div>
                {/* R2 variant */}
                <div style={{ padding:'12px 16px', textAlign:'center' }}>
                  <div style={{ ...S, fontSize:20, color:r2data?.color, marginBottom:2 }}>{row.v2.word}</div>
                  {row.v2.phonetic && <div style={{ fontSize:11, color:'var(--muted)', fontStyle:'italic', marginBottom:3 }}>{row.v2.phonetic}</div>}
                  <div style={{ fontSize:12, color:'var(--muted)' }}>{row.v2.meaning}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign:'center', padding:'60px 20px', background:'#fff', borderRadius:16, border:'1px solid var(--border)' }}>
            <div style={{ fontSize:36, marginBottom:12 }}>— </div>
            <div style={{ ...S, fontSize:20, color:'var(--ink)', marginBottom:8 }}>Aucun résultat</div>
            <div style={{ fontSize:14, color:'var(--muted)' }}>
              Pas de mots communs documentés entre ces deux régions pour l'instant.
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop:32, background:'linear-gradient(135deg,#1c1007,#0a2318)', borderRadius:18, padding:'clamp(24px,4vw,40px)', textAlign:'center', position:'relative', overflow:'hidden' }}>
          <Zellige opacity={0.1} c1="#c47b0a" id="cta-z"/>
          <div style={{ position:'relative', zIndex:1 }}>
            <h3 style={{ ...S, fontSize:24, color:'#fff', marginBottom:10 }}>Explorer le dictionnaire complet</h3>
            <p style={{ fontSize:14.5, color:'rgba(245,237,220,.5)', marginBottom:22, maxWidth:420, margin:'0 auto 22px' }}>
              355+ mots avec toutes les variantes régionales — recherche instantanée.
            </p>
            <a href="/dialect" style={{ textDecoration:'none' }}><button className="btn-primary">Dictionnaire Darija →</button></a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
