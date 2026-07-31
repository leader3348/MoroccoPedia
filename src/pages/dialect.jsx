import Head from 'next/head';
import { useState, useEffect, useCallback, useRef } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { translateText, compareRegions as compareAPI } from '../hooks/useApi';

// ─── Import local database directly — no API needed for search ──
// This fixes the "No results found" bug completely
import DIALECT_DATA from '../data/dialectData';

const S = { fontFamily: 'Playfair Display, Georgia, serif' };

const LANGS = [
  { code: 'ar', label: 'العربية',  flag: '🇲🇦' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English',  flag: '🇬🇧' },
  { code: 'es', label: 'Español',  flag: '🇪🇸' },
];

const ALPHABET = 'ABCDFGHJKLMNQRSTWYZ3'.split('');

const POPULAR = ['labas', 'zwina', 'bezzaf', 'atay', 'tagine', 'mrhba', 'shukran', 'hammam', 'safi', 'wakha'];

const THEMES = ['greeting', 'food', 'number', 'family', 'daily-use', 'market', 'verb', 'adjective', 'religion', 'music'];

// ─── LOCAL SEARCH ENGINE ────────────────────────────────────────
function localSearch(query, limit = 20) {
  if (!query || query.trim().length === 0) return [];
  const q = query.toLowerCase().trim();

  const scored = DIALECT_DATA.map(word => {
    let score = 0;
    const wl = (word.word || '').toLowerCase();
    const ar = word.arabic || '';
    const def = (word.definition || '').toLowerCase();
    const ph = (word.phonetic || '').toLowerCase();

    // Exact match
    if (wl === q) score += 200;
    else if (wl.startsWith(q)) score += 120;
    else if (wl.includes(q)) score += 80;

    // Arabic match
    if (ar === q) score += 180;
    else if (ar.includes(q)) score += 90;

    // Phonetic
    if (ph.includes(q)) score += 60;

    // Definition
    if (def.includes(q)) score += 40;

    // Examples
    if ((word.examples || []).some(e => e.toLowerCase().includes(q))) score += 30;

    // Themes
    if ((word.themes || []).some(t => t.toLowerCase().includes(q))) score += 35;

    // Regional variants
    (word.regionalVariants || []).forEach(rv => {
      const rvw = (rv.word || '').toLowerCase();
      if (rvw === q) score += 120;
      else if (rvw.includes(q)) score += 60;
      if ((rv.meaning || '').toLowerCase().includes(q)) score += 20;
    });

    // Translations
    const trans = word.translations || {};
    Object.values(trans).forEach(t => {
      if (typeof t === 'string' && t.toLowerCase().includes(q)) score += 25;
    });

    return { ...word, _score: score };
  })
    .filter(w => w._score > 0)
    .sort((a, b) => b._score - a._score)
    .slice(0, limit)
    .map(({ _score, ...w }) => w);

  return scored;
}

function getWordOfDay() {
  const idx = Math.floor(Date.now() / 86400000) % DIALECT_DATA.length;
  return DIALECT_DATA[idx];
}

function getRandomWord() {
  return DIALECT_DATA[Math.floor(Math.random() * DIALECT_DATA.length)];
}

function browseByLetter(letter) {
  const l = letter.toLowerCase();
  return DIALECT_DATA.filter(w => w.word.toLowerCase().startsWith(l)).slice(0, 20);
}

function getByTheme(theme) {
  return DIALECT_DATA.filter(w => (w.themes || []).includes(theme)).slice(0, 15);
}

// ─── ZELLIGE PATTERN ────────────────────────────────────────────
function Zellige({ opacity = 0.15, color1 = '#c0390a', color2 = '#c47b0a', color3 = '#0a7a6a', size = 80, id = 'zp' }) {
  return (
    <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none' }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
          <polygon
            points={`${size*.5},${size*.05} ${size*.63},${size*.27} ${size*.95},${size*.27} ${size*.73},${size*.45} ${size*.82},${size*.76} ${size*.5},${size*.6} ${size*.18},${size*.76} ${size*.27},${size*.45} ${size*.05},${size*.27} ${size*.37},${size*.27}`}
            fill="none" stroke={color1} strokeWidth="1.2" opacity={opacity}
          />
          <polygon
            points={`${size*.5},${size*.22} ${size*.64},${size*.5} ${size*.5},${size*.78} ${size*.36},${size*.5}`}
            fill={color3} opacity={opacity * 0.3} stroke={color3} strokeWidth="0.6"
          />
          <line x1={size*.5} y1="0" x2={size*.5} y2={size} stroke={color2} strokeWidth="0.4" opacity={opacity*.45}/>
          <line x1="0" y1={size*.5} x2={size} y2={size*.5} stroke={color2} strokeWidth="0.4" opacity={opacity*.45}/>
          <circle cx={size*.5} cy={size*.5} r="3.5" fill={color1} opacity={opacity*.55}/>
          <circle cx="0" cy="0" r="2.5" fill={color2} opacity={opacity*.5}/>
          <circle cx={size} cy="0" r="2.5" fill={color2} opacity={opacity*.5}/>
          <circle cx="0" cy={size} r="2.5" fill={color2} opacity={opacity*.5}/>
          <circle cx={size} cy={size} r="2.5" fill={color2} opacity={opacity*.5}/>
          <rect x="0" y="0" width={size} height={size} fill="none" stroke={color1} strokeWidth="0.3" opacity={opacity*.2}/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  );
}

function ZelligeStar({ size = 160, color = '#c0390a', opacity = 0.07, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ pointerEvents:'none', ...style }}>
      <polygon points="100,8 124,56 188,56 136,90 158,148 100,116 42,148 64,90 12,56 76,56"
        fill="none" stroke={color} strokeWidth="2" opacity={opacity}/>
      <polygon points="100,28 118,62 154,62 126,82 138,118 100,96 62,118 74,82 46,62 82,62"
        fill={color} opacity={opacity*.5}/>
      <rect x="74" y="74" width="52" height="52" transform="rotate(45 100 100)"
        fill="none" stroke={color} strokeWidth="1.5" opacity={opacity*.65}/>
      <circle cx="100" cy="100" r="4" fill={color} opacity={opacity*.85}/>
    </svg>
  );
}

