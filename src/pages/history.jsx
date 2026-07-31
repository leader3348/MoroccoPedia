import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

// ── Design tokens ──────────────────────────────────────────────
const S = { fontFamily: 'Playfair Display, Georgia, serif' };

// ── Zellige SVG Pattern ────────────────────────────────────────
function Zellige({ opacity = 0.15, color1 = '#c0390a', color2 = '#c47b0a', color3 = '#0a7a6a', size = 90, id = 'z' }) {
  return (
    <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none' }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
          <polygon
            points={`${size*.5},${size*.05} ${size*.62},${size*.27} ${size*.95},${size*.27} ${size*.72},${size*.45} ${size*.81},${size*.76} ${size*.5},${size*.6} ${size*.19},${size*.76} ${size*.28},${size*.45} ${size*.05},${size*.27} ${size*.38},${size*.27}`}
            fill="none" stroke={color1} strokeWidth="1.2" opacity={opacity}
          />
          <polygon
            points={`${size*.5},${size*.2} ${size*.65},${size*.5} ${size*.5},${size*.8} ${size*.35},${size*.5}`}
            fill={color3} opacity={opacity * 0.35} stroke={color3} strokeWidth="0.5"
          />
          <line x1={size*.5} y1="0" x2={size*.5} y2={size} stroke={color2} strokeWidth="0.4" opacity={opacity*.5}/>
          <line x1="0" y1={size*.5} x2={size} y2={size*.5} stroke={color2} strokeWidth="0.4" opacity={opacity*.5}/>
          <line x1="0" y1="0" x2={size} y2={size} stroke={color1} strokeWidth="0.3" opacity={opacity*.35}/>
          <line x1={size} y1="0" x2="0" y2={size} stroke={color1} strokeWidth="0.3" opacity={opacity*.35}/>
          <circle cx={size*.5} cy={size*.5} r="4" fill={color1} opacity={opacity*.5}/>
          <circle cx="0" cy="0" r="3" fill={color2} opacity={opacity*.5}/>
          <circle cx={size} cy="0" r="3" fill={color2} opacity={opacity*.5}/>
          <circle cx="0" cy={size} r="3" fill={color2} opacity={opacity*.5}/>
          <circle cx={size} cy={size} r="3" fill={color2} opacity={opacity*.5}/>
          <rect x="0" y="0" width={size} height={size} fill="none" stroke={color1} strokeWidth="0.3" opacity={opacity*.25}/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  );
}

function ZelligeStar({ size = 180, color = '#c0390a', opacity = 0.07, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ pointerEvents:'none', ...style }}>
      <polygon points="100,8 124,56 188,56 136,90 158,148 100,116 42,148 64,90 12,56 76,56"
        fill="none" stroke={color} strokeWidth="2" opacity={opacity}/>
      <polygon points="100,28 118,62 154,62 126,82 138,118 100,96 62,118 74,82 46,62 82,62"
        fill={color} opacity={opacity*.5}/>
      <rect x="74" y="74" width="52" height="52" transform="rotate(45 100 100)"
        fill="none" stroke={color} strokeWidth="1.5" opacity={opacity*.7}/>
      <circle cx="100" cy="100" r="12" fill="none" stroke={color} strokeWidth="1" opacity={opacity*.6}/>
      <circle cx="100" cy="100" r="4" fill={color} opacity={opacity*.8}/>
    </svg>
  );
}

function Divider({ light = false, color = 'var(--terra)' }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:12 }}>
      <div style={{ flex:1, height:1, background: light ? 'rgba(255,255,255,.15)' : 'var(--border)' }}/>
      <div style={{ display:'flex', gap:6 }}>
        <div style={{ width:5, height:5, transform:'rotate(45deg)', background: light ? 'rgba(255,255,255,.2)' : 'var(--border)' }}/>
        <div style={{ width:9, height:9, transform:'rotate(45deg)', background: color }}/>
        <div style={{ width:5, height:5, transform:'rotate(45deg)', background: light ? 'rgba(255,255,255,.2)' : 'var(--border)' }}/>
      </div>
      <div style={{ flex:1, height:1, background: light ? 'rgba(255,255,255,.15)' : 'var(--border)' }}/>
    </div>
  );
}

