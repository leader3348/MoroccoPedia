import Link from 'next/link';
import Layout from '../components/Layout';

const S = { fontFamily: 'Playfair Display, Georgia, serif' };

function ZelligeStar({ size=200, color='#c0390a', opacity=.08, style={} }) {
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

function ErrorPage({ statusCode }) {
  const isNotFound = statusCode === 404;
  const messages = {
    404: { title: 'الصفحة غير موجودة', subtitle: 'Page introuvable', desc: 'La page que vous cherchez n\'existe pas ou a été déplacée.', code: '404' },
    500: { title: 'خطأ في الخادم', subtitle: 'Erreur serveur', desc: 'Une erreur inattendue s\'est produite. Notre équipe a été notifiée.', code: '500' },
    default: { title: 'خطأ', subtitle: 'Une erreur s\'est produite', desc: 'Quelque chose s\'est mal passé. Veuillez réessayer.', code: statusCode || '?' },
  };

  const msg = messages[statusCode] || messages.default;

  const DARIJA_WORDS = ['labas?', 'mrhba', 'zwina', 'bezzaf', 'wakha', 'shukran', 'inshallah', 'safi'];

  return (
    <div style={{ minHeight:'100vh', background:'linear-gradient(155deg,#1a0800,#0a2318)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden', padding:'40px 24px', textAlign:'center' }}>
      {/* Zellige stars */}
      <ZelligeStar size={300} color="#c0390a" opacity={0.07} style={{ position:'absolute', right:'-50px', top:'-50px' }}/>
      <ZelligeStar size={240} color="#c47b0a" opacity={0.06} style={{ position:'absolute', left:'-40px', bottom:'-40px' }}/>
      <ZelligeStar size={160} color="#0a7a6a" opacity={0.06} style={{ position:'absolute', left:'30%', top:'10%' }}/>

      {/* Error code */}
      <div style={{ ...S, fontSize:'clamp(80px,15vw,140px)', color:'var(--terra)', lineHeight:1, marginBottom:0, opacity:.15, position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-60%)', fontWeight:700, pointerEvents:'none' }}>
        {msg.code}
      </div>

      {/* Content */}
      <div style={{ position:'relative', zIndex:2, maxWidth:560 }}>
        {/* Arabic */}
        <div style={{ fontFamily:'Amiri,serif', fontSize:'clamp(20px,3vw,28px)', color:'var(--gold2)', marginBottom:12, direction:'rtl' }}>
          {msg.title}
        </div>

        {/* Main error */}
        <div style={{ ...S, fontSize:'clamp(32px,6vw,64px)', color:'var(--terra)', lineHeight:1.0, marginBottom:8 }}>
          {msg.code}
        </div>
        <h1 style={{ ...S, fontSize:'clamp(20px,3.5vw,34px)', color:'#fff', marginBottom:12 }}>{msg.subtitle}</h1>
        <p style={{ fontSize:'clamp(14px,2vw,16px)', color:'rgba(245,237,220,.55)', lineHeight:1.8, marginBottom:32 }}>{msg.desc}</p>

        {/* Rotating Darija words */}
        <div style={{ display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap', marginBottom:32 }}>
          {DARIJA_WORDS.map((w, i) => (
            <span key={w} style={{
              padding:'4px 12px', borderRadius:20, fontSize:12,
              background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.12)',
              color:`rgba(245,237,220,${0.3 + (i % 3) * 0.15})`,
              fontFamily:'Outfit,sans-serif',
            }}>{w}</span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
          <Link href="/">
            <button style={{
              padding:'12px 28px', borderRadius:12, fontSize:14, fontWeight:700, cursor:'pointer',
              background:'linear-gradient(135deg,var(--terra),var(--gold))',
              color:'#fff', border:'none', fontFamily:'Outfit,sans-serif',
              boxShadow:'0 6px 24px rgba(192,57,10,.3)',
            }}>
              ← Retour à l'accueil
            </button>
          </Link>
          <Link href="/dialect">
            <button style={{
              padding:'12px 24px', borderRadius:12, fontSize:14, fontWeight:600, cursor:'pointer',
              background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.2)',
              color:'#fff', fontFamily:'Outfit,sans-serif',
            }}>
              Dictionnaire Darija
            </button>
          </Link>
          {!isNotFound && (
            <button onClick={() => window.location.reload()} style={{
              padding:'12px 24px', borderRadius:12, fontSize:14, fontWeight:600, cursor:'pointer',
              background:'rgba(10,122,106,.25)', border:'1px solid rgba(10,122,106,.4)',
              color:'var(--teal2)', fontFamily:'Outfit,sans-serif',
            }}>
              ↻ Réessayer
            </button>
          )}
        </div>

        {isNotFound && (
          <p style={{ marginTop:24, fontSize:12, color:'rgba(245,237,220,.3)' }}>
            Vous cherchez peut-être :{' '}
            {['/dialect', '/history', '/map', '/tourism'].map((path, i) => (
              <span key={path}>
                <Link href={path} style={{ color:'var(--gold2)', textDecoration:'none' }}>{path}</Link>
                {i < 3 ? ' · ' : ''}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
