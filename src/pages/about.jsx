import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Newsletter from '../components/Newsletter';

const S = { fontFamily: 'Playfair Display,serif' };

const TEAM_VALUES = [
  {
    icon: '◈',
    title: 'Authenticity',
    desc: 'Every word, tradition and story on MoroccoPedia is verified by community members with lived experience. We do not guess. We document.',
    color: 'var(--terra)',
    bg: 'var(--terra3)',
  },
  {
    icon: '◉',
    title: 'Preservation',
    desc: 'We race against time. Oral traditions, dialects and heritage knowledge disappear every generation. We build infrastructure to save them.',
    color: 'var(--teal)',
    bg: 'var(--teal3)',
  },
  {
    icon: '◎',
    title: 'Accessibility',
    desc: 'Morocco\'s cultural heritage belongs to everyone — Moroccans, diaspora, tourists and researchers worldwide. Free, multilingual, always open.',
    color: 'var(--gold)',
    bg: 'var(--gold3)',
  },
  {
    icon: '◆',
    title: 'Community',
    desc: 'The best experts on Moroccan culture are Moroccans themselves. Our platform gives them the tools to document and share their knowledge.',
    color: 'var(--terra)',
    bg: 'var(--terra3)',
  },
];

const MILESTONES = [
  { year: '2024', event: 'Project started', desc: 'One developer, one vision: a digital home for Moroccan culture.', color: 'var(--terra)' },
  { year: '2025 Q1', event: 'Core platform built', desc: 'Dialect dictionary, city guides, cultural map and AI assistant launched.', color: 'var(--gold)' },
  { year: '2025 Q2', event: 'Community features', desc: 'Authentication, contributions, notifications and analytics added.', color: 'var(--teal)' },
  { year: '2025 Q3', event: 'Public launch', desc: '175 dialect words, 10 cities, 7 regional dialects. First users welcomed.', color: 'var(--terra)' },
  { year: '2026', event: 'Scale to 5,000 words', desc: 'Expanding the database, adding audio, partnering with Moroccan universities.', color: 'var(--gold)', future: true },
  { year: '2030', event: 'FIFA World Cup', desc: 'Become the official digital cultural guide for Morocco World Cup 2030.', color: 'var(--teal)', future: true },
];

const STATS = [
  { value: '175+', label: 'Dialect words', sub: 'with regional variants', color: 'var(--terra)' },
  { value: '359',  label: 'Regional variants', sub: 'across 7 dialects', color: 'var(--gold)' },
  { value: '10',   label: 'Cities documented', sub: 'with full cultural data', color: 'var(--teal)' },
  { value: '103',  label: 'Themes covered', sub: 'from food to music', color: 'var(--terra)' },
];

