import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { getCityDetails } from '../../hooks/useApi';

const S = { fontFamily: 'Playfair Display, Georgia, serif' };

// ── Complete static city data ──────────────────────────────────
const CITIES_DB = {
  marrakesh: {
    slug:'marrakesh', name:'Marrakesh', arabicName:'مراكش',
    nickname:'La Ville Rouge', color:'#c0390a',
    region:'Marrakesh-Safi', founded:'1062 CE',
    population:'928 850', dialect:'Marrakshi', bestTime:'Oct–Avr',
    description:'Le cœur battant du Maroc. Cité impériale médiévale vibrante de couleurs. La place Jemaa el-Fna — spectacle permanent à ciel ouvert, classé UNESCO.',
    food:['Tangia Marrakchia','Pastilla','Harira','Couscous Royal','Msemen & Amlou'],
    crafts:['Zellige','Tadelakt','Maroquinerie','Babouches','Argan'],
    music:['Gnawa','Chaabi','Ahwach amazigh'],
    mustSee:['Jemaa el-Fna','Koutoubia','Palais Bahia','Jardin Majorelle','Mellah'],
    dialect_words:[{word:'Zwina',meaning:'Belle / Beau'},{word:'Tangia',meaning:'Agneau confit'},{word:'Daba',meaning:'Maintenant'},{word:'Chwiya',meaning:'Un peu'}],
  },
  fes: {
    slug:'fes', name:'Fès', arabicName:'فاس',
    nickname:'Capitale Culturelle', color:'#c47b0a',
    region:'Fès-Meknès', founded:'789 CE',
    population:'1 112 000', dialect:'Fassi', bestTime:'Mar–Mai',
    description:'Plus ancienne université d\'Afrique. La médina de Fès el-Bali — classée UNESCO — est le plus grand espace urbain médiéval au monde.',
    food:['Pastilla','Rfissa','Harira fassia','Bastilla au pigeon','Briouates'],
    crafts:['Poterie bleue','Cuivre ciselé','Broderie','Tapis fassi','Cuir'],
    music:['Musique andalouse','Malhoun','Aïta'],
    mustSee:['Médina Fès el-Bali','Université Qaraouiyine','Tanneries Chouara','Médersa Bou Inania','Bab Bou Jeloud'],
    dialect_words:[{word:'A sidi',meaning:'Monsieur'},{word:'Bahia',meaning:'Magnifique'},{word:'Mrhba',meaning:'Bienvenue'}],
  },
  casablanca: {
    slug:'casablanca', name:'Casablanca', arabicName:'الدار البيضاء',
    nickname:'Cœur Économique', color:'#0a7a6a',
    region:'Casablanca-Settat', founded:'7e siècle',
    population:'3 752 000', dialect:'Casawi', bestTime:'Avr–Jun',
    description:'La métropole économique du Maroc. Architecture Art Déco, mosquée Hassan II face à l\'Atlantique, et une énergie urbaine unique.',
    food:['Sardines grillées','Couscous Royal','Bastilla fruits de mer','Sfenj'],
    crafts:['Mode','Design moderne','Art contemporain'],
    music:['Chaabi moderne','Rap marocain','Fusion'],
    mustSee:['Mosquée Hassan II','Corniche','Quartier Habous','Villa des Arts','Médina'],
    dialect_words:[{word:'Sah7i',meaning:'Mon ami (argot)'},{word:'Wach',meaning:'Est-ce que'},{word:'Kifach',meaning:'Comment'}],
  },
  tangier: {
    slug:'tangier', name:'Tanger', arabicName:'طنجة',
    nickname:'Porte de l\'Europe', color:'#1a6b9a',
    region:'Tanger-Tétouan', founded:'5e s. av.J.C.',
    population:'947 952', dialect:'Tanjawi', bestTime:'Mai–Sep',
    description:'À 14km de l\'Europe. Carrefour de civilisations, porte entre deux continents, ville de Paul Bowles et William Burroughs.',
    food:['Byesar','Poisson grillé','Briouates','Méchoui'],
    crafts:['Céramiques','Babouches','Broderie du Rif'],
    music:['Chaabi du Nord','Flamenco marocain','Jilala'],
    mustSee:['Médina','Cap Spartel','Grottes d\'Hercule','Kasbah','Boulevard Pasteur'],
    dialect_words:[{word:'Adios',meaning:'Au revoir (espagnol)'},{word:'Wajid',meaning:'Beaucoup'},{word:'Kif-kif',meaning:'Pareil'}],
  },
  chefchaouen: {
    slug:'chefchaouen', name:'Chefchaouen', arabicName:'شفشاون',
    nickname:'La Ville Bleue', color:'#3b82f6',
    region:'Tanger-Tétouan', founded:'1471 CE',
    population:'45 000', dialect:'Jebli', bestTime:'Avr–Jun',
    description:'Chaque mur est peint en bleu. Nichée dans les montagnes du Rif, cette ville hors du temps attire photographes et voyageurs du monde entier.',
    food:['Chèvre grillée','Fromage de chèvre','Miel du Rif','Kefta berbère'],
    crafts:['Laine tissée','Djellabas','Couvertures berbères'],
    music:['Jilala','Gnawa du Rif','Musique amazighe'],
    mustSee:['Place Uta el-Hammam','Kasbah','Cascade Ras el-Maa','Grande Mosquée'],
    dialect_words:[{word:'Azul',meaning:'Bonjour (amazigh)'},{word:'Tanmirt',meaning:'Merci (amazigh)'}],
  },
  essaouira: {
    slug:'essaouira', name:'Essaouira', arabicName:'الصويرة',
    nickname:'Cité des Vents', color:'#0a7a6a',
    region:'Marrakesh-Safi', founded:'1760 CE',
    population:'70 000', dialect:'Swiri', bestTime:'Mar–Mai',
    description:'Ancienne Mogador portugaise. Capitale mondiale du Gnawa et du windsurf, classée UNESCO, adorée de Jimi Hendrix.',
    food:['Sardines fraîches','Fruits de mer','Amlou','Huile d\'argan'],
    crafts:['Bois de thuya','Marqueterie','Peinture bleue'],
    music:['Gnawa','Blues marocain','Festival Gnaoua'],
    mustSee:['Remparts','Port de pêche','Médina UNESCO','Skala de la Ville','Plage'],
    dialect_words:[{word:'Mrhba',meaning:'Bienvenue'},{word:'Bzaf',meaning:'Beaucoup'}],
  },
  agadir: {
    slug:'agadir', name:'Agadir', arabicName:'أكادير',
    nickname:'300 Jours de Soleil', color:'#c47b0a',
    region:'Souss-Massa', founded:'1505 CE',
    population:'600 000', dialect:'Tachelhit', bestTime:'Oct–Mar',
    description:'Station balnéaire reconstruite après 1960. Capitale de l\'huile d\'argan et du tourisme marocain, porte du Souss amazigh.',
    food:['Amlou','Couscous au poisson','Tagine sardines','Miel d\'argan'],
    crafts:['Huile d\'argan','Bijoux amazighs','Poterie soussi'],
    music:['Musique tachelhit','Rap amazigh','Rways'],
    mustSee:['Plage 10km','Souk El Had','Oufella (ruines)','Vallée des Oiseaux','Musée Amazigh'],
    dialect_words:[{word:'Azul',meaning:'Bonjour'},{word:'Tanmirt',meaning:'Merci'},{word:'Ifilki',meaning:'Beau'}],
  },
  ouarzazate: {
    slug:'ouarzazate', name:'Ouarzazate', arabicName:'ورزازات',
    nickname:'Hollywood d\'Afrique', color:'#8a3500',
    region:'Drâa-Tafilalet', founded:'1928 CE',
    population:'71 000', dialect:'Souss / Amazigh', bestTime:'Oct–Avr',
    description:'Porte du désert. Décor de Lawrence d\'Arabie, Gladiator, Game of Thrones. Le Studio Atlas accueille les plus grandes productions mondiales.',
    food:['Tinjia','Couscous berbère','Tagine d\'agneau','Dattes Medjool'],
    crafts:['Tapis berbères','Bijoux en argent','Poterie'],
    music:['Rways','Ahwach','Musique gnawa du sud'],
    mustSee:['Kasbah Aït Benhaddou (UNESCO)','Studio Atlas','Kasbah Taourirt','Lac Draa'],
    dialect_words:[{word:'Azul',meaning:'Bonjour'},{word:'Mamnoun',meaning:'Merci (amazigh)'}],
  },
};

