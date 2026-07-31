import { useState, useRef, useEffect } from 'react';
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


// ─── LOCAL DIALECT LOOKUP (no API needed) ─────────────────────
function findWord(q) {
  const ql = q.toLowerCase().trim();
  return DIALECT_DATA.find(w =>
    w.word.toLowerCase() === ql ||
    (w.arabic || '') === q ||
    (w.regionalVariants || []).some(v => v.word.toLowerCase() === ql)
  );
}

function localTranslate(word) {
  const found = findWord(word);
  if (!found) return null;
  return {
    word: found.word,
    arabic: found.arabic,
    definition: found.definition,
    variants: found.regionalVariants || [],
    translations: found.translations || {},
    found: true,
  };
}

// ─── MOROCCAN KNOWLEDGE BASE for AI responses ─────────────────
const KNOWLEDGE = {
  greetings: ['salam','labas','mrhba','sbah lkhir','msa lkhir','b-slama','tsb7 3la khir'],
  food_words: ['tagine','couscous','harira','pastilla','tangia','rfissa','msemen','amlou','atay','qahwa'],
  cities: {
    marrakesh: 'Marrakesh is Morocco\'s imperial city founded in 1062 CE by the Almoravids. Famous for Jemaa el-Fna square (UNESCO), the souks, Majorelle Garden, Bahia Palace and the Koutoubia Mosque.',
    fes: 'Fes is Morocco\'s cultural and spiritual capital. Fes el-Bali is the world\'s largest living medieval city (UNESCO 1981). Founded 789 CE, home to Al-Qarawiyyin — the world\'s oldest university (859 CE).',
    casablanca: "Casablanca is Morocco's largest city and economic capital. Home to the Hassan II Mosque — the world's 3rd largest. It will host the 2030 FIFA World Cup.",
    tangier: 'Tangier is where Africa meets Europe — 14km from Spain. The Strait of Gibraltar, Cap Spartel, and a fascinating history as an international zone (1923–1956).',
    chefchaouen: 'Chefchaouen is the Blue City — every wall painted in shades of cobalt blue. Founded 1471, nestled in the Rif Mountains at 600m elevation.',
    essaouira: 'Essaouira is the Windy City — 18th-century Portuguese ramparts, UNESCO medina, world capital of Gnawa music. Jimi Hendrix visited in 1969.',
  },
  culture: {
    gnawa: 'Gnawa is UNESCO-listed Moroccan spiritual music with West African roots. It combines healing rituals, trance and Islamic mysticism. The Essaouira Gnawa Festival attracts 500,000 people every June.',
    zellige: "Zellige is Morocco's signature hand-cut ceramic tilework forming geometric patterns. Fes is the capital of zellige craftsmanship. It has been UNESCO-recognized as intangible cultural heritage.",
    hammam: 'The hammam is a centuries-old Moroccan public bath and social institution. The ritual involves steam, black olive soap (sabun beldi) and a kessa scrub glove. Far more than bathing — it is community.',
    ramadan: 'Ramadan is the holiest month in Morocco. Families gather for iftar (breaking fast) with harira soup, dates, chebakia pastries and sellou. The cities transform at night with lights and life.',
    jemaa_elfna: "Jemaa el-Fna is UNESCO Oral Heritage of Humanity. By day: juice vendors, snake charmers. By sunset: 100+ food stalls, Gnawa musicians, halqa storytelling circles. The world's greatest open-air theatre.",
    couscous: 'Moroccan couscous is a UNESCO-listed living tradition. Every Friday, families gather around one shared plate of semolina with vegetables and meat. The ritual of eating together is as important as the food.',
  }
};

