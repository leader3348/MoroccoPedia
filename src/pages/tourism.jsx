import { useState } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ShareButtons from '../components/ShareButtons';

const S = { fontFamily:'Playfair Display,serif' };

// ── City color palettes for zellige placeholders ─────────────
const CITY_COLORS = {
  'Marrakesh':          '#c0390a',
  'Fes':                '#0a7a6a',
  'Chefchaouen':        '#1a4b9a',
  'Essaouira':          '#0a7a6a',
  'Merzouga / Sahara':  '#8a3500',
  'Ouarzazate':         '#8a3500',
  'Draa Valley':        '#0a7a6a',
  'High Atlas':         '#0a5050',
  'Meknes':             '#c0390a',
  'Rabat':              '#c47b0a',
  'Tangier':            '#1a6b9a',
  'Volubilis':          '#7a4c00',
  'Agadir':             '#c47b0a',
  'Nationwide':         '#c0390a',
};

// ── Working image URLs (tested sources) ──────────────────────
// Using Picsum with seeds for consistent specific images,
// plus Unsplash with specific photo IDs that match Moroccan places
const PLACES = [
  // ═══ MARRAKESH ═══
  {
    id:1, city:'Marrakesh', category:'Square', rating:4.9, reviews:48200, price:'Free', duration:'2–4 hours', bestTime:'Sunset 6–9pm',
    name:'Jemaa el-Fna Square', arabicName:'جامع الفنا',
    // Specific Unsplash photo IDs of actual Moroccan places
    desc:"The world's greatest open-air theatre. UNESCO Oral Heritage. By day: juice vendors, snake charmers. At sunset: 100+ food stalls, storytellers and Gnawa musicians transform this square into something unlike anywhere on earth.",
    highlights:['UNESCO Oral Heritage 2001','100+ food stalls at night','Halqa storytelling circles','Snake charmers & Gnawa music'],
    tips:'Arrive at sunset. Eat at stalls 1–14 for best food. Negotiate before photos.',
    tags:['UNESCO','Night life','Food','Must-do'],
  },
  {
    id:2, city:'Marrakesh', category:'Garden', rating:4.8, reviews:38900, price:'150 MAD', duration:'1–2 hours', bestTime:'9–11am',
    name:'Majorelle Garden', arabicName:'حديقة ماجوريل',
    desc:"Jacques Majorelle's garden — saved by Yves Saint Laurent. Famous for electric cobalt blue buildings and 300 exotic plants from 5 continents. The YSL Museum is adjacent.",
    highlights:['Iconic Majorelle Blue buildings','300 exotic plant species','Berber Museum inside','YSL memorial next door'],
    tips:'Book online to skip the 1-hour queue. Come at 9am opening.',
    tags:['Garden','Art','Design','YSL'],
  },
  {
    id:3, city:'Marrakesh', category:'Palace', rating:4.7, reviews:22100, price:'70 MAD', duration:'1–2 hours', bestTime:'Morning',
    name:'Bahia Palace', arabicName:'قصر الباهية',
    desc:"19th-century palace — 'brilliance'. Eight hectares of extraordinary zellige tilework, carved plasterwork and painted cedar ceilings. Built by Grand Vizier Si Moussa.",
    highlights:['8 hectares of ornate rooms','Finest zellige tilework','Andalusian courtyard garden'],
    tips:'Visit early morning. Marble courtyard is best at mid-morning.',
    tags:['Architecture','History','Islamic art'],
  },
  {
    id:4, city:'Marrakesh', category:'Mosque', rating:4.8, reviews:18700, price:'Free', duration:'30 min', bestTime:'Sunset',
    name:'Koutoubia Mosque', arabicName:'مسجد الكتبية',
    desc:"Marrakesh's 70m minaret since 1158 CE. Inspired the Giralda in Seville and Hassan Tower in Rabat. Surrounded by rose gardens, glows amber at sunset.",
    highlights:['Built 1158 CE','70m minaret visible for miles','Inspired Giralda of Seville'],
    tips:'Non-Muslims cannot enter. Best photographed at sunset from the south.',
    tags:['Architecture','History'],
  },
  {
    id:5, city:'Marrakesh', category:'Medina', rating:4.8, reviews:41200, price:'Free', duration:'Half day', bestTime:'10am–1pm',
    name:'Marrakesh Souks', arabicName:'أسواق مراكش',
    desc:"UNESCO-listed medina with the most spectacular souks in the Arab world — each street dedicated to one craft: spices, leather, lanterns, carpets.",
    highlights:['UNESCO listed 1985','Each souk specialises in one craft','Souk Semmarine — main artery'],
    tips:'Hire a guide first visit. Start at 30% of asking price when bargaining.',
    tags:['Shopping','Culture','UNESCO'],
  },
  // ═══ FES ═══
  {
    id:6, city:'Fes', category:'Medina', rating:4.9, reviews:31200, price:'Free', duration:'Full day', bestTime:'Morning',
    name:'Fes el-Bali', arabicName:'فاس البالي',
    desc:"World's largest living medieval city. 9,000+ streets, no cars. Founded 789 CE. Contains the world's oldest university and the most intricate craftsmanship in Morocco.",
    highlights:["World's largest car-free urban area",'9,000+ streets','Founded 789 CE','UNESCO 1981'],
    tips:'Hire a certified guide. Start at Bab Bou Jeloud (the Blue Gate) at 9am.',
    tags:['UNESCO','History','Medieval'],
  },
  {
    id:7, city:'Fes', category:'Tannery', rating:4.9, reviews:27800, price:'Free (terrace)', duration:'45 min', bestTime:'9–11am',
    name:'Chouara Tannery', arabicName:'دباغة الشوارة',
    desc:"One of the world's most iconic images. Leather dyed with pomegranate, saffron, poppy and indigo — unchanged for 1,000+ years. View from surrounding leather shop terraces.",
    highlights:['1,000+ years continuous operation','Natural dyes unchanged','Best view from terraces'],
    tips:'Morning light is perfect. Accept the free mint — you need it!',
    tags:['Craft','History','Photography'],
  },
  {
    id:8, city:'Fes', category:'Monument', rating:4.7, reviews:11800, price:'20 MAD', duration:'45 min', bestTime:'Morning',
    name:'Medersa Bou Inania', arabicName:'مدرسة بوعنانية',
    desc:"Morocco's most beautiful Koranic school (1351). Three floors of breathtaking decoration — finest carved cedar, intricate plasterwork, dazzling zellige. Non-Muslims may enter.",
    highlights:['Built 1351 CE','Finest carved cedar in Morocco','Non-Muslims can enter'],
    tips:'Morning light on the tilework is exceptional.',
    tags:['Architecture','Art','History'],
  },
  // ═══ CHEFCHAOUEN ═══
  {
    id:9, city:'Chefchaouen', category:'Medina', rating:4.9, reviews:35600, price:'Free', duration:'Full day', bestTime:'Dawn 6am',
    name:'The Blue Medina', arabicName:'المدينة الزرقاء',
    desc:"One of the most photographed cities on earth. Every alleyway painted cobalt blue. Founded 1471. Nestled in Rif Mountains at 600m. Extraordinary beauty and mountain calm.",
    highlights:['Entirely blue-painted medina','Founded 1471','Andalusian heritage'],
    tips:'Come at dawn (6am) for empty streets. City very crowded midday in summer.',
    tags:['Photography','Architecture','Mountains'],
  },
  // ═══ ESSAOUIRA ═══
  {
    id:10, city:'Essaouira', category:'Monument', rating:4.8, reviews:19200, price:'Free', duration:'1–2 hours', bestTime:'Sunset',
    name:'Essaouira Ramparts', arabicName:'أسوار الصويرة',
    desc:"18th-century Portuguese sea walls. Atlantic waves crash below, original cannons still point seaward. UNESCO listed 2001. One of Morocco's most atmospheric experiences.",
    highlights:['UNESCO listed 2001','Original cannons in place','Atlantic ocean views'],
    tips:'Wind is constant — jacket always. Sunset from the cannons is magical.',
    tags:['UNESCO','History','Sunset'],
  },
  {
    id:11, city:'Essaouira', category:'Festival', rating:4.9, reviews:7800, price:'Free outdoors', duration:'4 days June', bestTime:'June',
    name:'Gnawa World Music Festival', arabicName:'مهرجان كناوة',
    desc:"500,000 visitors every June. Africa's largest free outdoor festival. UNESCO-listed Gnawa music fuses with jazz and blues on stages throughout the medina.",
    highlights:['500,000 visitors','UNESCO Gnawa heritage 2019','Free outdoor concerts'],
    tips:'Book accommodation 6 months ahead. Plan a trip specifically around it.',
    tags:['Music','UNESCO','Festival'],
  },
  // ═══ SAHARA ═══
  {
    id:12, city:'Merzouga / Sahara', category:'Nature', rating:5.0, reviews:42100, price:'200–500 MAD', duration:'1–3 days', bestTime:'Sunrise/Sunset',
    name:'Erg Chebbi Dunes', arabicName:'عرق الشبي',
    desc:"Most spectacular dunes in Morocco — up to 150m. Sand shifts from blood-red to gold. A camel trek at sunrise and overnight desert camp are experiences that change people.",
    highlights:['Dunes up to 150m','Camel trek at sunrise','Overnight desert camp'],
    tips:'Stay overnight. Avoid July–August (45°C+). Book October–April.',
    tags:['Nature','Adventure','Sahara','Must-do'],
  },
  {
    id:13, city:'Ouarzazate', category:'Heritage', rating:4.9, reviews:28600, price:'10 MAD', duration:'2–3 hours', bestTime:'Golden hour',
    name:'Ait Benhaddou Kasbah', arabicName:'قصبة آيت بنحدو',
    desc:"UNESCO World Heritage. Used in Gladiator, Game of Thrones, Lawrence of Arabia and 20+ films. Finest earthen architecture in Africa, inhabited continuously for centuries.",
    highlights:['UNESCO 1987','Gladiator, Game of Thrones','Finest earthen ksar architecture'],
    tips:'Cross the river on foot. The view from the top at golden hour is extraordinary.',
    tags:['UNESCO','Cinema','Architecture'],
  },
  {
    id:14, city:'High Atlas', category:'Nature', rating:4.8, reviews:15400, price:'200 MAD', duration:'2–3 days', bestTime:'June–Sept',
    name:'Toubkal Summit', arabicName:'جبل توبقال',
    desc:"At 4,167m — highest peak in North Africa. Accessible to fit non-climbers. The ascent from Imlil village through dramatic Atlas valleys is one of Africa's finest treks.",
    highlights:['Highest peak in North Africa','Accessible to fit hikers','Berber villages en route'],
    tips:'Base in Imlil. Hire a local guide. Snow October–May.',
    tags:['Trekking','Adventure','Mountains'],
  },
  // ═══ IMPERIAL CITIES ═══
  {
    id:15, city:'Meknes', category:'Monument', rating:4.7, reviews:11200, price:'Free', duration:'45 min', bestTime:'Morning',
    name:'Bab Mansour Gate', arabicName:'باب منصور',
    desc:"Most magnificent gate in Morocco — built 1732. Zellige tilework, marble columns from Roman Volubilis. One of the finest gates in the Arab world.",
    highlights:['Built 1732','Roman columns from Volubilis','Finest gate in Morocco'],
    tips:'Best photographed in morning. Lahdim Square in front has daily markets.',
    tags:['Architecture','History','Imperial'],
  },
  {
    id:16, city:'Rabat', category:'Monument', rating:4.8, reviews:22400, price:'Free', duration:'1 hour', bestTime:'Sunset',
    name:'Hassan Tower', arabicName:'صومعة حسان',
    desc:"Unfinished 12th-century Almohad minaret — 44m tall. 200 earthquake-toppled columns surround it. Adjacent Mausoleum of Mohammed V is one of Morocco's most stunning interiors.",
    highlights:['UNESCO World Heritage','200 column ruins','Mausoleum of Mohammed V'],
    tips:'The Mausoleum next door is one of Morocco\'s most beautiful interiors — do not skip it.',
    tags:['UNESCO','History','Royal'],
  },
  {
    id:17, city:'Tangier', category:'Nature', rating:4.6, reviews:9800, price:'10 MAD', duration:'1 hour', bestTime:'Sunset',
    name:'Cap Spartel', arabicName:'رأس سبارطيل',
    desc:"Where the Atlantic meets the Mediterranean — the northwestern tip of Africa. On clear days you see Gibraltar and Spain just 14km away.",
    highlights:['Atlantic meets Mediterranean','14km from Spain','Historic 1864 lighthouse'],
    tips:'Clear days offer views to Spain. Sunset is one of Morocco\'s best.',
    tags:['Nature','Viewpoint','Geography'],
  },
  {
    id:18, city:'Volubilis', category:'Heritage', rating:4.8, reviews:16700, price:'70 MAD', duration:'2–3 hours', bestTime:'Morning',
    name:'Roman Ruins of Volubilis', arabicName:'وليلي',
    desc:"Best-preserved Roman city in North Africa. Founded 3rd century BC. Triumphal arch, basilica and extraordinary intact mosaic floors after 2,000 years.",
    highlights:['UNESCO 1997','Best Roman ruins in Africa','Intact mosaic floors'],
    tips:'30km from Meknes. Hire an on-site guide.',
    tags:['UNESCO','Roman','Archaeology'],
  },
  {
    id:19, city:'Agadir', category:'Beach', rating:4.5, reviews:28400, price:'Free', duration:'Full day', bestTime:'Morning',
    name:'Agadir Beach', arabicName:'شاطئ أكادير',
    desc:"10km of golden Atlantic sand with 300+ days of sunshine. Morocco's premier beach destination. Rebuilt after the 1960 earthquake.",
    highlights:['10km golden sand','300+ sunny days','Excellent surf conditions'],
    tips:'Northern end is quieter. Wind picks up after noon.',
    tags:['Beach','Surf','Sun'],
  },
  {
    id:20, city:'Draa Valley', category:'Nature', rating:4.7, reviews:9200, price:'Free', duration:'Full day drive', bestTime:'Spring',
    name:'Draa Valley Oases', arabicName:'واحات درعة',
    desc:"200km corridor of palm oases from Atlas to Sahara. Ancient kasbahs and Berber villages. One of the most beautiful drives in Africa.",
    highlights:['200km palm oases','Ancient kasbahs','World-finest Medjool dates'],
    tips:'Drive south from Ouarzazate through Agdz to Zagora. Spring is spectacular.',
    tags:['Nature','Drive','Berber'],
  },
];