// ─── REGION FLAG COLORS ─────────────────────────────────────────
const REGION_COLORS = {
  'Marrakesh': '#c0390a', 'Casablanca': '#c47b0a', 'Fes': '#0a7a6a',
  'Tangier': '#1a6b9a', 'Souss': '#8a4500', 'Sahara': '#c47b0a',
  'Nationwide': '#7a6248', 'North': '#1a4b9a', 'Rif': '#1a4b9a',
  'Atlas': '#0a5050', 'South': '#8a4500',
};

function getRegionColor(region) {
  const key = Object.keys(REGION_COLORS).find(k => region.toLowerCase().includes(k.toLowerCase()));
  return key ? REGION_COLORS[key] : '#7a6248';
}

// ─── WORD CARD ──────────────────────────────────────────────────
function WordCard({ entry, isMain = false, onTagClick }) {
  const [expanded, setExpanded] = useState(isMain);
  const [copied, setCopied] = useState(false);

  if (!entry) return null;

  const copyWord = () => {
    navigator.clipboard?.writeText(entry.word).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div style={{
      background: '#fff', borderRadius: 16,
      border: `1.5px solid ${isMain ? 'var(--terra)' : 'var(--border)'}`,
      overflow: 'hidden', transition: 'all .25s',
      marginBottom: 14,
      boxShadow: isMain ? '0 4px 24px rgba(192,57,10,.1)' : 'none',
    }}>
      {/* Top accent bar */}
      {isMain && <div style={{ height: 3, background: 'linear-gradient(90deg,var(--terra),var(--gold),var(--teal))' }}/>}

      <div style={{ padding: 'clamp(16px,2vw,22px)' }}>
        {/* Header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom: 14, gap: 12, flexWrap:'wrap' }}>
          <div>
            <div style={{ display:'flex', alignItems:'baseline', gap: 12, flexWrap:'wrap' }}>
              <span style={{ ...S, fontSize: isMain ? 38 : 28, color:'var(--terra)', lineHeight:1, cursor:'pointer' }}
                onClick={copyWord} title="Click to copy">
                {entry.word}
              </span>
              {copied && <span style={{ fontSize:11, color:'var(--teal)', fontWeight:700 }}>✓ Copied!</span>}
            </div>
            <div style={{ fontSize:13, color:'var(--muted)', marginTop:4, fontStyle:'italic', display:'flex', gap:10, flexWrap:'wrap' }}>
              {entry.phonetic && <span>{entry.phonetic}</span>}
              {entry.arabic && <span style={{ fontFamily:'Amiri,serif', fontSize:16, fontStyle:'normal', direction:'rtl' }}>{entry.arabic}</span>}
            </div>
          </div>
          <div style={{ display:'flex', gap:8, alignItems:'center', flexShrink:0 }}>
            {entry.partOfSpeech && (
              <span style={{ padding:'3px 10px', borderRadius:20, background:'var(--terra3)', color:'#8a2500', fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'.06em' }}>
                {entry.partOfSpeech}
              </span>
            )}
            {entry.origin && (
              <span style={{ padding:'3px 10px', borderRadius:20, background:'var(--teal3)', color:'#065048', fontSize:10, fontWeight:600 }}>
                {entry.origin}
              </span>
            )}
          </div>
        </div>

        {/* Definition */}
        <p style={{ fontSize:14.5, lineHeight:1.75, color:'var(--ink2)', marginBottom:14 }}>{entry.definition}</p>

        {/* Translations */}
        {entry.translations && (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(120px,1fr))', gap:8, marginBottom:14 }}>
            {Object.entries(entry.translations).map(([lang, val]) => (
              <div key={lang} style={{ background:'var(--bg2)', borderRadius:9, padding:'8px 11px' }}>
                <div style={{ fontSize:9, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:'var(--muted)', marginBottom:3 }}>{lang}</div>
                <div style={{ fontSize:13, fontWeight:600, color:'var(--ink)', lineHeight:1.3 }}>{val}</div>
              </div>
            ))}
          </div>
        )}

        {/* Examples */}
        {entry.examples?.length > 0 && (
          <div style={{ background:'linear-gradient(135deg,rgba(192,57,10,.06),rgba(196,123,10,.04))', borderRadius:10, padding:'12px 14px', marginBottom:14, borderLeft:'3px solid var(--terra)' }}>
            <div style={{ fontSize:10, fontWeight:700, color:'var(--terra)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:8 }}>Usage examples</div>
            {entry.examples.map((ex, i) => (
              <div key={i} style={{ fontSize:13.5, color:'var(--ink2)', marginBottom:i < entry.examples.length-1 ? 5 : 0, lineHeight:1.55 }}>
                <span style={{ color:'var(--terra)', marginRight:6, fontWeight:700 }}>—</span>{ex}
              </div>
            ))}
          </div>
        )}

        {/* Regional variants — always show */}
        {entry.regionalVariants?.length > 0 && (
          <div>
            <button onClick={() => setExpanded(!expanded)}
              style={{ display:'flex', alignItems:'center', gap:8, fontSize:11.5, fontWeight:700, color:'var(--teal)', textTransform:'uppercase', letterSpacing:'.08em', background:'none', border:'none', cursor:'pointer', fontFamily:'Outfit,sans-serif', padding:0, marginBottom: expanded ? 12 : 0 }}>
              <span style={{ display:'flex', width:18, height:18, borderRadius:'50%', background:'var(--teal3)', alignItems:'center', justifyContent:'center', fontSize:9, fontWeight:700, color:'var(--teal)', transition:'transform .2s', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
              {entry.regionalVariants.length} regional variations
              {!expanded && <span style={{ color:'var(--muted)', fontWeight:400, textTransform:'none', letterSpacing:0 }}>— click to expand</span>}
            </button>

            {expanded && (
              <div style={{ borderRadius:12, overflow:'hidden', border:'1px solid var(--border)' }}>
                {entry.regionalVariants.map((v, i) => {
                  const rc = getRegionColor(v.region);
                  return (
                    <div key={i} style={{
                      display:'flex', alignItems:'flex-start', gap:14, padding:'12px 14px',
                      background: i % 2 === 0 ? '#fff' : 'var(--bg2)',
                      borderBottom: i < entry.regionalVariants.length-1 ? '1px solid var(--border)' : 'none',
                    }}>
                      <div style={{ minWidth:120, flexShrink:0 }}>
                        <div style={{ fontSize:11.5, fontWeight:700, color:rc, textTransform:'uppercase', letterSpacing:'.05em' }}>{v.region}</div>
                        {v.dialect && <div style={{ fontSize:10, color:'var(--muted)', marginTop:2 }}>{v.dialect}</div>}
                      </div>
                      <div style={{ flex:1 }}>
                        <div style={{ ...S, fontSize:17, color:'var(--ink)', marginBottom:2 }}>{v.word}</div>
                        {v.phonetic && <div style={{ fontSize:11, color:'var(--muted)', fontStyle:'italic', marginBottom:3 }}>{v.phonetic}</div>}
                        <div style={{ fontSize:12.5, color:'var(--ink2)', lineHeight:1.5 }}>{v.meaning}</div>
                        {v.notes && <div style={{ fontSize:11, color:'var(--teal)', marginTop:3, fontStyle:'italic' }}>{v.notes}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Themes */}
        {entry.themes?.length > 0 && (
          <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginTop:12 }}>
            {entry.themes.slice(0, 5).map(theme => (
              <button key={theme} onClick={() => onTagClick && onTagClick(theme)}
                style={{ padding:'3px 10px', borderRadius:20, background:'var(--teal3)', color:'#065048', fontSize:10.5, fontWeight:600, cursor:'pointer', border:'none', fontFamily:'Outfit,sans-serif', transition:'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--teal3)'; e.currentTarget.style.color = '#065048'; }}>
                {theme}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── SEARCH RESULTS LIST ────────────────────────────────────────
function SearchResultItem({ entry, onSelect }) {
  return (
    <div onClick={() => onSelect(entry)}
      style={{ display:'flex', alignItems:'center', gap:14, padding:'11px 16px', cursor:'pointer', borderBottom:'1px solid var(--border)', transition:'background .15s' }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg2)'}
      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
      <div style={{ flex:1 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <span style={{ ...S, fontSize:18, color:'var(--terra)' }}>{entry.word}</span>
          {entry.arabic && <span style={{ fontFamily:'Amiri,serif', fontSize:15, color:'var(--muted)', direction:'rtl' }}>{entry.arabic}</span>}
        </div>
        <div style={{ fontSize:12, color:'var(--muted)', marginTop:2, lineHeight:1.4 }}>
          {entry.definition.slice(0, 75)}{entry.definition.length > 75 ? '...' : ''}
        </div>
      </div>
      <div style={{ display:'flex', gap:6, flexShrink:0 }}>
        {entry.partOfSpeech && (
          <span style={{ padding:'2px 8px', borderRadius:12, background:'var(--terra3)', color:'#8a2500', fontSize:9.5, fontWeight:700, textTransform:'uppercase' }}>
            {entry.partOfSpeech}
          </span>
        )}
        {entry.regionalVariants?.length > 0 && (
          <span style={{ padding:'2px 8px', borderRadius:12, background:'var(--teal3)', color:'#065048', fontSize:9.5, fontWeight:600 }}>
            {entry.regionalVariants.length} dialects
          </span>
        )}
      </div>
    </div>
  );
}

// ─── TRANSLATION BOX ────────────────────────────────────────────
function TranslationBox() {
  const [text, setText] = useState('Labas alik?');
  const [lang, setLang] = useState('en');
  const [result, setResult] = useState('How are you? Are you doing well?');
  const [loading, setLoading] = useState(false);

  // Local translation logic — fallback if API unavailable
  const translateLocally = (input, targetLang) => {
    const q = input.toLowerCase().trim();
    const found = DIALECT_DATA.find(w =>
      w.word.toLowerCase() === q ||
      (w.arabic || '') === input ||
      (w.examples || []).some(e => e.toLowerCase() === q)
    );
    if (found && found.translations) return found.translations[targetLang];
    // Try partial
    const partial = DIALECT_DATA.find(w =>
      q.includes(w.word.toLowerCase()) || w.word.toLowerCase().includes(q)
    );
    if (partial && partial.translations) return partial.translations[targetLang];
    return null;
  };

  const handleTranslate = async () => {
    if (!text.trim()) return;
    setLoading(true);

    // Try local first
    const local = translateLocally(text, lang);
    if (local) {
      setResult(local);
      setLoading(false);
      return;
    }

    // Try API
    try {
      const data = await translateText(text, lang);
      if (data?.translated) {
        setResult(data.translated);
      } else {
        setResult('Translation not found. Try a single word from the dictionary.');
      }
    } catch {
      setResult('Translation not available offline.');
    }
    setLoading(false);
  };

  return (
    <div style={{ background:'linear-gradient(155deg,#0a2318,#0a1c28)', borderRadius:16, padding:20, marginBottom:14, position:'relative', overflow:'hidden' }}>
      <Zellige opacity={0.1} color1="#0a7a6a" color2="#c47b0a" color3="#c0390a" size={60} id="trans-z"/>
      <div style={{ position:'relative', zIndex:1 }}>
        <h4 style={{ ...S, fontSize:17, color:'#fff', marginBottom:14 }}>Quick Translation</h4>
        <div style={{ background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.13)', borderRadius:10, padding:'11px 14px', marginBottom:10 }}>
          <textarea value={text} onChange={e => setText(e.target.value)} rows={2}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleTranslate(); } }}
            placeholder="Type Darija here..."
            style={{ background:'none', border:'none', color:'#fff', fontSize:14, fontFamily:'Outfit,sans-serif', width:'100%', outline:'none', resize:'none' }}/>
        </div>
        <div style={{ display:'flex', gap:5, flexWrap:'wrap', marginBottom:10 }}>
          {LANGS.map(l => (
            <button key={l.code} onClick={() => setLang(l.code)}
              style={{ padding:'5px 11px', borderRadius:20, fontSize:11, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif', transition:'all .18s',
                background: lang === l.code ? 'var(--teal)' : 'rgba(255,255,255,.07)',
                border: `1px solid ${lang === l.code ? 'var(--teal)' : 'rgba(255,255,255,.13)'}`,
                color: lang === l.code ? '#fff' : 'rgba(255,255,255,.6)' }}>
              {l.flag} {l.label}
            </button>
          ))}
        </div>
        <button className="btn-teal" style={{ width:'100%', justifyContent:'center', marginBottom:10 }}
          onClick={handleTranslate} disabled={loading}>
          {loading ? '...' : 'Translate'}
        </button>
        {result && (
          <div style={{ background:'rgba(15,160,140,.15)', border:'1px solid rgba(15,160,140,.3)', borderRadius:10, padding:'11px 14px' }}>
            <div style={{ fontSize:14.5, color:'var(--teal2)', fontWeight:500, lineHeight:1.6 }}>{result}</div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── STATS BOX ──────────────────────────────────────────────────
function StatsBox() {
  const pos = {};
  DIALECT_DATA.forEach(w => { pos[w.partOfSpeech] = (pos[w.partOfSpeech] || 0) + 1; });
  const totalVariants = DIALECT_DATA.reduce((s, w) => s + (w.regionalVariants || []).length, 0);

  return (
    <div className="card" style={{ padding:20, marginBottom:14 }}>
      <h4 style={{ ...S, fontSize:16, marginBottom:14, color:'var(--ink)' }}>Dictionary Stats</h4>
      {[
        ['Total words', DIALECT_DATA.length.toLocaleString()],
        ['Regional variants', totalVariants.toLocaleString()],
        ['Dialects covered', '7'],
        ['Languages', '4 (AR/FR/EN/ES)'],
        ['Nouns', pos.noun || 0],
        ['Verbs', pos.verb || 0],
        ['Expressions', pos.expression || 0],
      ].map(([k, v]) => (
        <div key={k} className="fact-row">
          <span className="fact-key" style={{ fontSize:12.5 }}>{k}</span>
          <span className="fact-val" style={{ fontSize:13, fontWeight:700, color:'var(--terra)' }}>{v}</span>
        </div>
      ))}
    </div>
  );
}

// ─── MAIN PAGE ──────────────────────────────────────────────────
export default function DialectPage() {
  const [query,        setQuery]        = useState('');
  const [results,      setResults]      = useState([]);
  const [selected,     setSelected]     = useState(null);
  const [wordOfDay,    setWordOfDay]     = useState(null);
  const [searched,     setSearched]     = useState(false);
  const [loading,      setLoading]      = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropResults,  setDropResults]  = useState([]);
  const inputRef = useRef(null);
  const dropRef  = useRef(null);

  useEffect(() => {
    setWordOfDay(getWordOfDay());
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Live dropdown as user types
  const handleQueryChange = (val) => {
    setQuery(val);
    if (val.trim().length >= 1) {
      const quick = localSearch(val, 8);
      setDropResults(quick);
      setShowDropdown(quick.length > 0);
    } else {
      setShowDropdown(false);
    }
  };

  // Full search
  const doSearch = useCallback((q) => {
    const trimmed = (q || query).trim();
    if (!trimmed) return;
    setLoading(true);
    setSearched(true);
    setShowDropdown(false);

    // Instant local search — no async needed
    const found = localSearch(trimmed, 20);
    setResults(found);
    setSelected(found[0] || null);
    setLoading(false);
  }, [query]);

  const selectFromDropdown = (entry) => {
    setQuery(entry.word);
    setSelected(entry);
    setResults([entry]);
    setSearched(true);
    setShowDropdown(false);
  };

  const handleTagClick = (theme) => {
    const themed = getByTheme(theme);
    setResults(themed);
    setSelected(themed[0] || null);
    setSearched(true);
    setQuery(theme);
  };

  const handleLetter = (letter) => {
    const found = browseByLetter(letter);
    setResults(found);
    setSelected(found[0] || null);
    setSearched(true);
    setQuery(letter.toLowerCase());
    setShowDropdown(false);
  };

  const handleRandom = () => {
    const rnd = getRandomWord();
    setSelected(rnd);
    setResults([rnd]);
    setQuery(rnd.word);
    setSearched(true);
  };

  return (
    <Layout>
      <SEO
        title="Moroccan Dialect Dictionary — MoroccoPedia"
        description="Search 355+ Darija words with 7 regional dialects, translations in 4 languages. Find how every word changes from Marrakesh to Tangier."
      />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <div style={{ background:'linear-gradient(155deg,#0a2318 0%,#0a1c28 50%,#1c1007 100%)', padding:'clamp(40px,6vw,64px) 0', position:'relative', overflow:'hidden' }}>
        <Zellige opacity={0.18} color1="#c0390a" color2="#c47b0a" color3="#0a7a6a" size={90} id="hero-z"/>
        <Zellige opacity={0.09} color1="#0a7a6a" color2="#c0390a" color3="#c47b0a" size={45} id="hero-z2"/>
        <ZelligeStar size={300} color="#c0390a" opacity={0.05} style={{ position:'absolute', right:'-50px', top:'-50px' }}/>
        <ZelligeStar size={220} color="#0a7a6a" opacity={0.04} style={{ position:'absolute', left:'-30px', bottom:'-30px' }}/>
        {/* Glows */}
        <div style={{ position:'absolute', width:400, height:400, background:'#0a7a6a', filter:'blur(120px)', opacity:.12, right:'-5%', top:'-5%', borderRadius:'50%', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', width:300, height:300, background:'#c0390a', filter:'blur(100px)', opacity:.1, left:'10%', bottom:'-10%', borderRadius:'50%', pointerEvents:'none' }}/>

        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)', position:'relative', zIndex:2 }}>

          {/* Label */}
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, background:'rgba(15,160,140,.12)', border:'1px solid rgba(15,160,140,.28)', borderRadius:30, padding:'6px 18px', marginBottom:18 }}>
            <div style={{ width:6, height:6, borderRadius:'50%', background:'var(--teal2)' }}/>
            <span style={{ fontFamily:'Amiri,serif', fontSize:14, color:'var(--teal2)', direction:'rtl' }}>قاموس الدارجة المغربية</span>
          </div>

          <h1 style={{ ...S, fontSize:'clamp(30px,5.5vw,58px)', color:'#fff', lineHeight:1.05, marginBottom:12 }}>
            Moroccan Dialect<br/>
            <span style={{ color:'var(--gold2)' }}>Dictionary</span>
          </h1>

          <p style={{ fontSize:'clamp(13px,2vw,15px)', color:'rgba(245,237,220,.55)', maxWidth:520, lineHeight:1.8, marginBottom:28, fontWeight:300 }}>
            {DIALECT_DATA.length}+ Darija words · 7 regional dialects · 4 languages.
            See how every word changes from Marrakesh to Tangier to the Sahara.
          </p>

          {/* Search bar */}
          <div ref={dropRef} style={{ maxWidth:620, position:'relative' }}>
            <div style={{ display:'flex', gap:0, background:'rgba(255,255,255,.1)', border:'1.5px solid rgba(255,255,255,.22)', borderRadius:14, overflow:'visible', boxShadow:'0 8px 32px rgba(0,0,0,.2)' }}>
              <span style={{ padding:'0 14px', display:'flex', alignItems:'center', fontSize:17, color:'rgba(255,255,255,.4)', flexShrink:0 }}>🔍</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => handleQueryChange(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') doSearch(query); if (e.key === 'Escape') setShowDropdown(false); }}
                placeholder="Search Darija — try: zwina, tagine, bezzaf..."
                autoComplete="off"
                style={{
                  flex:1, padding:'clamp(12px,2vw,15px) 4px', background:'none', border:'none',
                  color:'#fff', fontSize:'clamp(13px,2vw,15px)', fontFamily:'Outfit,sans-serif',
                  outline:'none', minWidth:0,
                }}
              />
              {query && (
                <button onClick={() => { setQuery(''); setShowDropdown(false); setSearched(false); setResults([]); }}
                  style={{ padding:'0 12px', background:'none', border:'none', color:'rgba(255,255,255,.4)', cursor:'pointer', fontSize:16, flexShrink:0 }}>✕</button>
              )}
              <button
                onClick={() => doSearch(query)}
                disabled={loading}
                style={{ padding:'clamp(10px,2vw,14px) clamp(16px,2.5vw,24px)', borderRadius:'0 12px 12px 0', background:'var(--teal)', border:'none', color:'#fff', fontSize:'clamp(12px,1.5vw,14px)', fontWeight:700, cursor:'pointer', fontFamily:'Outfit,sans-serif', flexShrink:0, transition:'background .2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--teal2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--teal)'}>
                {loading ? '...' : 'Search'}
              </button>
            </div>

            {/* Live dropdown */}
            {showDropdown && dropResults.length > 0 && (
              <div style={{ position:'absolute', top:'calc(100% + 6px)', left:0, right:0, background:'#fff', borderRadius:13, boxShadow:'0 16px 50px rgba(0,0,0,.25)', border:'1px solid var(--border)', zIndex:200, overflow:'hidden', animation:'fadeUp .15s ease' }}>
                {dropResults.map(entry => (
                  <SearchResultItem key={entry.word} entry={entry} onSelect={selectFromDropdown}/>
                ))}
                <div onClick={() => doSearch(query)}
                  style={{ padding:'10px 16px', fontSize:12, color:'var(--teal)', fontWeight:600, cursor:'pointer', borderTop:'1px solid var(--border)', textAlign:'center', background:'var(--bg2)' }}>
                  See all results for "{query}" →
                </div>
              </div>
            )}
          </div>

          {/* Popular chips */}
          <div style={{ display:'flex', gap:8, marginTop:14, flexWrap:'wrap', alignItems:'center' }}>
            <span style={{ fontSize:11, color:'rgba(255,255,255,.38)', fontWeight:600, textTransform:'uppercase', letterSpacing:'.08em' }}>Popular:</span>
            {POPULAR.map(w => (
              <button key={w} onClick={() => { setQuery(w); doSearch(w); }}
                style={{ padding:'4px 13px', borderRadius:20, fontSize:11.5, fontWeight:600, cursor:'pointer', background:'rgba(255,255,255,.09)', border:'1px solid rgba(255,255,255,.18)', color:'rgba(255,255,255,.72)', fontFamily:'Outfit,sans-serif', transition:'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.2)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.09)'; e.currentTarget.style.color = 'rgba(255,255,255,.72)'; }}>
                {w}
              </button>
            ))}
            <button onClick={handleRandom}
              style={{ padding:'4px 13px', borderRadius:20, fontSize:11.5, fontWeight:600, cursor:'pointer', background:'rgba(10,122,106,.25)', border:'1px solid rgba(15,160,140,.4)', color:'var(--teal2)', fontFamily:'Outfit,sans-serif', transition:'all .18s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(10,122,106,.45)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(10,122,106,.25)'}>
              🎲 Random
            </button>
          </div>

          {/* Stats strip */}
          <div style={{ display:'flex', gap:24, marginTop:24, flexWrap:'wrap' }}>
            {[
              { v: DIALECT_DATA.length+'', l:'Words' },
              { v: DIALECT_DATA.reduce((s,w)=>s+(w.regionalVariants||[]).length,0)+'', l:'Variants' },
              { v:'7', l:'Dialects' },
              { v:'4', l:'Languages' },
            ].map(s => (
              <div key={s.l} style={{ textAlign:'left' }}>
                <div style={{ ...S, fontSize:22, color:'var(--gold2)', lineHeight:1 }}>{s.v}</div>
                <div style={{ fontSize:11, color:'rgba(245,237,220,.45)', marginTop:2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ARABIC CALLIGRAPHY BELT ────────────────────────────── */}
      <div style={{ background:'linear-gradient(135deg,#1c1007,#0a2318)', padding:'12px 0', borderBottom:'1px solid rgba(255,255,255,.06)', position:'relative', overflow:'hidden' }}>
        <div style={{ display:'flex', overflowX:'auto', scrollbarWidth:'none', whiteSpace:'nowrap', padding:'0 32px', gap:0 }}>
          {['مراكش','·','فاس','·','طنجة','·','الصويرة','·','أكادير','·','الصحراء','·','الريف','·','سوس','·','الدارجة المغربية'].map((t,i) => (
            <span key={i} style={{ padding:'0 14px', fontFamily:'Amiri,serif', fontSize:t==='·'?12:16, color:t==='·'?'rgba(255,255,255,.15)':'rgba(255,255,255,.45)', direction:'rtl' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── THEME FILTER BAR ───────────────────────────────────── */}
      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)', padding:'10px 0', position:'sticky', top:62, zIndex:100 }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)', display:'flex', gap:7, overflowX:'auto', scrollbarWidth:'none' }}>
          <span style={{ fontSize:10.5, fontWeight:700, textTransform:'uppercase', letterSpacing:'.07em', color:'var(--muted)', flexShrink:0, alignSelf:'center' }}>Browse:</span>
          {THEMES.map(theme => (
            <button key={theme} onClick={() => handleTagClick(theme)}
              className={`tag-chip${query === theme ? ' active' : ''}`}
              style={{ fontFamily:'Outfit,sans-serif', flexShrink:0, fontSize:11.5, textTransform:'capitalize' }}>
              {theme}
            </button>
          ))}
        </div>
      </div>

      {/* ── BODY ──────────────────────────────────────────────── */}
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(20px,3vw,36px) clamp(16px,4vw,48px)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) clamp(260px,30vw,340px)', gap:'clamp(16px,3vw,28px)', alignItems:'start' }}>

          {/* ── MAIN COLUMN ─────────────────────────────────── */}
          <div style={{ minWidth:0 }}>

            {/* Loading */}
            {loading && (
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                {[1,2].map(i => <div key={i} className="skeleton" style={{ height:180, borderRadius:16 }}/>)}
              </div>
            )}

            {/* Results */}
            {!loading && searched && results.length > 0 && (
              <div>
                {/* Results header */}
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16, flexWrap:'wrap', gap:10 }}>
                  <div style={{ fontSize:13.5, color:'var(--muted)' }}>
                    <strong style={{ color:'var(--ink)' }}>{results.length}</strong> result{results.length !== 1 ? 's' : ''} for{' '}
                    <strong style={{ color:'var(--terra)' }}>"{query}"</strong>
                  </div>
                  {results.length > 1 && (
                    <div style={{ display:'flex', gap:8, overflowX:'auto', scrollbarWidth:'none' }}>
                      {results.slice(0, 8).map(r => (
                        <button key={r.word} onClick={() => setSelected(r)}
                          style={{
                            padding:'4px 12px', borderRadius:20, fontSize:11.5, fontWeight:600, cursor:'pointer',
                            fontFamily:'Outfit,sans-serif', flexShrink:0, transition:'all .18s',
                            background: selected?.word === r.word ? 'var(--terra)' : 'var(--bg2)',
                            border: `1px solid ${selected?.word === r.word ? 'var(--terra)' : 'var(--border)'}`,
                            color: selected?.word === r.word ? '#fff' : 'var(--ink)',
                          }}>
                          {r.word}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Selected word — big card */}
                {selected && <WordCard entry={selected} isMain onTagClick={handleTagClick}/>}

                {/* Other results */}
                {results.length > 1 && (
                  <div>
                    <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:'var(--muted)', margin:'20px 0 12px' }}>
                      Related results
                    </div>
                    {results.filter(r => r.word !== selected?.word).map(entry => (
                      <WordCard key={entry.word} entry={entry} onTagClick={handleTagClick}/>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* No results */}
            {!loading && searched && results.length === 0 && (
              <div className="card" style={{ padding:'clamp(32px,5vw,56px)', textAlign:'center' }}>
                <div style={{ fontSize:40, marginBottom:12 }}>🔍</div>
                <div style={{ ...S, fontSize:22, marginBottom:8, color:'var(--ink)' }}>No results found</div>
                <div style={{ fontSize:14, color:'var(--muted)', marginBottom:20, lineHeight:1.7 }}>
                  No results for "<strong>{query}</strong>".<br/>
                  Try Arabic script, a different spelling, or browse by theme above.
                </div>
                <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
                  {POPULAR.slice(0, 4).map(w => (
                    <button key={w} onClick={() => { setQuery(w); doSearch(w); }}
                      style={{ padding:'7px 16px', borderRadius:20, background:'var(--terra3)', border:'1px solid var(--terra)', color:'var(--terra)', fontSize:12.5, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>
                      Try "{w}"
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Word of the day — initial state */}
            {!loading && !searched && wordOfDay && (
              <div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16, flexWrap:'wrap', gap:8 }}>
                  <div>
                    <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:'var(--terra)', marginBottom:4 }}>Word of the Day</div>
                    <div style={{ fontSize:13, color:'var(--muted)' }}>Search above to explore the full dictionary</div>
                  </div>
                  <button onClick={handleRandom} className="btn-ghost" style={{ fontSize:12 }}>🎲 Random word</button>
                </div>
                <WordCard entry={wordOfDay} isMain onTagClick={handleTagClick}/>

                {/* Browse all themes */}
                <div style={{ marginTop:28 }}>
                  <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:'var(--muted)', marginBottom:14 }}>Browse by theme</div>
                  <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(130px,1fr))', gap:10 }}>
                    {THEMES.map(theme => {
                      const count = DIALECT_DATA.filter(w => (w.themes||[]).includes(theme)).length;
                      return (
                        <div key={theme} onClick={() => handleTagClick(theme)}
                          style={{ borderRadius:12, padding:'12px 14px', background:'#fff', border:'1px solid var(--border)', cursor:'pointer', transition:'all .22s', textAlign:'center' }}
                          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--terra)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                          <div style={{ fontSize:13.5, fontWeight:600, color:'var(--ink)', textTransform:'capitalize', marginBottom:4 }}>{theme}</div>
                          <div style={{ fontSize:11, color:'var(--terra)', fontWeight:700 }}>{count} words</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── SIDEBAR ─────────────────────────────────────── */}
          <div>
            <TranslationBox/>
            <StatsBox/>

            {/* Browse by Letter */}
            <div className="card" style={{ padding:20, marginBottom:14 }}>
              <h4 style={{ ...S, fontSize:16, marginBottom:14, color:'var(--ink)' }}>Browse by Letter</h4>
              <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                {ALPHABET.map(letter => (
                  <button key={letter} onClick={() => handleLetter(letter)}
                    style={{ width:32, height:32, borderRadius:8, background:'var(--bg2)', border:'1px solid var(--border)', fontSize:12.5, fontWeight:700, cursor:'pointer', color:'var(--terra)', fontFamily:'Outfit,sans-serif', transition:'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--terra)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.border = '1px solid var(--terra)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg2)'; e.currentTarget.style.color = 'var(--terra)'; e.currentTarget.style.border = '1px solid var(--border)'; }}>
                    {letter}
                  </button>
                ))}
              </div>
            </div>

            {/* Dialects guide */}
            <div style={{ background:'linear-gradient(155deg,#1c1007,#0a2318)', borderRadius:16, padding:20, position:'relative', overflow:'hidden' }}>
              <Zellige opacity={0.12} color1="#c0390a" color2="#c47b0a" color3="#0a7a6a" size={55} id="side-z"/>
              <div style={{ position:'relative', zIndex:1 }}>
                <h4 style={{ ...S, fontSize:16, color:'#fff', marginBottom:14 }}>Morocco's 7 Dialects</h4>
                {[
                  { name:'Marrakshi', region:'Marrakesh & South', color:'#c0390a' },
                  { name:'Casawi',    region:'Casablanca & Central', color:'#c47b0a' },
                  { name:'Fassi',     region:'Fes & Meknes', color:'#0a7a6a' },
                  { name:'Tanjawi',   region:'Tangier & North', color:'#1a6b9a' },
                  { name:'Tachelhit', region:'Souss & Agadir', color:'#8a4500' },
                  { name:'Sharqi',    region:'Oujda & East', color:'#6a3090' },
                  { name:'Hassaniya', region:'Sahara', color:'#c47b0a' },
                ].map(d => (
                  <div key={d.name} onClick={() => { setQuery(d.name); doSearch(d.name); }}
                    style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,.07)', cursor:'pointer' }}
                    onMouseEnter={e => e.currentTarget.style.paddingLeft = '6px'}
                    onMouseLeave={e => e.currentTarget.style.paddingLeft = '0'}>
                    <div style={{ width:8, height:8, borderRadius:'50%', background:d.color, flexShrink:0 }}/>
                    <div style={{ flex:1 }}>
                      <span style={{ fontSize:13, fontWeight:600, color:'#fff' }}>{d.name}</span>
                      <span style={{ fontSize:11, color:'rgba(255,255,255,.38)', marginLeft:8 }}>{d.region}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        .word-card { background:#fff; border:1px solid var(--border); border-radius:14px; padding:20px; margin-bottom:14px; }
      `}</style>
    </Layout>
  );
}
