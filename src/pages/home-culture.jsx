import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';


const S = { fontFamily: 'Playfair Display, Georgia, serif' };


// ── Icon paths map ─────────────────────────────────────────────
const IC = {
  compass:  '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  archive:  '<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>',
  tea:      '<path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>',
  moon:     '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  ring:     '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>',
  bath:     '<path d="M2 12h20v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5z"/><path d="M7 12V5c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v7"/><line x1="2" y1="12" x2="2" y2="9"/><path d="M2 9a2 2 0 0 1 2-2h1"/>',
  utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>',
  home:     '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  map:      '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',
  camera:   '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  music:    '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  book:     '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  users:    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  city:     '<line x1="3" y1="22" x2="21" y2="22"/><polyline points="5 22 5 7 9 7 9 22"/><polyline points="13 22 13 2 21 2 21 22"/><rect x="9" y="7" width="4" height="5"/>',
  star:     '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  heart:    '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  globe:    '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  clock:    '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  pin:      '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  search:   '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  craft:    '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  message:  '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  newspaper:'<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><line x1="18" y1="14" x2="12" y2="14"/><line x1="18" y1="18" x2="12" y2="18"/><path d="M12 10h6"/>',
  hotel:    '<path d="M3 22V8l9-4 9 4v14"/><path d="M9 22V12h6v10"/>',
  mail:     '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  tool:     '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  filetext: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
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

function Divider({ light=false }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:12 }}>
      <div style={{ flex:1, height:1, background:light?'rgba(255,255,255,.15)':'var(--border)' }}/>
      <div style={{ display:'flex', gap:6 }}>
        <div style={{ width:5, height:5, transform:'rotate(45deg)', background:light?'rgba(255,255,255,.2)':'var(--border)' }}/>
        <div style={{ width:9, height:9, transform:'rotate(45deg)', background:'var(--terra)' }}/>
        <div style={{ width:5, height:5, transform:'rotate(45deg)', background:light?'rgba(255,255,255,.2)':'var(--border)' }}/>
      </div>
      <div style={{ flex:1, height:1, background:light?'rgba(255,255,255,.15)':'var(--border)' }}/>
    </div>
  );
}

