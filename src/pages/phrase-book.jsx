import { useState } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
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


const CATEGORIES = [
  { id:'greeting', label:'Salutations', icon: <Ic name="handwave"/>, color:'#c0390a' },
  { id:'food', label:'Nourriture', icon: <Ic name="utensils"/>, color:'#c47b0a' },
  { id:'shopping', label:'Shopping', icon: <Ic name="shoppingbag"/>, color:'#0a7a6a' },
  { id:'transport', label:'Transport', icon: <Ic name="car"/>, color:'#c0390a' },
  { id:'emergency', label:'Urgences', icon: <Ic name="alerttri"/>, color:'#c0390a' },
  { id:'social', label:'Social', icon: <Ic name="message"/>, color:'#0a7a6a' },
  { id:'numbers', label:'Chiffres', icon: <Ic name="hash2"/>, color:'#c47b0a' },
  { id:'hotel', label:'Hôtel & Riad', icon: <Ic name="hotel"/>, color:'#0a7a6a' },
];

const PHRASES = [
  // Greetings
  { cat:'greeting', darija:'Salam / Labas?', arabic:'سلام / لاباس؟', phonetic:'/sa-lam / la-bas/', fr:'Bonjour / Comment ça va ?', en:'Hello / How are you?', tip:'La salutation la plus courante. On répond: "Labas, l-hamdullah"' },
  { cat:'greeting', darija:'Sbah lkhir', arabic:'صباح الخير', phonetic:'/sba7 l-khir/', fr:'Bonjour (matin)', en:'Good morning', tip:'Réponse: Sbah n-nur (matin de lumière)' },
  { cat:'greeting', darija:'Msa lkhir', arabic:'مساء الخير', phonetic:'/msa l-khir/', fr:'Bonsoir', en:'Good evening', tip:'Réponse: Msa n-nur' },
  { cat:'greeting', darija:'Mrhba bik!', arabic:'مرحبا بيك!', phonetic:'/mer-hba bik/', fr:'Bienvenue !', en:'Welcome!', tip:'Très chaleureux — pour accueillir un invité' },
  { cat:'greeting', darija:'B-slama', arabic:'بالسلامة', phonetic:'/b-sla-ma/', fr:'Au revoir', en:'Goodbye', tip:'Littéralement "avec la sécurité" — voyage sûr' },
  { cat:'greeting', darija:'Shukran bezzaf', arabic:'شكراً بزاف', phonetic:'/shuk-ran bzaf/', fr:'Merci beaucoup', en:'Thank you very much', tip:'Bezzaf = beaucoup. Vient de l\'amazigh.' },
  { cat:'greeting', darija:'3afak', arabic:'عفاك', phonetic:'/3-fa-k/', fr:'S\'il vous plaît', en:'Please', tip:'Indispensable dans les souks' },
  { cat:'greeting', darija:'Smhli', arabic:'سامحني', phonetic:'/smeh-li/', fr:'Excusez-moi / Pardon', en:'Excuse me / Sorry', tip:'Pour passer dans une ruelle étroite ou s\'excuser' },

  // Food
  { cat:'food', darija:'Bshal had l-haja?', arabic:'بشحال هاد الحاجة؟', phonetic:'/b-shal had l-ha-dja/', fr:'C\'est combien ?', en:'How much is this?', tip:'La question essentielle du souk' },
  { cat:'food', darija:'3tini wahed atay 3afak', arabic:'عطيني واحد أتاي عفاك', phonetic:'/3ti-ni wa-7ed a-tay/', fr:'Un thé à la menthe s\'il vous plaît', en:'One mint tea please', tip:'Le thé = rituel. On vous en servira 3 verres.' },
  { cat:'food', darija:'Llah i3tik ssaha', arabic:'الله يعطيك الصحة', phonetic:'/l-lah i3-tik s-sa-ha/', fr:'Bon appétit / Merci pour le repas', en:'May God give you health', tip:'Dire après avoir mangé — marque le respect pour le cuisinier' },
  { cat:'food', darija:'Zwine / Mzyan bezzaf', arabic:'زوين / مزيان بزاف', phonetic:'/zwi-ne / mzyan/', fr:'C\'est délicieux !', en:'It\'s delicious / very good!', tip:'Compliment très apprécié pour la cuisine' },
  { cat:'food', darija:'Ma klitech, shukran', arabic:'ما كليتش، شكراً', phonetic:'/ma kli-tesh/', fr:'Je n\'ai pas faim, merci', en:'I\'m not hungry, thank you', tip:'Pour refuser poliment sans offenser' },
  { cat:'food', darija:'Bla 7aroura 3afak', arabic:'بلا حارورة عفاك', phonetic:'/bla 7a-rou-ra/', fr:'Sans piment s\'il vous plaît', en:'Without chili please', tip:'Utile si vous n\'aimez pas le piment' },

  // Shopping
  { cat:'shopping', darija:'Ghali bezzaf!', arabic:'غالي بزاف!', phonetic:'/gha-li bzaf/', fr:'C\'est trop cher !', en:'It\'s too expensive!', tip:'Toujours dire ça en premier. C\'est le début de la négociation.' },
  { cat:'shopping', darija:'Khsar shwiya 3afak', arabic:'خسر شوية عفاك', phonetic:'/kh-sar shwi-ya/', fr:'Baissez un peu le prix', en:'Lower the price a bit', tip:'Le sourire est obligatoire pendant la négociation' },
  { cat:'shopping', darija:'Last price?', arabic:'آخر سعر؟', phonetic:'/last price/', fr:'Votre dernier prix ?', en:'What\'s your final price?', tip:'Les vendeurs comprennent l\'anglais "last price" partout' },
  { cat:'shopping', darija:'Mashi bghit', arabic:'ماشي بغيت', phonetic:'/ma-shi bghi-t/', fr:'Je ne veux pas', en:'I don\'t want it', tip:'Pour partir si la négociation échoue — magique pour baisser le prix' },
  { cat:'shopping', darija:'Wakha, khud', arabic:'واخا، خود', phonetic:'/wa-kha, khud/', fr:'D\'accord, je le prends', en:'OK, I\'ll take it', tip:'Wakha = d\'accord (de l\'amazigh)' },

  // Transport
  { cat:'transport', darija:'Fin kayn [place]?', arabic:'فين كاين...؟', phonetic:'/fin ka-yin/', fr:'Où se trouve [lieu] ?', en:'Where is [place]?', tip:'Fin = où. Kayn = il y a / se trouve' },
  { cat:'transport', darija:'Bhal hada, niyshan', arabic:'بحال هادا، نيشان', phonetic:'/b7al ha-da, ni-shan/', fr:'Comme ça, tout droit', en:'Like this, straight ahead', tip:'Niyshan = tout droit (du français "en ligne")' },
  { cat:'transport', darija:'3ayyesh-li taxi 3afak', arabic:'عيشلي طاكسي عفاك', phonetic:'/3ay-yesh-li tak-si/', fr:'Appelez-moi un taxi s\'il vous plaît', en:'Call me a taxi please', tip:'Les grands taxis (intercités) sont partagés — 6 passagers' },
  { cat:'transport', darija:'Sh7al d-taxi l-[ville]?', arabic:'شحال د طاكسي ل...؟', phonetic:'/sh7-al d tak-si/', fr:'Combien le taxi pour [ville] ?', en:'How much is the taxi to [city]?', tip:'Négociez toujours le prix AVANT de monter' },
  { cat:'transport', darija:'Wqfu hna 3afak', arabic:'وقفو هنا عفاك', phonetic:'/wq-fu hna/', fr:'Arrêtez-vous ici s\'il vous plaît', en:'Stop here please', tip:'Dans le taxi' },

  // Emergency
  { cat:'emergency', darija:'3awniyyi!', arabic:'عاونيني!', phonetic:'/3aw-ni-yi/', fr:'Aidez-moi !', en:'Help me!', tip:'URGENT' },
  { cat:'emergency', darija:'3iyyan bezzaf', arabic:'عيان بزاف', phonetic:'/3ey-yan bzaf/', fr:'Je suis très malade', en:'I\'m very sick', tip:'Pour appeler un médecin ou aller à la pharmacie' },
  { cat:'emergency', darija:'Fin l-sbitar?', arabic:'فين الصبيطار؟', phonetic:'/fin l-sbi-tar/', fr:'Où est l\'hôpital ?', en:'Where is the hospital?', tip:'Sbitar = hôpital (de l\'espagnol hospital)' },
  { cat:'emergency', darija:'3andi mshkil', arabic:'عندي مشكل', phonetic:'/3an-di msh-kil/', fr:'J\'ai un problème', en:'I have a problem', tip:'Mashkil = problème — universel' },
  { cat:'emergency', darija:'Sifara d-[pays]', arabic:'سفارة...', phonetic:'/si-fa-ra/', fr:'L\'ambassade de [pays]', en:'Embassy of [country]', tip:'Savoir le dire en cas de perte de passeport' },

  // Social
  { cat:'social', darija:'Wach tatkellem [lugha]?', arabic:'واش تتكلم...؟', phonetic:'/wach tat-kel-lem/', fr:'Parlez-vous [langue] ?', en:'Do you speak [language]?', tip:'Wach = est-ce que (particule de question)' },
  { cat:'social', darija:'Ma fehmt-sh', arabic:'ما فهمتش', phonetic:'/ma fehm-tesh/', fr:'Je n\'ai pas compris', en:'I didn\'t understand', tip:'Suivi de: 3afak, 3awwd (répétez s\'il vous plaît)' },
  { cat:'social', darija:'Smitek ash huwa?', arabic:'سميتك آش هو؟', phonetic:'/smi-tek ash hu-wa/', fr:'Comment vous appelez-vous ?', en:'What is your name?', tip:'Ana smiti... = Je m\'appelle...' },
  { cat:'social', darija:'Ana mn [blad]', arabic:'أنا من...', phonetic:'/a-na mn/', fr:'Je suis de [pays]', en:'I\'m from [country]', tip:'Blad = pays / ville / village' },
  { cat:'social', darija:'Inshallah', arabic:'إن شاء الله', phonetic:'/in-sha-l-lah/', fr:'Si Dieu le veut / J\'espère', en:'God willing / Hopefully', tip:'Peut signifier oui, peut-être, ou poliment non selon le contexte' },

  // Numbers
  { cat:'numbers', darija:'Wahed', arabic:'واحد', phonetic:'/wa-7ed/', fr:'Un (1)', en:'One', tip:'' },
  { cat:'numbers', darija:'Jouj', arabic:'جوج', phonetic:'/jouj/', fr:'Deux (2)', en:'Two', tip:'De l\'amazigh (pas de l\'arabe ithnayn)' },
  { cat:'numbers', darija:'Tlata', arabic:'ثلاثة', phonetic:'/tla-ta/', fr:'Trois (3)', en:'Three', tip:'' },
  { cat:'numbers', darija:'Rb3a / Khmsa', arabic:'ربعة / خمسة', phonetic:'/rb-3a / khm-sa/', fr:'Quatre / Cinq', en:'Four / Five', tip:'' },
  { cat:'numbers', darija:'3achra / 3chrin', arabic:'عشرة / عشرين', phonetic:'/3ash-ra / 3sh-rin/', fr:'Dix / Vingt', en:'Ten / Twenty', tip:'' },
  { cat:'numbers', darija:'Mya / Alf', arabic:'مية / ألف', phonetic:'/mi-ya / alf/', fr:'Cent / Mille', en:'Hundred / Thousand', tip:'Mya drhm = 100 dirhams' },

  // Hotel
  { cat:'hotel', darija:'3andi 7jz', arabic:'عندي حجز', phonetic:'/3an-di 7jz/', fr:'J\'ai une réservation', en:'I have a reservation', tip:'' },
  { cat:'hotel', darija:'Fin l-bit dyali?', arabic:'فين البيت ديالي؟', phonetic:'/fin l-bit dya-li/', fr:'Où est ma chambre ?', en:'Where is my room?', tip:'Bit = chambre / pièce' },
  { cat:'hotel', darija:'Wach kayn wifi?', arabic:'واش كاين وايفي؟', phonetic:'/wach ka-yin wi-fi/', fr:'Y a-t-il le wifi ?', en:'Is there wifi?', tip:'La question la plus posée dans tout le Maroc' },
  { cat:'hotel', darija:'Password d-wifi ash huwa?', arabic:'پاسورد د الوايفي آش هو؟', phonetic:'/-/', fr:'Quel est le mot de passe wifi ?', en:'What is the wifi password?', tip:'Universel — compris partout' },
];