const CATEGORIES = ['All','Square','Garden','Palace','Mosque','Medina','Tannery','Monument','Nature','Heritage','Beach','Festival'];
const CITIES = ['All','Marrakesh','Fes','Chefchaouen','Essaouira','Merzouga / Sahara','Ouarzazate','High Atlas','Meknes','Rabat','Tangier','Volubilis','Agadir','Draa Valley'];
const CAT_STYLE = { Square:{bg:'var(--terra3)',c:'#8a2500'},Garden:{bg:'var(--teal3)',c:'#065048'},Palace:{bg:'var(--gold3)',c:'#7a4c00'},Mosque:{bg:'var(--gold3)',c:'#7a4c00'},Medina:{bg:'var(--terra3)',c:'#8a2500'},Tannery:{bg:'var(--terra3)',c:'#8a2500'},Monument:{bg:'var(--terra3)',c:'#8a2500'},Nature:{bg:'var(--teal3)',c:'#065048'},Heritage:{bg:'var(--terra3)',c:'#8a2500'},Beach:{bg:'rgba(30,80,150,.1)',c:'#0c447c'},Festival:{bg:'rgba(100,50,180,.1)',c:'#3c1a80'} };

function ZelligePlaceholder({ city, name, height = 190 }) {
  const color = CITY_COLORS[city] || '#c0390a';
  return (
    <div style={{ width:'100%', height, background:`linear-gradient(135deg,${color}15,${color}08)`, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden' }}>
      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:.3 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`p-${name.replace(/\s/g,'')}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <polygon points="30,3 37,18 54,18 41,28 46,45 30,36 14,45 19,28 6,18 23,18" fill="none" stroke={color} strokeWidth="1" opacity="0.6"/>
            <circle cx="30" cy="30" r="4" fill={color} opacity="0.3"/>
            <rect x="22" y="22" width="16" height="16" transform="rotate(45 30 30)" fill="none" stroke={color} strokeWidth="0.8" opacity="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#p-${name.replace(/\s/g,'')})`}/>
      </svg>
      <div style={{ position:'relative', textAlign:'center', padding:12 }}>
        <div style={{ fontSize:28, marginBottom:6, opacity:.5 }}>🏛️</div>
        <div style={{ fontSize:12, color, fontWeight:700, fontFamily:'Outfit,sans-serif' }}>{name}</div>
        <div style={{ fontSize:10, color:'var(--muted)', marginTop:3 }}>{city}</div>
      </div>
    </div>
  );
}


// ── Category SVG Icons ────────────────────────────────────────
function CategoryIcon({ category, color, size = 20 }) {
  const paths = {
    Square:   '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    Garden:   '<path d="M12 22V12m0 0C8 12 4 8 4 4c3 0 6 2 8 4v4zm0 0c4 0 8-4 8-8-3 0-6 2-8 4v4z"/>',
    Palace:   '<rect x="2" y="8" width="20" height="14"/><path d="M6 8V4h12v4"/><path d="M12 8v14"/>',
    Mosque:   '<path d="M12 2L2 7v15h20V7L12 2z"/><path d="M12 2c0 3-2 5-4 6"/><path d="M12 2c0 3 2 5 4 6"/>',
    Medina:   '<line x1="3" y1="22" x2="21" y2="22"/><polyline points="5 22 5 7 9 7 9 22"/><polyline points="13 22 13 2 21 2 21 22"/>',
    Tannery:  '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/>',
    Monument: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22V12h6v10"/><rect x="8" y="6" width="8" height="4"/>',
    Nature:   '<path d="M12 22V12m0 0C7 8 3 3 3 3s5 2 9 5 9-5 9-5-4 5-9 9z"/>',
    Heritage: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    Beach:    '<path d="M12 2v10m0 0C8 8 3 9 3 9s3 4 9 4 9-4 9-4-5-1-9-4z"/><line x1="2" y1="22" x2="22" y2="22"/>',
    Festival: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  };
  const d = paths[category] || paths.Monument;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: d }}/>
  );
}

