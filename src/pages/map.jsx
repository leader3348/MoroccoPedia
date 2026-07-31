import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const S = { fontFamily: 'Playfair Display, Georgia, serif' };

// ── Load Leaflet map client-side only (no SSR) ─────────────────
const LeafletMap = dynamic(() => import('../components/LeafletMap'), { ssr: false });

const CITIES = [
  { slug:'marrakesh',   name:'Marrakesh',    region:'Marrakesh-Safi',          lat:31.6295, lng:-7.9811,  color:'#c0390a', dialect:'Marrakshi',  food:'Tangia', craft:'Zellige' },
  { slug:'fes',         name:'Fès',          region:'Fès-Meknès',              lat:34.0181, lng:-5.0078,  color:'#c47b0a', dialect:'Fassi',     food:'Pastilla', craft:'Mosaic' },
  { slug:'casablanca',  name:'Casablanca',   region:'Casablanca-Settat',       lat:33.5731, lng:-7.5898,  color:'#0a7a6a', dialect:'Casawi',    food:'Sardines', craft:'Leather' },
  { slug:'tangier',     name:'Tanger',       region:'Tanger-Tétouan',          lat:35.7673, lng:-5.7997,  color:'#1a6b9a', dialect:'Tanjawi',   food:'Byesar', craft:'Wool' },
  { slug:'chefchaouen', name:'Chefchaouen',  region:'Tanger-Tétouan',          lat:35.1688, lng:-5.2692,  color:'#3b82f6', dialect:'Jebli',     food:'Goat cheese', craft:'Wool blankets' },
  { slug:'essaouira',   name:'Essaouira',    region:'Marrakesh-Safi',          lat:31.5085, lng:-9.7595,  color:'#0a7a6a', dialect:'Swiri',     food:'Sardines', craft:'Thuya wood' },
  { slug:'agadir',      name:'Agadir',       region:'Souss-Massa',             lat:30.4202, lng:-9.5982,  color:'#c47b0a', dialect:'Tachelhit', food:'Amlou', craft:'Argan' },
  { slug:'ouarzazate',  name:'Ouarzazate',   region:'Drâa-Tafilalet',          lat:30.9189, lng:-6.8934,  color:'#c0390a', dialect:'Souss',     food:'Tinjia', craft:'Carpet' },
  { slug:'ifrane',      name:'Ifrane',       region:'Fès-Meknès',              lat:33.5228, lng:-5.1062,  color:'#0a7a6a', dialect:'Fassi',     food:'Trout', craft:'Cedar wood' },
  { slug:'meknes',      name:'Meknès',       region:'Fès-Meknès',              lat:33.8935, lng:-5.5473,  color:'#c47b0a', dialect:'Meknassi',  food:'Mechoui', craft:'Iron' },
];

