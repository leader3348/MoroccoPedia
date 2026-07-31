import Link from 'next/link';
const S = { fontFamily: 'Playfair Display, Georgia, serif' };
export default function NotFound() {
  return (
    <div style={{ minHeight:'100vh', background:'linear-gradient(155deg,#1a0800,#0a2318)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'40px 24px', textAlign:'center' }}>
      <div style={{ ...S, fontSize:'clamp(80px,15vw,140px)', color:'var(--terra)', lineHeight:1, opacity:.15, position:'absolute' }}>404</div>
      <div style={{ position:'relative', zIndex:2, maxWidth:520 }}>
        <div style={{ fontFamily:'Amiri,serif', fontSize:28, color:'var(--gold2)', marginBottom:12 }}>الصفحة غير موجودة</div>
        <h1 style={{ ...S, fontSize:'clamp(28px,5vw,48px)', color:'#fff', marginBottom:12 }}>Page introuvable</h1>
        <p style={{ fontSize:16, color:'rgba(245,237,220,.55)', lineHeight:1.8, marginBottom:32 }}>
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
          <Link href="/"><button style={{ padding:'12px 28px', borderRadius:12, fontSize:14, fontWeight:700, cursor:'pointer', background:'linear-gradient(135deg,var(--terra),var(--gold))', color:'#fff', border:'none', fontFamily:'Outfit,sans-serif' }}>← Accueil</button></Link>
          <Link href="/dialect"><button style={{ padding:'12px 24px', borderRadius:12, fontSize:14, fontWeight:600, cursor:'pointer', background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.2)', color:'#fff', fontFamily:'Outfit,sans-serif' }}>Dictionnaire</button></Link>
        </div>
      </div>
    </div>
  );
}