const OPPORTUNITIES = [
  {
    title: 'Darija API',
    badge: 'B2B SaaS',
    badgeColor: 'var(--terra)',
    badgeBg: 'var(--terra3)',
    desc: 'The only programmable Darija API in the world. Banks, telecoms, government apps and chatbots all need Moroccan Arabic. We have the data.',
    market: '$2.6B market · 36M Darija speakers · 0 competitors',
  },
  {
    title: 'Darija School',
    badge: 'EdTech',
    badgeColor: 'var(--teal)',
    badgeBg: 'var(--teal3)',
    desc: 'A Duolingo-style app for Moroccan Arabic. 5M+ diaspora children who don\'t speak their parents\' dialect. No serious Darija learning product exists.',
    market: '5M diaspora in Europe · $9.99/mo · Zero competitors',
  },
  {
    title: 'World Cup 2030',
    badge: 'Government',
    badgeColor: 'var(--gold)',
    badgeBg: 'var(--gold3)',
    desc: 'Morocco co-hosts FIFA 2030. 5 billion viewers. The Moroccan government needs a world-class cultural platform. We have 4 years to become it.',
    market: '3-5M expected visitors · Government contract potential',
  },
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('mission');

  return (
    <Layout>
      <SEO
        title="About MoroccoPedia — Mission & Vision"
        description="MoroccoPedia is building the digital infrastructure for Moroccan culture — a living encyclopedia of dialects, cities, traditions and heritage for 36 million Darija speakers worldwide."
      />

      {/* ── HERO ── */}
      <div style={{ position:'relative', overflow:'hidden', background:'linear-gradient(155deg,#1c1007 0%,#2e1200 50%,#0a2318 100%)', padding:'clamp(60px,8vw,100px) 0 clamp(48px,6vw,80px)' }}>
        {/* Zellige patterns */}
        <div style={{ position:'absolute', inset:0, backgroundImage:`repeating-linear-gradient(45deg,rgba(192,57,10,.1) 0,rgba(192,57,10,.1) 1px,transparent 1px,transparent 36px),repeating-linear-gradient(-45deg,rgba(192,57,10,.1) 0,rgba(192,57,10,.1) 1px,transparent 1px,transparent 36px)` }} />
        <div style={{ position:'absolute', inset:0, backgroundImage:`repeating-linear-gradient(0deg,rgba(245,237,220,.03) 0,rgba(245,237,220,.03) 1px,transparent 1px,transparent 36px),repeating-linear-gradient(90deg,rgba(245,237,220,.03) 0,rgba(245,237,220,.03) 1px,transparent 1px,transparent 36px)` }} />
        <div style={{ position:'absolute', width:600, height:600, background:'#c0390a', filter:'blur(120px)', opacity:.12, right:'-5%', top:'-10%', borderRadius:'50%', pointerEvents:'none' }} />
        <div style={{ position:'absolute', width:500, height:500, background:'#0a7a6a', filter:'blur(120px)', opacity:.1, left:'-5%', bottom:'-10%', borderRadius:'50%', pointerEvents:'none' }} />

        <div style={{ maxWidth:900, margin:'0 auto', padding:'0 clamp(16px,4vw,32px)', position:'relative', textAlign:'center' }}>
          <div style={{ display:'inline-block', padding:'5px 18px', borderRadius:30, background:'rgba(232,154,26,.18)', border:'1px solid rgba(232,154,26,.35)', fontSize:11, fontWeight:700, color:'#e8b96a', letterSpacing:'.14em', textTransform:'uppercase', marginBottom:24 }}>
            About MoroccoPedia
          </div>
          <h1 style={{ ...S, fontSize:'clamp(36px,6vw,64px)', color:'#fff', lineHeight:1.06, marginBottom:20 }}>
            Building the Digital Home<br />
            <span style={{ color:'var(--gold2)' }}>for Moroccan Culture</span>
          </h1>
          <p style={{ fontSize:'clamp(14px,2vw,17px)', color:'rgba(245,237,220,.6)', lineHeight:1.8, maxWidth:640, margin:'0 auto 36px', fontWeight:300 }}>
            Morocco has one of the world's richest cultural heritages — ancient cities, seven distinct dialects, UNESCO traditions and living arts. None of it had a proper digital home. Until now.
          </p>
          {/* Arabic tagline */}
          <div style={{ fontFamily:'Amiri,serif', fontSize:22, color:'rgba(232,150,10,.45)', direction:'rtl', marginBottom:36 }}>
            التراث المغربي — حي دائماً
          </div>
          {/* Nav pills */}
          <div style={{ display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap' }}>
            {['mission','impact','vision','team'].map(s=>(
              <button key={s} onClick={()=>setActiveSection(s)}
                style={{ padding:'8px 18px', borderRadius:20, fontSize:12.5, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif', textTransform:'capitalize', transition:'all .2s', background:activeSection===s?'linear-gradient(135deg,var(--terra),var(--gold))':'rgba(255,255,255,.08)', border:`1px solid ${activeSection===s?'transparent':'rgba(255,255,255,.15)'}`, color:'#fff' }}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div style={{ background:'linear-gradient(135deg,var(--terra),var(--gold))', padding:'20px 0' }}>
        <div style={{ maxWidth:900, margin:'0 auto', padding:'0 clamp(16px,4vw,32px)', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(120px,1fr))', gap:0 }}>
          {STATS.map((s,i) => (
            <div key={s.label} style={{ textAlign:'center', padding:'0 16px', borderRight:i<STATS.length-1?'1px solid rgba(255,255,255,.25)':'none' }}>
              <div style={{ ...S, fontSize:'clamp(22px,3vw,28px)', color:'#fff', lineHeight:1 }}>{s.value}</div>
              <div style={{ fontSize:11, color:'rgba(255,255,255,.8)', fontWeight:600, marginTop:3 }}>{s.label}</div>
              <div style={{ fontSize:10, color:'rgba(255,255,255,.55)', marginTop:2 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'clamp(36px,5vw,64px) clamp(16px,4vw,32px)' }}>

        {/* ── MISSION ── */}
        {activeSection === 'mission' && (
          <div style={{ animation:'fadeUp .4s ease' }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:28, marginBottom:48 }}>
              <div>
                <span className="sec-label">Our Mission</span>
                <h2 style={{ ...S, fontSize:'clamp(26px,4vw,36px)', color:'var(--ink)', marginBottom:16, lineHeight:1.2 }}>
                  Preserve What Makes Morocco Unique
                </h2>
                <p style={{ fontSize:15, color:'var(--muted)', lineHeight:1.8, marginBottom:16, fontWeight:300 }}>
                  Morocco has one of the world's richest and most diverse cultural landscapes. Thirty-six million people speak Moroccan Darija — a language that doesn't exist in any dictionary, on any map, in any digital infrastructure.
                </p>
                <p style={{ fontSize:15, color:'var(--muted)', lineHeight:1.8, marginBottom:20, fontWeight:300 }}>
                  The same word means different things in Marrakesh, Tangier, Fès and the Sahara. Entire oral traditions are disappearing as the generation that holds them ages. The world's oldest university is in Fès — and most people don't know it.
                </p>
                <p style={{ fontSize:15, color:'var(--ink2)', lineHeight:1.8, fontWeight:400 }}>
                  MoroccoPedia is building the infrastructure to preserve, celebrate and share this heritage — for Moroccans, for the diaspora, for tourists and for the world.
                </p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                {[
                  { q:'Why does this matter?', a:'36 million people speak Darija but it has no official dictionary, no Google Translate support, no learning app. This is a gap no one has filled.' },
                  { q:'What is disappearing?', a:'Oral traditions, regional dialect variations, artisan techniques, folk music — all held by aging communities with no digital archive.' },
                  { q:'What makes us different?', a:'We are not building Wikipedia in Arabic. We are building living, AI-powered, community-driven cultural infrastructure specific to Morocco.' },
                ].map(item=>(
                  <div key={item.q} className="card" style={{ padding:'18px 20px' }}>
                    <div style={{ fontSize:13, fontWeight:700, color:'var(--terra)', marginBottom:7 }}>{item.q}</div>
                    <div style={{ fontSize:13.5, color:'var(--muted)', lineHeight:1.6 }}>{item.a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <h3 style={{ ...S, fontSize:26, marginBottom:20, color:'var(--ink)' }}>Our Values</h3>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:16 }}>
              {TEAM_VALUES.map(v=>(
                <div key={v.title} className="card" style={{ padding:'22px 20px' }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:v.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, color:v.color, marginBottom:14 }}>{v.icon}</div>
                  <h4 style={{ ...S, fontSize:18, marginBottom:8, color:'var(--ink)' }}>{v.title}</h4>
                  <p style={{ fontSize:13, color:'var(--muted)', lineHeight:1.65 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── IMPACT ── */}
        {activeSection === 'impact' && (
          <div style={{ animation:'fadeUp .4s ease' }}>
            <span className="sec-label">Our Impact</span>
            <h2 style={{ ...S, fontSize:'clamp(26px,4vw,36px)', color:'var(--ink)', marginBottom:12, lineHeight:1.2 }}>
              What We've Built So Far
            </h2>
            <p style={{ fontSize:15, color:'var(--muted)', lineHeight:1.75, marginBottom:40, maxWidth:580, fontWeight:300 }}>
              Built by one developer, driven by one mission: giving Moroccan culture the digital home it deserves.
            </p>

            {/* Platform features */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:16, marginBottom:48 }}>
              {[
                { title:'Dialect Dictionary', value:'175 words', detail:'359 regional variants across 7 dialects', color:'var(--terra)' },
                { title:'City Guides', value:'10 cities', detail:'Full cultural data: food, crafts, music, dialect, history', color:'var(--gold)' },
                { title:'Cultural Map', value:'Interactive', detail:'Leaflet-powered map with all city markers', color:'var(--teal)' },
                { title:'AI Assistant', value:'6 AI models', detail:'Chat, translation, dialect detection, storytelling', color:'var(--terra)' },
                { title:'Community', value:'Live', detail:'Story submissions, likes, categories, city filter', color:'var(--gold)' },
                { title:'Multi-language', value:'4 languages', detail:'Arabic, French, English, Spanish — with RTL', color:'var(--teal)' },
                { title:'Authentication', value:'Full system', detail:'JWT, roles, profiles, notifications, analytics', color:'var(--terra)' },
                { title:'Tourism Guide', value:'28 places', detail:'Every famous Moroccan destination with full info', color:'var(--gold)' },
              ].map(f=>(
                <div key={f.title} className="card" style={{ padding:'18px 20px' }}>
                  <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:f.color, marginBottom:6 }}>{f.title}</div>
                  <div style={{ ...S, fontSize:22, color:'var(--ink)', marginBottom:4 }}>{f.value}</div>
                  <div style={{ fontSize:12.5, color:'var(--muted)', lineHeight:1.5 }}>{f.detail}</div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <h3 style={{ ...S, fontSize:24, marginBottom:24, color:'var(--ink)' }}>Our Journey</h3>
            <div style={{ position:'relative', paddingLeft:28 }}>
              <div style={{ position:'absolute', left:9, top:8, bottom:8, width:2, background:'var(--border)' }} />
              {MILESTONES.map((m,i)=>(
                <div key={i} style={{ position:'relative', marginBottom:22 }}>
                  <div style={{ position:'absolute', left:-20, top:4, width:14, height:14, borderRadius:'50%', background:m.future?'var(--bg3)':m.color, border:`3px solid ${m.future?'var(--border)':m.color}44`, boxShadow:m.future?'none':`0 0 0 3px ${m.color}22` }} />
                  <div className="card" style={{ padding:'14px 18px', opacity:m.future?.7:1, border:m.future?'1px dashed var(--border)':'1px solid var(--border)' }}>
                    <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:5 }}>
                      <span style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:m.color }}>{m.year}</span>
                      {m.future && <span style={{ fontSize:10, padding:'2px 8px', borderRadius:10, background:'var(--bg2)', color:'var(--muted)', fontWeight:600 }}>Planned</span>}
                    </div>
                    <div style={{ fontSize:14, fontWeight:600, color:'var(--ink)', marginBottom:4 }}>{m.event}</div>
                    <div style={{ fontSize:13, color:'var(--muted)', lineHeight:1.5 }}>{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── VISION ── */}
        {activeSection === 'vision' && (
          <div style={{ animation:'fadeUp .4s ease' }}>
            <span className="sec-label">Our Vision</span>
            <h2 style={{ ...S, fontSize:'clamp(26px,4vw,36px)', color:'var(--ink)', marginBottom:12, lineHeight:1.2 }}>
              Where MoroccoPedia is Going
            </h2>
            <p style={{ fontSize:15, color:'var(--muted)', lineHeight:1.75, marginBottom:40, maxWidth:580, fontWeight:300 }}>
              We are not just building a website. We are building infrastructure for a language and culture that has no digital representation. The opportunity is enormous.
            </p>

            {/* Startup opportunities */}
            <h3 style={{ ...S, fontSize:22, marginBottom:20, color:'var(--ink)' }}>Business Opportunities</h3>
            <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:48 }}>
              {OPPORTUNITIES.map(opp=>(
                <div key={opp.title} className="card" style={{ padding:'22px 24px', display:'grid', gridTemplateColumns:'auto 1fr', gap:20, alignItems:'start' }}>
                  <div style={{ width:48, height:48, borderRadius:12, background:opp.badgeBg, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <span className="badge" style={{ background:opp.badgeBg, color:opp.badgeColor }}>{opp.badge}</span>
                  </div>
                  <div>
                    <h4 style={{ ...S, fontSize:20, color:'var(--ink)', marginBottom:7 }}>{opp.title}</h4>
                    <p style={{ fontSize:14, color:'var(--muted)', lineHeight:1.65, marginBottom:10 }}>{opp.desc}</p>
                    <div style={{ fontSize:12.5, fontWeight:600, color:opp.badgeColor }}>{opp.market}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 2030 World Cup highlight */}
            <div style={{ background:'linear-gradient(135deg,#1c1007,#0a2318)', borderRadius:20, padding:'clamp(28px,4vw,40px)', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', inset:0, backgroundImage:`repeating-linear-gradient(45deg,rgba(245,237,220,.02) 0,rgba(245,237,220,.02) 1px,transparent 1px,transparent 28px),repeating-linear-gradient(-45deg,rgba(245,237,220,.02) 0,rgba(245,237,220,.02) 1px,transparent 1px,transparent 28px)` }} />
              <div style={{ position:'relative' }}>
                <div style={{ display:'inline-block', padding:'4px 14px', borderRadius:20, background:'rgba(232,154,26,.2)', border:'1px solid rgba(232,154,26,.35)', fontSize:10.5, fontWeight:700, color:'#d4a030', letterSpacing:'.12em', textTransform:'uppercase', marginBottom:16 }}>
                  FIFA World Cup 2030
                </div>
                <h3 style={{ ...S, fontSize:'clamp(22px,3vw,30px)', color:'#fff', marginBottom:12, lineHeight:1.2 }}>
                  The Biggest Opportunity in Moroccan Tech History
                </h3>
                <p style={{ fontSize:15, color:'rgba(245,237,220,.6)', lineHeight:1.75, maxWidth:560, marginBottom:24, fontWeight:300 }}>
                  Morocco co-hosts the FIFA World Cup 2030. 5 billion viewers. 3–5 million visitors. The government will spend billions showcasing Moroccan culture to the world. A cultural tech platform that tells Morocco's story is not a nice-to-have — it becomes infrastructure.
                </p>
                <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                  <Link href="/map"><button className="btn-primary" style={{ padding:'10px 22px', fontSize:13 }}>Explore the Platform</button></Link>
                  <Link href="/quiz"><button style={{ padding:'10px 22px', borderRadius:10, fontSize:13, fontWeight:600, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.2)', color:'#fff', cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>Take the Quiz</button></Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TEAM ── */}
        {activeSection === 'team' && (
          <div style={{ animation:'fadeUp .4s ease' }}>
            <span className="sec-label">The Team</span>
            <h2 style={{ ...S, fontSize:'clamp(26px,4vw,36px)', color:'var(--ink)', marginBottom:12, lineHeight:1.2 }}>
              Built by One. For Many.
            </h2>
            <p style={{ fontSize:15, color:'var(--muted)', lineHeight:1.8, marginBottom:36, maxWidth:580, fontWeight:300 }}>
              MoroccoPedia was built by a single developer with a deep love for Moroccan culture and a belief that technology can preserve what time is erasing.
            </p>

            {/* Founder card */}
            <div className="card" style={{ padding:'32px', marginBottom:32, display:'grid', gridTemplateColumns:'auto 1fr', gap:28, alignItems:'start' }}>
              <div style={{ width:88, height:88, borderRadius:'50%', background:'linear-gradient(135deg,var(--terra),var(--gold))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:32, fontWeight:700, color:'#fff', flexShrink:0, border:'3px solid var(--bg3)' }}>
                M
              </div>
              <div>
                <div style={{ ...S, fontSize:24, color:'var(--ink)', marginBottom:4 }}>The Founder</div>
                <div style={{ fontSize:13, fontWeight:600, color:'var(--terra)', marginBottom:14 }}>Full-Stack Developer · Morocco</div>
                <p style={{ fontSize:14.5, color:'var(--muted)', lineHeight:1.75, marginBottom:16 }}>
                  Passionate about Moroccan culture, technology and the intersection between the two. Built MoroccoPedia from scratch — every line of code, every word in the database, every design decision.
                </p>
                <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                  {['Next.js','Node.js','MongoDB','Socket.IO','Leaflet','JWT'].map(t=>(
                    <span key={t} className="badge badge-terra">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Join us */}
            <div style={{ background:'var(--bg2)', borderRadius:18, padding:'32px', border:'1px solid var(--border)' }}>
              <h3 style={{ ...S, fontSize:24, marginBottom:10, color:'var(--ink)' }}>Join the Mission</h3>
              <p style={{ fontSize:14.5, color:'var(--muted)', lineHeight:1.75, marginBottom:24, maxWidth:480 }}>
                We are looking for people who love Morocco and want to help preserve its heritage. Whether you are a linguist, historian, developer, artist or storyteller — there is a place for you here.
              </p>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12, marginBottom:24 }}>
                {[
                  { role:'Darija Contributors', desc:'Native speakers who can verify and expand the dictionary', icon:'📖' },
                  { role:'City Experts', desc:'People with deep knowledge of a specific Moroccan city', icon:'🏛️' },
                  { role:'Cultural Researchers', desc:'Academics and historians who can verify data', icon:'🔬' },
                  { role:'Developers', desc:'Engineers who want to build cultural tech for Morocco', icon:'💻' },
                ].map(r=>(
                  <div key={r.role} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)' }}>
                    <div style={{ fontSize:22, marginBottom:8 }}>{r.icon}</div>
                    <div style={{ fontSize:13, fontWeight:700, color:'var(--ink)', marginBottom:5 }}>{r.role}</div>
                    <div style={{ fontSize:12, color:'var(--muted)', lineHeight:1.5 }}>{r.desc}</div>
                  </div>
                ))}
              </div>
              <Link href="/community">
                <button className="btn-primary" style={{ padding:'11px 24px', fontSize:13.5 }}>
                  Contribute to MoroccoPedia →
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Newsletter */}
      <Newsletter variant="banner" />

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </Layout>
  );
}