function generateResponse(message) {
  const ml = message.toLowerCase();

  // Dialect lookup
  const words = message.split(/\s+/);
  for (const w of words) {
    const found = findWord(w);
    if (found) {
      const variants = (found.regionalVariants || []).slice(0, 3).map(v => `${v.region}: "${v.word}"`).join(', ');
      return `"${found.word}" — ${found.definition}\n\n📍 Across Morocco: ${variants || 'No regional variants recorded yet.'}\n\n${found.examples?.length ? `Example: "${found.examples[0]}"` : ''}`;
    }
  }

  // City questions
  for (const [city, info] of Object.entries(KNOWLEDGE.cities)) {
    if (ml.includes(city)) return `🏙️ ${info}`;
  }

  // Culture questions
  if (ml.includes('gnawa'))    return `🥁 ${KNOWLEDGE.culture.gnawa}`;
  if (ml.includes('zellige'))  return `🔷 ${KNOWLEDGE.culture.zellige}`;
  if (ml.includes('hammam'))   return `🧖 ${KNOWLEDGE.culture.hammam}`;
  if (ml.includes('ramadan'))  return `🌙 ${KNOWLEDGE.culture.ramadan}`;
  if (ml.includes('jemaa') || ml.includes('djemaa')) return `🌅 ${KNOWLEDGE.culture.jemaa_elfna}`;
  if (ml.includes('couscous')) return `🍲 ${KNOWLEDGE.culture.couscous}`;

  if (ml.includes('darija') || ml.includes('dialect')) {
    return "Moroccan Darija is not taught in schools (Classical Arabic is), but it is the living language of 36 million Moroccans. It is a beautiful mix of Arabic, Amazigh, French, Spanish and even Portuguese. Each city has its own accent — try searching a word in our Dictionary to see how it changes from Marrakesh to Tangier.";
  }

  if (ml.includes('food') || ml.includes('eat') || ml.includes('cuisine')) {
    return "Moroccan cuisine is one of the world's great culinary traditions. The essentials: tagine (slow-cooked clay pot), couscous (the Friday sacred dish), harira (national soup), pastilla (sweet-savoury pie) and mint tea (the national ritual). Each city has signature dishes — Marrakesh has tangia, Fes has rfissa, Essaouira has fresh grilled sardines.";
  }

  if (ml.includes('history') || ml.includes('dynasty') || ml.includes('sultan')) {
    return "Morocco has 1,200 years of history. Key moments: Idrisids founded Fes (789 CE), Almoravids founded Marrakesh (1062), Almohads built the Koutoubia, Marinids built the finest madrasas, Saadians defeated Portugal at the Battle of the Three Kings (1578), the Alaoui dynasty rules to this day since 1631. Visit our History page for the full story.";
  }

  if (ml.includes('hello') || ml.includes('salam') || ml.includes('mrhba')) {
    return "Salam! In Morocco you'll hear many greetings: Salam (peace/hello), Labas alik? (how are you?), Mrhba bik! (welcome!), Sbah lkhir (good morning). In the Rif mountains they say Azul — meaning 'blue' and hello in Amazigh. In the Souss they say Azul too, but in Tachelhit.";
  }

  if (ml.includes('amazigh') || ml.includes('berber') || ml.includes('tamazight') || ml.includes('tachelhit')) {
    return "The Amazigh people (also called Berbers) are the indigenous people of Morocco. Amazigh means 'free people'. Their language Tamazight has three variants: Tachelhit (Souss/south), Tarifit (Rif mountains) and Tamazight (Middle Atlas). Since 2011, Tamazight is an official language of Morocco, written in the ancient Tifinagh script. The argan tree, amlou paste and words like azul (hello), bzzaf and walu in Darija are all Amazigh.";
  }

  return "That's a great question about Moroccan culture! Our knowledge base covers history, dialect, cities, food, crafts and traditions. Try asking about:\n\n• A specific Darija word (e.g. 'zwina', 'tagine', 'bezzaf')\n• A city (Marrakesh, Fes, Tangier, Chefchaouen)\n• A tradition (Gnawa, zellige, hammam, Ramadan)\n• Moroccan history or cuisine";
}