// ── DYNASTIES DATA ─────────────────────────────────────────────
const DYNASTIES = [
  {
    id: 'idrisid',
    name: 'Idrisid Dynasty',
    arabicName: 'الأدارسة',
    period: '788 – 974 CE',
    capital: 'Fes',
    color: '#0a7a6a',
    founded: 'Idris I',
    description: "The first Islamic dynasty of Morocco, founded by Idris I — a descendant of Prophet Muhammad — who fled Arabia after the Battle of Fakhkh. Idris I established the city of Fes and began the process of Islamizing and unifying the Amazigh tribes. His son Idris II completed Fes and made it one of the most important cities in the Islamic world. The Idrisids introduced Islam not through conquest but through intellectual persuasion and learning.",
    achievements: [
      'Founded Fes — future intellectual capital of the Muslim world',
      'First Islamic dynasty in the Maghreb',
      'Peaceful Islamization of the Amazigh peoples',
      'Established trade routes with the Middle East',
      'Created Morocco\'s first centralized state'
    ],
    legacy: 'Fes, Al-Qarawiyyin, Morocco\'s Islamic identity'
  },
  {
    id: 'almoravid',
    name: 'Almoravid Dynasty',
    arabicName: 'المرابطون',
    period: '1040 – 1147 CE',
    capital: 'Marrakesh',
    color: '#c0390a',
    founded: 'Abdullah ibn Yasin',
    description: "A Saharan Amazigh empire that rose from Islamic reformers in the western Sahara and built an empire stretching from Senegal to Spain. The Almoravids founded Marrakesh in 1062, making it the imperial capital that would give Morocco its name. Under Yusuf ibn Tashfin they crossed into Spain to defeat Alfonso VI, saving Andalusia and bringing Moroccan culture to its closest encounter with European civilization.",
    achievements: [
      'Founded Marrakesh in 1062 — gave Morocco its name',
      'Unified Morocco and ruled Andalusia',
      'Defeated Alfonso VI at the Battle of Zallaqa (1086)',
      'Spread Maliki Islamic law across the Maghreb',
      'Built first stone mosque in sub-Saharan Africa'
    ],
    legacy: 'Marrakesh, Moroccan Islamic law tradition, Andalusian connection'
  },
  {
    id: 'almohad',
    name: 'Almohad Dynasty',
    arabicName: 'الموحدون',
    period: '1121 – 1269 CE',
    capital: 'Marrakesh',
    color: '#c47b0a',
    founded: 'Muhammad ibn Tumart',
    description: "The greatest empire the Maghreb has ever seen — at its peak controlling Morocco, Algeria, Tunisia, Libya, and most of Iberian Spain. The Almohad caliphs were great patrons of philosophy, architecture and science. Under Caliph Ya'qub al-Mansur, Morocco reached the height of intellectual achievement — Ibn Rushd (Averroes) and Moses Maimonides were both products of Almohad Marrakesh. The Koutoubia Mosque and Giralda of Seville are their enduring monuments.",
    achievements: [
      'Greatest Moroccan empire — controlled half of western Islam',
      'Built the Koutoubia Mosque and Giralda of Seville',
      'Patronized Averroes (Ibn Rushd) and Maimonides',
      'Hassan Tower in Rabat — largest minaret in the world',
      'Architectural golden age of the Maghreb',
      'University culture and philosophical renaissance'
    ],
    legacy: 'Koutoubia, Giralda, Rabat, Averroes, the Almohad architectural style'
  },
  {
    id: 'marinid',
    name: 'Marinid Dynasty',
    arabicName: 'المرينيون',
    period: '1244 – 1465 CE',
    capital: 'Fes',
    color: '#0a7a6a',
    founded: 'Abu Yahya',
    description: "The golden age of Fes. The Marinids transformed Fes el-Jedid (New Fes) into one of the most beautiful cities in the medieval Islamic world and built the finest madrasas Morocco has ever seen. Medersa Bou Inania, Medersa el-Attarin — buildings so exquisite they remain among the world's greatest architectural achievements. The Marinid court attracted poets, scholars and craftsmen from across the Islamic world. Ibn Battuta and Ibn Khaldun both passed through their courts.",
    achievements: [
      'Built the finest Islamic madrasas in history — Bou Inania, el-Attarin',
      'Founded Fes el-Jedid (New Fes)',
      'Patronized Ibn Khaldun and Ibn Battuta',
      'Refined zellige tilework to its ultimate perfection',
      'Diplomatic relations with Europe and sub-Saharan Africa',
      'Hosted Andalusian refugees bringing music, poetry and art'
    ],
    legacy: 'Fes medina, Marinid madrasas, zellige art, Moroccan literary culture'
  },
  {
    id: 'saadian',
    name: 'Saadian Dynasty',
    arabicName: 'السعديون',
    period: '1510 – 1659 CE',
    capital: 'Marrakesh',
    color: '#8a4500',
    founded: 'Muhammad al-Qaim',
    description: "Morocco's most magnificent renaissance. The Saadian sultans expelled the Portuguese from the coast, defeated the Songhai Empire at the Battle of Tondibi (1591) and briefly made Marrakesh the richest city in Africa. Sultan Ahmad al-Mansur built the El Badi Palace — described by contemporaries as the most magnificent palace in the world. Their tombs, sealed for centuries and discovered in 1917, are covered floor to ceiling in the most extraordinary zellige, carved plaster and cedar carving Morocco has ever produced.",
    achievements: [
      'Expelled Portuguese from Morocco\'s Atlantic coast',
      'Defeated the Songhai Empire — Battle of Tondibi 1591',
      'Built El Badi Palace — most magnificent in the world',
      'Saadian Tombs — pinnacle of Moroccan decorative arts',
      'Established sugar industry and trans-Saharan gold trade',
      'Diplomatic relations with Elizabethan England'
    ],
    legacy: 'Saadian Tombs, El Badi Palace, Marrakesh golden age, Moroccan gold trade'
  },
  {
    id: 'alaoui',
    name: 'Alaoui Dynasty',
    arabicName: 'العلويون',
    period: '1631 CE – Present',
    capital: 'Rabat',
    color: '#c0390a',
    founded: 'Moulay Ali Cherif',
    description: "The current reigning dynasty of Morocco — the longest continuous ruling dynasty in the Arab world. The Alaouites are sharifs (descendants of Prophet Muhammad) who emerged from the Tafilalt oasis. Sultan Moulay Ismail built the imperial city of Meknes into a Moroccan Versailles. Mohammed V led independence from France in 1956. Hassan II navigated the Cold War era. Mohammed VI has modernized Morocco while building the Grand Mosque and high-speed rail — guiding Morocco toward its 2030 World Cup destiny.",
    achievements: [
      'Continuous dynasty from 1631 to today — the oldest ruling Arab dynasty',
      'Moulay Ismail: imperial Meknes — Morocco\'s Versailles',
      'Mohammed V: led independence 1956 — the father of modern Morocco',
      'Hassan II: completed Hassan II Mosque and Green March 1975',
      'Mohammed VI: TGV high-speed rail, Grand Mosque, 2030 World Cup',
      'Maintained Morocco\'s unique independence throughout colonialism'
    ],
    legacy: 'Modern Morocco, independence, national identity, World Cup 2030'
  }
];