// ─── CITIES DATA ──────────────────────────────────────────────
const CITIES = [
  {
    slug:'marrakesh', name:'Marrakesh', arabicName:'مراكش', nickname:'The Red City',
    founded:'1062 CE', population:'1.1M', region:'Marrakesh-Safi', dialect:'Marrakshi',
    color:'#c0390a', altColor:'#c47b0a',
    tagline:'Where Africa meets history — the soul of Morocco',
    description:'The beating heart of Morocco. A medieval imperial city that pulses with extraordinary life — from the chaos of Jemaa el-Fna at sunset to the tranquility of the Majorelle Garden at dawn. Founded by the Almoravids in 1062, Marrakesh gave Morocco its European name.',
    tags:['Imperial City','UNESCO Medina','Gnawa Music','Zellige Crafts'],
    mustSee:['Jemaa el-Fna','Majorelle Garden','Bahia Palace','Koutoubia Mosque','Saadian Tombs'],
    food:['Tangia (clay urn lamb)','Pastilla (pigeon pie)','Harira soup','Mechoui roasted lamb','Mrouziya sweet tagine'],
    crafts:['Zellige tilework','Brass lanterns','Kaftan embroidery','Leather goods','Cedar carving'],
    music:['Gnawa (UNESCO)','Ahwach Berber dance','Jemaa el-Fna storytelling','Chaabi'],
    dialect_words:[{w:'Zwina',m:'Beautiful'},{w:'Tangia',m:'Marrakesh specialty dish'},{w:'Daba',m:'Right now'}],
    facts:[{k:'Founded',v:'1062 CE'},{k:'UNESCO',v:'Medina (1985)'},{k:'Altitude',v:'466 m'}],
    bestTime:'March–May, Sept–Nov',
  },
  {
    slug:'casablanca', name:'Casablanca', arabicName:'الدار البيضاء', nickname:'The White City',
    founded:'7th C BC', population:'3.7M', region:'Casablanca-Settat', dialect:'Casawi',
    color:'#c47b0a', altColor:'#e89a1a',
    tagline:'Morocco\'s heartbeat — commerce, modernity and the Atlantic',
    description:"Morocco's largest city and economic powerhouse. Where French Art Deco meets Islamic tradition, where the Hassan II Mosque rises magnificently from the ocean, and where Morocco's cosmopolitan identity is expressed most freely.",
    tags:['Hassan II Mosque','Atlantic Seafood','Art Deco','Financial Hub'],
    mustSee:['Hassan II Mosque','Corniche','Old Medina','Art Deco Quarter','Mohammed V Square'],
    food:['Grilled Atlantic sardines','Seafood pastilla','Harira','Couscous Friday','Rfissa'],
    crafts:['Art Deco architecture','Contemporary art galleries','Leather goods','Modern fashion'],
    music:['Chaabi (born in Casa)','Urban hip-hop','Jazz scene'],
    dialect_words:[{w:'Sah7i',m:'My buddy/bro'},{w:'Wach labas?',m:'Are you okay?'},{w:'Daba daba!',m:'Right now!'}],
    facts:[{k:'Population',v:'3.7 Million'},{k:'World Cup',v:'Host 2030'},{k:'Port',v:'Largest in Africa'}],
    bestTime:'Year round — mild Atlantic climate',
  },
  {
    slug:'fes', name:'Fès', arabicName:'فاس', nickname:'The Cultural Capital',
    founded:'789 CE', population:'1.2M', region:'Fès-Meknès', dialect:'Fassi',
    color:'#0a7a6a', altColor:'#0fa08c',
    tagline:'The world\'s oldest living medieval city — 9,000 streets, no cars',
    description:"The spiritual and intellectual capital of Morocco. Fes el-Bali is the largest living medieval city on earth — 9,000 streets, no cars, donkeys as transport. Its tanneries, madrasas and the Al-Qarawiyyin mosque-university (859 CE) represent the pinnacle of Islamic civilization.",
    tags:["World's Oldest University",'UNESCO Medina','Chouara Tannery','Fassi Cuisine'],
    mustSee:['Chouara Tannery','Medersa Bou Inania','Al-Qarawiyyin','Bab Bou Jeloud','Attarine Medersa'],
    food:['Pastilla (original pigeon)','Rfissa b-djaj','Ka3b lgzal pastries','Seffa sweet couscous','Harira d-Fas'],
    crafts:['Zellige (finest quality)','Blue and white ceramics','Carved plaster','Leather tanning','Silk weaving'],
    music:['Malhoun (Moroccan opera)','Andalusian music','Sufi brotherhoods'],
    dialect_words:[{w:'A sidi!',m:'Oh sir! (formal address)'},{w:'Bahia!',m:'Magnificent! (Fassi)'},{w:'Merhba wasahla',m:'Welcome fully'}],
    facts:[{k:'Founded',v:'789 CE'},{k:'UNESCO',v:'Medina (1981)'},{k:'Streets',v:'9,000+'}],
    bestTime:'Spring (March–May) and Autumn',
  },
  {
    slug:'tangier', name:'Tangier', arabicName:'طنجة', nickname:'The Gateway to Africa',
    founded:'5th C BC', population:'1M', region:'Tanger-Tetouan', dialect:'Tanjawi',
    color:'#1a6b9a', altColor:'#378add',
    tagline:'14km from Europe — where two seas and two continents meet',
    description:'Where Africa meets Europe and the Atlantic meets the Mediterranean. Tangier was once the most cosmopolitan city in the world — beloved by Matisse, Delacroix, Kerouac and the Beat Generation writers. A crossroads of civilizations for 3,000 years.',
    tags:['Two Seas Meet','14km from Spain','Beat Generation Heritage','Mediterranean Port'],
    mustSee:['Cap Spartel (Two Seas)','Kasbah Museum','Tangier Medina','Café Hafa','Hercules Caves'],
    food:['Grilled fresh fish','Byesar (fava bean dip)','Chermoula fish','Meloui flatbread','Seafood'],
    crafts:['Leather goods (Spanish influence)','Andalusian ceramics','Rattan furniture'],
    music:['Jilala Sufi music','Flamenco influence','International music scene'],
    dialect_words:[{w:'Wajid!',m:'A lot! (from Spanish)'},{w:'Kif-kif',m:'So-so'},{w:'Adios',m:'Goodbye (Spanish used daily)'}],
    facts:[{k:'Distance to Spain',v:'14 km'},{k:'History',v:'International Zone 1923–1956'},{k:'Climate',v:'Mediterranean'}],
    bestTime:'April–October',
  },
  {
    slug:'chefchaouen', name:'Chefchaouen', arabicName:'شفشاون', nickname:'The Blue City',
    founded:'1471 CE', population:'45K', region:'Rif Mountains', dialect:'Jebli',
    color:'#1a4b9a', altColor:'#378add',
    tagline:'Every wall painted cobalt blue — the most photogenic city on earth',
    description:"One of the most photographed cities on earth. Every wall, staircase and alleyway painted in rich cobalt blue — a tradition since the 1930s when Jewish refugees brought the custom. Nestled in the Rif Mountains at 600 metres. A place of extraordinary beauty.",
    tags:['Blue City','Rif Mountains','Andalusian Heritage','Photography Paradise'],
    mustSee:['Blue Medina alleys','Plaza Uta el-Hammam','Ras el-Maa waterfall','Kasbah Museum','Jebli crafts souks'],
    food:['Fresh local goat cheese','Mountain mint tea','Kefta tagine','Amlou paste','Wild herbs and honey'],
    crafts:['Jebli woven blankets','Blue painted ceramics','Traditional rugs','Leather sandals'],
    music:['Jebli folk songs','Call-response singing','Rif mountain traditions'],
    dialect_words:[{w:'Mli7a bezzaf!',m:'Very beautiful! (northern)'},{w:'Azul!',m:'Hello in Tarifit Amazigh'},{w:'Tanmirt!',m:'Thank you in Tarifit'}],
    facts:[{k:'Altitude',v:'600 m'},{k:'Founded',v:'1471 CE'},{k:'Heritage',v:'Andalusian + Jewish'}],
    bestTime:'April–June, September–October',
  },
  {
    slug:'essaouira', name:'Essaouira', arabicName:'الصويرة', nickname:'The Windy City',
    founded:'1765 CE', population:'77K', region:'Marrakesh-Safi', dialect:'Swiri',
    color:'#0a7a6a', altColor:'#1a6b9a',
    tagline:'Portuguese ramparts, Gnawa soul and the eternal Atlantic wind',
    description:'A fortified Atlantic port with 18th-century Portuguese ramparts and UNESCO-listed medina. The world capital of Gnawa music. Windswept and deeply artistic — Jimi Hendrix visited in 1969 and never forgot it.',
    tags:['Gnawa Music Capital','UNESCO Medina','Atlantic Surf','Portuguese Heritage'],
    mustSee:['Sea Ramparts & Cannons','Fishing Port','Gnawa Festival (June)','Thuya wood souks','Beach kite-surfing'],
    food:['Grilled sardines at the port','Fresh Atlantic fish','Argan products','Local goat cheese','Meloui bread'],
    crafts:['Thuya wood marquetry (unique to Essaouira)','Blue fishing boats','Silver jewelry','Pottery'],
    music:['Gnawa (UNESCO 2019)','Gnawa World Music Festival (June)','Blues and jazz fusion'],
    dialect_words:[{w:'Rih bezzaf!',m:'Very windy! (the classic joke)'},{w:'Gnawi',m:'A Gnawa music master'},{w:'Swiri',m:'Person from Essaouira'}],
    facts:[{k:'UNESCO',v:'Medina (2001)'},{k:'Wind',v:'300+ windy days/year'},{k:'Festival',v:'Gnawa — June'}],
    bestTime:'June for Gnawa Festival. April–Oct for surf.',
  },
  {
    slug:'agadir', name:'Agadir', arabicName:'أكادير', nickname:'The Beach Capital',
    founded:'1020 CE', population:'600K', region:'Souss-Massa', dialect:'Tachelhit',
    color:'#c47b0a', altColor:'#8a4500',
    tagline:'300 sunny days, argan oil and the world of the Amazigh Souss',
    description:"Morocco's premier beach resort and gateway to Amazigh Souss culture. 10km of golden Atlantic sand, 300+ sunny days per year, the world's finest argan oil and authentic Tachelhit Amazigh culture that predates the Arab conquest.",
    tags:['Atlantic Beach','300+ Sunny Days','Argan Oil Capital','Amazigh Tachelhit'],
    mustSee:['10km Agadir Beach','Souss-Massa Park (ibis birds)','Argan cooperative','Amazigh Heritage Museum','Oufella ruins'],
    food:['Tagine with argan oil','Tafarnout stone-baked bread','Amlou (almond argan paste)','Fresh Atlantic seafood','Medjool dates'],
    crafts:['Argan oil (UNESCO forest)','Amazigh silver and amber jewelry','Woven baskets','Pottery'],
    music:['Tachelhit Amazigh songs','Rais poetry tradition','Ahwach collective dance'],
    dialect_words:[{w:'Azul!',m:'Hello in Tachelhit'},{w:'Mamnoun!',m:'Thank you in Tachelhit'},{w:'Ifilki!',m:'Beautiful in Tachelhit'}],
    facts:[{k:'Sunshine',v:'300+ days/year'},{k:'Beach',v:'10 km golden sand'},{k:'Rebuilt',v:'After 1960 earthquake'}],
    bestTime:'Year round — Morocco\'s sunniest city',
  },
  {
    slug:'ouarzazate', name:'Ouarzazate', arabicName:'ورزازات', nickname:'Hollywood of Africa',
    founded:'Medieval', population:'71K', region:'Draa-Tafilalet', dialect:'Tachelhit',
    color:'#8a4500', altColor:'#c47b0a',
    tagline:'Gateway to the Sahara — where 20 films have been made',
    description:"The gateway to the Sahara and film capital of Africa. Ait Benhaddou (UNESCO) has starred in Gladiator, Game of Thrones and Lawrence of Arabia. The Draa Valley stretches south for 200km through date palm oases to the dunes of Erg Chebbi.",
    tags:['UNESCO Ait Benhaddou','Hollywood of Africa','Sahara Gateway','Draa Valley Oases'],
    mustSee:['Ait Benhaddou (UNESCO)','Sahara dunes at sunrise','Draa Valley drive','Atlas Film Studios','Kasbah Taourirt'],
    food:['Lamb tagine with prunes','Medjool dates','Berber stone bread','Desert black tea'],
    crafts:['Earthen kasbah architecture','Amazigh carpets','Pottery','Jewelry'],
    music:['Ahidus Atlas Amazigh drumming','Desert music traditions'],
    dialect_words:[{w:'Amazigh!',m:'Free man — Berber identity'},{w:'Ifilki!',m:'Beautiful in Tachelhit'},{w:'Ahlan!',m:'Welcome! (southern)'}],
    facts:[{k:'UNESCO',v:'Ait Benhaddou (1987)'},{k:'Films',v:'Gladiator, Game of Thrones'},{k:'Altitude',v:'1,160 m'}],
    bestTime:'October–April (avoid July–August 45°C+)',
  },
  {
    slug:'ifrane', name:'Ifrane', arabicName:'إفران', nickname:'Switzerland of Morocco',
    founded:'1929 CE', population:'15K', region:'Fès-Meknès', dialect:'Tamazight',
    color:'#0a5050', altColor:'#0a7a6a',
    tagline:'Alpine Morocco — cedar forests, Barbary monkeys and fresh mountain air',
    description:"Morocco's Alpine resort town at 1,650m in the Middle Atlas cedar forests. Built by the French with European architecture, home to wild Barbary macaques and Al Akhawayn University — Morocco's only English-language university.",
    tags:['Alpine Architecture','Cedar Forests','Barbary Macaques','Ski Resort Michlifen'],
    mustSee:['Cedar Forest (Barbary macaques)','Stone Lion landmark','Michlifen ski resort','Al Akhawayn University','Middle Atlas lakes'],
    food:['Fresh mountain trout','Wild mushrooms','Atlas cedar honey','Mountain lamb tagine'],
    crafts:['Cedar wood furniture','Heavy Amazigh wool blankets','Mountain honey'],
    music:['Middle Atlas Tamazight folk songs'],
    dialect_words:[{w:'Bard bezzaf!',m:'Very cold! (Atlas)'},{w:'Thlj!',m:'Snow!'},{w:'Azul!',m:'Hello in Tamazight'}],
    facts:[{k:'Altitude',v:'1,650 m — highest city'},{k:'University',v:'Al Akhawayn (English)'},{k:'Skiing',v:'Michlifen resort'}],
    bestTime:'Summer (hiking), December–Feb (snow)',
  },
];