// ─── ZELLIGE ─────────────────────────────────────────────────
function Zellige({ opacity=.15, c1='#c0390a', c2='#c47b0a', c3='#0a7a6a', size=90, id='z' }) {
  return (
    <svg style={{ position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none' }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
          <polygon points={`${size*.5},${size*.05} ${size*.63},${size*.27} ${size*.95},${size*.27} ${size*.73},${size*.45} ${size*.82},${size*.76} ${size*.5},${size*.6} ${size*.18},${size*.76} ${size*.27},${size*.45} ${size*.05},${size*.27} ${size*.37},${size*.27}`}
            fill="none" stroke={c1} strokeWidth="1.2" opacity={opacity}/>
          <polygon points={`${size*.5},${size*.22} ${size*.64},${size*.5} ${size*.5},${size*.78} ${size*.36},${size*.5}`}
            fill={c3} opacity={opacity*.3} stroke={c3} strokeWidth="0.5"/>
          <circle cx={size*.5} cy={size*.5} r="3.5" fill={c1} opacity={opacity*.5}/>
          <line x1={size*.5} y1="0" x2={size*.5} y2={size} stroke={c2} strokeWidth="0.4" opacity={opacity*.4}/>
          <line x1="0" y1={size*.5} x2={size} y2={size*.5} stroke={c2} strokeWidth="0.4" opacity={opacity*.4}/>
          <rect x="0" y="0" width={size} height={size} fill="none" stroke={c1} strokeWidth="0.3" opacity={opacity*.2}/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  );
}

function ZelligeStar({ size=160, color='#c0390a', opacity=.07, style={} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ pointerEvents:'none', ...style }}>
      <polygon points="100,8 124,56 188,56 136,90 158,148 100,116 42,148 64,90 12,56 76,56"
        fill="none" stroke={color} strokeWidth="2" opacity={opacity}/>
      <polygon points="100,28 118,62 154,62 126,82 138,118 100,96 62,118 74,82 46,62 82,62"
        fill={color} opacity={opacity*.5}/>
      <circle cx="100" cy="100" r="4" fill={color} opacity={opacity*.85}/>
    </svg>
  );
}

// ─── AI MODELS ────────────────────────────────────────────────
const AI_MODELS = [
  { id:'chat',    icon: <Ic name="message"/>, badge:'NLP AI',        color:'#0a7a6a', title:'Cultural Chat',        desc:'Ask anything about Moroccan history, cities, crafts, food and traditions. Powered by our local knowledge base + Claude.' },
  { id:'trans',   icon: <Ic name="map"/>, badge:'Language AI',   color:'#c0390a', title:'Regional Translator',  desc:'Enter any Darija word and see how it changes from Marrakesh to Fes, Tangier to the Sahara. 7 dialects mapped.' },
  { id:'dialect', icon: <Ic name="type"/>, badge:'Dictionary AI', color:'#c47b0a', title:'Dialect Detective',     desc:'Identify which Moroccan region a word or phrase comes from based on its phonetics and vocabulary.' },
  { id:'history', icon: <Ic name="archive"/>, badge:'Heritage AI',   color:'#8a4500', title:'History Oracle',        desc:'Ask about any dynasty, ruler, battle or cultural period in Moroccan history from 788 CE to today.' },
  { id:'food',    icon: <Ic name="utensils"/>, badge:'Culinary AI',   color:'#0a7a6a', title:'Moroccan Kitchen',      desc:'Discover recipes, ingredients, regional variations and the cultural significance of Moroccan cuisine.' },
  { id:'guide',   icon: <Ic name="compass"/>, badge:'Tourism AI',    color:'#c0390a', title:'Cultural Guide',        desc:'Get personalized recommendations for Moroccan experiences based on your interests and cities.' },
];

const SUGGESTED = [
  'What is Gnawa music?', 'Tell me about zellige art', 'What does "bezzaf" mean?',
  'Best food in Marrakesh?', 'History of Fes medina', 'What is Amazigh culture?',
  'How to say hello in Darija?', 'What is a hammam?',
];

