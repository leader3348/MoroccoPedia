import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import DIALECT_DATA from '../../data/dialectData';

const S = { fontFamily: 'Playfair Display, Georgia, serif' };

const REGIONS = {
  marrakshi: {
    name: 'Marrakshi', arabicName: 'المراكشية', flag: 'city',
    color: '#c0390a', city: 'Marrakech',
    description: 'Le dialecte de la Ville Rouge. Influences amazighes fortes, tons chauds et rythme rapide. Le Marrakshi est considéré comme l\'un des dialectes les plus mélodiques du Maroc.',
    key_features: ['Influence amazigh marquée', 'Mots tronqués et rapides', 'Intonation montante en fin de phrase', 'Emprunts du Tachelhit'],
    sample_words: ['Zwina (belle)', 'Tangia (plat local)', 'Daba (maintenant)', 'Chwiya (un peu)'],
  },
  casawi: {
    name: 'Casawi', arabicName: 'الكازاوية', flag: 'city',
    color: '#c47b0a', city: 'Casablanca',
    description: 'Le dialecte de la métropole économique. Mélange unique de Darija traditionnelle, de français et d\'argot urbain moderne. Le plus influencé par la mondialisation.',
    key_features: ['Nombreux emprunts au français', 'Argot urbain moderne', 'Mélange de générations', 'Influence médiatique forte'],
    sample_words: ['Sah7i (mon ami)', 'Daba daba (vite vite)', 'Wach (est-ce que)', 'Kifach (comment)'],
  },
  fassi: {
    name: 'Fassi', arabicName: 'الفاسية', flag: 'arch',
    color: '#0a7a6a', city: 'Fès',
    description: 'Le dialecte le plus classique et raffiné du Maroc. Influencé par l\'arabe classique et l\'héritage andalou. Réputé pour sa précision et son élégance.',
    key_features: ['Le plus proche de l\'arabe classique', 'Influence andalouse marquée', 'Vocabulaire riche et précis', 'Prononciation claire'],
    sample_words: ['A sidi (monsieur)', 'Mrhba wasahla (bienvenue)', 'Bahia (magnifique)', 'L-hamdullah (Dieu merci)'],
  },
  tanjawi: {
    name: 'Tanjawi', arabicName: 'الطنجاوية', flag: 'anchor',
    color: '#1a6b9a', city: 'Tanger',
    description: 'Le dialecte du carrefour entre l\'Afrique et l\'Europe. Fortement influencé par l\'espagnol (14km de Gibraltar). Mots espagnols totalement intégrés dans le quotidien.',
    key_features: ['Emprunts massifs à l\'espagnol', 'Influence portugaise historique', 'Accent méditerranéen', 'Tons maritimes'],
    sample_words: ['Adios (au revoir)', 'Wajid (beaucoup — de l\'espagnol)', 'Kif-kif (pareil)', 'Basa (baiser — de l\'espagnol)'],
  },
  tachelhit: {
    name: 'Tachelhit', arabicName: 'تاشلحيت', flag: 'mountain',
    color: '#8a4500', city: 'Agadir / Souss',
    description: 'Langue amazighe du Souss et du Haut-Atlas. Parlée par 8 millions de Marocains. Une des trois langues amazighes officielles du Maroc depuis 2011.',
    key_features: ['Langue amazighe (non arabe)', 'Script Tifinagh officiel', 'Racines pré-islamiques', 'Riche tradition orale'],
    sample_words: ['Azul (bonjour)', 'Tanmirt (merci)', 'Ifilki (beau)', 'Mamnoun (reconnaissant)'],
  },
  tarifit: {
    name: 'Tarifit', arabicName: 'تاريفيت', flag: 'mountain',
    color: '#1a4b9a', city: 'Rif / Al Hoceima',
    description: 'Langue amazighe du Rif. Parlée dans le nord du Maroc par 4 millions de personnes. Distincte du Tachelhit par sa phonologie et son vocabulaire.',
    key_features: ['Langue du Rif', 'Phonologie distincte', 'Communauté Rifaine forte', 'Tradition musicale unique'],
    sample_words: ['Azul (bonjour)', 'Amzday (compagnon)', 'Tafat (lumière)', 'Agharas (chemin)'],
  },
  hassaniya: {
    name: 'Hassaniya', arabicName: 'الحسانية', flag: 'desert',
    color: '#c47b0a', city: 'Sahara / Laâyoune',
    description: 'Dialecte arabe du Sahara occidental. Parlé par les tribus Maures depuis le 15ème siècle. Garde des archaïsmes arabes perdus dans les autres dialectes.',
    key_features: ['Dialecte saharien', 'Influences berbères et sub-sahariennes', 'Phonologie unique', 'Culture nomade'],
    sample_words: ['Labas (bonjour)', 'Mabrouk (félicitations)', 'Habibi (mon ami)', 'Inshallah (si Dieu veut)'],
  },
};