function PhraseCard({ phrase }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(`${phrase.darija} — ${phrase.fr}`).catch(()=>{});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="card" style={{ padding:'clamp(14px,2vw,20px)', transition:'all .22s' }}
      onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 28px rgba(192,57,10,.08)';}}
      onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none';}}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
        <div style={{ ...S, fontSize:'clamp(18px,2.5vw,24px)', color:'var(--terra)', lineHeight:1.2 }}>{phrase.darija}</div>
        <button onClick={copy} style={{ background:'none', border:'none', cursor:'pointer', fontSize:16, opacity:.5, transition:'opacity .2s', flexShrink:0 }}
          onMouseEnter={e=>e.currentTarget.style.opacity='1'} onMouseLeave={e=>e.currentTarget.style.opacity='.5'}
          title="Copier">
          {copied ? '✓' : <Ic name="filetext"/>}
        </button>
      </div>
      <div style={{ fontFamily:'Amiri,serif', fontSize:16, color:'var(--muted)', direction:'rtl', marginBottom:6, textAlign:'right' }}>{phrase.arabic}</div>
      <div style={{ fontSize:12, color:'var(--muted)', fontStyle:'italic', marginBottom:8 }}>{phrase.phonetic}</div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:6, marginBottom: phrase.tip ? 10 : 0 }}>
        <div style={{ background:'var(--bg2)', borderRadius:8, padding:'6px 10px' }}>
          <div style={{ fontSize:9, fontWeight:700, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:2 }}>FR</div>
          <div style={{ fontSize:12.5, color:'var(--ink)' }}>{phrase.fr}</div>
        </div>
        <div style={{ background:'var(--bg2)', borderRadius:8, padding:'6px 10px' }}>
          <div style={{ fontSize:9, fontWeight:700, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:2 }}>EN</div>
          <div style={{ fontSize:12.5, color:'var(--ink)' }}>{phrase.en}</div>
        </div>
      </div>
      {phrase.tip && (
        <div style={{ fontSize:11.5, color:'var(--teal)', background:'var(--teal3)', borderRadius:7, padding:'6px 10px', lineHeight:1.55 }}>
          {phrase.tip}
        </div>
      )}
    </div>
  );
}