// ─── CHAT COMPONENT ───────────────────────────────────────────
function ChatBot() {
  const [messages, setMessages] = useState([
    { role:'bot', text:"Marhba bik! I'm your AI guide to Moroccan culture. Ask me anything — a Darija word, a city, a tradition, Moroccan food or history. I'll answer from our knowledge base and can also search our dialect dictionary." }
  ]);
  const [input,   setInput]   = useState('');
  const [loading, setLoading] = useState(false);
  const [mode,    setMode]    = useState('chat');
  const [transWord, setTransWord] = useState('');
  const [transResult, setTransResult] = useState(null);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:'smooth' }); }, [messages]);

  const send = async () => {
    const val = input.trim();
    if (!val || loading) return;
    setMessages(m => [...m, { role:'user', text:val }]);
    setInput('');
    setLoading(true);

    // Small delay for UX
    await new Promise(r => setTimeout(r, 400));

    // Try API first, then local
    let reply = '';
    try {
      const { askAI } = await import('../hooks/useApi');
      const data = await askAI(val);
      reply = data?.message || '';
    } catch {}

    if (!reply) reply = generateResponse(val);

    setMessages(m => [...m, { role:'bot', text:reply }]);
    setLoading(false);
  };

  const handleTranslate = () => {
    if (!transWord.trim()) return;
    const result = localTranslate(transWord.trim());
    setTransResult(result);
    if (!result) {
      // Try partial
      const q = transWord.toLowerCase();
      const partial = DIALECT_DATA.filter(w =>
        w.word.toLowerCase().includes(q) ||
        (w.regionalVariants||[]).some(v=>v.word.toLowerCase().includes(q))
      ).slice(0,3);
      if (partial.length) setTransResult({ partial: true, suggestions: partial });
    }
  };

  return (
    <div style={{ background:'linear-gradient(155deg,#0a1c28,#1c1007)', borderRadius:20, overflow:'hidden' }}>
      {/* Mode tabs */}
      <div style={{ display:'flex', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        {[
          { id:'chat', label:'Cultural Chat' },
          { id:'translate', label:'Regional Translate' },
        ].map(m=>(
          <button key={m.id} onClick={()=>setMode(m.id)}
            style={{ flex:1, padding:'clamp(12px,2vw,16px) 20px', fontSize:'clamp(12px,1.5vw,13.5px)', fontWeight:mode===m.id?700:400, cursor:'pointer', border:'none', background:'transparent', fontFamily:'Outfit,sans-serif', color:mode===m.id?'#fff':'rgba(255,255,255,.45)', borderBottom:`2px solid ${mode===m.id?'var(--terra)':'transparent'}`, transition:'all .18s' }}>
            {m.label}
          </button>
        ))}
      </div>

      <div style={{ padding:'clamp(18px,3vw,28px)' }}>
        {mode === 'chat' ? (
          <>
            {/* Messages */}
            <div style={{ minHeight:180, maxHeight:'clamp(220px,30vh,320px)', overflowY:'auto', display:'flex', flexDirection:'column', gap:10, marginBottom:14, padding:'2px 0' }}>
              {messages.map((m,i) => (
                <div key={i} style={{
                  maxWidth:'82%', fontSize:'clamp(12px,1.5vw,13.5px)', lineHeight:1.65, padding:'10px 14px', whiteSpace:'pre-line',
                  alignSelf: m.role==='user'?'flex-end':'flex-start',
                  background: m.role==='user'?'linear-gradient(135deg,var(--terra),var(--gold))':'rgba(255,255,255,.09)',
                  color:'#fff',
                  borderRadius: m.role==='user'?'14px 4px 14px 14px':'4px 14px 14px 14px',
                }}>
                  {m.text}
                </div>
              ))}
              {loading && (
                <div style={{ alignSelf:'flex-start', background:'rgba(255,255,255,.09)', color:'rgba(255,255,255,.5)', fontSize:13, padding:'10px 14px', borderRadius:'4px 14px 14px 14px', display:'flex', gap:5, alignItems:'center' }}>
                  <span style={{ animation:'pulse 1s infinite', display:'inline-block' }}>●</span>
                  <span style={{ animation:'pulse 1s .2s infinite', display:'inline-block' }}>●</span>
                  <span style={{ animation:'pulse 1s .4s infinite', display:'inline-block' }}>●</span>
                </div>
              )}
              <div ref={bottomRef}/>
            </div>

            {/* Suggestions */}
            <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:12 }}>
              {SUGGESTED.map(q=>(
                <button key={q} onClick={()=>setInput(q)}
                  style={{ padding:'4px 11px', borderRadius:20, fontSize:'clamp(10px,1.5vw,11px)', fontWeight:500, cursor:'pointer', background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.12)', color:'rgba(255,255,255,.6)', fontFamily:'Outfit,sans-serif', transition:'all .15s' }}
                  onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,.14)';e.currentTarget.style.color='#fff';}}
                  onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.07)';e.currentTarget.style.color='rgba(255,255,255,.6)';}}>
                  {q}
                </button>
              ))}
            </div>

            <div style={{ display:'flex', gap:9 }}>
              <input value={input} onChange={e=>setInput(e.target.value)}
                onKeyDown={e=>e.key==='Enter'&&send()}
                placeholder="Ask about Morocco — dialect, history, food, culture..."
                style={{ flex:1, padding:'clamp(10px,1.5vw,13px) 14px', borderRadius:10, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.14)', color:'#fff', fontSize:'clamp(12px,1.5vw,13.5px)', fontFamily:'Outfit,sans-serif', outline:'none' }}/>
              <button onClick={send} disabled={loading}
                style={{ padding:'clamp(10px,1.5vw,13px) clamp(14px,2vw,20px)', borderRadius:10, background:loading?'rgba(192,57,10,.5)':'var(--terra)', color:'#fff', border:'none', cursor:loading?'not-allowed':'pointer', fontSize:13, fontWeight:700, fontFamily:'Outfit,sans-serif', transition:'background .2s', flexShrink:0 }}>
                Send
              </button>
            </div>
          </>
        ) : (
          /* Regional Translate */
          <div>
            <p style={{ fontSize:13, color:'rgba(255,255,255,.55)', marginBottom:16, lineHeight:1.65 }}>
              Enter any Darija word to see how it is expressed across all Moroccan regions — from Marrakesh to the Sahara.
            </p>
            <div style={{ display:'flex', gap:9, marginBottom:12 }}>
              <input value={transWord} onChange={e=>setTransWord(e.target.value)}
                onKeyDown={e=>e.key==='Enter'&&handleTranslate()}
                placeholder="e.g. zwina, bezzaf, labas, tagine, atay..."
                style={{ flex:1, padding:'clamp(10px,1.5vw,13px) 14px', borderRadius:10, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.14)', color:'#fff', fontSize:13.5, fontFamily:'Outfit,sans-serif', outline:'none' }}/>
              <button onClick={handleTranslate}
                style={{ padding:'clamp(10px,1.5vw,13px) 18px', borderRadius:10, background:'var(--teal)', color:'#fff', border:'none', cursor:'pointer', fontSize:13, fontWeight:700, fontFamily:'Outfit,sans-serif', flexShrink:0 }}>
                Translate
              </button>
            </div>

            {/* Quick words */}
            <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:16 }}>
              {['zwina','bezzaf','labas','atay','tagine','hammam','souk','shukran'].map(w=>(
                <button key={w} onClick={()=>{setTransWord(w);}}
                  style={{ padding:'3px 11px', borderRadius:20, fontSize:11, cursor:'pointer', background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.13)', color:'rgba(255,255,255,.65)', fontFamily:'Outfit,sans-serif', transition:'all .15s' }}
                  onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,.15)';e.currentTarget.style.color='#fff';}}
                  onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.07)';e.currentTarget.style.color='rgba(255,255,255,.65)';}}>
                  {w}
                </button>
              ))}
            </div>

            {/* Results */}
            {transResult && !transResult.partial && (
              <div>
                <div style={{ marginBottom:16, paddingBottom:16, borderBottom:'1px solid rgba(255,255,255,.08)' }}>
                  <div style={{ ...S, fontSize:28, color:'var(--gold2)', marginBottom:4 }}>{transResult.word}</div>
                  {transResult.arabic && <div style={{ fontFamily:'Amiri,serif', fontSize:17, color:'rgba(255,255,255,.5)', direction:'rtl', marginBottom:6 }}>{transResult.arabic}</div>}
                  <div style={{ fontSize:13.5, color:'rgba(255,255,255,.65)', lineHeight:1.65 }}>{transResult.definition}</div>
                </div>
                {transResult.variants.length > 0 ? (
                  <div>
                    <div style={{ fontSize:10.5, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', color:'rgba(255,255,255,.35)', marginBottom:12 }}>
                      {transResult.variants.length} regional variations across Morocco
                    </div>
                    {transResult.variants.map((v,i)=>(
                      <div key={i} style={{ display:'flex', gap:14, padding:'11px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
                        <div style={{ minWidth:130, flexShrink:0 }}>
                          <div style={{ fontSize:11.5, color:'var(--terra2)', fontWeight:700, textTransform:'uppercase', letterSpacing:'.06em' }}>{v.region}</div>
                          {v.dialect && <div style={{ fontSize:10, color:'rgba(255,255,255,.3)', marginTop:2 }}>{v.dialect}</div>}
                        </div>
                        <div style={{ flex:1 }}>
                          <div style={{ ...S, fontSize:18, color:'var(--gold2)', marginBottom:2 }}>{v.word}</div>
                          {v.phonetic && <div style={{ fontSize:11, fontStyle:'italic', color:'rgba(255,255,255,.35)', marginBottom:3 }}>{v.phonetic}</div>}
                          <div style={{ fontSize:12.5, color:'rgba(255,255,255,.65)', lineHeight:1.5 }}>{v.meaning}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ fontSize:13, color:'rgba(255,255,255,.45)', fontStyle:'italic' }}>
                    This word is used the same across all regions of Morocco.
                  </div>
                )}

                {/* Translations */}
                {transResult.translations && Object.keys(transResult.translations).length > 0 && (
                  <div style={{ marginTop:16, display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:8 }}>
                    {Object.entries(transResult.translations).map(([lang,val])=>(
                      <div key={lang} style={{ background:'rgba(255,255,255,.06)', borderRadius:9, padding:'8px 11px' }}>
                        <div style={{ fontSize:9.5, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:'rgba(255,255,255,.35)', marginBottom:3 }}>{lang}</div>
                        <div style={{ fontSize:13, color:'#fff', fontWeight:500 }}>{val}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {transResult?.partial && (
              <div>
                <div style={{ fontSize:12.5, color:'rgba(255,255,255,.5)', marginBottom:12 }}>Word not found exactly. Did you mean:</div>
                {transResult.suggestions.map(s=>(
                  <button key={s.word} onClick={()=>{setTransWord(s.word); setTransResult(localTranslate(s.word));}}
                    style={{ display:'block', width:'100%', textAlign:'left', padding:'10px 14px', borderRadius:10, background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.12)', color:'#fff', fontSize:13.5, cursor:'pointer', fontFamily:'Outfit,sans-serif', marginBottom:6 }}>
                    <span style={{ ...S, color:'var(--gold2)' }}>{s.word}</span>
                    <span style={{ fontSize:12, color:'rgba(255,255,255,.45)', marginLeft:10 }}>{s.definition?.slice(0,60)}...</span>
                  </button>
                ))}
              </div>
            )}

            {transWord && !transResult && (
              <div style={{ textAlign:'center', padding:'20px 0', color:'rgba(255,255,255,.4)', fontSize:13 }}>
                Press Translate or Enter to search
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────
export default function AIPage() {
  const [activeModel, setActiveModel] = useState('chat');

  return (
    <Layout>
      <SEO title="AI Cultural Intelligence — MoroccoPedia" description="6 AI models for Moroccan culture — dialect chat, regional translation, history oracle and more."/>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ position:'relative', minHeight:'clamp(280px,40vh,420px)', display:'flex', alignItems:'center', overflow:'hidden', background:'linear-gradient(155deg,#0a1c28 0%,#150820 50%,#1c1007 100%)' }}>
        <Zellige opacity={0.18} c1="#c0390a" c2="#c47b0a" c3="#0a7a6a" size={95} id="ai-hero-z"/>
        <Zellige opacity={0.08} c1="#7F77DD" c2="#0a7a6a" c3="#c0390a" size={48} id="ai-hero-z2"/>
        <ZelligeStar size={300} color="#7F77DD" opacity={0.06} style={{ position:'absolute', right:'-50px', top:'-50px' }}/>
        <ZelligeStar size={220} color="#c0390a" opacity={0.05} style={{ position:'absolute', left:'-40px', bottom:'-40px' }}/>
        <div style={{ position:'absolute', width:450, height:450, background:'#7F77DD', filter:'blur(130px)', opacity:.1, right:'-5%', top:'-5%', borderRadius:'50%', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', width:350, height:350, background:'#0a7a6a', filter:'blur(110px)', opacity:.1, left:'5%', bottom:'-10%', borderRadius:'50%', pointerEvents:'none' }}/>

        <div style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(48px,6vw,80px) clamp(20px,5vw,60px)', position:'relative', zIndex:2, width:'100%' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, background:'rgba(127,119,221,.15)', border:'1px solid rgba(127,119,221,.3)', borderRadius:30, padding:'6px 18px', marginBottom:18 }}>
            <div style={{ width:6, height:6, borderRadius:'50%', background:'#b5b0f5' }}/>
            <span style={{ fontSize:11.5, fontWeight:700, textTransform:'uppercase', letterSpacing:'.14em', color:'#b5b0f5' }}>AI-Powered Platform</span>
            <div style={{ width:6, height:6, borderRadius:'50%', background:'#b5b0f5' }}/>
          </div>
          <h1 style={{ ...S, fontSize:'clamp(30px,5.5vw,60px)', color:'#fff', lineHeight:1.0, marginBottom:14 }}>
            AI Cultural<br/>
            <span style={{ color:'var(--gold2)' }}>Intelligence</span>
          </h1>
          <p style={{ fontSize:'clamp(13px,2vw,16px)', color:'rgba(245,237,220,.52)', maxWidth:520, lineHeight:1.85, marginBottom:28, fontWeight:300 }}>
            6 purpose-built AI tools for Moroccan culture — dialect chat, regional translation, history oracle and more. Works offline from our local knowledge base.
          </p>
          <div style={{ display:'flex', gap:24, flexWrap:'wrap' }}>
            {[{v:'6',l:'AI Models'},{v:'355+',l:'Dialect words'},{v:'7',l:'Dialects'},{v:'1,200',l:'Years of history'}].map(s=>(
              <div key={s.l}>
                <div style={{ ...S, fontSize:'clamp(20px,3vw,28px)', color:'var(--gold2)', lineHeight:1 }}>{s.v}</div>
                <div style={{ fontSize:11, color:'rgba(245,237,220,.45)', marginTop:3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARABIC BELT ──────────────────────────────────────── */}
      <div style={{ background:'linear-gradient(135deg,#0a1c28,#1c1007)', padding:'12px 0', borderBottom:'1px solid rgba(255,255,255,.06)', overflow:'hidden' }}>
        <div style={{ display:'flex', overflowX:'auto', scrollbarWidth:'none', whiteSpace:'nowrap', padding:'0 32px' }}>
          {['الدارجة المغربية','·','التاريخ والحضارة','·','الطعام والمطبخ','·','اللهجات الجهوية','·','الحرف التقليدية','·','الذكاء الاصطناعي'].map((t,i)=>(
            <span key={i} style={{ padding:'0 16px', fontFamily:'Amiri,serif', fontSize:t==='·'?12:16, color:t==='·'?'rgba(255,255,255,.15)':'rgba(255,255,255,.45)', direction:'rtl' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── BODY ─────────────────────────────────────────────── */}
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(24px,4vw,48px) clamp(16px,4vw,48px)' }}>

        {/* Model cards */}
        <div style={{ textAlign:'center', marginBottom:'clamp(24px,4vw,44px)' }}>
          <span className="sec-label">AI Capabilities</span>
          <h2 style={{ ...S, fontSize:'clamp(24px,4vw,38px)', color:'var(--ink)', marginBottom:10 }}>6 Models Built for Morocco</h2>
          <p style={{ fontSize:14.5, color:'var(--muted)', maxWidth:520, margin:'0 auto', lineHeight:1.75 }}>
            AI that understands Moroccan culture, dialect and heritage at a depth no generic model can match.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'clamp(10px,2vw,16px)', marginBottom:'clamp(28px,4vw,48px)' }}>
          {AI_MODELS.map(model=>(
            <div key={model.id}
              onClick={()=>setActiveModel(model.id)}
              style={{
                background:'#fff', borderRadius:16, padding:'clamp(18px,2.5vw,24px)',
                border:`1.5px solid ${activeModel===model.id?model.color:'var(--border)'}`,
                cursor:'pointer', transition:'all .26s', position:'relative', overflow:'hidden',
                transform: activeModel===model.id?'translateY(-3px)':'translateY(0)',
                boxShadow: activeModel===model.id?`0 12px 40px ${model.color}18`:'none',
              }}
              onMouseEnter={e=>{if(activeModel!==model.id){e.currentTarget.style.borderColor=model.color+'55';e.currentTarget.style.transform='translateY(-2px)';}}}
              onMouseLeave={e=>{if(activeModel!==model.id){e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='translateY(0)';}}}
            >
              {activeModel === model.id && <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:model.color }}/>}
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:14 }}>
                <div style={{ width:44, height:44, borderRadius:12, background:model.color+'15', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22 }}>
                  {model.icon}
                </div>
                <span style={{ padding:'3px 10px', borderRadius:20, background:model.color+'15', color:model.color, fontSize:9.5, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em' }}>
                  {model.badge}
                </span>
              </div>
              <h3 style={{ ...S, fontSize:17, color:'var(--ink)', marginBottom:8 }}>{model.title}</h3>
              <p style={{ fontSize:12.5, color:'var(--muted)', lineHeight:1.65 }}>{model.desc}</p>
              {activeModel === model.id && (
                <div style={{ marginTop:10, fontSize:11.5, color:model.color, fontWeight:600 }}>● Active</div>
              )}
            </div>
          ))}
        </div>

        {/* Chat Bot */}
        <ChatBot/>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:.4}50%{opacity:1} }
      `}</style>
    </Layout>
  );
}
