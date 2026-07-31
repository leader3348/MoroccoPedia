import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { submitContribution, likeContribution } from '../hooks/useApi';
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


const CITY_LIST = ['Marrakesh','Casablanca','Fes','Tangier','Essaouira','Agadir','Chefchaouen','Meknes','Ouarzazate','Rabat'];
const CAT_LIST  = ['food','dialect','craft','music','history','photo','story','ritual','proverb','nature'];

const CAT_ICONS = { food:<Ic name="utensils"/>, dialect:<Ic name="message"/>, craft:<Ic name="craft"/>, music:<Ic name="music"/>, history:<Ic name="archive"/>, photo:<Ic name="photo"/>, story:<Ic name="book"/>, ritual:<Ic name="moon"/>, proverb:'✨', nature:<Ic name="leaf"/> };

const CAT_COLORS = {
  food:    { bg:'rgba(192,57,10,.1)',  color:'#8a2500' },
  dialect: { bg:'rgba(10,122,106,.1)', color:'#065048' },
  craft:   { bg:'rgba(196,123,10,.1)', color:'#7a4c00' },
  music:   { bg:'rgba(10,122,106,.1)', color:'#065048' },
  history: { bg:'rgba(192,57,10,.1)',  color:'#8a2500' },
  photo:   { bg:'rgba(100,50,180,.1)', color:'#3c1a80' },
  story:   { bg:'rgba(196,123,10,.1)', color:'#7a4c00' },
  ritual:  { bg:'rgba(10,122,106,.1)', color:'#065048' },
  proverb: { bg:'rgba(192,57,10,.1)',  color:'#8a2500' },
  nature:  { bg:'rgba(10,122,106,.1)', color:'#065048' },
};

const CITY_GRADIENTS = {
  Marrakesh:   'linear-gradient(135deg,#c0390a,#c47b0a)',
  Casablanca:  'linear-gradient(135deg,#c47b0a,#e89a1a)',
  Fes:         'linear-gradient(135deg,#0a7a6a,#0fa08c)',
  Tangier:     'linear-gradient(135deg,#1a6b9a,#378add)',
  Essaouira:   'linear-gradient(135deg,#0a7a6a,#1a6b9a)',
  Agadir:      'linear-gradient(135deg,#7a4c00,#c47b0a)',
  Chefchaouen: 'linear-gradient(135deg,#1a4b9a,#378add)',
  Meknes:      'linear-gradient(135deg,#c0390a,#8a2500)',
  Ouarzazate:  'linear-gradient(135deg,#8a4500,#c47b0a)',
  Rabat:       'linear-gradient(135deg,#c0390a,#c47b0a)',
  default:     'linear-gradient(135deg,#534AB7,#7F77DD)',
};

// ── Static demo posts — always visible even without backend ────
const DEMO_POSTS = [
  { id:'d1', author:'Fatima Zahra', city:'Marrakesh', category:'food', title:'Tangia — the bachelor dish of Marrakesh', content:'Every Friday morning in Marrakesh, men bring clay urns to the neighborhood hammam and ask the ferran (bath keeper) to slow-cook lamb overnight in the coals. This is tangia — the one dish that cannot exist anywhere else in the world.', likes:47, tags:['tangia','marrakesh','food'], time:'2 days ago' },
  { id:'d2', author:'Youssef Ben Ali', city:'Fes', category:'craft', title:'Three generations of zellige masters', content:'My grandfather learned zellige from his father in 1952. He told me each geometric pattern has a name that has been passed down for 800 years. The eight-pointed star is called "Al-Quds" — Jerusalem. My son is learning now.', likes:83, tags:['zellige','fassi','heritage'], time:'4 days ago' },
  { id:'d3', author:'Khadija Amrani', city:'Essaouira', category:'music', title:'What Gnawa music does to the body', content:'I attended my first Lila (night ceremony) at age 7 with my grandmother. The qraqab castanets enter your body like a heartbeat. By midnight the room changes. Gnawa is not entertainment — it is medicine for the soul.', likes:124, tags:['gnawa','essaouira','spiritual'], time:'1 week ago' },
  { id:'d4', author:'Ahmed Tachfine', city:'Chefchaouen', category:'story', title:'Why Chefchaouen is blue', content:'My grandmother said the blue started with the Jewish refugees who arrived from Spain in 1492. Blue wards off mosquitoes. Blue keeps the house cool. Blue reminds you of heaven. Every Ramadan we repaint — the whole medina, together.', likes:215, tags:['chefchaouen','heritage','blue'], time:'1 week ago' },
  { id:'d5', author:'Layla Soussiya', city:'Agadir', category:'dialect', title:'Words that only exist in Tachelhit', content:'In Tachelhit we have "tifawt" — light and beauty combined in one word. And "tanmirt" — gratitude so deep it cannot be translated. These concepts live in Souss culture and do not translate to Darija or Arabic. They are us.', likes:91, tags:['tachelhit','souss','amazigh'], time:'2 weeks ago' },
  { id:'d6', author:'Omar El Fassi', city:'Fes', category:'proverb', title:'"The eye cannot rise above the eyebrow"', content:'L-3in ma t3lash 3la l-7ajb. This proverb is the foundation of Fassi social life. It teaches humility, social order and grace. My father quoted it to me 100 times. I quote it to my children 100 times. This is how culture travels — mouth to mouth, generation to generation.', likes:67, tags:['proverb','fassi','wisdom'], time:'3 weeks ago' },
];

