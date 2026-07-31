import { useState } from 'react';
import Link from 'next/link';
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


function Zellige({ opacity=.12, c1='#c0390a', c2='#c47b0a', c3='#0a7a6a', size=90, id='z' }) {
  return (
    <svg style={{ position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none' }}>
      <defs>
        <pattern id={id} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
          <polygon points={`${size*.5},${size*.05} ${size*.63},${size*.27} ${size*.95},${size*.27} ${size*.73},${size*.45} ${size*.82},${size*.76} ${size*.5},${size*.6} ${size*.18},${size*.76} ${size*.27},${size*.45} ${size*.05},${size*.27} ${size*.37},${size*.27}`}
            fill="none" stroke={c1} strokeWidth="1.2" opacity={opacity}/>
          <polygon points={`${size*.5},${size*.22} ${size*.64},${size*.5} ${size*.5},${size*.78} ${size*.36},${size*.5}`}
            fill={c3} opacity={opacity*.3}/>
          <circle cx={size*.5} cy={size*.5} r="3" fill={c1} opacity={opacity*.5}/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  );
}

const PLANS = [
  {
    id: 'free', name: 'Explorer', arabicName: 'مجاني',
    price: { monthly: 0, annual: 0 }, currency: 'MAD',
    color: '#7a6248', badge: null,
    description: 'Découvrir la culture marocaine',
    features: [
      { text: '50 mots Darija / mois', ok: true },
      { text: 'Dictionnaire de base', ok: true },
      { text: '3 guides de villes', ok: true },
      { text: 'Histoire & Timeline', ok: true },
      { text: 'Traduction 4 langues', ok: true },
      { text: 'Audio recordings', ok: false },
      { text: 'API access', ok: false },
      { text: 'Variantes régionales illimitées', ok: false },
      { text: 'Support prioritaire', ok: false },
    ],
    cta: 'Commencer gratuitement',
    ctaLink: '/auth/register',
  },
  {
    id: 'pro', name: 'Pro', arabicName: 'احترافي',
    price: { monthly: 299, annual: 249 }, currency: 'MAD',
    color: '#c0390a', badge: 'Le plus populaire',
    description: 'Pour les passionnés et apprenants sérieux',
    features: [
      { text: 'Dictionnaire complet illimité', ok: true },
      { text: 'Tous les guides de villes (9)', ok: true },
      { text: 'Audio recordings natifs', ok: true },
      { text: '7 dialectes complets', ok: true },
      { text: '461 variantes régionales', ok: true },
      { text: 'API access (500 req/mois)', ok: true },
      { text: 'Favoris & collections', ok: true },
      { text: 'Support email 48h', ok: true },
      { text: 'White-label', ok: false },
    ],
    cta: 'Démarrer Pro',
    ctaLink: '/auth/register?plan=pro',
  },
  {
    id: 'enterprise', name: 'Enterprise', arabicName: 'مؤسسي',
    price: { monthly: null, annual: null }, currency: 'MAD',
    color: '#0a7a6a', badge: 'Sur mesure',
    description: 'Pour les entreprises, hôtels, écoles et institutions',
    features: [
      { text: 'API illimitée (Darija NLP)', ok: true },
      { text: 'White-label complet', ok: true },
      { text: 'Dataset custom + fine-tuning', ok: true },
      { text: 'Intégration sur mesure', ok: true },
      { text: 'SLA garanti 99.9%', ok: true },
      { text: 'Manager dédié', ok: true },
      { text: 'Formation équipe incluse', ok: true },
      { text: 'Facturation annuelle ou mensuelle', ok: true },
      { text: 'Contrat multi-utilisateurs', ok: true },
    ],
    cta: 'Contacter l\'équipe',
    ctaLink: '/contact',
  },
];

const FAQS = [
  { q: 'Puis-je changer de plan à tout moment ?', a: "Oui. Vous pouvez upgrader ou downgrader à tout moment. La différence de prix est calculée au prorata." },
  { q: "Qu'est-ce que la Darija API ?", a: "Notre API permet aux développeurs d'accéder à notre base de 355+ mots structurés, avec phonétique, définitions, exemples et variantes régionales. Idéale pour les chatbots, apps EdTech et outils NLP en dialecte marocain." },
  { q: "Le plan Free expire-t-il ?", a: "Non. Le plan Free est permanent. La limite de 50 mots/mois se renouvelle chaque mois automatiquement." },
  { q: "Proposez-vous des remises pour les institutions académiques ?", a: "Oui. Universités, écoles et organisations culturelles bénéficient de -50% sur le plan Enterprise. Contactez-nous." },
  { q: "Quelle est votre politique de remboursement ?", a: "Remboursement intégral dans les 14 jours suivant l'abonnement, sans condition." },
  { q: "La plateforme fonctionne-t-elle hors ligne ?", a: "Oui. Notre architecture offline-first permet d'utiliser le dictionnaire et les guides sans connexion internet." },
];

const CLIENTS = [
  { type: 'Hôtels & Riads', icon: <Ic name="hotel"/>, use: 'Guide culturel pour les clients étrangers' },
  { type: 'Écoles de langues', icon: <Ic name="book"/>, use: 'Intégration dans les cours de Darija' },
  { type: 'Agences touristiques', icon: <Ic name="map"/>, use: 'Briefing culturel avant les voyages' },
  { type: 'Applications mobile', icon: <Ic name="code"/>, use: 'Darija API pour chatbots et NLP' },
  { type: 'Médias & Contenu', icon: <Ic name="newspaper"/>, use: 'Vérification et traduction dialectale' },
  { type: 'Institutions', icon: <Ic name="archive"/>, use: 'Préservation et valorisation patrimoine' },
];

export default function PricingPage() {
  const [billing, setBilling] = useState('monthly');

  return (
    <Layout>
      <SEO title="Tarifs — MoroccoPedia" description="Plans Free, Pro et Enterprise. Accédez à la plus grande base de données Darija marocaine — 355+ mots, 7 dialectes, API disponible."/>

      {/* HERO */}
      <section style={{ position:'relative', background:'linear-gradient(155deg,#1a0800,#2e1200,#0a2318)', padding:'clamp(56px,8vw,96px) 0', overflow:'hidden', textAlign:'center' }}>
        <Zellige opacity={0.15} c1="#c0390a" c2="#c47b0a" c3="#0a7a6a" size={90} id="ph"/>
        <div style={{ position:'absolute', width:400, height:400, background:'#c0390a', filter:'blur(120px)', opacity:.1, left:'10%', top:'-10%', borderRadius:'50%', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', width:350, height:350, background:'#0a7a6a', filter:'blur(100px)', opacity:.08, right:'5%', bottom:'-5%', borderRadius:'50%', pointerEvents:'none' }}/>
        <div style={{ position:'relative', zIndex:2, maxWidth:700, margin:'0 auto', padding:'0 24px' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(232,154,26,.12)', border:'1px solid rgba(232,154,26,.25)', borderRadius:30, padding:'5px 16px', marginBottom:18 }}>
            <span style={{ fontFamily:'Amiri,serif', fontSize:14, color:'#e89a1a', direction:'rtl' }}>الأسعار والخطط</span>
          </div>
          <h1 style={{ ...S, fontSize:'clamp(32px,5.5vw,58px)', color:'#fff', lineHeight:1.05, marginBottom:14 }}>
            Choisissez votre plan<br/><span style={{ color:'var(--gold2)' }}>MoroccoPedia</span>
          </h1>
          <p style={{ fontSize:'clamp(14px,2vw,17px)', color:'rgba(245,237,220,.55)', lineHeight:1.8, marginBottom:32 }}>
            De l'exploration gratuite à l'intégration enterprise — une plateforme pour découvrir, apprendre et valoriser la culture marocaine.
          </p>
          {/* Billing toggle */}
          <div style={{ display:'inline-flex', background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.15)', borderRadius:50, padding:4, gap:4 }}>
            {['monthly','annual'].map(b => (
              <button key={b} onClick={() => setBilling(b)}
                style={{ padding:'8px 22px', borderRadius:50, fontSize:13, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif', transition:'all .2s', border:'none',
                  background: billing === b ? '#fff' : 'transparent',
                  color: billing === b ? 'var(--ink)' : 'rgba(255,255,255,.6)' }}>
                {b === 'monthly' ? 'Mensuel' : 'Annuel'}
                {b === 'annual' && <span style={{ marginLeft:6, fontSize:10, background:'var(--teal)', color:'#fff', padding:'2px 6px', borderRadius:10 }}>-16%</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(32px,5vw,60px) clamp(16px,4vw,40px)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'clamp(14px,2vw,24px)', alignItems:'stretch' }}>
          {PLANS.map(plan => (
            <div key={plan.id} style={{
              borderRadius:20, overflow:'hidden', background:'#fff',
              border: `2px solid ${plan.id === 'pro' ? plan.color : 'var(--border)'}`,
              boxShadow: plan.id === 'pro' ? `0 16px 56px ${plan.color}18` : 'none',
              display:'flex', flexDirection:'column', position:'relative',
              transform: plan.id === 'pro' ? 'translateY(-6px)' : 'none',
            }}>
              {plan.badge && (
                <div style={{ background:plan.color, color:'#fff', textAlign:'center', padding:'7px', fontSize:11.5, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase' }}>
                  ✦ {plan.badge}
                </div>
              )}
              <div style={{ height:5, background:`linear-gradient(90deg,${plan.color},${plan.color}88)` }}/>
              <div style={{ padding:'clamp(20px,3vw,32px)', flex:1, display:'flex', flexDirection:'column' }}>
                {/* Header */}
                <div style={{ marginBottom:20 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                    <div>
                      <div style={{ ...S, fontSize:24, color:'var(--ink)', lineHeight:1.1 }}>{plan.name}</div>
                      <div style={{ fontFamily:'Amiri,serif', fontSize:16, color:plan.color, marginTop:2 }}>{plan.arabicName}</div>
                    </div>
                    <div style={{ textAlign:'right' }}>
                      {plan.price.monthly === null ? (
                        <div style={{ ...S, fontSize:22, color:plan.color }}>Sur mesure</div>
                      ) : plan.price.monthly === 0 ? (
                        <div style={{ ...S, fontSize:32, color:plan.color }}>Gratuit</div>
                      ) : (
                        <>
                          <div style={{ ...S, fontSize:32, color:plan.color, lineHeight:1 }}>
                            {billing === 'annual' ? plan.price.annual : plan.price.monthly}
                            <span style={{ fontSize:14, color:'var(--muted)', fontFamily:'Outfit,sans-serif', fontWeight:400 }}> MAD</span>
                          </div>
                          <div style={{ fontSize:11, color:'var(--muted)', marginTop:2 }}>/mois</div>
                        </>
                      )}
                    </div>
                  </div>
                  <p style={{ fontSize:13.5, color:'var(--muted)', lineHeight:1.6 }}>{plan.description}</p>
                </div>

                {/* Features */}
                <div style={{ flex:1, marginBottom:24 }}>
                  {plan.features.map((f, i) => (
                    <div key={i} style={{ display:'flex', gap:10, alignItems:'flex-start', padding:'7px 0', borderBottom:'1px solid var(--border)' }}>
                      <span style={{ fontSize:14, flexShrink:0, marginTop:1, color: f.ok ? plan.color : '#d0c8be' }}>{f.ok ? '✓' : '✗'}</span>
                      <span style={{ fontSize:13, color: f.ok ? 'var(--ink2)' : 'var(--muted)', lineHeight:1.5, textDecoration: f.ok ? 'none' : 'line-through', opacity: f.ok ? 1 : 0.5 }}>{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link href={plan.ctaLink} style={{ textDecoration:'none' }}>
                  <button style={{
                    width:'100%', padding:'13px 20px', borderRadius:12, fontSize:14, fontWeight:700,
                    cursor:'pointer', fontFamily:'Outfit,sans-serif', transition:'all .22s',
                    background: plan.id === 'pro' ? `linear-gradient(135deg,${plan.color},var(--gold))` : plan.id === 'enterprise' ? plan.color : '#fff',
                    color: plan.id === 'free' ? plan.color : '#fff',
                    border: `2px solid ${plan.color}`,
                    boxShadow: plan.id === 'pro' ? `0 6px 24px ${plan.color}30` : 'none',
                  }}>
                    {plan.cta} →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise clients */}
        <div style={{ marginTop:'clamp(40px,6vw,72px)' }}>
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <span className="sec-label">Cas d'usage Enterprise</span>
            <h2 style={{ ...S, fontSize:'clamp(22px,3.5vw,34px)', color:'var(--ink)' }}>Qui utilise MoroccoPedia Enterprise ?</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:14 }}>
            {CLIENTS.map(c => (
              <div key={c.type} className="card" style={{ padding:'18px 20px', transition:'all .22s' }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--teal)';e.currentTarget.style.transform='translateY(-2px)';}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='translateY(0)';}}>
                <div style={{ fontSize:26, marginBottom:10 }}>{c.icon}</div>
                <div style={{ fontSize:14, fontWeight:700, color:'var(--ink)', marginBottom:5 }}>{c.type}</div>
                <div style={{ fontSize:12.5, color:'var(--muted)', lineHeight:1.55 }}>{c.use}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop:'clamp(40px,6vw,72px)', maxWidth:780, margin:'clamp(40px,6vw,72px) auto 0' }}>
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <span className="sec-label">FAQ</span>
            <h2 style={{ ...S, fontSize:'clamp(22px,3.5vw,34px)', color:'var(--ink)' }}>Questions fréquentes</h2>
          </div>
          {FAQS.map((faq, i) => {
            const [open, setOpen] = useState(false);
            return (
              <div key={i} style={{ borderBottom:'1px solid var(--border)' }}>
                <button onClick={() => setOpen(!open)} style={{ width:'100%', textAlign:'left', padding:'16px 0', display:'flex', justifyContent:'space-between', alignItems:'center', background:'none', border:'none', cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>
                  <span style={{ fontSize:15, fontWeight:600, color:'var(--ink)' }}>{faq.q}</span>
                  <span style={{ color:'var(--terra)', fontSize:18, transition:'transform .2s', transform:open?'rotate(45deg)':'rotate(0)' }}>+</span>
                </button>
                {open && <div style={{ fontSize:14, color:'var(--muted)', lineHeight:1.75, paddingBottom:16, paddingRight:24 }}>{faq.a}</div>}
              </div>
            );
          })}
        </div>

        {/* Final CTA */}
        <div style={{ marginTop:'clamp(40px,6vw,72px)', background:'linear-gradient(155deg,#1c1007,#0a2318)', borderRadius:22, padding:'clamp(32px,5vw,56px)', textAlign:'center', position:'relative', overflow:'hidden' }}>
          <Zellige opacity={0.12} c1="#c0390a" c2="#c47b0a" c3="#0a7a6a" size={80} id="cta-z"/>
          <div style={{ position:'relative', zIndex:1 }}>
            <h2 style={{ ...S, fontSize:'clamp(24px,4vw,40px)', color:'#fff', marginBottom:12 }}>Besoin d'un plan sur mesure ?</h2>
            <p style={{ fontSize:15, color:'rgba(245,237,220,.55)', marginBottom:28, maxWidth:480, margin:'0 auto 28px' }}>
              Pour les institutions, ministères et grandes entreprises — nous construisons une solution adaptée à vos besoins.
            </p>
            <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
              <Link href="/contact"><button className="btn-primary">Contacter l'équipe →</button></Link>
              <Link href="/api-docs"><button style={{ padding:'10px 22px', borderRadius:11, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.2)', color:'#fff', fontSize:13.5, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>Voir la documentation API →</button></Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