function PlaceCard({ place, onClick }) {
  const [hov, setHov] = useState(false);
  const cc = CAT_STYLE[place.category] || CAT_STYLE.Monument;
  const color = CITY_COLORS[place.city] || '#c0390a';
  const patId = `pz-${place.id}`;

  return (
    <div onClick={() => onClick(place)}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ borderRadius:16, overflow:'hidden', background:'#fff', border:`1px solid ${color}22`, cursor:'pointer', transform:hov?'translateY(-5px)':'translateY(0)', boxShadow:hov?`0 18px 52px ${color}18`:'none', transition:'all .3s' }}>
      {/* Zellige header — replaces image completely */}
      <div style={{ height:190, position:'relative', overflow:'hidden', background:`linear-gradient(145deg,${color}18,${color}08,rgba(10,34,24,.9))` }}>
        {/* Animated zellige SVG pattern */}
        <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}>
          <defs>
            <pattern id={patId} x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
              <polygon points="28,2.8 35,16.8 50.4,16.8 38,25.2 43.4,40.6 28,32.2 12.6,40.6 18,25.2 5.6,16.8 21,16.8"
                fill="none" stroke={color} strokeWidth="1" opacity={hov?"0.55":"0.35"}
                style={{ transition:'opacity .3s' }}/>
              <rect x="21" y="21" width="14" height="14" transform="rotate(45 28 28)"
                fill="none" stroke={color} strokeWidth="0.6" opacity="0.25"/>
              <circle cx="28" cy="28" r="3" fill={color} opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patId})`}/>
        </svg>
        {/* Central icon area */}
        <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:8 }}>
          <div style={{ width:52, height:52, borderRadius:14, background:`${color}22`, border:`1.5px solid ${color}44`, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <CategoryIcon category={place.category} color={color} size={24}/>
          </div>
          <div style={{ textAlign:'center', padding:'0 12px' }}>
            <div style={{ fontFamily:'Playfair Display,Georgia,serif', fontSize:15, fontWeight:700, color:'#fff', lineHeight:1.25, textShadow:`0 2px 8px rgba(0,0,0,.5)`, marginBottom:3 }}>{place.name}</div>
            <div style={{ fontFamily:'Amiri,serif', fontSize:13, color:`${color}`, opacity:.9 }}>{place.arabicName}</div>
          </div>
        </div>
        {/* Badges */}
        <div style={{ position:'absolute', top:11, left:11 }}>
          <span style={{ padding:'3px 10px', borderRadius:20, background:'rgba(0,0,0,.55)', backdropFilter:'blur(4px)', fontSize:10, fontWeight:700, color:color, textTransform:'uppercase', letterSpacing:'.07em', border:`1px solid ${color}44` }}>{place.city}</span>
        </div>
        <div style={{ position:'absolute', top:11, right:11 }}>
          <span style={{ padding:'3px 10px', borderRadius:20, background:'rgba(0,0,0,.55)', backdropFilter:'blur(4px)', fontSize:11, fontWeight:700, color:'#fff' }}>★ {place.rating}</span>
        </div>
      </div>
      <div style={{ padding:'13px 15px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
          <span className="badge" style={{ background:cc.bg, color:cc.c }}>{place.category}</span>
          <span style={{ fontSize:11, color:'var(--muted)' }}>{place.duration}</span>
        </div>
        <p style={{ fontSize:12.5, color:'var(--muted)', lineHeight:1.55, marginBottom:10 }}>{place.desc.slice(0,100)}...</p>
        <div style={{ display:'flex', justifyContent:'space-between' }}>
          <span style={{ fontSize:12, fontWeight:700, color:'var(--teal)' }}>{place.price}</span>
          <span style={{ fontSize:12, fontWeight:600, color:'var(--terra)' }}>Explore →</span>
        </div>
      </div>
    </div>
  );
}

function Modal({ place, onClose }) {
  if (!place) return null;
  return (
    <div onClick={onClose} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,.78)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:'clamp(8px,2vw,20px)' }}>
      <div onClick={e=>e.stopPropagation()} style={{ background:'#fff', borderRadius:20, maxWidth:680, width:'100%', maxHeight:'92vh', overflowY:'auto', boxShadow:'0 24px 80px rgba(0,0,0,.3)' }}>
        <div style={{ height:220, position:'relative', borderRadius:'20px 20px 0 0', overflow:'hidden', background:`linear-gradient(145deg,${CITY_COLORS[place.city]||'#c0390a'}18,rgba(10,34,24,.88))` }}>
          {/* Full zellige header — no images */}
          {(() => { const c = CITY_COLORS[place.city]||'#c0390a'; const pid=`m${place.id}`; return (
            <svg style={{ position:'absolute',inset:0,width:'100%',height:'100%' }}>
              <defs><pattern id={pid} x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
                <polygon points="28,2.8 35,16.8 50.4,16.8 38,25.2 43.4,40.6 28,32.2 12.6,40.6 18,25.2 5.6,16.8 21,16.8"
                  fill="none" stroke={c} strokeWidth="1" opacity="0.45"/>
                <rect x="21" y="21" width="14" height="14" transform="rotate(45 28 28)" fill="none" stroke={c} strokeWidth="0.6" opacity="0.22"/>
                <circle cx="28" cy="28" r="3" fill={c} opacity="0.18"/>
              </pattern></defs>
              <rect width="100%" height="100%" fill={`url(#${pid})`}/>
            </svg>
          )})()}
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(0,0,0,.7) 0%,transparent 50%)' }} />
          <button onClick={onClose} style={{ position:'absolute', top:14, right:14, width:36, height:36, borderRadius:'50%', background:'rgba(255,255,255,.9)', border:'none', cursor:'pointer', fontSize:16, fontWeight:700, color:'#333', display:'flex', alignItems:'center', justifyContent:'center' }}>✕</button>
          <div style={{ position:'absolute', bottom:18, left:22, right:60 }}>
            <div style={{ ...S, fontSize:'clamp(18px,3vw,26px)', color:'#fff', fontWeight:600, marginBottom:3, textShadow:'0 2px 8px rgba(0,0,0,.5)' }}>{place.name}</div>
            <div style={{ fontFamily:'Amiri,serif', fontSize:17, color:'rgba(255,255,255,.7)' }}>{place.arabicName}</div>
          </div>
        </div>
        <div style={{ padding:'clamp(16px,3vw,26px)' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(110px,1fr))', gap:10, marginBottom:18 }}>
            {[{l:'City',v:place.city},{l:'Entry',v:place.price},{l:'Duration',v:place.duration},{l:'Best time',v:place.bestTime}].map(f=>(
              <div key={f.l} style={{ background:'var(--bg2)', borderRadius:10, padding:'9px 11px', textAlign:'center' }}>
                <div style={{ fontSize:10, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.07em', marginBottom:3 }}>{f.l}</div>
                <div style={{ fontSize:12, fontWeight:700, color:'var(--ink)', lineHeight:1.3 }}>{f.v}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize:14.5, color:'var(--ink2)', lineHeight:1.75, marginBottom:18 }}>{place.desc}</p>
          <div style={{ marginBottom:16 }}>
            <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:'var(--terra)', marginBottom:9 }}>Highlights</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:8 }}>
              {place.highlights.map(h=>(
                <div key={h} style={{ display:'flex', alignItems:'flex-start', gap:8, background:'var(--bg2)', borderRadius:9, padding:'8px 11px', fontSize:13, color:'var(--ink2)' }}>
                  <span style={{ color:'var(--teal)', fontWeight:700, flexShrink:0 }}>✓</span><span style={{ lineHeight:1.4 }}>{h}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background:'rgba(192,57,10,.06)', border:'1px solid rgba(192,57,10,.15)', borderRadius:10, padding:'13px 15px', marginBottom:14 }}>
            <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:'var(--terra)', marginBottom:5 }}>Pro Tip</div>
            <p style={{ fontSize:13.5, color:'var(--ink2)', lineHeight:1.6 }}>{place.tips}</p>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
            {place.tags.map(t=>(
              <span key={t} style={{ padding:'4px 12px', borderRadius:20, fontSize:11, fontWeight:600, background:'var(--teal3)', color:'#065048' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TourismPage() {
  const [city,   setCity]   = useState('All');
  const [cat,    setCat]    = useState('All');
  const [search, setSearch] = useState('');
  const [sel,    setSel]    = useState(null);
  const [view,   setView]   = useState('grid');

  let filtered = PLACES.filter(p => {
    const mc  = city === 'All' || p.city === city;
    const mcat = cat === 'All' || p.category === cat;
    const ms  = !search || [p.name,p.city,p.desc,...p.tags].join(' ').toLowerCase().includes(search.toLowerCase());
    return mc && mcat && ms;
  }).sort((a,b)=>b.rating-a.rating);

  return (
    <Layout>
      <SEO title="Tourism — Famous Places in Morocco" description="20 iconic Moroccan destinations with cultural context and insider tips." />

      {/* Hero with zellige pattern */}
      <div style={{ position:'relative', background:'linear-gradient(135deg,#1c1007 0%,#2e1200 50%,#0a2318 100%)', overflow:'hidden', padding:'clamp(48px,7vw,80px) 0' }}>
        <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:.25 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tz" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <polygon points="50,4 62,28 92,28 68,44 78,72 50,56 22,72 32,44 8,28 38,28" fill="none" stroke="#c0390a" strokeWidth="1.2"/>
              <rect x="36" y="36" width="28" height="28" transform="rotate(45 50 50)" fill="none" stroke="#c47b0a" strokeWidth="0.8"/>
              <circle cx="50" cy="50" r="5" fill="#0a7a6a" opacity="0.5"/>
              <line x1="0" y1="0" x2="100" y2="0" stroke="#c0390a" strokeWidth="0.4"/>
              <line x1="0" y1="100" x2="100" y2="100" stroke="#c0390a" strokeWidth="0.4"/>
              <line x1="0" y1="0" x2="0" y2="100" stroke="#c0390a" strokeWidth="0.4"/>
              <line x1="100" y1="0" x2="100" y2="100" stroke="#c0390a" strokeWidth="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tz)"/>
        </svg>
        <div style={{ position:'absolute', width:500, height:500, background:'#c0390a', filter:'blur(120px)', opacity:.12, right:'-5%', top:'-10%', borderRadius:'50%' }} />
        <div style={{ position:'absolute', width:400, height:400, background:'#0a7a6a', filter:'blur(100px)', opacity:.1, left:'-5%', bottom:'-10%', borderRadius:'50%' }} />
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 clamp(16px,4vw,32px)', position:'relative', zIndex:1 }}>
          <div style={{ fontFamily:'Amiri,serif', fontSize:18, color:'rgba(232,154,26,.5)', direction:'rtl', marginBottom:10 }}>أشهر المعالم السياحية</div>
          <span style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.18em', color:'#4dd9c6', display:'block', marginBottom:12 }}>Tourism Guide</span>
          <h1 style={{ ...S, fontSize:'clamp(28px,5vw,52px)', color:'#fff', lineHeight:1.05, marginBottom:10 }}>Morocco's Most<br/>Famous Places</h1>
          <p style={{ fontSize:'clamp(13px,2vw,15px)', color:'rgba(255,255,255,.55)', maxWidth:460, lineHeight:1.7, marginBottom:24 }}>
            20 verified destinations — cultural context and insider tips for every iconic location.
          </p>
          <div style={{ display:'flex', gap:0, maxWidth:420, background:'rgba(255,255,255,.1)', border:'1px solid rgba(255,255,255,.2)', borderRadius:12, overflow:'hidden' }}>
            <input value={search} onChange={e=>setSearch(e.target.value)}
              placeholder="Search places, cities..."
              style={{ flex:1, background:'none', border:'none', padding:'12px 16px', color:'#fff', fontSize:13.5, fontFamily:'Outfit,sans-serif', outline:'none' }} />
            <div style={{ padding:'12px 14px', color:'rgba(255,255,255,.45)', fontSize:12 }}>{filtered.length} places</div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background:'linear-gradient(135deg,var(--terra),var(--gold))', padding:'14px 0' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 clamp(16px,4vw,32px)', display:'flex', justifyContent:'center', flexWrap:'wrap', gap:0 }}>
          {[{v:'20',l:'Destinations'},{v:'12',l:'Cities'},{v:'4',l:'UNESCO Sites'},{v:'13M',l:'Tourists/year'}].map((s,i)=>(
            <div key={s.l} style={{ textAlign:'center', padding:'0 clamp(14px,3vw,28px)', borderRight:i<3?'1px solid rgba(255,255,255,.28)':'none' }}>
              <div style={{ ...S, fontSize:'clamp(16px,3vw,22px)', color:'#fff', lineHeight:1 }}>{s.v}</div>
              <div style={{ fontSize:10, color:'rgba(255,255,255,.72)', textTransform:'uppercase', letterSpacing:'.1em', marginTop:3 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky filters */}
      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)', padding:'10px 0', position:'sticky', top:62, zIndex:100 }}>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 clamp(16px,4vw,32px)' }}>
          <div style={{ display:'flex', gap:6, overflowX:'auto', scrollbarWidth:'none', paddingBottom:7, marginBottom:6 }}>
            <span style={{ fontSize:10.5, fontWeight:700, textTransform:'uppercase', letterSpacing:'.07em', color:'var(--muted)', flexShrink:0, alignSelf:'center' }}>City:</span>
            {CITIES.map(c=><button key={c} onClick={()=>setCity(c)} className={`tag-chip${city===c?' active':''}`} style={{ fontFamily:'Outfit,sans-serif', flexShrink:0, fontSize:11 }}>{c}</button>)}
          </div>
          <div style={{ display:'flex', gap:6, overflowX:'auto', scrollbarWidth:'none' }}>
            <span style={{ fontSize:10.5, fontWeight:700, textTransform:'uppercase', letterSpacing:'.07em', color:'var(--muted)', flexShrink:0, alignSelf:'center' }}>Type:</span>
            {CATEGORIES.map(c=><button key={c} onClick={()=>setCat(c)} className={`tag-chip${cat===c?' active':''}`} style={{ fontFamily:'Outfit,sans-serif', flexShrink:0, fontSize:11 }}>{c}</button>)}
          </div>
        </div>
      </div>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'clamp(18px,3vw,32px) clamp(16px,4vw,32px)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:18, flexWrap:'wrap', gap:10 }}>
          <div style={{ fontSize:13.5, color:'var(--muted)' }}><strong style={{ color:'var(--ink)' }}>{filtered.length}</strong> places{city!=='All'&&<span> in <strong style={{ color:'var(--terra)' }}>{city}</strong></span>}</div>
          <div style={{ display:'flex', gap:7 }}>
            {['grid','list'].map(v=>(
              <button key={v} onClick={()=>setView(v)} style={{ padding:'6px 12px', borderRadius:8, fontSize:11, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif', background:view===v?'var(--terra)':'transparent', border:`1px solid ${view===v?'var(--terra)':'var(--border)'}`, color:view===v?'#fff':'var(--muted)', transition:'all .18s' }}>
                {v==='grid'?'⊞ Grid':'☰ List'}
              </button>
            ))}
          </div>
        </div>

        {filtered.length===0 ? (
          <div className="card" style={{ padding:60, textAlign:'center' }}>
            <div style={{ ...S, fontSize:22, marginBottom:8 }}>No places found</div>
            <div style={{ fontSize:14, color:'var(--muted)' }}>Try different filters.</div>
          </div>
        ) : view==='grid' ? (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:18 }}>
            {filtered.map(p=><PlaceCard key={p.id} place={p} onClick={setSel} />)}
          </div>
        ) : (
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {filtered.map(p=>{
              const cc=CAT_STYLE[p.category]||CAT_STYLE.Monument;
              return (
                <div key={p.id} onClick={()=>setSel(p)} className="card"
                  style={{ padding:0, overflow:'hidden', display:'flex', cursor:'pointer', transition:'all .22s' }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(192,57,10,.28)';e.currentTarget.style.transform='translateX(4px)';}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='translateX(0)';}}>
                  <div style={{ width:'clamp(110px,15vw,160px)', flexShrink:0, overflow:'hidden' }}>
                    </div>
                  <div style={{ flex:1, padding:'clamp(12px,2vw,16px)' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5, flexWrap:'wrap', gap:6 }}>
                      <div>
                        <div style={{ ...S, fontSize:'clamp(14px,2vw,17px)', color:'var(--ink)', marginBottom:2 }}>{p.name}</div>
                        <div style={{ fontSize:11, fontWeight:700, color:'var(--terra)', textTransform:'uppercase', marginBottom:5 }}>{p.city}</div>
                      </div>
                      <div style={{ display:'flex', gap:6, alignItems:'center', flexShrink:0 }}>
                        <span className="badge" style={{ background:cc.bg, color:cc.c }}>{p.category}</span>
                        <span style={{ fontSize:12, fontWeight:700, color:'var(--gold)' }}>★ {p.rating}</span>
                      </div>
                    </div>
                    <p style={{ fontSize:13, color:'var(--muted)', lineHeight:1.6, marginBottom:7 }}>{p.desc.slice(0,110)}...</p>
                    <div style={{ display:'flex', gap:12, fontSize:11.5, color:'var(--muted)', flexWrap:'wrap' }}>
                      <span>⏱ {p.duration}</span><span>🎫 {p.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {sel && <Modal place={sel} onClose={()=>setSel(null)} />}
    </Layout>
  );
}