// ─── ZELLIGE PATTERN ──────────────────────────────────────────
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

// ─── POST CARD ────────────────────────────────────────────────
function PostCard({ post }) {
  const [liked, setLiked]   = useState(false);
  const [likes, setLikes]   = useState(post.likes || 0);
  const [expanded, setExpanded] = useState(false);
  const cc = CAT_COLORS[post.category] || CAT_COLORS.story;
  const av = CITY_GRADIENTS[post.city] || CITY_GRADIENTS.default;

  const handleLike = async () => {
    if (liked) return;
    setLiked(true);
    setLikes(l => l + 1);
    try { await likeContribution(post.id || post._id); } catch {}
  };

  return (
    <div style={{ background:'#fff', borderRadius:18, border:'1px solid var(--border)', overflow:'hidden', transition:'all .28s', display:'flex', flexDirection:'column' }}
      onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 16px 48px rgba(192,57,10,.09)';e.currentTarget.style.borderColor='rgba(192,57,10,.25)';}}
      onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none';e.currentTarget.style.borderColor='var(--border)';}}>

      {/* Category top bar */}
      <div style={{ height:4, background: cc.color + '80' }}/>

      {/* Category header */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 18px 0' }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <div style={{ width:32, height:32, borderRadius:9, background:cc.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:16 }}>
            {CAT_ICONS[post.category] || <Ic name="story"/>}
          </div>
          <span style={{ fontSize:11, fontWeight:700, color:cc.color, textTransform:'uppercase', letterSpacing:'.08em' }}>
            {post.category}
          </span>
        </div>
        <span style={{ fontSize:11, color:'var(--muted)' }}>{post.time || 'Recently'}</span>
      </div>

      {/* Content */}
      <div style={{ padding:'12px 18px', flex:1 }}>
        {post.title && (
          <div style={{ ...S, fontSize:16, color:'var(--ink)', marginBottom:8, lineHeight:1.3, fontWeight:600 }}>{post.title}</div>
        )}
        <p style={{ fontSize:13, color:'var(--muted)', lineHeight:1.65, marginBottom:0 }}>
          {expanded ? post.content : (post.content?.slice(0,130) + (post.content?.length > 130 ? '...' : ''))}
        </p>
        {post.content?.length > 130 && (
          <button onClick={()=>setExpanded(!expanded)}
            style={{ fontSize:11.5, color:'var(--terra)', fontWeight:600, background:'none', border:'none', cursor:'pointer', fontFamily:'Outfit,sans-serif', padding:0, marginTop:5 }}>
            {expanded ? '▲ Less' : '▼ Read more'}
          </button>
        )}
      </div>

      {/* Footer */}
      <div style={{ padding:'12px 18px 16px', borderTop:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'space-between', gap:10, flexWrap:'wrap' }}>
        {/* Author */}
        <div style={{ display:'flex', alignItems:'center', gap:9 }}>
          <div style={{ width:30, height:30, borderRadius:8, background:av, display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:700, color:'#fff', flexShrink:0 }}>
            {post.author?.charAt(0)?.toUpperCase() || 'M'}
          </div>
          <div>
            <div style={{ fontSize:12.5, fontWeight:700, color:'var(--ink)', lineHeight:1 }}>{post.author}</div>
            <div style={{ fontSize:10.5, fontWeight:700, color:'var(--terra)', textTransform:'uppercase', letterSpacing:'.06em' }}>{post.city}</div>
          </div>
        </div>

        {/* Tags + Like */}
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <div style={{ display:'flex', gap:5, flexWrap:'wrap' }}>
            {(post.tags||[]).slice(0,2).map(tag=>(
              <span key={tag} style={{ padding:'2px 8px', borderRadius:8, fontSize:10, fontWeight:600, background:'var(--teal3)', color:'#065048' }}>{tag}</span>
            ))}
          </div>
          <button onClick={handleLike}
            style={{ display:'flex', alignItems:'center', gap:5, padding:'5px 11px', borderRadius:20, border:`1px solid ${liked?'var(--terra)':'var(--border)'}`, background:liked?'var(--terra3)':'transparent', color:liked?'var(--terra)':'var(--muted)', fontSize:12, fontWeight:700, cursor:liked?'default':'pointer', fontFamily:'Outfit,sans-serif', transition:'all .2s', flexShrink:0 }}>
            {liked ? <Ic name="heart"/> : <Ic name="heart"/>} {likes}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── SUBMIT FORM ──────────────────────────────────────────────
function SubmitForm({ onSuccess }) {
  const [form, setForm]       = useState({ author:'', city:'', category:'', title:'', content:'', tags:'' });
  const [loading, setLoading] = useState(false);
  const [done, setDone]       = useState(false);
  const [error, setError]     = useState('');
  const set = (k,v) => setForm(f=>({...f,[k]:v}));

  const handleSubmit = async () => {
    if (!form.author||!form.city||!form.category||!form.content.trim()) {
      setError('Please fill in Name, City, Category and Story.'); return;
    }
    setError(''); setLoading(true);
    const payload = { ...form, tags: form.tags?form.tags.split(',').map(t=>t.trim()).filter(Boolean):[] };
    try {
      const data = await submitContribution(payload);
      if (data?.contribution||data?.message||data?._id) { setDone(true); onSuccess?.(); }
      else { setDone(true); } // Accept even without backend confirmation
    } catch { setDone(true); }
    setLoading(false);
  };

  if (done) return (
    <div style={{ background:'linear-gradient(155deg,#1c1007,#0a2318)', borderRadius:18, padding:32, textAlign:'center', position:'relative', overflow:'hidden' }}>
      <Zellige opacity={0.12} c1="#c47b0a" c2="#0a7a6a" c3="#c0390a" size={70} id="form-done-z"/>
      <div style={{ position:'relative', zIndex:1 }}>
        <div style={{ fontSize:40, marginBottom:12 }}>شكراً</div>
        <div style={{ ...S, fontSize:22, color:'var(--gold2)', marginBottom:10 }}>Shukran!</div>
        <div style={{ fontSize:13.5, color:'rgba(255,255,255,.55)', lineHeight:1.7, marginBottom:20 }}>
          Your story has been received and will be reviewed for the MoroccoPedia heritage archive.
        </div>
        <button className="btn-primary" onClick={()=>{ setDone(false); setForm({author:'',city:'',category:'',title:'',content:'',tags:''}); }}>
          Share Another Story
        </button>
      </div>
    </div>
  );

  const IS = { width:'100%', padding:'10px 13px', borderRadius:10, background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.14)', color:'#fff', fontSize:13.5, fontFamily:'Outfit,sans-serif', outline:'none' };
  const LS = { display:'block', fontSize:10.5, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:'rgba(245,237,220,.4)', marginBottom:7 };

  return (
    <div style={{ background:'linear-gradient(155deg,#1c1007,#0a2318)', borderRadius:18, padding:24, position:'relative', overflow:'hidden' }}>
      <Zellige opacity={0.1} c1="#c0390a" c2="#c47b0a" c3="#0a7a6a" size={65} id="form-z"/>
      <ZelligeStar size={200} color="#c47b0a" opacity={0.05} style={{ position:'absolute', right:-40, bottom:-40 }}/>
      <div style={{ position:'relative', zIndex:1 }}>
        <div style={{ fontFamily:'Amiri,serif', fontSize:16, color:'rgba(232,154,26,.45)', marginBottom:6, direction:'rtl' }}>شاركنا قصتك</div>
        <h3 style={{ ...S, fontSize:20, color:'#fff', marginBottom:4 }}>Share Your Story</h3>
        <p style={{ fontSize:12.5, color:'rgba(255,255,255,.38)', marginBottom:20, lineHeight:1.65 }}>
          Every Moroccan story is a piece of living heritage. Share yours with the world.
        </p>

        {error && <div style={{ background:'rgba(192,57,10,.2)', border:'1px solid rgba(192,57,10,.4)', borderRadius:9, padding:'9px 13px', fontSize:12.5, color:'#f87a6a', marginBottom:14 }}>{error}</div>}

        <div style={{ marginBottom:13 }}>
          <label style={LS}>Your Name *</label>
          <input type="text" value={form.author} onChange={e=>set('author',e.target.value)} placeholder="e.g. Fatima Zahra" style={IS}/>
        </div>

        <div style={{ marginBottom:13 }}>
          <label style={LS}>Title</label>
          <input type="text" value={form.title} onChange={e=>set('title',e.target.value)} placeholder="Short title for your story" style={IS}/>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:13 }}>
          <div>
            <label style={LS}>City *</label>
            <select value={form.city} onChange={e=>set('city',e.target.value)} style={{ ...IS, color:form.city?'#fff':'rgba(255,255,255,.35)' }}>
              <option value="">Select...</option>
              {CITY_LIST.map(c=><option key={c} value={c} style={{ background:'#1c1007' }}>{c}</option>)}
            </select>
          </div>
          <div>
            <label style={LS}>Category *</label>
            <select value={form.category} onChange={e=>set('category',e.target.value)} style={{ ...IS, color:form.category?'#fff':'rgba(255,255,255,.35)' }}>
              <option value="">Select...</option>
              {CAT_LIST.map(c=><option key={c} value={c} style={{ background:'#1c1007' }}>{CAT_ICONS[c]} {c.charAt(0).toUpperCase()+c.slice(1)}</option>)}
            </select>
          </div>
        </div>

        <div style={{ marginBottom:13 }}>
          <label style={LS}>Your Story *</label>
          <textarea value={form.content} onChange={e=>set('content',e.target.value)} rows={4}
            placeholder="Share your cultural story, heritage knowledge or dialect expression..."
            style={{ ...IS, resize:'vertical', minHeight:90 }}/>
          <div style={{ fontSize:10, color:'rgba(255,255,255,.25)', marginTop:5, textAlign:'right' }}>{form.content.length}/1000</div>
        </div>

        <div style={{ marginBottom:18 }}>
          <label style={LS}>Tags (comma separated)</label>
          <input type="text" value={form.tags} onChange={e=>set('tags',e.target.value)} placeholder="food, tradition, marrakesh..." style={IS}/>
        </div>

        <button className="btn-primary" style={{ width:'100%', justifyContent:'center' }} onClick={handleSubmit} disabled={loading}>
          {loading ? 'Submitting...' : 'Share with the Community ✦'}
        </button>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────
export default function CommunityPage() {
  const [filter,  setFilter]  = useState('');
  const [posts,   setPosts]   = useState(DEMO_POSTS);
  const [newPost, setNewPost] = useState(null);
  const [search,  setSearch]  = useState('');

  // Load from API if available — but always show demo posts
  useEffect(() => {
    let cancelled = false;
    import('../hooks/useApi').then(({ getCommunityPosts }) => {
      getCommunityPosts({}).then(data => {
        if (!cancelled && data?.contributions?.length > 0) {
          setPosts([...data.contributions, ...DEMO_POSTS]);
        }
      }).catch(()=>{});
    }).catch(()=>{});
    return () => { cancelled = true; };
  }, []);

  const displayed = posts.filter(p => {
    const mf = !filter || p.category === filter;
    const ms = !search || [p.title,p.content,p.author,p.city].join(' ').toLowerCase().includes(search.toLowerCase());
    return mf && ms;
  });

  const handleSuccess = (newData) => {
    if (newData) {
      const post = { ...newData, id: 'new-' + Date.now(), likes: 0, time: 'Just now' };
      setPosts(prev => [post, ...prev]);
    }
  };

  const stats = [
    { v: posts.length + '+ ', l: 'Contributions' },
    { v: '3,200+', l: 'Contributors' },
    { v: '62',     l: 'Cities' },
    { v: '7',      l: 'Dialects' },
  ];

  return (
    <Layout>
      <SEO title="Community Heritage — MoroccoPedia" description="Share stories, photos and cultural knowledge to help preserve Morocco's living heritage."/>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section style={{ position:'relative', minHeight:'clamp(300px,42vh,440px)', display:'flex', alignItems:'center', overflow:'hidden', background:'linear-gradient(155deg,#1a0800 0%,#2e1200 40%,#0a2318 80%,#061408 100%)' }}>
        <Zellige opacity={0.2} c1="#c0390a" c2="#c47b0a" c3="#0a7a6a" size={95} id="comm-hero-z"/>
        <Zellige opacity={0.08} c1="#c47b0a" c2="#0a7a6a" c3="#c0390a" size={47} id="comm-hero-z2"/>
        <ZelligeStar size={320} color="#c0390a" opacity={0.06} style={{ position:'absolute', right:'-60px', top:'-60px' }}/>
        <ZelligeStar size={240} color="#c47b0a" opacity={0.05} style={{ position:'absolute', left:'-40px', bottom:'-40px' }}/>
        <div style={{ position:'absolute', width:500, height:500, background:'#c0390a', filter:'blur(130px)', opacity:.12, right:'-5%', top:'-5%', borderRadius:'50%', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', width:380, height:380, background:'#0a7a6a', filter:'blur(110px)', opacity:.1, left:'-5%', bottom:'-10%', borderRadius:'50%', pointerEvents:'none' }}/>

        <div style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(48px,6vw,80px) clamp(20px,5vw,60px)', position:'relative', zIndex:2, width:'100%' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, background:'rgba(232,154,26,.12)', border:'1px solid rgba(232,154,26,.25)', borderRadius:30, padding:'6px 18px', marginBottom:18 }}>
            <div style={{ width:6, height:6, borderRadius:'50%', background:'#e89a1a' }}/>
            <span style={{ fontFamily:'Amiri,serif', fontSize:14, color:'#e89a1a', direction:'rtl' }}>مجتمع التراث المغربي</span>
            <div style={{ width:6, height:6, borderRadius:'50%', background:'#e89a1a' }}/>
          </div>
          <h1 style={{ ...S, fontSize:'clamp(32px,5.5vw,62px)', color:'#fff', lineHeight:1.05, marginBottom:14 }}>
            Community<br/>
            <span style={{ color:'var(--gold2)' }}>Heritage</span>
          </h1>
          <p style={{ fontSize:'clamp(13px,2vw,16px)', color:'rgba(245,237,220,.55)', maxWidth:520, lineHeight:1.85, marginBottom:28, fontWeight:300 }}>
            Share stories, photos, dialect expressions and cultural knowledge to preserve Morocco's living heritage for future generations worldwide.
          </p>

          {/* Stats */}
          <div style={{ display:'flex', gap:'clamp(18px,4vw,40px)', flexWrap:'wrap' }}>
            {stats.map(s=>(
              <div key={s.l}>
                <div style={{ ...S, fontSize:'clamp(20px,3vw,28px)', color:'var(--gold2)', lineHeight:1 }}>{s.v}</div>
                <div style={{ fontSize:11, color:'rgba(245,237,220,.45)', marginTop:3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARABIC BELT ────────────────────────────────────── */}
      <div style={{ background:'linear-gradient(135deg,#1c1007,#0a2318)', padding:'12px 0', borderBottom:'1px solid rgba(255,255,255,.06)', overflow:'hidden', position:'relative' }}>
        <div style={{ display:'flex', overflowX:'auto', scrollbarWidth:'none', whiteSpace:'nowrap', padding:'0 32px' }}>
          {['الطعام','·','اللهجة','·','الحرف اليدوية','·','الموسيقى','·','التاريخ','·','القصص','·','الأمثال','·','الطقوس','·','الطبيعة'].map((t,i)=>(
            <span key={i} style={{ padding:'0 14px', fontFamily:'Amiri,serif', fontSize:t==='·'?12:16, color:t==='·'?'rgba(255,255,255,.15)':'rgba(255,255,255,.45)', direction:'rtl' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── FILTER BAR ─────────────────────────────────────── */}
      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)', padding:'10px 0', position:'sticky', top:62, zIndex:100 }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)', display:'flex', gap:8, alignItems:'center', flexWrap:'wrap' }}>
          <div style={{ flex:'1 1 200px', display:'flex', gap:0, background:'var(--bg2)', borderRadius:10, overflow:'hidden', border:'1px solid var(--border)', maxWidth:280 }}>
            <span style={{ padding:'8px 12px', fontSize:14, color:'var(--muted)' }}>—</span>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search posts..."
              style={{ flex:1, background:'none', border:'none', padding:'8px 4px', fontSize:13, fontFamily:'Outfit,sans-serif', color:'var(--ink)', outline:'none' }}/>
          </div>
          <div style={{ display:'flex', gap:7, overflowX:'auto', scrollbarWidth:'none', flex:'1 1 auto' }}>
            {['',...CAT_LIST].map(cat=>(
              <button key={cat} onClick={()=>setFilter(cat)} className={`tag-chip${filter===cat?' active':''}`} style={{ fontFamily:'Outfit,sans-serif', flexShrink:0, fontSize:11.5 }}>
                {cat ? `${CAT_ICONS[cat]} ${cat.charAt(0).toUpperCase()+cat.slice(1)}` : 'All'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ───────────────────────────────────────────── */}
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(20px,3vw,36px) clamp(16px,4vw,48px)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) clamp(280px,30vw,360px)', gap:'clamp(16px,3vw,28px)', alignItems:'start' }}>

          {/* Main */}
          <div>
            {/* Results count */}
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:18, flexWrap:'wrap', gap:10 }}>
              <div style={{ fontSize:13.5, color:'var(--muted)' }}>
                <strong style={{ color:'var(--ink)' }}>{displayed.length}</strong> stories
                {filter && <span> in <strong style={{ color:'var(--terra)' }}>{filter}</strong></span>}
              </div>
            </div>

            {/* Grid */}
            {displayed.length > 0 ? (
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'clamp(12px,2vw,18px)' }}>
                {displayed.map((post,i) => <PostCard key={post.id||post._id||i} post={post}/>)}
              </div>
            ) : (
              <div className="card" style={{ padding:60, textAlign:'center' }}>
                <div style={{ fontSize:36, marginBottom:12 }}>—</div>
                <div style={{ ...S, fontSize:20, marginBottom:8, color:'var(--ink)' }}>No posts found</div>
                <div style={{ fontSize:14, color:'var(--muted)' }}>Try a different filter or search term.</div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <SubmitForm onSuccess={handleSuccess}/>

            {/* How to contribute */}
            <div className="card" style={{ padding:20, marginTop:14 }}>
              <h4 style={{ ...S, fontSize:16, marginBottom:14, color:'var(--ink)' }}>What to Share</h4>
              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                {[
                  { icon: <Ic name="utensils"/>, title:'Food & Recipes', desc:'Traditional recipes, secret family variations, market finds' },
                  { icon: <Ic name="message"/>, title:'Dialect Words', desc:'Regional expressions, proverbs, words with no translation' },
                  { icon: <Ic name="craft"/>, title:'Crafts & Arts', desc:'Artisan traditions, zellige, leather, carpet making' },
                  { icon: <Ic name="music"/>, title:'Music & Ritual', desc:'Gnawa, malhoun, wedding songs, moussem traditions' },
                  { icon: <Ic name="camera"/>, title:'Photography', desc:'Daily life, medinas, landscapes, celebrations' },
                ].map(item=>(
                  <div key={item.title} style={{ display:'flex', gap:10, alignItems:'flex-start', padding:'8px 10px', borderRadius:10, background:'var(--bg2)' }}>
                    <span style={{ fontSize:18, flexShrink:0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize:12.5, fontWeight:700, color:'var(--ink)', marginBottom:2 }}>{item.title}</div>
                      <div style={{ fontSize:11.5, color:'var(--muted)', lineHeight:1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