const REGIONS = [
  {
    name:'Northern Morocco', color:'#1a6b9a',
    cities:['Tangier','Tetouan','Chefchaouen','Al Hoceima'],
    character:'Mediterranean and Atlantic coast. Strong Andalusian and Spanish influence. The dialect is Tanjawi — with Spanish words embedded. Fish, fava beans and mountain food.',
    icon: <Ic name="compass"/>,
  },
  {
    name:'Imperial Morocco', color:'#c0390a',
    cities:['Marrakesh','Fes','Meknes','Rabat'],
    character:'The four imperial cities — each a UNESCO heritage site. The cultural, spiritual and historical heart of Morocco. Rich food, zellige, malhoun poetry and the finest craftsmanship.',
    icon: <Ic name="archive"/>,
  },
  {
    name:'Atlantic Morocco', color:'#c47b0a',
    cities:['Casablanca','Essaouira','Agadir'],
    character:'Cosmopolitan, coastal and contemporary. From Casablanca\'s Art Deco to Essaouira\'s Gnawa soul to Agadir\'s sunshine. Atlantic seafood, argan oil and modern Moroccan life.',
    icon: <Ic name="compass"/>,
  },
  {
    name:'Saharan Morocco', color:'#8a4500',
    cities:['Ouarzazate','Merzouga','Zagora','Laayoune'],
    character:'Amazigh kasbah culture, Saharan dunes, date palm oases. Tachelhit and Hassaniya dialects. Earthen architecture, desert black tea and the endless sky.',
    icon: <Ic name="compass"/>,
  },
  {
    name:'Atlas Morocco', color:'#0a5050',
    cities:['Ifrane','Azilal','Khenifra','Midelt'],
    character:'Alpine villages and cedar forests at 1,000–2,500m. Middle Atlas Tamazight culture. Barbary macaques, mountain trout, cool summers and snowy winters.',
    icon: <Ic name="compass"/>,
  },
];