// ── FIGURES DATA ───────────────────────────────────────────────
const FIGURES = [
  {
    id: 'yusuf-ibn-tashfin',
    name: 'Yusuf ibn Tashfin',
    arabicName: 'يوسف بن تاشفين',
    title: 'Founder of Marrakesh · Commander of Muslims',
    born: 'c. 1009 CE, Sahara',
    died: '1106 CE, Marrakesh',
    dynasty: 'Almoravid',
    category: 'Ruler',
    color: '#c0390a',
    era: '11th–12th Century',
    description: "One of the greatest rulers in Moroccan history. Yusuf ibn Tashfin founded Marrakesh in 1062 — the city that would give Morocco its name (the European corruption of 'Marrakesh' became 'Morocco'). He unified Morocco, crossed the Strait of Gibraltar and saved Andalusia from the Christian Reconquista at the Battle of Zallaqa (1086). Alfonso VI of Castile, at the height of his power, was decisively defeated. Ibn Tashfin then ruled an empire stretching from the Senegal River to the Ebro in Spain.",
    achievements: [
      'Founded Marrakesh in 1062 — gave Morocco its European name',
      'Defeated Alfonso VI at the Battle of Zallaqa (1086)',
      'United Morocco, Western Sahara, and Andalusia',
      'Established the Almoravid Empire stretching to sub-Saharan Africa',
      'Invited to Spain by the Andalusian taifa kings',
      'Ruled until the age of ~97 — remarkable longevity for the era'
    ],
    quote: 'We shall meet your challenge with iron and fire',
    impact: 'Without Yusuf ibn Tashfin, the Reconquista may have succeeded 400 years earlier. Marrakesh may never have become a city. Morocco may not exist.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Yusuf_ibn_Tashfin.jpg/400px-Yusuf_ibn_Tashfin.jpg',
  },
  {
    id: 'fatima-al-fihri',
    name: 'Fatima al-Fihri',
    arabicName: 'فاطمة الفهرية',
    title: 'Founder of the World\'s Oldest University',
    born: 'c. 800 CE, Kairouan (Tunisia)',
    died: 'c. 880 CE, Fes',
    dynasty: 'Idrisid era',
    category: 'Scholar',
    color: '#0a7a6a',
    era: '9th Century',
    description: "A Tunisian woman who moved to Fes and founded Al-Qarawiyyin in 859 CE — the world's oldest continuously operating university, recognized by UNESCO and the Guinness Book of World Records. Fatima al-Fihri used her inheritance to build the mosque-university that would produce scholars, jurists and thinkers across 11 centuries. She supervised its construction personally and fasted throughout the entire building period, eating only when the work was completed.",
    achievements: [
      'Founded Al-Qarawiyyin in 859 CE — world\'s oldest university (UNESCO/Guinness)',
      'First woman founder of an educational institution in world history',
      'Financed the entire project from personal inheritance',
      'Fasted throughout construction as an act of devotion',
      'Al-Qarawiyyin predates Oxford by 200+ years',
      'Her institution influenced the European university system'
    ],
    quote: 'She supervised its construction with her own eyes',
    impact: 'Al-Qarawiyyin has been continuously operating for 1,165 years. It shaped Islamic law, science, mathematics and philosophy. Fatima al-Fihri created the template for the university as an institution.',
    image: null,
  },
  {
    id: 'ibn-battuta',
    name: 'Ibn Battuta',
    arabicName: 'ابن بطوطة',
    title: 'The Greatest Traveler in History',
    born: '1304 CE, Tangier',
    died: '1368 CE, Morocco',
    dynasty: 'Marinid era',
    category: 'Explorer',
    color: '#c47b0a',
    era: '14th Century',
    description: "Born in Tangier in 1304, Ibn Battuta traveled 120,000 kilometers across the known world — more than any other person before the age of steam. Over 29 years, he visited 44 modern countries including Mali, India, China, the Maldives, Anatolia and sub-Saharan Africa. His account, the Rihla, is the most important travel document of the medieval world. Marco Polo covered 24,000 kilometers; Ibn Battuta covered five times that distance. He remains Morocco's greatest gift to world exploration.",
    achievements: [
      '120,000 km traveled — 5× more than Marco Polo',
      'Visited 44 modern countries across three continents',
      'The Rihla — most important medieval travel document',
      'Witnessed the Black Death sweeping through the Middle East',
      'Met emperors, sultans and scholars across the Islamic world',
      'His accounts of Mali and China remain primary historical sources'
    ],
    quote: 'I set off alone, having neither fellow-traveler in whose companionship I might find cheer, nor caravan whose party I might join.',
    impact: 'Ibn Battuta\'s Rihla is a primary source for 14th-century history across 44 countries. Without him, the history of medieval Mali, India and China would be significantly poorer.',
    image: null,
  },
  {
    id: 'ibn-khaldun',
    name: 'Ibn Khaldun',
    arabicName: 'ابن خلدون',
    title: 'Father of Sociology, History and Economics',
    born: '1332 CE, Tunis',
    died: '1406 CE, Cairo',
    dynasty: 'Marinid era',
    category: 'Scholar',
    color: '#0a7a6a',
    era: '14th Century',
    description: "Arguably the greatest intellect the Arab world has ever produced. Ibn Khaldun spent years in Morocco — at the Marinid courts of Fes and Tlemcen — and wrote the Muqaddimah, which Arnold Toynbee called 'undoubtedly the greatest work of its kind that has ever yet been created by any mind in any time or place.' He invented sociology 500 years before Auguste Comte, proposed cyclical theories of history, described market economics before Adam Smith, and analyzed group solidarity (asabiyya) as the driver of political power.",
    achievements: [
      'Wrote the Muqaddimah — greatest work of historical theory ever written',
      'Invented sociology 500 years before Comte',
      'Proposed theories of economics before Adam Smith',
      'Developed cyclical theory of civilizations',
      'Concept of asabiyya (group solidarity) still used by historians',
      'His theory of the rise and fall of dynasties predicted Morocco\'s own history'
    ],
    quote: 'The past resembles the future more than one drop of water resembles another.',
    impact: 'Ibn Khaldun founded four academic disciplines simultaneously — sociology, historiography, economics and political science. Modern scholars of Africa, the Middle East and Islamic civilization rely fundamentally on his work.',
    image: null,
  },
  {
    id: 'moulay-ismail',
    name: 'Moulay Ismail',
    arabicName: 'مولاي إسماعيل',
    title: 'Sultan of Meknes · Builder of Empire',
    born: '1645 CE, Sijilmasa',
    died: '1727 CE, Meknes',
    dynasty: 'Alaoui',
    category: 'Ruler',
    color: '#c0390a',
    era: '17th–18th Century',
    description: "Morocco's most formidable sultan and one of history's most extraordinary rulers — reigning for 55 years (1672–1727). Moulay Ismail built Meknes into 'the Moroccan Versailles' with 40km of palace walls, 50 palaces and stables for 12,000 horses. He expelled the English from Tangier and the Spanish from Larache. He maintained correspondence with Louis XIV of France and proposed marriage to the French king's daughter. His Black Guard — an elite 150,000-strong army — made Morocco one of the most powerful states of his era.",
    achievements: [
      '55-year reign (1672–1727) — one of the longest in Moroccan history',
      'Built Meknes into the "Moroccan Versailles"',
      'Expelled British from Tangier and Spanish from Larache',
      'Created the Black Guard — 150,000 elite troops',
      'Corresponded with Louis XIV of France',
      'United all of Morocco under centralized authority',
      '800+ children — most prolific father in recorded history (Guinness)'
    ],
    quote: 'There is no God but God, and I am His slave',
    impact: 'Moulay Ismail gave Morocco 55 years of political stability and military power unmatched in North Africa. Meknes remains one of Morocco\'s four imperial cities.',
    image: null,
  },
  {
    id: 'mohammed-v',
    name: 'Mohammed V',
    arabicName: 'محمد الخامس',
    title: 'Father of the Nation · King of Independence',
    born: '1909 CE, Fes',
    died: '1961 CE, Rabat',
    dynasty: 'Alaoui',
    category: 'Ruler',
    color: '#c47b0a',
    era: '20th Century',
    description: "The father of modern Morocco. Mohammed V refused to sign the anti-Jewish Vichy laws during WWII, reportedly saying 'There are no Jews in Morocco, only Moroccan subjects.' He led the independence movement against France, was exiled to Madagascar in 1953, and his exile sparked a mass uprising that forced France to restore him and grant independence in 1956. He transformed Morocco from a French protectorate into a modern nation-state while maintaining the monarchy's historic legitimacy.",
    achievements: [
      'Refused to sign Vichy anti-Jewish laws in WWII',
      'Led peaceful independence movement against France',
      'Exiled to Madagascar 1953 — returned as national hero 1955',
      'Negotiated independence in 1956 without armed conflict',
      'Founded the Royal Armed Forces and modern Moroccan state',
      'Established Throne Speech tradition — still continued today',
      'Mohamed V mausoleum is Morocco\'s most beautiful modern building'
    ],
    quote: 'There are no Jews in Morocco, only Moroccan subjects',
    impact: 'Mohammed V achieved Moroccan independence peacefully. His refusal to collaborate with Nazi racial laws saved Moroccan Jews from deportation to concentration camps — a fact little known outside Morocco.',
    image: null,
  },
  {
    id: 'averroes',
    name: 'Ibn Rushd (Averroes)',
    arabicName: 'ابن رشد',
    title: 'The Commentator · Philosopher of Reason',
    born: '1126 CE, Córdoba',
    died: '1198 CE, Marrakesh',
    dynasty: 'Almohad',
    category: 'Scholar',
    color: '#0a7a6a',
    era: '12th Century',
    description: "The greatest philosopher of medieval Islam and the man who saved Aristotle for Western civilization. Ibn Rushd (Averroes) lived under the Almohad caliphs in Marrakesh and served as court physician. His commentaries on Aristotle — comprehensive, rigorous, brilliant — were translated into Latin and became the foundation of European scholasticism. Thomas Aquinas referred to him simply as 'the Commentator.' Without Averroes, the European Renaissance may never have occurred. He also wrote the Fasl al-Maqal — arguing that reason and faith are compatible.",
    achievements: [
      'Wrote definitive commentaries on Aristotle — saved Greek philosophy for the West',
      'Thomas Aquinas called him simply "the Commentator"',
      'Founded rational school of Islamic philosophy',
      'Argued for compatibility of reason and faith',
      'Wrote comprehensive medical encyclopedia (Kulliyat)',
      'His Latin translations founded European scholasticism',
      'Dante placed him among the great thinkers in the Inferno'
    ],
    quote: 'The physician who knows only medicine knows not medicine',
    impact: 'Without Averroes, Aristotle\'s thought may have been lost to European civilization permanently. The Renaissance\'s recovery of classical reason was built on Averroes\'s Marrakesh commentaries.',
    image: null,
  },
  {
    id: 'al-idrisi',
    name: 'Al-Idrisi',
    arabicName: 'الإدريسي',
    title: 'The World\'s Greatest Medieval Cartographer',
    born: '1100 CE, Ceuta (Sebta)',
    died: '1165 CE, Sicily',
    dynasty: 'Almoravid era',
    category: 'Scholar',
    color: '#c47b0a',
    era: '12th Century',
    description: "Muhammad al-Idrisi was born in Ceuta and spent his most productive years at the court of King Roger II of Sicily — a Moroccan scholar serving a Norman king in the most fascinating intellectual collaboration of the Middle Ages. Al-Idrisi produced the Tabula Rogeriana — the most accurate world map ever made in the pre-modern era, used by navigators for 300 years. His silver disc map of the world, placed south at top (as was Arabic tradition), remained unsurpassed for three centuries. He also produced an encyclopedia of geography that described the entire known world.",
    achievements: [
      'Produced the Tabula Rogeriana — most accurate medieval world map',
      'Silver disc world map unsurpassed for 300 years',
      'Described the earth\'s geography from Iceland to sub-Saharan Africa',
      'Served King Roger II of Sicily — extraordinary cross-cultural collaboration',
      'Encyclopedia Nuzhat al-Mushtaq — geography of the entire known world',
      'First to accurately map Scotland, Ireland and Scandinavia'
    ],
    quote: 'The earth is spherical like an egg, and is surrounded by water',
    impact: 'Al-Idrisi\'s maps were used by Columbus and Vasco da Gama\'s era navigators. His descriptions of sub-Saharan Africa, India and Asia remained primary references for 300 years.',
    image: null,
  },
  {
    id: 'hassan-ii',
    name: 'Hassan II',
    arabicName: 'الحسن الثاني',
    title: 'King of Morocco 1961–1999 · Builder of the Nation',
    born: '1929 CE, Rabat',
    died: '1999 CE, Rabat',
    dynasty: 'Alaoui',
    category: 'Ruler',
    color: '#c0390a',
    era: '20th Century',
    description: "Morocco's longest-reigning modern king (38 years) who navigated the Cold War era, two coup attempts and the Western Sahara conflict while building Morocco into a stable middle-income country. Hassan II commissioned the Hassan II Mosque in Casablanca — the world's third largest mosque and the only one built on the sea — as his great architectural legacy. The Green March of 1975 (350,000 Moroccans peacefully walking into the Western Sahara) was his most celebrated political achievement.",
    achievements: [
      '38-year reign — longest modern Moroccan king',
      'Survived two military coups (1971 and 1972)',
      'Organized the Green March 1975 — 350,000 Moroccans',
      'Commissioned Hassan II Mosque — world\'s 3rd largest',
      'Established Morocco\'s constitutional monarchy',
      'Advanced peace negotiations between Israel and Palestinians',
      'Built modern Moroccan military and intelligence services'
    ],
    quote: 'Morocco is like a tree nourished by African roots, breathing through its European branches',
    impact: 'Hassan II guided Morocco through 38 years of regional instability. His son Mohammed VI inherited a stable, internationally respected nation capable of hosting the 2030 World Cup.',
    image: null,
  },
  {
    id: 'ibn-battuta-2',
    name: 'Ahmed al-Mansur',
    arabicName: 'أحمد المنصور',
    title: 'The Golden One · Conqueror of Songhai',
    born: '1549 CE, Fes',
    died: '1603 CE, Fes',
    dynasty: 'Saadian',
    category: 'Ruler',
    color: '#8a4500',
    era: '16th Century',
    description: "Morocco's most powerful sultan of the golden age. Ahmad al-Mansur ('the Victorious' or 'the Golden') defeated Portugal at the Battle of the Three Kings (1578) — the largest land battle in North African history, in which three kings died on the same day. He then conquered the Songhai Empire of West Africa, bringing unprecedented gold and wealth to Marrakesh. His El Badi Palace, built with this Saharan gold and decorated with Italian marble and Moroccan zellige, was described as 'the most magnificent palace in the world'. He corresponded with Queen Elizabeth I of England.",
    achievements: [
      'Battle of the Three Kings (1578) — defeated Portugal, three kings died same day',
      'Conquered the Songhai Empire 1591 — Timbuktu and its gold',
      'Built El Badi Palace — most magnificent palace in the world',
      'Corresponded with Queen Elizabeth I of England',
      'Made Marrakesh the richest city in Africa',
      'Sugar trade empire stretching from Sahara to Europe',
      'Title "al-Dhahabi" (the Golden) for the wealth he brought'
    ],
    quote: 'No king in Christendom has power comparable to mine',
    impact: 'Ahmed al-Mansur briefly made Morocco the wealthiest and most powerful state in the western world. The Battle of the Three Kings ended Portugal\'s African ambitions permanently.',
    image: null,
  },
];