function Zellige({ opacity=.12, c1='#c0390a', size=80, id='z' }) {
  return (
    <svg style={{ position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none' }}>
      <defs>
        <pattern id={id} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
          <polygon points={`${size*.5},${size*.05} ${size*.63},${size*.27} ${size*.95},${size*.27} ${size*.73},${size*.45} ${size*.82},${size*.76} ${size*.5},${size*.6} ${size*.18},${size*.76} ${size*.27},${size*.45} ${size*.05},${size*.27} ${size*.37},${size*.27}`}
            fill="none" stroke={c1} strokeWidth="1.2" opacity={opacity}/>
          <circle cx={size*.5} cy={size*.5} r="3" fill={c1} opacity={opacity*.5}/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(REGIONS).map(r => ({ params: { region: r } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const region = REGIONS[params.region];
  if (!region) return { notFound: true };

  // Get all words for this region
  const words = DIALECT_DATA.filter(w =>
    (w.regionalVariants || []).some(v =>
      v.region.toLowerCase().includes(params.region.replace('tachelhit','souss').replace('tanjawi','tangier').replace('fassi','fes').replace('casawi','casablanca').replace('marrakshi','marrakesh'))
    )
  ).slice(0, 30);

  return {
    props: {
      regionKey: params.region,
      region,
      wordCount: words.length,
      sampleWords: words.slice(0, 12).map(w => ({
        word: w.word,
        arabic: w.arabic || '',
        definition: w.definition || '',
        localVariant: (w.regionalVariants || []).find(v =>
          v.region.toLowerCase().includes(params.region.replace('tachelhit','souss').replace('tanjawi','tangier').replace('fassi','fes').replace('casawi','casablanca').replace('marrakshi','marrakesh'))
        ) || null,
      })),
    },
  };
}

export default function RegionDialectPage({ regionKey, region, wordCount, sampleWords }) {
  const [filter, setFilter] = useState('');

  const filtered = sampleWords.filter(w =>
    !filter || w.word.toLowerCase().includes(filter.toLowerCase()) || w.definition.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Layout>
      <SEO
        title={`Dialecte ${region.name} — MoroccoPedia`}
        description={`Découvrez le dialecte ${region.name} de ${region.city} — mots, caractéristiques et phrases typiques.`}
      />

      {/* Hero */}
      <section style={{ background:`linear-gradient(155deg,${region.color}22,#1c1007,#0a2318)`, padding:'clamp(56px,7vw,88px) 0', position:'relative', overflow:'hidden' }}>
        <Zellige opacity={0.15} c1={region.color} size={90} id="rh"/>
        <div style={{ position:'absolute', width:400, height:400, background:region.color, filter:'blur(130px)', opacity:.12, right:'-5%', top:'-5%', borderRadius:'50%', pointerEvents:'none' }}/>

        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 clamp(20px,4vw,48px)', position:'relative', zIndex:2 }}>
          <Link href="/dialect" style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:13, color:'rgba(245,237,220,.45)', textDecoration:'none', marginBottom:20, fontFamily:'Outfit,sans-serif' }}>
            ← Tous les dialectes
          </Link>
          <div style={{ display:'flex', gap:16, alignItems:'flex-start', flexWrap:'wrap' }}>
            <div style={{ flex:1, minWidth:280 }}>
              <div style={{ fontSize:52, marginBottom:12 }}>{region.flag}</div>
              <h1 style={{ ...S, fontSize:'clamp(32px,5.5vw,58px)', color:'#fff', lineHeight:1.05, marginBottom:8 }}>
                {region.name}
              </h1>
              <div style={{ fontFamily:'Amiri,serif', fontSize:22, color:region.color, marginBottom:12, direction:'rtl' }}>
                {region.arabicName}
              </div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.15)', borderRadius:20, padding:'6px 14px', marginBottom:18 }}>
                <span style={{ fontSize:12, color:'rgba(245,237,220,.6)', fontFamily:'Outfit,sans-serif', display:'flex', alignItems:'center', gap:4 }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>{region.city}</span>
              </div>
              <p style={{ fontSize:'clamp(14px,2vw,16px)', color:'rgba(245,237,220,.6)', lineHeight:1.85, maxWidth:520 }}>
                {region.description}
              </p>
            </div>

            {/* Stats */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, flexShrink:0 }}>
              {[
                { v: wordCount + '+', l: 'Mots documentés', c: region.color },
                { v: region.key_features.length + '', l: 'Caractéristiques', c: region.color },
              ].map(s => (
                <div key={s.l} style={{ background:'rgba(255,255,255,.07)', border:`1px solid ${s.c}30`, borderRadius:14, padding:'18px 20px', textAlign:'center' }}>
                  <div style={{ ...S, fontSize:28, color:s.c, lineHeight:1, marginBottom:4 }}>{s.v}</div>
                  <div style={{ fontSize:11, color:'rgba(245,237,220,.45)' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'clamp(28px,4vw,48px) clamp(16px,4vw,48px)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) 300px', gap:28, alignItems:'start' }}>

          {/* Main */}
          <div>
            {/* Key features */}
            <div style={{ background:'#fff', borderRadius:16, padding:'clamp(18px,3vw,28px)', border:'1px solid var(--border)', marginBottom:24 }}>
              <h2 style={{ ...S, fontSize:22, color:'var(--ink)', marginBottom:16 }}>Caractéristiques distinctives</h2>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:10 }}>
                {region.key_features.map((f, i) => (
                  <div key={i} style={{ display:'flex', gap:10, alignItems:'flex-start', padding:'10px 14px', background:'var(--bg2)', borderRadius:10, borderLeft:`3px solid ${region.color}` }}>
                    <span style={{ color:region.color, fontWeight:700, flexShrink:0 }}>✦</span>
                    <span style={{ fontSize:13.5, color:'var(--ink2)', lineHeight:1.55 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample expressions */}
            <div style={{ background:'#fff', borderRadius:16, padding:'clamp(18px,3vw,28px)', border:'1px solid var(--border)', marginBottom:24 }}>
              <h2 style={{ ...S, fontSize:22, color:'var(--ink)', marginBottom:16 }}>Expressions typiques</h2>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:10 }}>
                {region.sample_words.map((w, i) => {
                  const [word, ...meaning] = w.split(' (');
                  return (
                    <div key={i} style={{ padding:'12px 16px', background:`${region.color}08`, border:`1px solid ${region.color}25`, borderRadius:12, cursor:'pointer', transition:'all .2s' }}
                      onMouseEnter={e=>{e.currentTarget.style.background=`${region.color}15`;}}
                      onMouseLeave={e=>{e.currentTarget.style.background=`${region.color}08`;}}>
                      <div style={{ ...S, fontSize:18, color:region.color, marginBottom:3 }}>{word}</div>
                      {meaning.length > 0 && <div style={{ fontSize:12, color:'var(--muted)' }}>{meaning.join(' (').replace(')', '')}</div>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Words from DB */}
            {sampleWords.length > 0 && (
              <div style={{ background:'#fff', borderRadius:16, padding:'clamp(18px,3vw,28px)', border:'1px solid var(--border)' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16, flexWrap:'wrap', gap:10 }}>
                  <h2 style={{ ...S, fontSize:22, color:'var(--ink)' }}>Mots du dictionnaire</h2>
                  <input value={filter} onChange={e=>setFilter(e.target.value)}
                    placeholder="Filtrer..."
                    style={{ padding:'7px 12px', borderRadius:9, border:'1px solid var(--border)', fontSize:13, fontFamily:'Outfit,sans-serif', outline:'none', background:'var(--bg2)' }}/>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                  {filtered.map((w, i) => (
                    <Link key={i} href={`/dialect?q=${encodeURIComponent(w.word)}`} style={{ textDecoration:'none' }}>
                      <div style={{ display:'flex', gap:16, alignItems:'center', padding:'11px 14px', background:'var(--bg2)', borderRadius:10, transition:'all .18s' }}
                        onMouseEnter={e=>{e.currentTarget.style.background=`${region.color}10`;}}
                        onMouseLeave={e=>{e.currentTarget.style.background='var(--bg2)';}}>
                        <div style={{ flex:1 }}>
                          <div style={{ display:'flex', gap:10, alignItems:'baseline' }}>
                            <span style={{ ...S, fontSize:18, color:'var(--terra)' }}>{w.word}</span>
                            {w.arabic && <span style={{ fontFamily:'Amiri,serif', fontSize:14, color:'var(--muted)', direction:'rtl' }}>{w.arabic}</span>}
                          </div>
                          <div style={{ fontSize:12.5, color:'var(--muted)', marginTop:2 }}>{w.definition?.slice(0,70)}...</div>
                        </div>
                        {w.localVariant && (
                          <div style={{ textAlign:'right', flexShrink:0 }}>
                            <div style={{ fontSize:11, color:region.color, fontWeight:700, marginBottom:2 }}>{region.name}</div>
                            <div style={{ ...S, fontSize:16, color:region.color }}>{w.localVariant.word}</div>
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
                <div style={{ marginTop:16, textAlign:'center' }}>
                  <Link href={`/dialect?q=${regionKey}`} style={{ textDecoration:'none' }}>
                    <button className="btn-teal">Voir tous les mots {region.name} →</button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            {/* All dialects */}
            <div style={{ background:'linear-gradient(155deg,#1c1007,#0a2318)', borderRadius:16, padding:20, marginBottom:14, position:'relative', overflow:'hidden' }}>
              <Zellige opacity={0.1} c1={region.color} size={60} id="sd-z"/>
              <div style={{ position:'relative', zIndex:1 }}>
                <h3 style={{ ...S, fontSize:17, color:'#fff', marginBottom:14 }}>Tous les dialectes</h3>
                {Object.entries(REGIONS).map(([key, r]) => (
                  <Link key={key} href={`/dialect/${key}`} style={{ textDecoration:'none' }}>
                    <div style={{ display:'flex', alignItems:'center', gap:10, padding:'9px 0', borderBottom:'1px solid rgba(255,255,255,.07)', cursor:'pointer', transition:'padding .18s' }}
                      onMouseEnter={e=>e.currentTarget.style.paddingLeft='8px'}
                      onMouseLeave={e=>e.currentTarget.style.paddingLeft='0'}>
                      <span style={{ fontSize:16 }}>{r.flag}</span>
                      <div style={{ flex:1 }}>
                        <div style={{ fontSize:13, fontWeight: key===regionKey ? 700 : 400, color: key===regionKey ? r.color : '#fff' }}>{r.name}</div>
                        <div style={{ fontSize:11, color:'rgba(255,255,255,.35)' }}>{r.city}</div>
                      </div>
                      {key === regionKey && <span style={{ fontSize:10, color:r.color, fontWeight:700 }}>● Actuel</span>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Compare CTA */}
            <div style={{ background:'var(--bg2)', borderRadius:14, padding:18, border:'1px solid var(--border)' }}>
              <h4 style={{ ...S, fontSize:16, color:'var(--ink)', marginBottom:10 }}>Comparer les dialectes</h4>
              <p style={{ fontSize:13, color:'var(--muted)', lineHeight:1.6, marginBottom:14 }}>
                Voir comment un même mot change de {region.name} vers un autre dialecte.
              </p>
              <Link href={`/compare?r1=${regionKey}`} style={{ textDecoration:'none' }}>
                <button className="btn-primary" style={{ width:'100%', justifyContent:'center', fontSize:13 }}>
                  Comparer {region.name} →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