const RITUALS = [
  { icon: <Ic name="tea"/>, title:'Mint Tea Ceremony', color:'#0a7a6a', desc:'Pouring atay from height is a performance of hospitality. Three glasses traditional — poured at each visit, poured to guests before business. Refusing tea is impolite. The ritual > the drink.' },
  { icon: <Ic name="moon"/>, title:'Ramadan at Home', color:'#c0390a', desc:'Iftar begins with dates, harira, chebakia. The whole family — aunts, uncles, children — gathers nightly. The midnight hours fill with light and noise. The city transforms.' },
  { icon: <Ic name="ring"/>, title:'Moroccan Wedding', color:'#c47b0a', desc:"3 to 7 days. Henna night. The Amaria procession. Kaftan ceremony. Zaffa. Multiple costume changes. The bride is queen — carried on a palanquin. Morocco's most elaborate ritual." },
  { icon: <Ic name="bath"/>, title:'The Hammam', color:'#0a7a6a', desc:'Weekly public bath — social institution, not just hygiene. Kessa scrub, black olive soap, steam. Women have their hours, men theirs. Community happens here.' },
  { icon: <Ic name="utensils"/>, title:'Eating Together', color:'#c0390a', desc:'Traditional families eat from one shared communal plate. Right hand only. Eat from your side. Eyes down, conversation after. The etiquette of the shared table is ancient.' },
  { icon: <Ic name="home"/>, title:'The Riad', color:'#c47b0a', desc:'The traditional Moroccan home turns completely inward — all rooms face a central courtyard with fountain. No windows face the street. Privacy outside, paradise within.' },
];