// ── CATEGORIES ─────────────────────────────────────────────────
const CATEGORIES_F = ['All', 'Ruler', 'Scholar', 'Explorer'];
const ERAS_F = ['All', '9th Century', '11th–12th Century', '12th Century', '14th Century', '16th Century', '17th–18th Century', '20th Century'];

// ── TIMELINE EVENTS ────────────────────────────────────────────
const TIMELINE = [
  { year: '788', event: 'Idris I founds Morocco', detail: 'First Islamic ruler, escapes Arabia, founds Moroccan state', color: '#0a7a6a' },
  { year: '808', event: 'Fes is founded', detail: 'Idris II builds Fes — future cultural capital of the Arab world', color: '#0a7a6a' },
  { year: '859', event: 'Al-Qarawiyyin founded', detail: 'Fatima al-Fihri creates the world\'s oldest university', color: '#c47b0a' },
  { year: '1062', event: 'Marrakesh founded', detail: 'Yusuf ibn Tashfin founds Marrakesh — gives Morocco its name', color: '#c0390a' },
  { year: '1086', event: 'Battle of Zallaqa', detail: 'Ibn Tashfin defeats Alfonso VI — saves Andalusia', color: '#c0390a' },
  { year: '1147', event: 'Almohad golden age begins', detail: 'Koutoubia mosque built — height of Moroccan architecture', color: '#c47b0a' },
  { year: '1195', event: 'Averroes dies in Marrakesh', detail: 'Greatest medieval philosopher — his ideas spark European Renaissance', color: '#0a7a6a' },
  { year: '1269', event: 'Marinid golden age', detail: 'Greatest madrasas built — zellige art perfected', color: '#0a7a6a' },
  { year: '1304', event: 'Ibn Battuta born in Tangier', detail: 'The greatest traveler in history begins his life', color: '#c47b0a' },
  { year: '1325', event: 'Ibn Battuta begins journey', detail: '29-year journey covering 120,000 km across 44 countries', color: '#c47b0a' },
  { year: '1375', event: 'Ibn Khaldun writes Muqaddimah', detail: 'Greatest work of social theory ever written — in Morocco', color: '#0a7a6a' },
  { year: '1578', event: 'Battle of the Three Kings', detail: 'Morocco defeats Portugal — three kings die in one day', color: '#c0390a' },
  { year: '1591', event: 'Morocco conquers Songhai', detail: 'Ahmed al-Mansur takes Timbuktu — Marrakesh becomes richest city in Africa', color: '#8a4500' },
  { year: '1672', event: 'Moulay Ismail\'s reign begins', detail: '55-year reign — builds Meknes into the Moroccan Versailles', color: '#c0390a' },
  { year: '1912', event: 'French Protectorate', detail: 'Morocco becomes French/Spanish protectorate — beginning of resistance', color: '#7a6248' },
  { year: '1944', event: 'Istiqlal Party founded', detail: 'Independence movement crystallizes around Mohammed V', color: '#c47b0a' },
  { year: '1956', event: 'Independence', detail: 'Mohammed V leads Morocco to independence — March 2, 1956', color: '#0a7a6a' },
  { year: '1975', event: 'Green March', detail: '350,000 Moroccans peacefully march into the Western Sahara', color: '#c0390a' },
  { year: '1993', event: 'Hassan II Mosque opens', detail: 'World\'s 3rd largest mosque — built over the Atlantic in Casablanca', color: '#c0390a' },
  { year: '2022', event: 'World Cup Semi-Final', detail: 'Morocco becomes first African and Arab team to reach World Cup semi-finals', color: '#c47b0a' },
  { year: '2030', event: 'World Cup Host', detail: 'Morocco co-hosts FIFA World Cup — the culmination of a century of ambition', color: '#0a7a6a' },
];