const TABS = [
  { id:'overview', label:'Aperçu' },
  { id:'food',     label:'Cuisine' },
  { id:'crafts',   label:'Artisanat' },
  { id:'music',    label:'Musique' },
  { id:'dialect',  label:'Dialecte' },
  { id:'mustSee',  label:'Incontournables' },
];

function Zellige({ color='#c0390a', opacity=.12, id='z' }) {
  return (
    <svg style={{ position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none' }}>
      <defs>
        <pattern id={id} x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <polygon points="40,4 50.4,21.6 76,21.6 58.4,36 65.2,60.8 40,48 14.8,60.8 21.6,36 4,21.6 29.6,21.6"
            fill="none" stroke={color} strokeWidth="1" opacity={opacity}/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  );
}

// ── Safe string normalizer — fixes the {icon,name,sub} object bug ──
function safeStr(val) {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object') {
    // Handle {name, icon, sub} or {word, meaning} or {title, desc}
    return val.name || val.word || val.title || val.text || JSON.stringify(val);
  }
  return String(val);
}

function safeArr(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map(safeStr).filter(Boolean);
}

export default function CityPage() {
  const router   = useRouter();
  const { slug } = router.query;
  const [city,    setCity]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab,     setTab]     = useState('overview');

  useEffect(() => {
    if (!slug) return;

    // 1. Static fallback — instant
    const staticData = CITIES_DB[slug.toLowerCase()];
    if (staticData) {
      setCity(staticData);
      setLoading(false);
    } else {
      setLoading(false);
    }

    // 2. Try API for richer data
    getCityDetails(slug).then(d => {
      if (d && !d.error && d.name) {
        // Normalize API data — may have objects instead of strings
        setCity({
          ...d,
          food:   safeArr(d.food),
          crafts: safeArr(d.crafts),
          music:  safeArr(d.music),
          mustSee:safeArr(d.mustSee),
        });
      }
    }).catch(() => {});
  }, [slug]);

  if (loading) return (
    <Layout>
      <div style={{ minHeight:'60vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div className="spinner"/>
      </div>
    </Layout>
  );

  if (!city) return (
    <Layout>
      <div style={{ minHeight:'60vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16 }}>
        <div style={{ ...S, fontSize:28, color:'var(--ink)' }}>Ville non trouvée</div>
        <p style={{ color:'var(--muted)', fontSize:14 }}>La ville "{slug}" n'est pas encore documentée.</p>
        <Link href="/home-culture"><button className="btn-primary">← Tous les guides</button></Link>
      </div>
    </Layout>
  );

  const color = city.color || '#c0390a';
  const food    = safeArr(city.food);
  const crafts  = safeArr(city.crafts);
  const music   = safeArr(city.music);
  const mustSee = safeArr(city.mustSee);

  return (
    <Layout>
      <SEO
        title={`${city.name} — Guide Culturel MoroccoPedia`}
        description={city.description || `Découvrez la culture, la cuisine et les traditions de ${city.name}.`}
      />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ background:`linear-gradient(155deg,${color}20,#1c1007,#0a2318)`, padding:'clamp(52px,7vw,84px) 0', position:'relative', overflow:'hidden' }}>
        <Zellige color={color} opacity={0.14} id="ch"/>
        <div style={{ position:'absolute', width:380, height:380, background:color, filter:'blur(130px)', opacity:.12, right:'-4%', top:'-8%', borderRadius:'50%', pointerEvents:'none' }}/>

        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 clamp(20px,4vw,48px)', position:'relative', zIndex:2 }}>
          <Link href="/home-culture" style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:12, color:'rgba(245,237,220,.38)', textDecoration:'none', marginBottom:20 }}>
            ← Guides de villes
          </Link>
          <div style={{ display:'flex', gap:28, alignItems:'flex-start', flexWrap:'wrap' }}>
            <div style={{ flex:1, minWidth:260 }}>
              {city.arabicName && (
                <div style={{ fontFamily:'Amiri,serif', fontSize:24, color:color, marginBottom:8, direction:'rtl' }}>{city.arabicName}</div>
              )}
              <h1 style={{ ...S, fontSize:'clamp(34px,6vw,62px)', color:'#fff', lineHeight:1, marginBottom:10 }}>{city.name}</h1>
              {city.nickname && (
                <span style={{ display:'inline-block', padding:'4px 14px', borderRadius:20, background:`${color}22`, border:`1px solid ${color}44`, fontSize:13, color:color, fontWeight:600, marginBottom:16, fontFamily:'Outfit,sans-serif' }}>
                  {city.nickname}
                </span>
              )}
              <p style={{ fontSize:15, color:'rgba(245,237,220,.55)', lineHeight:1.85, maxWidth:520 }}>{city.description}</p>
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, flexShrink:0 }}>
              {[
                { v:city.founded,    l:'Fondée' },
                { v:city.population, l:'Population' },
                { v:city.dialect,    l:'Dialecte' },
                { v:city.bestTime,   l:'Meilleure saison' },
              ].filter(s=>s.v).map(s=>(
                <div key={s.l} style={{ background:'rgba(255,255,255,.07)', border:`1px solid ${color}28`, borderRadius:12, padding:'12px 14px' }}>
                  <div style={{ ...S, fontSize:14, color:color, lineHeight:1.3, marginBottom:3 }}>{s.v}</div>
                  <div style={{ fontSize:10, color:'rgba(245,237,220,.4)', textTransform:'uppercase', letterSpacing:'.08em' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TABS ──────────────────────────────────────────────── */}
      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)', position:'sticky', top:62, zIndex:100, overflowX:'auto' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)', display:'flex' }}>
          {TABS.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} style={{
              padding:'clamp(11px,2vw,15px) clamp(12px,2vw,22px)', fontSize:13.5,
              fontWeight:tab===t.id?700:500, cursor:'pointer', border:'none',
              background:'transparent', fontFamily:'Outfit,sans-serif', whiteSpace:'nowrap',
              color:tab===t.id?color:'var(--muted)',
              borderBottom:`3px solid ${tab===t.id?color:'transparent'}`,
              transition:'all .18s',
            }}>{t.label}</button>
          ))}
        </div>
      </div>

      {/* ── CONTENT ───────────────────────────────────────────── */}
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'clamp(24px,4vw,40px) clamp(16px,4vw,48px)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) 270px', gap:24, alignItems:'start' }}>

          <div>
            {/* OVERVIEW */}
            {tab==='overview' && (
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:14 }}>
                {[
                  { title:'Cuisine',   items:food,    c:'#c47b0a' },
                  { title:'Artisanat', items:crafts,  c:'#0a7a6a' },
                  { title:'Musique',   items:music,   c:color },
                ].filter(s=>s.items.length>0).map(sec=>(
                  <div key={sec.title} style={{ background:'#fff', borderRadius:14, padding:'20px', border:'1px solid var(--border)' }}>
                    <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:sec.c, marginBottom:12 }}>{sec.title}</div>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
                      {sec.items.map(item=>(
                        <span key={item} style={{ padding:'4px 12px', borderRadius:20, background:`${sec.c}10`, border:`1px solid ${sec.c}25`, fontSize:12.5, color:sec.c, fontWeight:500 }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                {/* Must see preview */}
                {mustSee.length > 0 && (
                  <div style={{ background:'#fff', borderRadius:14, padding:'20px', border:'1px solid var(--border)' }}>
                    <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:color, marginBottom:12 }}>Incontournables</div>
                    <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                      {mustSee.slice(0,4).map((p,i)=>(
                        <div key={i} style={{ display:'flex', gap:10, alignItems:'center', fontSize:13 }}>
                          <span style={{ width:20, height:20, borderRadius:5, background:`${color}15`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, color:color, fontWeight:700, flexShrink:0 }}>{i+1}</span>
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* FOOD */}
            {tab==='food' && (
              <div>
                <h2 style={{ ...S, fontSize:24, color:'var(--ink)', marginBottom:18 }}>Cuisine de {city.name}</h2>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:12 }}>
                  {food.map((item,i)=>(
                    <div key={i} style={{ background:'#fff', borderRadius:14, padding:'18px', border:'1px solid var(--border)', borderLeft:'4px solid #c47b0a', transition:'all .2s' }}
                      onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 24px rgba(196,123,10,.1)';}}
                      onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none';}}>
                      <div style={{ ...S, fontSize:17, color:'#c47b0a', marginBottom:6 }}>{item}</div>
                      <Link href={`/recipes?q=${encodeURIComponent(item)}`} style={{ fontSize:12, color:'var(--teal)', fontWeight:600, textDecoration:'none' }}>Recette →</Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CRAFTS */}
            {tab==='crafts' && (
              <div>
                <h2 style={{ ...S, fontSize:24, color:'var(--ink)', marginBottom:18 }}>Artisanat de {city.name}</h2>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:12 }}>
                  {crafts.map((item,i)=>(
                    <div key={i} style={{ background:'#fff', borderRadius:14, padding:'18px', border:'1px solid var(--border)', borderLeft:'4px solid #0a7a6a', transition:'all .2s' }}
                      onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';}}
                      onMouseLeave={e=>{e.currentTarget.style.transform='none';}}>
                      <div style={{ ...S, fontSize:17, color:'#0a7a6a' }}>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MUSIC */}
            {tab==='music' && (
              <div>
                <h2 style={{ ...S, fontSize:24, color:'var(--ink)', marginBottom:18 }}>Musique de {city.name}</h2>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:12 }}>
                  {music.map((item,i)=>(
                    <div key={i} style={{ background:`${color}08`, borderRadius:14, padding:'18px', border:`1px solid ${color}22` }}>
                      <div style={{ ...S, fontSize:17, color:color }}>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DIALECT */}
            {tab==='dialect' && (
              <div>
                <h2 style={{ ...S, fontSize:24, color:'var(--ink)', marginBottom:6 }}>Dialecte {city.dialect}</h2>
                <p style={{ fontSize:14, color:'var(--muted)', marginBottom:20 }}>Expressions typiques de {city.name}</p>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:12, marginBottom:24 }}>
                  {(city.dialect_words||[]).map((w,i)=>(
                    <div key={i} style={{ background:'#fff', borderRadius:14, padding:'18px', border:`1px solid ${color}22` }}>
                      <div style={{ ...S, fontSize:22, color:color, marginBottom:4 }}>{typeof w==='string'?w:w.word}</div>
                      <div style={{ fontSize:13, color:'var(--muted)' }}>{typeof w==='string'?'':w.meaning}</div>
                    </div>
                  ))}
                </div>
                <Link href={`/dialect`} style={{ textDecoration:'none' }}>
                  <button className="btn-teal">Explorer le dictionnaire Darija →</button>
                </Link>
              </div>
            )}

            {/* MUST SEE */}
            {tab==='mustSee' && (
              <div>
                <h2 style={{ ...S, fontSize:24, color:'var(--ink)', marginBottom:18 }}>Incontournables à {city.name}</h2>
                <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  {mustSee.map((place,i)=>(
                    <div key={i} style={{ display:'flex', gap:14, alignItems:'center', background:'#fff', borderRadius:14, padding:'16px 20px', border:'1px solid var(--border)', transition:'all .2s', cursor:'default' }}
                      onMouseEnter={e=>{e.currentTarget.style.borderColor=color;e.currentTarget.style.transform='translateX(4px)';}}
                      onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='none';}}>
                      <div style={{ width:30, height:30, borderRadius:8, background:`${color}14`, display:'flex', alignItems:'center', justifyContent:'center', ...S, fontSize:14, color:color, fontWeight:700, flexShrink:0 }}>{i+1}</div>
                      <div style={{ ...S, fontSize:17, color:'var(--ink)' }}>{place}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── SIDEBAR ─────────────────────────────────────── */}
          <div style={{ position:'sticky', top:80 }}>
            <div style={{ background:'linear-gradient(155deg,#1c1007,#0a2318)', borderRadius:16, padding:'20px', marginBottom:14, position:'relative', overflow:'hidden' }}>
              <Zellige color={color} opacity={0.1} id="sb"/>
              <div style={{ position:'relative', zIndex:1 }}>
                <div style={{ ...S, fontSize:15, color:'#fff', marginBottom:14 }}>Infos pratiques</div>
                {[
                  { l:'Région',           v:city.region },
                  { l:'Dialecte',         v:city.dialect },
                  { l:'Fondée',           v:city.founded },
                  { l:'Meilleure saison', v:city.bestTime },
                ].filter(r=>r.v).map(r=>(
                  <div key={r.l} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
                    <span style={{ fontSize:12, color:'rgba(245,237,220,.42)' }}>{r.l}</span>
                    <span style={{ fontSize:12.5, fontWeight:600, color:color }}>{r.v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background:'#fff', borderRadius:14, padding:'18px', border:'1px solid var(--border)' }}>
              <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:'var(--muted)', marginBottom:12 }}>Autres villes</div>
              {Object.values(CITIES_DB).filter(c=>c.slug!==slug).slice(0,6).map(c=>(
                <Link key={c.slug} href={`/city/${c.slug}`} style={{ textDecoration:'none' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'9px 0', borderBottom:'1px solid var(--border)', cursor:'pointer', transition:'all .15s' }}
                    onMouseEnter={e=>{e.currentTarget.style.paddingLeft='6px';}}
                    onMouseLeave={e=>{e.currentTarget.style.paddingLeft='0';}}>
                    <span style={{ fontSize:13.5, fontWeight:600, color:'var(--ink)' }}>{c.name}</span>
                    <span style={{ fontSize:11, color:c.color, fontWeight:600 }}>{c.nickname?.split(' ').slice(0,2).join(' ')}</span>
                  </div>
                </Link>
              ))}
              <Link href="/home-culture" style={{ textDecoration:'none' }}>
                <div style={{ fontSize:12.5, color:'var(--teal)', fontWeight:600, marginTop:10 }}>Tous les guides →</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