export default function PhraseBookPage() {
  const [activecat, setActiveCat] = useState('greeting');
  const [search, setSearch] = useState('');

  const filtered = PHRASES.filter(p => {
    const mc = activecat === 'all' || p.cat === activecat;
    const ms = !search || [p.darija, p.fr, p.en, p.arabic].join(' ').toLowerCase().includes(search.toLowerCase());
    return mc && ms;
  });

  const activeCatData = CATEGORIES.find(c => c.id === activecat);

  return (
    <Layout>
      <SEO title="Guide de phrases Darija — MoroccoPedia" description="50+ phrases essentielles en Darija marocain avec phonétique, traduction française et anglaise. Indispensable pour les voyageurs au Maroc."/>

      {/* Hero */}
      <section style={{ background:'linear-gradient(155deg,#1a0800,#2e1200,#0a2318)', padding:'clamp(48px,6vw,80px) 0', position:'relative', overflow:'hidden', textAlign:'center' }}>
        <div style={{ position:'relative', zIndex:2, maxWidth:640, margin:'0 auto', padding:'0 24px' }}>
          <div style={{ fontFamily:'Amiri,serif', fontSize:18, color:'var(--gold2)', marginBottom:12, direction:'rtl' }}>دليل العبارات الأساسية</div>
          <h1 style={{ ...S, fontSize:'clamp(28px,5vw,52px)', color:'#fff', lineHeight:1.05, marginBottom:14 }}>
            Guide de phrases<br/><span style={{ color:'var(--gold2)' }}>Darija</span>
          </h1>
          <p style={{ fontSize:'clamp(13px,2vw,16px)', color:'rgba(245,237,220,.55)', lineHeight:1.8, marginBottom:28 }}>
            {PHRASES.length}+ phrases essentielles pour voyager, négocier et communiquer au Maroc — avec phonétique et contexte culturel.
          </p>
          {/* Search */}
          <div style={{ display:'flex', background:'rgba(255,255,255,.1)', border:'1.5px solid rgba(255,255,255,.2)', borderRadius:12, overflow:'hidden', maxWidth:450, margin:'0 auto' }}>
            <span style={{ padding:'0 14px', display:'flex', alignItems:'center', fontSize:16, color:'rgba(255,255,255,.4)' }}>—</span>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Rechercher une phrase..."
              style={{ flex:1, padding:'12px 4px', background:'none', border:'none', color:'#fff', fontSize:14, fontFamily:'Outfit,sans-serif', outline:'none' }}/>
          </div>
        </div>
      </section>

      {/* Category nav */}
      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)', padding:'10px 0', position:'sticky', top:62, zIndex:100 }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 clamp(16px,4vw,48px)', display:'flex', gap:7, overflowX:'auto', scrollbarWidth:'none' }}>
          {CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => setActiveCat(cat.id)}
              style={{ display:'flex', alignItems:'center', gap:6, padding:'7px 14px', borderRadius:20, fontSize:12.5, fontWeight:activecat===cat.id?700:500, cursor:'pointer', fontFamily:'Outfit,sans-serif', flexShrink:0, transition:'all .18s',
                background: activecat === cat.id ? cat.color : 'var(--bg2)',
                color: activecat === cat.id ? '#fff' : 'var(--muted)',
                border:`1px solid ${activecat===cat.id?cat.color:'var(--border)'}` }}>
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              <span style={{ fontSize:10, opacity:.7 }}>({PHRASES.filter(p=>p.cat===cat.id).length})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(24px,4vw,40px) clamp(16px,4vw,48px)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20, flexWrap:'wrap', gap:10 }}>
          <div style={{ fontSize:14.5, color:'var(--muted)' }}>
            {activeCatData && <span style={{ marginRight:8 }}>{activeCatData.icon}</span>}
            <strong style={{ color:'var(--ink)' }}>{filtered.length}</strong> phrases
            {activeCatData && <span style={{ color:'var(--terra)', marginLeft:6 }}>{activeCatData.label}</span>}
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'clamp(12px,2vw,18px)' }}>
          {filtered.map((phrase, i) => <PhraseCard key={i} phrase={phrase}/>)}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign:'center', padding:'60px 0' }}>
            <div style={{ fontSize:36, marginBottom:10 }}>— </div>
            <div style={{ ...S, fontSize:20, color:'var(--ink)' }}>Aucune phrase trouvée</div>
          </div>
        )}

        {/* Download tip */}
        <div style={{ marginTop:40, background:'linear-gradient(135deg,#1c1007,#0a2318)', borderRadius:18, padding:'clamp(24px,4vw,36px)', textAlign:'center', position:'relative', overflow:'hidden' }}>
          <h3 style={{ ...S, fontSize:24, color:'#fff', marginBottom:10 }}>Apprenez plus avec le dictionnaire complet</h3>
          <p style={{ fontSize:14.5, color:'rgba(245,237,220,.55)', marginBottom:22, maxWidth:450, margin:'0 auto 22px' }}>
            355+ mots Darija avec 7 dialectes régionaux, phonétique et exemples en contexte.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="/dialect" style={{ textDecoration:'none' }}><button className="btn-primary">Dictionnaire complet →</button></a>
            <a href="/quiz" style={{ textDecoration:'none' }}><button style={{ padding:'10px 22px', borderRadius:11, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.2)', color:'#fff', fontSize:13.5, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>Quiz culturel →</button></a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