// ── COMPONENTS ─────────────────────────────────────────────────
function FigureCard({ figure, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div onClick={() => onClick(figure)}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 18, overflow: 'hidden', background: '#fff',
        border: `1.5px solid ${hov ? figure.color + '55' : 'var(--border)'}`,
        cursor: 'pointer', transition: 'all .3s',
        transform: hov ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hov ? `0 20px 56px ${figure.color}18` : 'none',
      }}>
      {/* Header with zellige */}
      <div style={{ height: 130, position: 'relative', overflow: 'hidden', background: `linear-gradient(135deg,${figure.color}15,${figure.color}08)` }}>
        <Zellige opacity={0.3} color1={figure.color} color2={figure.color} color3={figure.color} size={55} id={`fig-${figure.id}`}/>
        {/* Glow */}
        <div style={{ position:'absolute', width:120, height:120, borderRadius:'50%', background:figure.color, filter:'blur(40px)', opacity:.12, right:-20, top:-20, pointerEvents:'none' }}/>
        {/* Category badge */}
        <div style={{ position:'absolute', top:12, left:12 }}>
          <span style={{ padding:'3px 10px', borderRadius:20, background:'rgba(255,255,255,.9)', fontSize:10, fontWeight:700, color:figure.color, textTransform:'uppercase', letterSpacing:'.08em' }}>
            {figure.category}
          </span>
        </div>
        {/* Era */}
        <div style={{ position:'absolute', top:12, right:12 }}>
          <span style={{ padding:'3px 9px', borderRadius:20, background:'rgba(0,0,0,.55)', fontSize:10, color:'#fff', fontWeight:500 }}>
            {figure.era}
          </span>
        </div>
        {/* Arabic name centered */}
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ textAlign:'center' }}>
            <div style={{ fontFamily:'Amiri,serif', fontSize:32, color:figure.color, opacity:.85, direction:'rtl', lineHeight:1 }}>{figure.arabicName}</div>
            <div style={{ width:32, height:2, background:figure.color, opacity:.3, margin:'8px auto 0', borderRadius:1 }}/>
          </div>
        </div>
      </div>
      {/* Content */}
      <div style={{ padding:'16px 18px' }}>
        <div style={{ ...S, fontSize:18, color:'var(--ink)', marginBottom:4, lineHeight:1.2 }}>{figure.name}</div>
        <div style={{ fontSize:11.5, color:figure.color, fontWeight:600, textTransform:'uppercase', letterSpacing:'.06em', marginBottom:10 }}>
          {figure.title.split('·')[0].trim()}
        </div>
        <div style={{ fontSize:11, color:'var(--muted)', marginBottom:10 }}>{figure.born.split(',')[0]} — {figure.died.split(',')[0]}</div>
        <p style={{ fontSize:12.5, color:'var(--muted)', lineHeight:1.6, marginBottom:12 }}>
          {figure.description.slice(0, 110)}...
        </p>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <span style={{ fontSize:11, color:'var(--muted)', fontStyle:'italic' }}>{figure.dynasty}</span>
          <span style={{ fontSize:12, fontWeight:600, color:figure.color }}>Read more →</span>
        </div>
      </div>
    </div>
  );
}

