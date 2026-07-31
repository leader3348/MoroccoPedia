import { useState } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const S = { fontFamily: 'Playfair Display, Georgia, serif' };

const CODE = {
  js: `// Installation
npm install axios

// Darija Dictionary Search
const response = await axios.get('https://api.moroccoPedia.app/v1/dialect/search', {
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' },
  params: { q: 'zwina', limit: 10 }
});

// Response
{
  "results": [{
    "word": "zwina",
    "arabic": "زوينة",
    "phonetic": "/zwi-na/",
    "definition": "Beautiful / pretty (feminine form)",
    "translations": {
      "arabic": "جميلة",
      "french": "Belle / jolie",
      "english": "Beautiful",
      "spanish": "Bonita"
    },
    "regionalVariants": [
      { "region": "Marrakesh", "word": "Zwina", "meaning": "Standard form" },
      { "region": "Tangier", "word": "Mli7a", "meaning": "Northern Morocco prefers mli7a" },
      { "region": "Souss", "word": "Ifilki", "meaning": "Beautiful in Tachelhit" }
    ]
  }]
}`,
  python: `import requests

# Darija Dictionary Search
url = "https://api.moroccoPedia.app/v1/dialect/search"
headers = {"Authorization": "Bearer YOUR_API_KEY"}
params = {"q": "zwina", "limit": 10}

response = requests.get(url, headers=headers, params=params)
data = response.json()

# Regional Translation
url_trans = "https://api.moroccoPedia.app/v1/dialect/translate/zwina"
response = requests.get(url_trans, headers=headers)
print(response.json())`,
  curl: `# Search Darija words
curl -X GET "https://api.moroccoPedia.app/v1/dialect/search?q=zwina" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"

# Get word details
curl -X GET "https://api.moroccoPedia.app/v1/dialect/word/labas" \\
  -H "Authorization: Bearer YOUR_API_KEY"

# Regional comparison
curl -X GET "https://api.moroccoPedia.app/v1/dialect/compare?r1=Marrakesh&r2=Tangier" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
};

const ENDPOINTS = [
  { method:'GET', path:'/v1/dialect/search', desc:'Rechercher un mot Darija', params:'q (string), limit (1-50), theme (string)', plan:'Free (50/mois)', color:'#0a7a6a' },
  { method:'GET', path:'/v1/dialect/word/:word', desc:'Détails complets d\'un mot', params:'word (string)', plan:'Free', color:'#0a7a6a' },
  { method:'GET', path:'/v1/dialect/translate/:word', desc:'Traduction dans toutes les régions', params:'word, from (dialect)', plan:'Pro', color:'#c0390a' },
  { method:'GET', path:'/v1/dialect/compare', desc:'Comparer deux dialectes', params:'r1, r2 (regions)', plan:'Pro', color:'#c0390a' },
  { method:'GET', path:'/v1/dialect/regions', desc:'Liste de toutes les régions/dialectes', params:'—', plan:'Free', color:'#0a7a6a' },
  { method:'GET', path:'/v1/dialect/themes', desc:'Mots par thème (food, greeting...)', params:'theme, limit', plan:'Pro', color:'#c0390a' },
  { method:'GET', path:'/v1/dialect/random', desc:'Mot aléatoire du dictionnaire', params:'theme (optionnel)', plan:'Free', color:'#0a7a6a' },
  { method:'GET', path:'/v1/cities', desc:'Tous les guides de villes', params:'—', plan:'Free', color:'#0a7a6a' },
  { method:'GET', path:'/v1/cities/:slug', desc:'Guide complet d\'une ville', params:'slug (marrakesh...)', plan:'Pro', color:'#c0390a' },
  { method:'POST', path:'/v1/translate', desc:'Traduction texte Darija ↔ FR/EN/AR/ES', params:'text, to (lang code)', plan:'Enterprise', color:'#c47b0a' },
];

const LANGS = ['js', 'python', 'curl'];

function Zellige({ opacity=.1, id='z' }) {
  return (
    <svg style={{ position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none' }}>
      <defs>
        <pattern id={id} x="0" y="0" width={70} height={70} patternUnits="userSpaceOnUse">
          <polygon points="35,3.5 44,18.9 66.5,18.9 51.1,31.5 57.4,53.2 35,42 12.6,53.2 18.9,31.5 3.5,18.9 26,18.9"
            fill="none" stroke="#c0390a" strokeWidth="1" opacity={opacity}/>
          <circle cx="35" cy="35" r="3" fill="#c47b0a" opacity={opacity*.5}/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  );
}

export default function ApiDocsPage() {
  const [lang, setLang] = useState('js');
  const [copied, setCopied] = useState('');

  const copy = (text, key) => {
    navigator.clipboard?.writeText(text).catch(()=>{});
    setCopied(key);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <Layout>
      <SEO title="API Documentation — MoroccoPedia Darija API" description="Documentation complète de la Darija API — recherche de mots, traduction dialectale, variantes régionales. REST API disponible en Free, Pro et Enterprise."/>

      {/* HERO */}
      <div style={{ background:'linear-gradient(155deg,#0a1c28,#1c1007)', padding:'clamp(48px,6vw,80px) 0', position:'relative', overflow:'hidden' }}>
        <Zellige opacity={0.12} id="dh"/>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 clamp(20px,4vw,48px)', position:'relative', zIndex:2 }}>
          <div style={{ display:'flex', gap:20, alignItems:'flex-start', flexWrap:'wrap' }}>
            <div style={{ flex:1, minWidth:280 }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(15,160,140,.15)', border:'1px solid rgba(15,160,140,.3)', borderRadius:30, padding:'5px 14px', marginBottom:16 }}>
                <div style={{ width:7, height:7, borderRadius:'50%', background:'var(--teal2)' }}/>
                <span style={{ fontSize:11, fontWeight:700, color:'var(--teal2)', letterSpacing:'.1em', textTransform:'uppercase' }}>REST API v1</span>
              </div>
              <h1 style={{ ...S, fontSize:'clamp(28px,5vw,52px)', color:'#fff', lineHeight:1.05, marginBottom:12 }}>
                Darija API<br/><span style={{ color:'var(--gold2)' }}>Documentation</span>
              </h1>
              <p style={{ fontSize:15, color:'rgba(245,237,220,.55)', lineHeight:1.8, maxWidth:460, marginBottom:24 }}>
                Intégrez la plus grande base de données Darija structurée dans vos applications — 355+ mots, 7 dialectes, 461 variantes régionales.
              </p>
              <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                <div style={{ padding:'8px 16px', borderRadius:10, background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.13)', fontSize:13, color:'rgba(245,237,220,.7)' }}>
                  Base URL: <code style={{ color:'var(--teal2)' }}>api.moroccoPedia.app/v1</code>
                </div>
                <div style={{ padding:'8px 16px', borderRadius:10, background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.13)', fontSize:13, color:'rgba(245,237,220,.7)' }}>
                  Auth: <code style={{ color:'var(--gold2)' }}>Bearer token</code>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, flexShrink:0 }}>
              {[
                { v:'355+', l:'Mots Darija', c:'#c0390a' },
                { v:'7', l:'Dialectes', c:'#0a7a6a' },
                { v:'461', l:'Variantes', c:'#c47b0a' },
                { v:'10', l:'Endpoints', c:'#0a7a6a' },
              ].map(s => (
                <div key={s.l} style={{ background:'rgba(255,255,255,.06)', border:`1px solid ${s.c}30`, borderRadius:12, padding:'14px 16px', textAlign:'center' }}>
                  <div style={{ ...S, fontSize:24, color:s.c, lineHeight:1 }}>{s.v}</div>
                  <div style={{ fontSize:11, color:'rgba(245,237,220,.45)', marginTop:3 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'clamp(28px,4vw,48px) clamp(16px,4vw,48px)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'240px 1fr', gap:32, alignItems:'start' }}>

          {/* Sidebar nav */}
          <div style={{ position:'sticky', top:80 }}>
            {[
              { label:'Authentification', id:'auth' },
              { label:'Endpoints', id:'endpoints' },
              { label:'Exemples de code', id:'code' },
              { label:'Rate Limiting', id:'rate' },
              { label:'Erreurs', id:'errors' },
              { label:'Obtenir une clé', id:'key' },
            ].map(item => (
              <a key={item.id} href={`#${item.id}`} style={{ display:'block', padding:'8px 14px', borderRadius:9, fontSize:13.5, color:'var(--muted)', textDecoration:'none', marginBottom:4, transition:'all .18s', fontFamily:'Outfit,sans-serif' }}
                onMouseEnter={e=>{e.currentTarget.style.background='var(--bg2)';e.currentTarget.style.color='var(--terra)';}}
                onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='var(--muted)';}}>
                {item.label}
              </a>
            ))}
          </div>

          {/* Content */}
          <div>

            {/* Auth */}
            <section id="auth" style={{ marginBottom:48 }}>
              <h2 style={{ ...S, fontSize:26, color:'var(--ink)', marginBottom:14 }}>Authentification</h2>
              <p style={{ fontSize:14.5, color:'var(--muted)', lineHeight:1.75, marginBottom:16 }}>
                Toutes les requêtes API doivent inclure votre clé API dans le header <code style={{ background:'var(--bg2)', padding:'2px 6px', borderRadius:5, fontSize:13 }}>Authorization</code>.
              </p>
              <div style={{ background:'#0a1c28', borderRadius:12, padding:'16px 20px', marginBottom:16 }}>
                <div style={{ fontSize:12, color:'rgba(255,255,255,.35)', marginBottom:8, textTransform:'uppercase', letterSpacing:'.1em' }}>Header requis</div>
                <code style={{ fontSize:14, color:'var(--teal2)' }}>Authorization: Bearer YOUR_API_KEY</code>
              </div>
              <div style={{ background:'var(--bg2)', borderRadius:11, padding:'14px 16px', border:'1px solid var(--border)', fontSize:13.5, color:'var(--muted)', lineHeight:1.65 }}>
                Obtenez votre clé API gratuitement en créant un compte sur <Link href="/auth/register" style={{ color:'var(--terra)', fontWeight:600 }}>MoroccoPedia</Link>.
                La clé Free permet 50 requêtes/mois. Plan Pro : illimité.
              </div>
            </section>

            {/* Endpoints */}
            <section id="endpoints" style={{ marginBottom:48 }}>
              <h2 style={{ ...S, fontSize:26, color:'var(--ink)', marginBottom:14 }}>Endpoints disponibles</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                {ENDPOINTS.map((ep, i) => (
                  <div key={i} style={{ background:'#fff', borderRadius:12, padding:'14px 18px', border:'1px solid var(--border)', display:'flex', gap:14, alignItems:'flex-start', flexWrap:'wrap' }}>
                    <div style={{ display:'flex', gap:10, alignItems:'center', flexShrink:0 }}>
                      <span style={{ padding:'3px 10px', borderRadius:6, background:ep.color+'15', color:ep.color, fontSize:11, fontWeight:800, fontFamily:'monospace' }}>{ep.method}</span>
                      <code style={{ fontSize:13, color:'var(--ink)', fontFamily:'monospace', background:'var(--bg2)', padding:'3px 8px', borderRadius:6 }}>{ep.path}</code>
                    </div>
                    <div style={{ flex:1, minWidth:200 }}>
                      <div style={{ fontSize:13.5, color:'var(--ink2)', marginBottom:3 }}>{ep.desc}</div>
                      <div style={{ fontSize:12, color:'var(--muted)' }}>Params: {ep.params}</div>
                    </div>
                    <span style={{ padding:'3px 10px', borderRadius:20, background:ep.plan === 'Free' ? 'var(--teal3)' : ep.plan === 'Pro' ? 'var(--terra3)' : 'var(--gold3)', color:ep.plan === 'Free' ? 'var(--teal)' : ep.plan === 'Pro' ? 'var(--terra)' : 'var(--gold)', fontSize:10.5, fontWeight:700, flexShrink:0 }}>
                      {ep.plan}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Code examples */}
            <section id="code" style={{ marginBottom:48 }}>
              <h2 style={{ ...S, fontSize:26, color:'var(--ink)', marginBottom:14 }}>Exemples de code</h2>
              {/* Language tabs */}
              <div style={{ display:'flex', gap:6, marginBottom:0 }}>
                {LANGS.map(l => (
                  <button key={l} onClick={() => setLang(l)}
                    style={{ padding:'8px 18px', borderRadius:'10px 10px 0 0', fontSize:12.5, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif', border:`1px solid ${lang===l?'#0a1c28':'var(--border)'}`, borderBottom:'none', transition:'all .18s',
                      background: lang === l ? '#0a1c28' : 'var(--bg2)',
                      color: lang === l ? '#fff' : 'var(--muted)' }}>
                    {l === 'js' ? 'JavaScript' : l === 'python' ? 'Python' : 'cURL'}
                  </button>
                ))}
              </div>
              <div style={{ background:'#0a1c28', borderRadius:'0 12px 12px 12px', position:'relative' }}>
                <button onClick={() => copy(CODE[lang], lang)}
                  style={{ position:'absolute', top:12, right:12, padding:'5px 12px', borderRadius:8, background:'rgba(255,255,255,.1)', border:'1px solid rgba(255,255,255,.15)', color:'rgba(255,255,255,.7)', fontSize:11.5, cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>
                  {copied === lang ? '✓ Copié!' : 'Copier'}
                </button>
                <pre style={{ padding:'20px', fontSize:13, color:'var(--teal2)', overflowX:'auto', margin:0, lineHeight:1.7, fontFamily:'monospace' }}>
                  <code>{CODE[lang]}</code>
                </pre>
              </div>
            </section>

            {/* Rate limiting */}
            <section id="rate" style={{ marginBottom:48 }}>
              <h2 style={{ ...S, fontSize:26, color:'var(--ink)', marginBottom:14 }}>Rate Limiting</h2>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:12 }}>
                {[
                  { plan:'Free', limit:'50 req/mois', reset:'1er du mois', color:'#0a7a6a' },
                  { plan:'Pro', limit:'10,000 req/mois', reset:'1er du mois', color:'#c0390a' },
                  { plan:'Enterprise', limit:'Illimité', reset:'—', color:'#c47b0a' },
                ].map(r => (
                  <div key={r.plan} style={{ background:'#fff', border:`1.5px solid ${r.color}25`, borderRadius:12, padding:'16px 18px' }}>
                    <div style={{ fontSize:12, fontWeight:700, color:r.color, textTransform:'uppercase', letterSpacing:'.08em', marginBottom:8 }}>{r.plan}</div>
                    <div style={{ ...S, fontSize:20, color:'var(--ink)', marginBottom:4 }}>{r.limit}</div>
                    <div style={{ fontSize:12, color:'var(--muted)' }}>Reset: {r.reset}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize:13.5, color:'var(--muted)', marginTop:14, lineHeight:1.7 }}>
                Les headers <code style={{ background:'var(--bg2)', padding:'2px 6px', borderRadius:4, fontSize:12 }}>X-RateLimit-Remaining</code> et <code style={{ background:'var(--bg2)', padding:'2px 6px', borderRadius:4, fontSize:12 }}>X-RateLimit-Reset</code> sont inclus dans chaque réponse.
              </p>
            </section>

            {/* Errors */}
            <section id="errors" style={{ marginBottom:48 }}>
              <h2 style={{ ...S, fontSize:26, color:'var(--ink)', marginBottom:14 }}>Codes d'erreur</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {[
                  { code:'200', desc:'Succès', color:'#0a7a6a' },
                  { code:'400', desc:'Requête invalide — paramètres manquants ou incorrects', color:'#c47b0a' },
                  { code:'401', desc:'Non autorisé — clé API manquante ou invalide', color:'#c0390a' },
                  { code:'403', desc:'Interdit — fonctionnalité non disponible dans votre plan', color:'#c0390a' },
                  { code:'429', desc:'Rate limit atteint — attendez le reset mensuel', color:'#c47b0a' },
                  { code:'404', desc:'Mot ou ressource introuvable', color:'#7a6248' },
                  { code:'500', desc:'Erreur serveur interne', color:'#c0390a' },
                ].map(e => (
                  <div key={e.code} style={{ display:'flex', gap:14, alignItems:'center', padding:'10px 14px', background:'#fff', borderRadius:10, border:'1px solid var(--border)' }}>
                    <code style={{ fontSize:13.5, fontWeight:700, color:e.color, minWidth:40, fontFamily:'monospace' }}>{e.code}</code>
                    <span style={{ fontSize:13.5, color:'var(--muted)' }}>{e.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Get key */}
            <section id="key">
              <div style={{ background:'linear-gradient(135deg,#1c1007,#0a2318)', borderRadius:18, padding:'clamp(24px,4vw,40px)', textAlign:'center', position:'relative', overflow:'hidden' }}>
                <Zellige opacity={0.12} id="key-z"/>
                <div style={{ position:'relative', zIndex:1 }}>
                  <h2 style={{ ...S, fontSize:28, color:'#fff', marginBottom:10 }}>Obtenir votre clé API</h2>
                  <p style={{ fontSize:15, color:'rgba(245,237,220,.55)', marginBottom:24, maxWidth:440, margin:'0 auto 24px' }}>
                    Créez un compte gratuit et obtenez immédiatement votre clé API — 50 requêtes/mois incluses.
                  </p>
                  <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
                    <Link href="/auth/register"><button className="btn-primary">Créer un compte →</button></Link>
                    <Link href="/pricing"><button style={{ padding:'10px 22px', borderRadius:11, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.2)', color:'#fff', fontSize:13.5, fontWeight:600, cursor:'pointer', fontFamily:'Outfit,sans-serif' }}>Voir les plans →</button></Link>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </Layout>
  );
}
