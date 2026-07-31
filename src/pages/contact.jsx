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


function Zellige({ opacity=.12, c1='#c0390a', c2='#c47b0a', c3='#0a7a6a', size=80, id='z' }) {
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

const SUBJECTS = [
  'Question générale', 'Partenariat institutionnel', 'API Enterprise',
  'Investissement / Financement', 'Presse / Médias', 'Bug / Problème technique',
  'Contribution culturelle', 'Autre',
];

const CONTACT_CHANNELS = [
  { icon: <Ic name="mail"/>, label:'Email général', value:'contact@moroccoPedia.app', color:'#c0390a' },
  { icon: <Ic name="briefcase"/>, label:'Partenariats & B2B', value:'partners@moroccoPedia.app', color:'#0a7a6a' },
  { icon: <Ic name="newspaper"/>, label:'Presse', value:'press@moroccoPedia.app', color:'#c47b0a' },
  { icon: <Ic name="tool"/>, label:'Support technique', value:'support@moroccoPedia.app', color:'#0a7a6a' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setSent(true);
    setLoading(false);
  };

  const IS = {
    width:'100%', padding:'11px 14px', borderRadius:11,
    border:'1.5px solid var(--border)', background:'var(--bg2)',
    fontSize:14, fontFamily:'Outfit,sans-serif', color:'var(--ink)',
    outline:'none', transition:'border-color .18s',
  };

  return (
    <Layout>
      <SEO title="Contact — MoroccoPedia" description="Contactez l'équipe MoroccoPedia pour des partenariats, questions API, investissements ou contributions culturelles."/>

      {/* HERO */}
      <section style={{ position:'relative', background:'linear-gradient(155deg,#1a0800,#0a2318)', padding:'clamp(56px,7vw,88px) 0', overflow:'hidden', textAlign:'center' }}>
        <Zellige opacity={0.15} id="ch"/>
        <div style={{ position:'relative', zIndex:2, maxWidth:600, margin:'0 auto', padding:'0 24px' }}>
          <div style={{ fontFamily:'Amiri,serif', fontSize:16, color:'var(--gold2)', marginBottom:10, direction:'rtl' }}>تواصل معنا</div>
          <h1 style={{ ...S, fontSize:'clamp(30px,5vw,52px)', color:'#fff', lineHeight:1.05, marginBottom:14 }}>
            Parlons de votre<br/><span style={{ color:'var(--gold2)' }}>projet</span>
          </h1>
          <p style={{ fontSize:15, color:'rgba(245,237,220,.55)', lineHeight:1.8 }}>
            Partenariat, API Enterprise, presse ou simple question — notre équipe répond en moins de 48 heures.
          </p>
        </div>
      </section>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'clamp(32px,5vw,60px) clamp(16px,4vw,48px)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:32 }}>

          {/* Form */}
          <div>
            {sent ? (
              <div style={{ background:'#fff', borderRadius:20, padding:'clamp(32px,5vw,48px)', border:'1px solid var(--border)', textAlign:'center' }}>
                <div style={{ fontSize:48, marginBottom:16 }}>شكراً</div>
                <h3 style={{ ...S, fontSize:24, color:'var(--terra)', marginBottom:10 }}>Message envoyé !</h3>
                <p style={{ fontSize:14.5, color:'var(--muted)', lineHeight:1.75, marginBottom:24 }}>
                  Nous avons bien reçu votre message et vous répondrons dans les 48 heures.
                </p>
                <button className="btn-primary" onClick={() => { setSent(false); setForm({ name:'', email:'', subject:'', message:'' }); }}>
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <div style={{ background:'#fff', borderRadius:20, padding:'clamp(24px,4vw,36px)', border:'1px solid var(--border)' }}>
                <h2 style={{ ...S, fontSize:24, color:'var(--ink)', marginBottom:6 }}>Envoyer un message</h2>
                <p style={{ fontSize:13.5, color:'var(--muted)', marginBottom:24, lineHeight:1.6 }}>Tous les champs marqués * sont obligatoires.</p>

                <form onSubmit={handleSubmit}>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:14 }}>
                    <div>
                      <label style={{ fontSize:11.5, fontWeight:700, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.08em', display:'block', marginBottom:6 }}>Nom *</label>
                      <input style={IS} value={form.name} onChange={e=>set('name',e.target.value)} placeholder="Votre nom" required
                        onFocus={e=>e.target.style.borderColor='var(--terra)'} onBlur={e=>e.target.style.borderColor='var(--border)'}/>
                    </div>
                    <div>
                      <label style={{ fontSize:11.5, fontWeight:700, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.08em', display:'block', marginBottom:6 }}>Email *</label>
                      <input style={IS} type="email" value={form.email} onChange={e=>set('email',e.target.value)} placeholder="votre@email.com" required
                        onFocus={e=>e.target.style.borderColor='var(--terra)'} onBlur={e=>e.target.style.borderColor='var(--border)'}/>
                    </div>
                  </div>

                  <div style={{ marginBottom:14 }}>
                    <label style={{ fontSize:11.5, fontWeight:700, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.08em', display:'block', marginBottom:6 }}>Sujet</label>
                    <select style={{ ...IS, cursor:'pointer' }} value={form.subject} onChange={e=>set('subject',e.target.value)}
                      onFocus={e=>e.target.style.borderColor='var(--terra)'} onBlur={e=>e.target.style.borderColor='var(--border)'}>
                      <option value="">Choisir un sujet...</option>
                      {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div style={{ marginBottom:20 }}>
                    <label style={{ fontSize:11.5, fontWeight:700, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.08em', display:'block', marginBottom:6 }}>Message *</label>
                    <textarea style={{ ...IS, resize:'vertical', minHeight:130 }} value={form.message} onChange={e=>set('message',e.target.value)}
                      placeholder="Décrivez votre projet, votre question ou votre proposition..."
                      onFocus={e=>e.target.style.borderColor='var(--terra)'} onBlur={e=>e.target.style.borderColor='var(--border)'}/>
                    <div style={{ fontSize:11, color:'var(--muted)', textAlign:'right', marginTop:4 }}>{form.message.length}/1000</div>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width:'100%', justifyContent:'center' }} disabled={loading}>
                    {loading ? 'Envoi en cours...' : 'Envoyer le message ✦'}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar info */}
          <div>
            <div style={{ background:'#fff', borderRadius:18, padding:'clamp(20px,3vw,30px)', border:'1px solid var(--border)', marginBottom:18 }}>
              <h3 style={{ ...S, fontSize:20, color:'var(--ink)', marginBottom:18 }}>Nos contacts directs</h3>
              {CONTACT_CHANNELS.map(c => (
                <div key={c.label} style={{ display:'flex', gap:14, alignItems:'center', padding:'11px 0', borderBottom:'1px solid var(--border)' }}>
                  <div style={{ width:38, height:38, borderRadius:10, background:c.color+'15', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize:12, fontWeight:700, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.06em', marginBottom:2 }}>{c.label}</div>
                    <a href={`mailto:${c.value}`} style={{ fontSize:13.5, fontWeight:600, color:c.color, textDecoration:'none' }}>{c.value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background:'#fff', borderRadius:18, padding:'clamp(20px,3vw,30px)', border:'1px solid var(--border)', marginBottom:18 }}>
              <h3 style={{ ...S, fontSize:18, color:'var(--ink)', marginBottom:14 }}>Délais de réponse</h3>
              {[
                { type:'Questions générales', delay:'24–48h', c:'#0a7a6a' },
                { type:'Support technique', delay:'< 24h', c:'#c0390a' },
                { type:'Partenariats B2B', delay:'48–72h', c:'#c47b0a' },
                { type:'Presse / Médias', delay:'< 4h', c:'#c0390a' },
              ].map(d => (
                <div key={d.type} className="fact-row">
                  <span className="fact-key" style={{ fontSize:13 }}>{d.type}</span>
                  <span style={{ fontSize:12.5, fontWeight:700, color:d.c }}>{d.delay}</span>
                </div>
              ))}
            </div>

            <div style={{ background:'linear-gradient(135deg,#1c1007,#0a2318)', borderRadius:18, padding:'clamp(18px,3vw,26px)', position:'relative', overflow:'hidden' }}>
              <Zellige opacity={0.1} id="sc-z"/>
              <div style={{ position:'relative', zIndex:1 }}>
                <div style={{ fontFamily:'Amiri,serif', fontSize:18, color:'var(--gold2)', marginBottom:8, direction:'rtl' }}>مراكش · المغرب</div>
                <div style={{ fontSize:13, color:'rgba(245,237,220,.55)', lineHeight:1.7 }}>
                  Équipe MoroccoPedia<br/>
                  Technopark, Route de Nouacer<br/>
                  Casablanca 20150, Maroc
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