function DynastyCard({ dynasty, onClick, active }) {
  return (
    <div onClick={() => onClick(dynasty)}
      style={{
        borderRadius: 14, overflow:'hidden', cursor:'pointer', transition:'all .28s',
        border: `2px solid ${active ? dynasty.color : 'var(--border)'}`,
        background: active ? `${dynasty.color}10` : '#fff',
        transform: active ? 'scale(1.02)' : 'scale(1)',
        boxShadow: active ? `0 8px 32px ${dynasty.color}22` : 'none',
      }}>
      <div style={{ height:6, background:dynasty.color }}/>
      <div style={{ padding:'14px 16px' }}>
        <div style={{ fontSize:11, color:dynasty.color, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', marginBottom:5 }}>{dynasty.period}</div>
        <div style={{ ...S, fontSize:16, color:'var(--ink)', marginBottom:3, lineHeight:1.2 }}>{dynasty.name}</div>
        <div style={{ fontFamily:'Amiri,serif', fontSize:15, color:'var(--muted)', direction:'rtl' }}>{dynasty.arabicName}</div>
        <div style={{ fontSize:11.5, color:'var(--muted)', marginTop:8 }}>Capital: {dynasty.capital}</div>
      </div>
    </div>
  );
}

function FigureModal({ figure, onClose }) {
  if (!figure) return null;
  return (
    <div onClick={onClose} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,.82)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:'clamp(10px,3vw,20px)' }}>
      <div onClick={e => e.stopPropagation()} style={{ background:'var(--bg)', borderRadius:22, maxWidth:720, width:'100%', maxHeight:'92vh', overflowY:'auto', boxShadow:'0 28px 90px rgba(0,0,0,.4)', position:'relative' }}>
        {/* Header */}
        <div style={{ background:`linear-gradient(155deg,#1c1007,${figure.color}33)`, padding:'clamp(24px,4vw,40px)', position:'relative', overflow:'hidden', borderRadius:'22px 22px 0 0' }}>
          <Zellige opacity={0.2} color1={figure.color} color2={figure.color} color3={figure.color} size={70} id={`modal-${figure.id}`}/>
          <ZelligeStar size={200} color={figure.color} opacity={0.08} style={{ position:'absolute', right:-40, top:-40 }}/>
          <button onClick={onClose} style={{ position:'absolute', top:16, right:16, width:36, height:36, borderRadius:'50%', background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.2)', cursor:'pointer', fontSize:16, fontWeight:700, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', zIndex:2 }}>✕</button>
          <div style={{ position:'relative', zIndex:1 }}>
            <div style={{ display:'flex', gap:10, marginBottom:16, flexWrap:'wrap' }}>
              <span style={{ padding:'4px 12px', borderRadius:20, background:figure.color, color:'#fff', fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em' }}>{figure.category}</span>
              <span style={{ padding:'4px 12px', borderRadius:20, background:'rgba(255,255,255,.12)', color:'rgba(255,255,255,.7)', fontSize:11, fontWeight:500 }}>{figure.dynasty}</span>
              <span style={{ padding:'4px 12px', borderRadius:20, background:'rgba(255,255,255,.08)', color:'rgba(255,255,255,.6)', fontSize:11 }}>{figure.era}</span>
            </div>
            <h2 style={{ ...S, fontSize:'clamp(24px,4vw,36px)', color:'#fff', lineHeight:1.1, marginBottom:6 }}>{figure.name}</h2>
            <div style={{ fontFamily:'Amiri,serif', fontSize:20, color:'rgba(255,255,255,.6)', marginBottom:8, direction:'rtl' }}>{figure.arabicName}</div>
            <div style={{ fontSize:13, color:'rgba(255,255,255,.5)', fontStyle:'italic' }}>{figure.title}</div>
          </div>
        </div>
        {/* Body */}
        <div style={{ padding:'clamp(20px,4vw,36px)' }}>
          {/* Born / Died */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:24 }}>
            {[{ l:'Born', v:figure.born }, { l:'Died', v:figure.died }].map(f => (
              <div key={f.l} style={{ background:'var(--bg2)', borderRadius:11, padding:'11px 14px' }}>
                <div style={{ fontSize:10, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:3 }}>{f.l}</div>
                <div style={{ fontSize:13, fontWeight:600, color:'var(--ink)' }}>{f.v}</div>
              </div>
            ))}
          </div>
          {/* Description */}
          <p style={{ fontSize:14.5, lineHeight:1.8, color:'var(--ink2)', marginBottom:22 }}>{figure.description}</p>
          {/* Quote */}
          {figure.quote && (
            <div style={{ borderLeft:`4px solid ${figure.color}`, paddingLeft:18, marginBottom:22, background:figure.color + '08', borderRadius:'0 10px 10px 0', padding:'14px 18px 14px 18px' }}>
              <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:figure.color, marginBottom:7 }}>Famous Quote</div>
              <blockquote style={{ ...S, fontSize:16, fontStyle:'italic', color:'var(--ink2)', lineHeight:1.65 }}>"{figure.quote}"</blockquote>
            </div>
          )}
          {/* Achievements */}
          <div style={{ marginBottom:22 }}>
            <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:figure.color, marginBottom:12 }}>Key Achievements</div>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {figure.achievements.map((a, i) => (
                <div key={i} style={{ display:'flex', gap:12, alignItems:'flex-start', background:'var(--bg2)', borderRadius:10, padding:'10px 14px', fontSize:13.5, color:'var(--ink2)', lineHeight:1.5 }}>
                  <div style={{ width:22, height:22, borderRadius:'50%', background:figure.color + '20', border:`1px solid ${figure.color}40`, flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:700, color:figure.color }}>
                    {i + 1}
                  </div>
                  {a}
                </div>
              ))}
            </div>
          </div>
          {/* Impact */}
          <div style={{ background:`linear-gradient(135deg,${figure.color}10,${figure.color}06)`, border:`1px solid ${figure.color}25`, borderRadius:13, padding:'16px 20px' }}>
            <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:figure.color, marginBottom:8 }}>Historical Impact</div>
            <p style={{ fontSize:14, color:'var(--ink2)', lineHeight:1.7 }}>{figure.impact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DynastyModal({ dynasty, onClose }) {
  if (!dynasty) return null;
  return (
    <div onClick={onClose} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,.82)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:'clamp(10px,3vw,20px)' }}>
      <div onClick={e => e.stopPropagation()} style={{ background:'var(--bg)', borderRadius:22, maxWidth:700, width:'100%', maxHeight:'92vh', overflowY:'auto', boxShadow:'0 28px 90px rgba(0,0,0,.4)' }}>
        <div style={{ background:`linear-gradient(155deg,#1c1007,${dynasty.color}33)`, padding:'clamp(24px,4vw,40px)', position:'relative', overflow:'hidden', borderRadius:'22px 22px 0 0' }}>
          <Zellige opacity={0.2} color1={dynasty.color} color2={dynasty.color} color3={dynasty.color} size={70} id={`dyn-${dynasty.id}`}/>
          <button onClick={onClose} style={{ position:'absolute', top:16, right:16, width:36, height:36, borderRadius:'50%', background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.2)', cursor:'pointer', fontSize:16, fontWeight:700, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', zIndex:2 }}>✕</button>
          <div style={{ position:'relative', zIndex:1 }}>
            <div style={{ display:'flex', gap:10, marginBottom:14, flexWrap:'wrap' }}>
              <span style={{ padding:'4px 12px', borderRadius:20, background:dynasty.color, color:'#fff', fontSize:11, fontWeight:700 }}>{dynasty.period}</span>
              <span style={{ padding:'4px 12px', borderRadius:20, background:'rgba(255,255,255,.12)', color:'rgba(255,255,255,.7)', fontSize:11 }}>Capital: {dynasty.capital}</span>
            </div>
            <h2 style={{ ...S, fontSize:'clamp(24px,4vw,34px)', color:'#fff', lineHeight:1.1, marginBottom:6 }}>{dynasty.name}</h2>
            <div style={{ fontFamily:'Amiri,serif', fontSize:20, color:'rgba(255,255,255,.6)', direction:'rtl' }}>{dynasty.arabicName}</div>
          </div>
        </div>
        <div style={{ padding:'clamp(20px,4vw,36px)' }}>
          <div style={{ fontSize:11, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:5 }}>Founded by</div>
          <div style={{ ...S, fontSize:18, color:'var(--ink)', marginBottom:18 }}>{dynasty.founded}</div>
          <p style={{ fontSize:14.5, lineHeight:1.8, color:'var(--ink2)', marginBottom:22 }}>{dynasty.description}</p>
          <div style={{ marginBottom:22 }}>
            <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:dynasty.color, marginBottom:12 }}>Key Achievements</div>
            {dynasty.achievements.map((a, i) => (
              <div key={i} style={{ display:'flex', gap:12, alignItems:'flex-start', marginBottom:8, fontSize:13.5, color:'var(--ink2)', background:'var(--bg2)', borderRadius:10, padding:'10px 14px' }}>
                <span style={{ color:dynasty.color, fontWeight:700, flexShrink:0, fontSize:14 }}>✦</span>
                {a}
              </div>
            ))}
          </div>
          <div style={{ background:'var(--bg2)', borderRadius:12, padding:'14px 18px' }}>
            <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:dynasty.color, marginBottom:6 }}>Legacy</div>
            <div style={{ fontSize:14, color:'var(--ink2)', lineHeight:1.6 }}>{dynasty.legacy}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── MAIN PAGE ──────────────────────────────────────────────────