// ─── CITY CARD ────────────────────────────────────────────────
function CityCard({ city }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={`/city/${city.slug}`} style={{ textDecoration:'none' }}>
      <div
        onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
        style={{
          borderRadius:18, overflow:'hidden', background:'#fff',
          border:`1.5px solid ${hov?city.color+'55':'var(--border)'}`,
          cursor:'pointer', transition:'all .28s',
          transform: hov?'translateY(-5px)':'translateY(0)',
          boxShadow: hov?`0 16px 48px ${city.color}18`:'none',
        }}>
        {/* Zellige header */}
        <div style={{ height:110, position:'relative', overflow:'hidden', background:`linear-gradient(135deg,${city.color}15,${city.color}08)` }}>
          <Zellige opacity={0.3} c1={city.color} c2={city.color} c3={city.altColor} size={55} id={`c-${city.slug}`}/>
          <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
            <div style={{ fontFamily:'Amiri,serif', fontSize:30, color:city.color, opacity:.88, direction:'rtl', lineHeight:1 }}>{city.arabicName}</div>
            <div style={{ width:28, height:2, background:city.color, opacity:.3, margin:'6px auto 0', borderRadius:1 }}/>
          </div>
          {/* Founded badge */}
          <div style={{ position:'absolute', top:10, right:12 }}>
            <span style={{ padding:'3px 9px', borderRadius:20, background:'rgba(255,255,255,.85)', fontSize:9.5, fontWeight:700, color:city.color }}>{city.founded}</span>
          </div>
        </div>
        {/* Content */}
        <div style={{ padding:'clamp(12px,2vw,16px)' }}>
          <div style={{ ...S, fontSize:18, color:'var(--ink)', marginBottom:3, lineHeight:1.2 }}>{city.name}</div>
          <div style={{ fontSize:11, fontWeight:700, color:city.color, textTransform:'uppercase', letterSpacing:'.07em', marginBottom:8 }}>{city.nickname}</div>
          <p style={{ fontSize:12.5, color:'var(--muted)', lineHeight:1.6, marginBottom:10 }}>
            {city.tagline}
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:10 }}>
            {city.tags.slice(0,2).map(t=>(
              <span key={t} style={{ padding:'2px 9px', borderRadius:20, background:city.color+'14', color:city.color, fontSize:10, fontWeight:600 }}>{t}</span>
            ))}
          </div>
          <div style={{ fontSize:11.5, fontWeight:600, color:city.color, display:'flex', alignItems:'center', gap:5 }}>
            Explore city guide <span style={{ transition:'transform .2s', transform:hov?'translateX(4px)':'translateX(0)' }}>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────