function Zellige({ opacity=.1, id='z' }) {
  return (
    <svg style={{ position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none' }}>
      <defs>
        <pattern id={id} x="0" y="0" width={80} height={80} patternUnits="userSpaceOnUse">
          <polygon points="40,4 50.4,21.6 76,21.6 58.4,36 65.2,60.8 40,48 14.8,60.8 21.6,36 4,21.6 29.6,21.6"
            fill="none" stroke="#c0390a" strokeWidth="1" opacity={opacity}/>
          <circle cx="40" cy="40" r="2.5" fill="#c47b0a" opacity={opacity*.5}/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  );
}

export default function MapPage() {
  const [selected, setSelected] = useState(null);

  const city = selected ? CITIES.find(c => c.slug === selected) : null;

  return (
    <Layout>
      <SEO
        title="Carte Culturelle du Maroc — MoroccoPedia"
        description="Explorez le Maroc ville par ville — cliquez sur une ville pour découvrir sa culture, son dialecte, sa cuisine et ses artisanats."
      />

      {/* Hero */}
      <section style={{ background:'linear-gradient(155deg,#1c1007,#0a2318)', padding:'clamp(48px,6vw,72px) 0', position:'relative', overflow:'hidden' }}>
        <Zellige opacity={0.12} id="mh"/>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)', position:'relative', zIndex:2 }}>
          <div style={{ fontFamily:'Amiri,serif', fontSize:18, color:'var(--gold2)', marginBottom:10, direction:'rtl' }}>خريطة ثقافية</div>
          <h1 style={{ ...S, fontSize:'clamp(28px,5vw,52px)', color:'#fff', lineHeight:1.05, marginBottom:12 }}>
            Carte Culturelle<br/><span style={{ color:'var(--gold2)' }}>du Maroc</span>
          </h1>
          <p style={{ fontSize:15, color:'rgba(245,237,220,.55)', lineHeight:1.8, maxWidth:480 }}>
            Cliquez sur une ville pour explorer sa culture, son dialecte, sa cuisine et ses artisanats uniques.
          </p>
        </div>
      </section>

      <div style={{ maxWidth:1300, margin:'0 auto', padding:'clamp(24px,4vw,40px) clamp(16px,4vw,48px)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 340px', gap:24, alignItems:'start' }}>

          {/* Map */}
          <div>
            <LeafletMap height={520} onCityClick={(c) => setSelected(c.slug)}/>

            {/* Cities grid below map */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:10, marginTop:20 }}>
              {CITIES.map(c => (
                <button key={c.slug} onClick={() => setSelected(c.slug)}
                  style={{ padding:'10px 14px', borderRadius:12, border:`1.5px solid ${selected===c.slug ? c.color : 'var(--border)'}`, background:selected===c.slug ? `${c.color}10` : '#fff', cursor:'pointer', fontFamily:'Outfit,sans-serif', textAlign:'left', transition:'all .18s' }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=c.color;e.currentTarget.style.background=`${c.color}08`;}}
                  onMouseLeave={e=>{if(selected!==c.slug){e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.background='#fff';}}}>
                  <div style={{ fontSize:13, fontWeight:700, color: selected===c.slug ? c.color : 'var(--ink)' }}>{c.name}</div>
                  <div style={{ fontSize:11, color:'var(--muted)', marginTop:2 }}>{c.region}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ position:'sticky', top:80 }}>
            {city ? (
              <div style={{ background:'#fff', borderRadius:18, overflow:'hidden', border:`1px solid var(--border)`, boxShadow:'0 8px 40px rgba(0,0,0,.06)' }}>
                <div style={{ height:6, background:`linear-gradient(90deg,${city.color},${city.color}88)` }}/>
                <div style={{ padding:'clamp(18px,3vw,28px)' }}>
                  <h2 style={{ ...S, fontSize:'clamp(22px,3vw,32px)', color:'var(--ink)', marginBottom:6 }}>{city.name}</h2>
                  <div style={{ fontSize:12, color:'var(--muted)', marginBottom:20 }}>{city.region}</div>

                  <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
                    {[
                      { label:'Dialecte', value: city.dialect, color: city.color },
                      { label:'Cuisine', value: city.food, color: '#c47b0a' },
                      { label:'Artisanat', value: city.craft, color: '#0a7a6a' },
                      { label:'Coordonnées', value: `${city.lat.toFixed(2)}°N, ${Math.abs(city.lng).toFixed(2)}°W`, color: '#7a6248' },
                    ].map(row => (
                      <div key={row.label} style={{ display:'flex', justifyContent:'space-between', padding:'11px 0', borderBottom:'1px solid var(--border)' }}>
                        <span style={{ fontSize:13, color:'var(--muted)' }}>{row.label}</span>
                        <span style={{ fontSize:13, fontWeight:700, color:row.color }}>{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display:'flex', flexDirection:'column', gap:8, marginTop:20 }}>
                    <Link href={`/city/${city.slug}`} style={{ textDecoration:'none' }}>
                      <button className="btn-primary" style={{ width:'100%', justifyContent:'center', fontSize:13 }}>
                        Guide complet de {city.name} →
                      </button>
                    </Link>
                    <Link href={`/dialect?q=${city.dialect}`} style={{ textDecoration:'none' }}>
                      <button className="btn-outline" style={{ width:'100%', justifyContent:'center', fontSize:13 }}>
                        Dialecte {city.dialect} →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ background:'#fff', borderRadius:18, padding:'clamp(20px,3vw,32px)', border:'1px solid var(--border)', textAlign:'center' }}>
                <div style={{ ...S, fontSize:18, color:'var(--muted)', marginBottom:8 }}>Sélectionnez une ville</div>
                <p style={{ fontSize:13.5, color:'var(--muted)', lineHeight:1.7, marginBottom:20 }}>
                  Cliquez sur un point de la carte ou sur une ville ci-dessous pour explorer sa culture.
                </p>
                <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                  {CITIES.slice(0,5).map(c => (
                    <button key={c.slug} onClick={() => setSelected(c.slug)}
                      style={{ padding:'9px 14px', borderRadius:10, border:'1px solid var(--border)', background:'var(--bg2)', cursor:'pointer', fontFamily:'Outfit,sans-serif', fontSize:13, fontWeight:600, color:'var(--ink)', textAlign:'left', transition:'all .15s' }}
                      onMouseEnter={e=>{e.currentTarget.style.borderColor=c.color;e.currentTarget.style.color=c.color;}}
                      onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.color='var(--ink)';}}>
                      {c.name}
                      <span style={{ fontSize:11, color:'var(--muted)', marginLeft:6 }}>{c.region}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick stats */}
            <div style={{ background:'linear-gradient(135deg,#1c1007,#0a2318)', borderRadius:16, padding:'20px', marginTop:14, position:'relative', overflow:'hidden' }}>
              <Zellige opacity={0.1} id="ms-z"/>
              <div style={{ position:'relative', zIndex:1 }}>
                <div style={{ ...S, fontSize:16, color:'#fff', marginBottom:14 }}>Maroc en chiffres</div>
                {[
                  { v:'9', l:'Villes documentées', c:'var(--terra)' },
                  { v:'7', l:'Dialectes cartographiés', c:'var(--gold2)' },
                  { v:'355+', l:'Mots Darija', c:'var(--teal2)' },
                ].map(s => (
                  <div key={s.l} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,.08)' }}>
                    <span style={{ fontSize:12.5, color:'rgba(245,237,220,.5)' }}>{s.l}</span>
                    <span style={{ fontSize:14, fontWeight:700, color:s.c }}>{s.v}</span>
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