export default function HistoryPage() {
  const [tab, setTab] = useState('figures');
  const [catFilter, setCatFilter] = useState('All');
  const [selectedFigure, setSelectedFigure] = useState(null);
  const [selectedDynasty, setSelectedDynasty] = useState(null);
  const [activeDynasty, setActiveDynasty] = useState(null);
  const [search, setSearch] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const filteredFigures = FIGURES.filter(f => {
    const mc = catFilter === 'All' || f.category === catFilter;
    const ms = !search || f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.arabicName.includes(search) || f.description.toLowerCase().includes(search.toLowerCase()) ||
      f.dynasty.toLowerCase().includes(search.toLowerCase());
    return mc && ms;
  });

  return (
    <Layout>
      <SEO
        title="History & Famous Figures — MoroccoPedia"
        description="Discover Morocco's great dynasties and legendary figures — from Yusuf ibn Tashfin who founded Marrakesh to Fatima al-Fihri who founded the world's oldest university."
      />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ position:'relative', minHeight:'clamp(380px,55vh,560px)', display:'flex', alignItems:'center', overflow:'hidden', background:'linear-gradient(155deg,#1a0800 0%,#2e1200 40%,#0a2318 80%,#061408 100%)' }}>
        <Zellige opacity={0.2} color1="#c0390a" color2="#c47b0a" color3="#0a7a6a" size={100} id="hero-main"/>
        <Zellige opacity={0.09} color1="#c47b0a" color2="#0a7a6a" color3="#c0390a" size={48} id="hero-fine"/>
        <ZelligeStar size={350} color="#c0390a" opacity={0.06} style={{ position:'absolute', right:'-80px', top:'-60px' }}/>
        <ZelligeStar size={280} color="#c47b0a" opacity={0.05} style={{ position:'absolute', left:'-50px', bottom:'-50px' }}/>
        <ZelligeStar size={180} color="#0a7a6a" opacity={0.05} style={{ position:'absolute', left:'35%', top:'15%' }}/>
        {/* Glows */}
        <div style={{ position:'absolute', width:500, height:500, background:'#c0390a', filter:'blur(130px)', opacity:.13, right:'-8%', top:'-10%', borderRadius:'50%', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', width:400, height:400, background:'#0a7a6a', filter:'blur(110px)', opacity:.1, left:'-5%', bottom:'-10%', borderRadius:'50%', pointerEvents:'none' }}/>

        <div style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(48px,6vw,80px) clamp(20px,5vw,60px)', position:'relative', zIndex:2, width:'100%' }}>
          <div style={{ maxWidth:700 }}>
            {/* Label */}
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, background:'rgba(232,154,26,.13)', border:'1px solid rgba(232,154,26,.28)', borderRadius:30, padding:'6px 18px', marginBottom:22 }}>
              <div style={{ width:6, height:6, borderRadius:'50%', background:'#e89a1a' }}/>
              <span style={{ fontFamily:'Amiri,serif', fontSize:14, color:'#e89a1a', direction:'rtl' }}>التاريخ والحضارة المغربية</span>
              <div style={{ width:6, height:6, borderRadius:'50%', background:'#e89a1a' }}/>
            </div>
            <h1 style={{ ...S, fontSize:'clamp(38px,6.5vw,70px)', color:'#fff', lineHeight:1.0, marginBottom:16 }}>
              1,200 Years of<br/>
              <span style={{ color:'var(--gold2)' }}>Moroccan</span><br/>
              <span style={{ fontSize:'clamp(24px,4vw,48px)', color:'rgba(255,255,255,.6)', fontStyle:'italic' }}>History & Legacy</span>
            </h1>
            <div style={{ marginBottom:20 }}>
              <Divider light color="var(--terra2)"/>
            </div>
            <p style={{ fontSize:'clamp(13px,2vw,16px)', color:'rgba(245,237,220,.58)', lineHeight:1.85, maxWidth:560, marginBottom:32, fontWeight:300 }}>
              From the Idrisids who founded Fes to the Almoravids who saved Andalusia — discover the dynasties, scholars and rulers who shaped one of the world's great civilizations.
            </p>
            {/* Stats */}
            <div style={{ display:'flex', gap:'clamp(16px,4vw,40px)', flexWrap:'wrap' }}>
              {[
                { v:'6', l:'Great Dynasties' },
                { v:'1,200+', l:'Years of history' },
                { v:FIGURES.length+'', l:'Legendary figures' },
                { v:'4', l:'UNESCO sites' },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ ...S, fontSize:'clamp(20px,3vw,30px)', color:'var(--gold2)', lineHeight:1 }}>{s.v}</div>
                  <div style={{ fontSize:11, color:'rgba(245,237,220,.55)', marginTop:3, fontWeight:500 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ARABIC CALLIGRAPHY BELT ────────────────────────────── */}
      <div style={{ background:'linear-gradient(135deg,#1c1007,#0a2318)', padding:'16px 0', position:'relative', overflow:'hidden', borderTop:'1px solid rgba(255,255,255,.06)' }}>
        <Zellige opacity={0.07} color1="#c47b0a" color2="#0a7a6a" color3="#c0390a" size={50} id="belt"/>
        <div style={{ display:'flex', gap:0, overflowX:'auto', scrollbarWidth:'none', whiteSpace:'nowrap', padding:'0 32px', position:'relative', zIndex:1 }}>
          {['المرابطون','·','الموحدون','·','المرينيون','·','السعديون','·','العلويون','·','الأدارسة','·','ابن بطوطة','·','فاطمة الفهرية','·','ابن رشد','·','ابن خلدون'].map((t,i) => (
            <span key={i} style={{ padding:'0 clamp(8px,2vw,18px)', fontFamily:'Amiri,serif', fontSize:t==='·'?14:17, color:t==='·'?'rgba(255,255,255,.18)':'rgba(255,255,255,.52)', direction:'rtl' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── TABS ──────────────────────────────────────────────── */}
      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)', position:'sticky', top:62, zIndex:100 }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)', display:'flex', gap:0, overflowX:'auto', scrollbarWidth:'none' }}>
          {[
            { id:'figures', label:'Famous Figures', ar:'الشخصيات' },
            { id:'dynasties', label:'Dynasties', ar:'الأسر الحاكمة' },
            { id:'timeline', label:'Timeline', ar:'التسلسل الزمني' },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding:'clamp(11px,2vw,16px) clamp(14px,2.5vw,28px)', fontSize:'clamp(11px,1.5vw,13.5px)', fontWeight:tab===t.id?700:400, cursor:'pointer', border:'none', background:'transparent', fontFamily:'Outfit,sans-serif', color:tab===t.id?'var(--terra)':'var(--muted)', borderBottom:`3px solid ${tab===t.id?'var(--terra)':'transparent'}`, transition:'all .18s', whiteSpace:'nowrap', display:'flex', alignItems:'center', gap:8 }}>
              {t.label}
              {tab===t.id && <span style={{ fontFamily:'Amiri,serif', fontSize:12, color:'var(--muted)', fontWeight:400 }}>{t.ar}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* ── BODY ──────────────────────────────────────────────── */}
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(24px,4vw,48px) clamp(16px,4vw,48px)' }}>

        {/* ── FIGURES TAB ───────────────────────────────────── */}
        {tab === 'figures' && (
          <div>
            {/* Filter bar */}
            <div style={{ display:'flex', gap:10, marginBottom:28, flexWrap:'wrap', alignItems:'center' }}>
              <div style={{ flex:1, minWidth:200, maxWidth:360, display:'flex', gap:0, background:'var(--bg2)', borderRadius:11, overflow:'hidden', border:'1px solid var(--border)' }}>
                <span style={{ padding:'10px 14px', fontSize:14, color:'var(--muted)' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
                <input value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="Search figures, dynasties..."
                  style={{ flex:1, background:'none', border:'none', padding:'10px 4px 10px 0', fontSize:13.5, fontFamily:'Outfit,sans-serif', color:'var(--ink)', outline:'none' }}/>
              </div>
              <div style={{ display:'flex', gap:7, flexWrap:'wrap' }}>
                {CATEGORIES_F.map(c => (
                  <button key={c} onClick={() => setCatFilter(c)}
                    className={`tag-chip${catFilter===c?' active':''}`} style={{ fontFamily:'Outfit,sans-serif', fontSize:12 }}>{c}</button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'clamp(14px,2vw,20px)' }}>
              {filteredFigures.map(fig => (
                <FigureCard key={fig.id} figure={fig} onClick={setSelectedFigure}/>
              ))}
            </div>

            {filteredFigures.length === 0 && (
              <div className="card" style={{ padding:60, textAlign:'center' }}>
                <div style={{ ...S, fontSize:22, marginBottom:8 }}>No figures found</div>
                <div style={{ fontSize:14, color:'var(--muted)' }}>Try a different search or filter.</div>
              </div>
            )}
          </div>
        )}

        {/* ── DYNASTIES TAB ─────────────────────────────────── */}
        {tab === 'dynasties' && (
          <div>
            <div style={{ textAlign:'center', marginBottom:'clamp(24px,4vw,44px)' }}>
              <span className="sec-label">الأسرات الحاكمة</span>
              <h2 style={{ ...S, fontSize:'clamp(26px,4vw,40px)', color:'var(--ink)', marginBottom:12 }}>
                Six Great Dynasties
              </h2>
              <Divider/>
              <p style={{ fontSize:15, color:'var(--muted)', maxWidth:520, margin:'14px auto 0', lineHeight:1.75 }}>
                Every dynasty left an indelible mark — a city, a mosque, a tradition, a style of governance that persists today.
              </p>
            </div>

            {/* Dynasty grid */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:14, marginBottom:32 }}>
              {DYNASTIES.map(d => (
                <DynastyCard key={d.id} dynasty={d} onClick={(dyn) => { setActiveDynasty(dyn.id === activeDynasty?.id ? null : dyn); setSelectedDynasty(dyn); }} active={activeDynasty?.id === d.id}/>
              ))}
            </div>

            {/* Dynasty detail panel */}
            {activeDynasty && (
              <div style={{ background:'#fff', borderRadius:20, border:`2px solid ${activeDynasty.color}33`, overflow:'hidden', marginBottom:32, animation:'fadeUp .35s ease both' }}>
                {/* Top bar */}
                <div style={{ height:5, background:activeDynasty.color }}/>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:0 }}>
                  {/* Left — info */}
                  <div style={{ padding:'clamp(20px,3vw,36px)', borderRight:'1px solid var(--border)' }}>
                    <div style={{ fontSize:11, color:activeDynasty.color, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', marginBottom:10 }}>{activeDynasty.period}</div>
                    <h3 style={{ ...S, fontSize:26, color:'var(--ink)', marginBottom:6 }}>{activeDynasty.name}</h3>
                    <div style={{ fontFamily:'Amiri,serif', fontSize:19, color:'var(--muted)', marginBottom:16, direction:'rtl' }}>{activeDynasty.arabicName}</div>
                    <p style={{ fontSize:14, lineHeight:1.8, color:'var(--ink2)' }}>{activeDynasty.description}</p>
                  </div>
                  {/* Right — achievements */}
                  <div style={{ padding:'clamp(20px,3vw,36px)' }}>
                    <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:activeDynasty.color, marginBottom:16 }}>Key Achievements</div>
                    <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                      {activeDynasty.achievements.map((a, i) => (
                        <div key={i} style={{ display:'flex', gap:12, alignItems:'flex-start', fontSize:13.5, color:'var(--ink2)', background:'var(--bg2)', borderRadius:9, padding:'10px 13px' }}>
                          <span style={{ color:activeDynasty.color, fontWeight:700, flexShrink:0 }}>✦</span>
                          <span style={{ lineHeight:1.5 }}>{a}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop:16, padding:'12px 15px', background:activeDynasty.color + '10', borderRadius:10, border:`1px solid ${activeDynasty.color}22` }}>
                      <span style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', color:activeDynasty.color }}>Legacy: </span>
                      <span style={{ fontSize:13, color:'var(--ink2)' }}>{activeDynasty.legacy}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── TIMELINE TAB ──────────────────────────────────── */}
        {tab === 'timeline' && (
          <div>
            <div style={{ textAlign:'center', marginBottom:'clamp(24px,4vw,44px)' }}>
              <span className="sec-label">التسلسل الزمني</span>
              <h2 style={{ ...S, fontSize:'clamp(26px,4vw,40px)', color:'var(--ink)', marginBottom:12 }}>
                Morocco's Timeline
              </h2>
              <Divider/>
              <p style={{ fontSize:15, color:'var(--muted)', maxWidth:480, margin:'14px auto 0', lineHeight:1.75 }}>
                1,200 years of history — from Idris I to the 2030 World Cup.
              </p>
            </div>

            {/* Timeline */}
            <div style={{ position:'relative', maxWidth:860, margin:'0 auto' }}>
              {/* Vertical line */}
              <div style={{ position:'absolute', left:'clamp(48px,8vw,80px)', top:0, bottom:0, width:2, background:'linear-gradient(to bottom,var(--terra),var(--gold),var(--teal))', opacity:.35 }}/>

              {TIMELINE.map((event, i) => (
                <div key={i} style={{ display:'flex', gap:'clamp(16px,3vw,32px)', marginBottom:20, alignItems:'flex-start', animation:`fadeUp .4s ease ${i*0.04}s both` }}>
                  {/* Year bubble */}
                  <div style={{ flexShrink:0, width:'clamp(80px,12vw,120px)', textAlign:'right' }}>
                    <div style={{ display:'inline-block', padding:'5px 11px', borderRadius:20, background:event.color, color:'#fff', fontSize:'clamp(10px,1.5vw,13px)', fontWeight:700, lineHeight:1.2, boxShadow:`0 3px 12px ${event.color}40` }}>
                      {event.year}
                    </div>
                  </div>
                  {/* Dot */}
                  <div style={{ position:'relative', zIndex:2, marginTop:6, flexShrink:0 }}>
                    <div style={{ width:14, height:14, borderRadius:'50%', background:event.color, border:'3px solid #fff', boxShadow:`0 0 0 3px ${event.color}35` }}/>
                  </div>
                  {/* Event */}
                  <div style={{ flex:1, background:'#fff', borderRadius:13, padding:'clamp(12px,2vw,18px)', border:'1px solid var(--border)', transition:'all .22s' }}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor=event.color+'55';e.currentTarget.style.transform='translateX(4px)';}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='translateX(0)';}}>
                    <div style={{ ...S, fontSize:'clamp(14px,2vw,17px)', color:'var(--ink)', marginBottom:5, lineHeight:1.2 }}>{event.event}</div>
                    <div style={{ fontSize:'clamp(11px,1.5vw,13px)', color:'var(--muted)', lineHeight:1.55 }}>{event.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom feature */}
            <div style={{ marginTop:48, background:'linear-gradient(155deg,#1c1007,#0a2318)', borderRadius:22, padding:'clamp(28px,4vw,48px)', position:'relative', overflow:'hidden', textAlign:'center' }}>
              <Zellige opacity={0.15} color1="#c0390a" color2="#c47b0a" color3="#0a7a6a" size={80} id="bottom-z"/>
              <ZelligeStar size={280} color="#c0390a" opacity={0.05} style={{ position:'absolute', right:'-40px', top:'-40px' }}/>
              <div style={{ position:'relative', zIndex:1 }}>
                <div style={{ fontFamily:'Amiri,serif', fontSize:22, color:'rgba(232,154,26,.5)', marginBottom:12, direction:'rtl' }}>المغرب — من الأمس إلى الغد</div>
                <h3 style={{ ...S, fontSize:'clamp(22px,3.5vw,36px)', color:'#fff', marginBottom:14 }}>Morocco — From Past to Future</h3>
                <Divider light color="#c0390a"/>
                <p style={{ fontSize:'clamp(13px,2vw,15px)', color:'rgba(245,237,220,.55)', maxWidth:560, margin:'16px auto 28px', lineHeight:1.8 }}>
                  1,200 years of dynasties, scholars, explorers and rulers. Each generation built on the last. 
                  In 2030, Morocco hosts the World Cup — the latest chapter in a civilization story that never stopped.
                </p>
                <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
                  <Link href="/city/marrakesh" style={{ textDecoration:'none' }}>
                    <button className="btn-primary">Explore Marrakesh →</button>
                  </Link>
                  <Link href="/tourism" style={{ textDecoration:'none' }}>
                    <button style={{ padding:'10px 22px', borderRadius:11, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.2)', color:'#fff', fontSize:13.5, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif', transition:'all .2s' }}
                      onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,.15)';}}
                      onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.08)';}}>
                      Famous Places →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── MODALS ──────────────────────────────────────────── */}
      {selectedFigure && <FigureModal figure={selectedFigure} onClose={() => setSelectedFigure(null)}/>}
      {selectedDynasty && tab === 'dynasties' && false && <DynastyModal dynasty={selectedDynasty} onClose={() => setSelectedDynasty(null)}/>}

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </Layout>
  );
}