export default function HomeCulturePage() {
  const [activeCity, setActiveCity] = useState(CITIES[0]);
  const [tab, setTab] = useState('overview');

  return (
    <Layout>
      <SEO
        title="City Guide — Morocco's Cities & Culture"
        description="Explore all 9 Moroccan cities — food, crafts, dialect, music and must-see places. From Marrakesh to the Sahara."
      />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ position:'relative', minHeight:'clamp(320px,48vh,500px)', display:'flex', alignItems:'center', overflow:'hidden', background:'linear-gradient(155deg,#1a0800 0%,#2e1200 40%,#0a2318 80%,#061408 100%)' }}>
        <Zellige opacity={0.2} c1="#c0390a" c2="#c47b0a" c3="#0a7a6a" size={95} id="cg-hero-z"/>
        <Zellige opacity={0.08} c1="#c47b0a" c2="#0a7a6a" c3="#c0390a" size={48} id="cg-hero-z2"/>
        <ZelligeStar size={320} color="#c0390a" opacity={0.06} style={{ position:'absolute', right:'-60px', top:'-60px' }}/>
        <ZelligeStar size={240} color="#0a7a6a" opacity={0.05} style={{ position:'absolute', left:'-40px', bottom:'-40px' }}/>
        <div style={{ position:'absolute', width:500, height:500, background:'#c0390a', filter:'blur(130px)', opacity:.12, right:'-5%', top:'-5%', borderRadius:'50%', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', width:380, height:380, background:'#0a7a6a', filter:'blur(110px)', opacity:.1, left:'-5%', bottom:'-10%', borderRadius:'50%', pointerEvents:'none' }}/>

        <div style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(48px,6vw,80px) clamp(20px,5vw,60px)', position:'relative', zIndex:2, width:'100%' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, background:'rgba(232,154,26,.12)', border:'1px solid rgba(232,154,26,.25)', borderRadius:30, padding:'6px 18px', marginBottom:18 }}>
            <div style={{ width:6, height:6, borderRadius:'50%', background:'#e89a1a' }}/>
            <span style={{ fontFamily:'Amiri,serif', fontSize:14, color:'#e89a1a', direction:'rtl' }}>دليل المدن المغربية</span>
          </div>
          <h1 style={{ ...S, fontSize:'clamp(32px,5.5vw,62px)', color:'#fff', lineHeight:1.05, marginBottom:14 }}>
            Moroccan<br/>
            <span style={{ color:'var(--gold2)' }}>City Guide</span>
          </h1>
          <p style={{ fontSize:'clamp(13px,2vw,16px)', color:'rgba(245,237,220,.55)', maxWidth:540, lineHeight:1.85, marginBottom:28, fontWeight:300 }}>
            Every Moroccan city has its own dialect, cuisine, crafts and soul. Explore all 9 — from the imperial red of Marrakesh to the cobalt blue of Chefchaouen to the golden dunes of the Sahara.
          </p>
          <div style={{ display:'flex', gap:28, flexWrap:'wrap' }}>
            {[{v:'9',l:'Cities'},{v:'5',l:'Regions'},{v:'7',l:'Dialects'},{v:'4',l:'Imperial Cities'}].map(s=>(
              <div key={s.l}>
                <div style={{ ...S, fontSize:'clamp(20px,3vw,28px)', color:'var(--gold2)', lineHeight:1 }}>{s.v}</div>
                <div style={{ fontSize:11, color:'rgba(245,237,220,.45)', marginTop:3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARABIC BELT ───────────────────────────────────── */}
      <div style={{ background:'linear-gradient(135deg,#1c1007,#0a2318)', padding:'12px 0', borderBottom:'1px solid rgba(255,255,255,.06)', overflow:'hidden' }}>
        <div style={{ display:'flex', overflowX:'auto', scrollbarWidth:'none', whiteSpace:'nowrap', padding:'0 32px' }}>
          {['مراكش','·','فاس','·','طنجة','·','الصويرة','·','شفشاون','·','أكادير','·','ورزازات','·','الدار البيضاء','·','إفران'].map((t,i)=>(
            <span key={i} style={{ padding:'0 14px', fontFamily:'Amiri,serif', fontSize:t==='·'?12:17, color:t==='·'?'rgba(255,255,255,.15)':'rgba(255,255,255,.5)', direction:'rtl' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── CITY CARDS GRID ────────────────────────────────── */}
      <section style={{ padding:'clamp(32px,5vw,60px) 0', background:'#fdf8f2', position:'relative', overflow:'hidden' }}>
        <Zellige opacity={0.05} c1="#c0390a" c2="#c47b0a" c3="#0a7a6a" size={130} id="grid-z"/>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)', position:'relative', zIndex:1 }}>
          <div style={{ textAlign:'center', marginBottom:'clamp(24px,4vw,44px)' }}>
            <span className="sec-label">دليل المدن</span>
            <h2 style={{ ...S, fontSize:'clamp(26px,4vw,40px)', color:'var(--ink)', marginBottom:12 }}>9 Cities, 9 Worlds</h2>
            <Divider/>
            <p style={{ fontSize:15, color:'var(--muted)', maxWidth:480, margin:'14px auto 0', lineHeight:1.75 }}>
              Click any city for a deep cultural guide — food, crafts, dialect, music and must-see places.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:'clamp(12px,2vw,18px)' }}>
            {CITIES.map(city => <CityCard key={city.slug} city={city}/>)}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CITY EXPLORER ──────────────────────── */}
      <section style={{ padding:'clamp(32px,5vw,60px) 0', background:'#fff', borderTop:'1px solid var(--border)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)' }}>
          <div style={{ textAlign:'center', marginBottom:'clamp(20px,4vw,36px)' }}>
            <span className="sec-label">Cultural Explorer</span>
            <h2 style={{ ...S, fontSize:'clamp(24px,4vw,38px)', color:'var(--ink)', marginBottom:10 }}>
              Explore a City in Depth
            </h2>
            <Divider/>
          </div>

          {/* City selector */}
          <div style={{ display:'flex', gap:0, overflowX:'auto', scrollbarWidth:'none', borderBottom:'1px solid var(--border)', marginBottom:28 }}>
            {CITIES.map(city=>(
              <button key={city.slug} onClick={()=>{ setActiveCity(city); setTab('overview'); }}
                style={{ padding:'clamp(10px,2vw,14px) clamp(12px,2vw,20px)', fontSize:'clamp(11px,1.5vw,13px)', fontWeight:activeCity.slug===city.slug?700:400, cursor:'pointer', border:'none', background:'transparent', fontFamily:'Outfit,sans-serif', whiteSpace:'nowrap', transition:'all .18s',
                  color: activeCity.slug===city.slug?city.color:'var(--muted)',
                  borderBottom:`3px solid ${activeCity.slug===city.slug?city.color:'transparent'}` }}>
                {city.name}
              </button>
            ))}
          </div>

          {/* Tabs */}
          <div style={{ display:'flex', gap:7, marginBottom:24, overflowX:'auto', scrollbarWidth:'none' }}>
            {['overview','food','crafts','music','dialect'].map(t=>(
              <button key={t} onClick={()=>setTab(t)}
                className={`tag-chip${tab===t?' active':''}`}
                style={{ fontFamily:'Outfit,sans-serif', flexShrink:0, fontSize:12, textTransform:'capitalize' }}>
                {t}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:24 }}>
            <div>
              {/* City header */}
              <div style={{ background:`linear-gradient(155deg,#1c1007,${activeCity.color}33)`, borderRadius:18, padding:24, marginBottom:18, position:'relative', overflow:'hidden' }}>
                <Zellige opacity={0.2} c1={activeCity.color} c2={activeCity.color} c3={activeCity.altColor} size={65} id={`active-z`}/>
                <div style={{ position:'relative', zIndex:1 }}>
                  <div style={{ fontFamily:'Amiri,serif', fontSize:24, color:activeCity.color, opacity:.9, direction:'rtl', marginBottom:4 }}>{activeCity.arabicName}</div>
                  <div style={{ ...S, fontSize:'clamp(24px,4vw,34px)', color:'#fff', lineHeight:1.1, marginBottom:4 }}>{activeCity.name}</div>
                  <div style={{ fontSize:13, color:'rgba(255,255,255,.5)', marginBottom:12, fontStyle:'italic' }}>{activeCity.nickname}</div>
                  <p style={{ fontSize:13.5, color:'rgba(255,255,255,.65)', lineHeight:1.75 }}>{activeCity.description}</p>
                  <div style={{ marginTop:16 }}>
                    <Link href={`/city/${activeCity.slug}`}>
                      <button className="btn-primary" style={{ fontSize:13 }}>Full City Guide →</button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tab content */}
              {tab === 'overview' && (
                <div>
                  <div style={{ marginBottom:16 }}>
                    <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:activeCity.color, marginBottom:12 }}>City Facts</div>
                    {activeCity.facts.map(f=>(
                      <div key={f.k} className="fact-row"><span className="fact-key">{f.k}</span><span className="fact-val">{f.v}</span></div>
                    ))}
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:activeCity.color, marginBottom:10 }}>Must See</div>
                    {activeCity.mustSee.map((m,i)=>(
                      <div key={i} style={{ display:'flex', gap:10, alignItems:'center', padding:'8px 12px', borderRadius:10, background:'var(--bg2)', marginBottom:6 }}>
                        <div style={{ width:6, height:6, borderRadius:'50%', background:activeCity.color, flexShrink:0 }}/>
                        <span style={{ fontSize:13.5, color:'var(--ink)' }}>{m}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding:'10px 14px', background:activeCity.color+'10', borderRadius:10, border:`1px solid ${activeCity.color}22` }}>
                    <div style={{ fontSize:10.5, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', color:activeCity.color, marginBottom:5 }}>Best Time to Visit</div>
                    <div style={{ fontSize:13.5, color:'var(--ink2)' }}>{activeCity.bestTime}</div>
                  </div>
                </div>
              )}

              {tab === 'food' && (
                <div>
                  <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:activeCity.color, marginBottom:12 }}>Signature Dishes</div>
                  {activeCity.food.map((f,i)=>(
                    <div key={i} style={{ display:'flex', gap:12, alignItems:'flex-start', padding:'10px 13px', borderRadius:11, background: i%2===0?'var(--bg2)':'#fff', border:'1px solid var(--border)', marginBottom:8 }}>
                      <span style={{ display:'flex', alignItems:'center', color:'var(--gold)' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg></span>
                      <div>
                        <div style={{ fontSize:13.5, fontWeight:600, color:'var(--ink)' }}>{f.split('(')[0].trim()}</div>
                        {f.includes('(') && <div style={{ fontSize:12, color:'var(--muted)', marginTop:2 }}>({f.split('(')[1].replace(')','')}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'crafts' && (
                <div>
                  <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:activeCity.color, marginBottom:12 }}>Traditional Crafts</div>
                  {activeCity.crafts.map((c,i)=>(
                    <div key={i} style={{ display:'flex', gap:12, alignItems:'center', padding:'10px 13px', borderRadius:11, background:'var(--bg2)', marginBottom:7 }}>
                      <div style={{ width:8, height:8, borderRadius:'50%', background:activeCity.color, flexShrink:0 }}/>
                      <span style={{ fontSize:13.5, color:'var(--ink)' }}>{c}</span>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'music' && (
                <div>
                  <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:activeCity.color, marginBottom:12 }}>Music & Traditions</div>
                  {activeCity.music.map((m,i)=>(
                    <div key={i} style={{ display:'flex', gap:12, alignItems:'center', padding:'10px 13px', borderRadius:11, background:'var(--bg2)', marginBottom:7 }}>
                      <span style={{ display:'flex', alignItems:'center', color:'var(--teal)' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></span>
                      <span style={{ fontSize:13.5, color:'var(--ink)' }}>{m}</span>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'dialect' && (
                <div>
                  <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:activeCity.color, marginBottom:14 }}>
                    Local Phrases — {activeCity.dialect} dialect
                  </div>
                  {activeCity.dialect_words.map((d,i)=>(
                    <div key={i} style={{ display:'flex', alignItems:'center', gap:16, padding:'14px 16px', borderRadius:12, background: i%2===0?'var(--bg2)':'#fff', border:'1px solid var(--border)', marginBottom:9 }}>
                      <div style={{ ...S, fontSize:22, color:activeCity.color, minWidth:120, flexShrink:0 }}>{d.w}</div>
                      <div style={{ fontSize:13.5, color:'var(--ink2)' }}>{d.m}</div>
                    </div>
                  ))}
                  <Link href="/dialect">
                    <button className="btn-teal" style={{ width:'100%', justifyContent:'center', marginTop:8, fontSize:13 }}>
                      Full Dictionary →
                    </button>
                  </Link>
                </div>
              )}
            </div>

            {/* Right — tags, regions */}
            <div>
              <div style={{ ...S, fontSize:22, color:'var(--ink)', marginBottom:12 }}>Cultural Tags</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:24 }}>
                {activeCity.tags.map(tag=>(
                  <span key={tag} style={{ padding:'6px 14px', borderRadius:20, background:activeCity.color+'14', color:activeCity.color, fontSize:12, fontWeight:600 }}>{tag}</span>
                ))}
              </div>
              <div style={{ background:'var(--bg2)', borderRadius:14, padding:20, marginBottom:18 }}>
                <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:'var(--muted)', marginBottom:10 }}>Region</div>
                <div style={{ fontSize:14, fontWeight:600, color:'var(--ink)', marginBottom:4 }}>{activeCity.region}</div>
                <div style={{ fontSize:12.5, color:'var(--muted)' }}>Dialect: {activeCity.dialect}</div>
                <div style={{ fontSize:12.5, color:'var(--muted)', marginTop:3 }}>Population: {activeCity.population}</div>
              </div>
              <Link href={`/city/${activeCity.slug}`}>
                <div style={{ background:`linear-gradient(135deg,${activeCity.color},${activeCity.altColor})`, borderRadius:14, padding:20, cursor:'pointer', transition:'all .2s' }}
                  onMouseEnter={e=>e.currentTarget.style.transform='translateY(-2px)'}
                  onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
                  <div style={{ ...S, fontSize:18, color:'#fff', marginBottom:6 }}>Full Guide: {activeCity.name}</div>
                  <div style={{ fontSize:13, color:'rgba(255,255,255,.7)', lineHeight:1.6, marginBottom:12 }}>Deep dive into food, crafts, history, dialect and local life.</div>
                  <div style={{ fontSize:13, fontWeight:700, color:'#fff' }}>Open city guide →</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── REGIONS ────────────────────────────────────────── */}
      <section style={{ padding:'clamp(32px,5vw,60px) 0', background:'linear-gradient(155deg,#1c1007,#0a2318)', position:'relative', overflow:'hidden' }}>
        <Zellige opacity={0.15} c1="#c0390a" c2="#c47b0a" c3="#0a7a6a" size={90} id="reg-z"/>
        <ZelligeStar size={300} color="#c0390a" opacity={0.05} style={{ position:'absolute', right:'-40px', top:'-40px' }}/>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)', position:'relative', zIndex:1 }}>
          <div style={{ textAlign:'center', marginBottom:'clamp(24px,4vw,40px)' }}>
            <span className="sec-label" style={{ color:'var(--teal2)' }}>Geography & Culture</span>
            <h2 style={{ ...S, fontSize:'clamp(24px,4vw,38px)', color:'#fff', marginBottom:10 }}>5 Regions of Morocco</h2>
            <Divider light/>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))', gap:'clamp(10px,2vw,16px)' }}>
            {REGIONS.map(r=>(
              <div key={r.name} style={{ borderRadius:16, overflow:'hidden', background:'rgba(255,255,255,.06)', border:`1px solid ${r.color}33`, transition:'all .26s' }}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,.1)';e.currentTarget.style.borderColor=r.color+'66';}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.06)';e.currentTarget.style.borderColor=r.color+'33';}}>
                <div style={{ height:4, background:r.color }}/>
                <div style={{ padding:'16px 18px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
                    <span style={{ fontSize:22 }}>{r.icon}</span>
                    <div style={{ fontSize:13, fontWeight:700, color:'#fff' }}>{r.name}</div>
                  </div>
                  <div style={{ fontSize:12, color:'rgba(255,255,255,.5)', marginBottom:10 }}>{r.cities.join(' · ')}</div>
                  <div style={{ fontSize:12.5, color:'rgba(255,255,255,.65)', lineHeight:1.65 }}>{r.character}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVING TRADITIONS ──────────────────────────────── */}
      <section style={{ padding:'clamp(32px,5vw,60px) 0', background:'#fdf8f2', position:'relative', overflow:'hidden' }}>
        <Zellige opacity={0.05} c1="#c0390a" c2="#c47b0a" c3="#0a7a6a" size={130} id="trad-z"/>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)', position:'relative', zIndex:1 }}>
          <div style={{ textAlign:'center', marginBottom:'clamp(24px,4vw,40px)' }}>
            <span className="sec-label">التقاليد الحية</span>
            <h2 style={{ ...S, fontSize:'clamp(24px,4vw,38px)', color:'var(--ink)', marginBottom:10 }}>Living Traditions</h2>
            <Divider/>
            <p style={{ fontSize:15, color:'var(--muted)', maxWidth:480, margin:'14px auto 0', lineHeight:1.75 }}>
              The cultural rituals that define daily, seasonal and celebratory life in Moroccan homes — unchanged for centuries.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:'clamp(10px,2vw,16px)' }}>
            {RITUALS.map(r=>(
              <div key={r.title} style={{ background:'#fff', borderRadius:16, padding:'clamp(16px,2vw,22px)', border:'1px solid var(--border)', transition:'all .26s' }}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.borderColor=r.color+'45';e.currentTarget.style.boxShadow=`0 10px 36px ${r.color}12`;}}
                onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.boxShadow='none';}}>
                <div style={{ fontSize:28, marginBottom:12 }}>{r.icon}</div>
                <div style={{ height:3, width:36, background:r.color, borderRadius:2, marginBottom:14 }}/>
                <h3 style={{ ...S, fontSize:17, color:'var(--ink)', marginBottom:10 }}>{r.title}</h3>
                <p style={{ fontSize:13, color:'var(--muted)', lineHeight:1.7 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)} }
      `}</style>
    </Layout>
  );
}
