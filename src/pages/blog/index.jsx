import Link from 'next/link';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const S = { fontFamily: 'Playfair Display, Georgia, serif' };

const POSTS = [
  {
    slug: 'darija-vs-arabic',
    title: 'Darija vs Arabe Classique — Pourquoi ce sont deux langues différentes',
    titleAr: 'الدارجة مقابل العربية الفصحى',
    excerpt: 'La Darija marocaine contient 40% de mots amazighs, des emprunts au français, à l\'espagnol et au portugais. Découvrez pourquoi les Arabes du Machreq ne comprennent pas les Marocains.',
    category: 'Langue', categoryColor: '#0a7a6a',
    date: '15 Mars 2026', readTime: '5 min',
    featured: true,
  },
  {
    slug: 'zellige-art-science',
    title: 'Le Zellij — L\'art islamique le plus complexe du monde',
    titleAr: 'الزليج — أعقد الفنون الإسلامية',
    excerpt: 'Comment des artisans de Fès transforment des milliers de fragments de céramique en étoiles géométriques parfaites sans mesurer, sans calculer — juste par transmission orale de génération en génération.',
    category: 'Arts & Artisanat', categoryColor: '#c0390a',
    date: '10 Mars 2026', readTime: '7 min',
    featured: false,
  },
  {
    slug: 'gnawa-healing-music',
    title: 'La musique Gnawa — Quand la transe guérit l\'âme',
    titleAr: 'موسيقى الكناوة — حين يشفي الجذب الروح',
    excerpt: 'Originaire d\'Afrique sub-saharienne, la musique Gnawa est à la fois rituel de guérison, cérémonie spirituelle et art musical. Inscrite au patrimoine immatériel de l\'UNESCO en 2019.',
    category: 'Musique', categoryColor: '#c47b0a',
    date: '5 Mars 2026', readTime: '6 min',
    featured: false,
  },
  {
    slug: 'moroccan-tea-ritual',
    title: 'L\'atay marocain — Ce n\'est pas du thé, c\'est un rituel',
    titleAr: 'الأتاي المغربي — ليس شاياً بل طقساً',
    excerpt: 'Verser le thé à la menthe de hauteur pour créer la mousse, servir trois verres symboliques, refuser = offense. Le guide complet du rituel le plus important de l\'hospitalité marocaine.',
    category: 'Culture & Traditions', categoryColor: '#0a7a6a',
    date: '28 Fév 2026', readTime: '4 min',
    featured: false,
  },
  {
    slug: 'ibn-battuta-greatest-traveler',
    title: 'Ibn Battuta — Le voyageur que Marco Polo n\'était pas',
    titleAr: 'ابن بطوطة — المسافر الذي لم يكن ماركو بولو',
    excerpt: 'Né à Tanger en 1304, Ibn Battuta a parcouru 120 000 km — 5 fois plus que Marco Polo. Pourtant l\'Occident célèbre Polo. Voici pourquoi l\'histoire a été mal écrite.',
    category: 'Histoire', categoryColor: '#c0390a',
    date: '20 Fév 2026', readTime: '8 min',
    featured: false,
  },
  {
    slug: 'medina-architecture-guide',
    title: 'La médina marocaine — Comment lire un espace millénaire',
    titleAr: 'المدينة المغربية — كيف تقرأ فضاءً بألف سنة',
    excerpt: 'Les derbs, les fonduks, les médersas, les souks par métier — l\'architecture de la médina n\'est pas chaotique. C\'est une ville-machine parfaitement organisée selon une logique sociale et commerciale que personne ne vous explique.',
    category: 'Architecture', categoryColor: '#c47b0a',
    date: '15 Fév 2026', readTime: '9 min',
    featured: false,
  },
];

function PostCard({ post, large = false }) {
  const CC = { 'Langue':'#0a7a6a','Arts & Artisanat':'#c0390a','Musique':'#c47b0a','Culture & Traditions':'#0a7a6a','Histoire':'#c0390a','Architecture':'#c47b0a' };
  const color = CC[post.category] || '#c0390a';

  if (large) {
    return (
      <Link href={`/blog/${post.slug}`} style={{ textDecoration:'none' }}>
        <div style={{ background:'#fff', borderRadius:20, overflow:'hidden', border:'1px solid var(--border)', transition:'all .28s', cursor:'pointer' }}
          onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow=`0 16px 48px ${color}15`;e.currentTarget.style.borderColor=`${color}40`;}}
          onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none';e.currentTarget.style.borderColor='var(--border)';}}>
          <div style={{ height:200, background:`linear-gradient(135deg,${color}20,${color}08)`, position:'relative', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <div style={{ fontFamily:'Amiri,serif', fontSize:22, color:color, opacity:.7, direction:'rtl', textAlign:'center', padding:'0 20px', lineHeight:1.5 }}>{post.titleAr}</div>
            <div style={{ position:'absolute', top:14, left:14 }}>
              <span style={{ padding:'4px 12px', borderRadius:20, background:'#fff', fontSize:11, fontWeight:700, color, textTransform:'uppercase', letterSpacing:'.06em' }}>{post.category}</span>
            </div>
            <div style={{ position:'absolute', bottom:0, left:0, right:0, height:60, background:`linear-gradient(to top,${color}20,transparent)` }}/>
          </div>
          <div style={{ padding:'clamp(18px,3vw,28px)' }}>
            <h2 style={{ ...S, fontSize:'clamp(18px,2.5vw,24px)', color:'var(--ink)', marginBottom:10, lineHeight:1.25 }}>{post.title}</h2>
            <p style={{ fontSize:14, color:'var(--muted)', lineHeight:1.75, marginBottom:14 }}>{post.excerpt}</p>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div style={{ fontSize:12, color:'var(--muted)' }}>{post.date} · {post.readTime} de lecture</div>
              <span style={{ fontSize:13, fontWeight:600, color }}>Lire l'article →</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration:'none' }}>
      <div style={{ background:'#fff', borderRadius:16, overflow:'hidden', border:'1px solid var(--border)', transition:'all .25s', cursor:'pointer', display:'flex', flexDirection:'column' }}
        onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.boxShadow=`0 10px 36px ${color}12`;e.currentTarget.style.borderColor=`${color}40`;}}
        onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none';e.currentTarget.style.borderColor='var(--border)';}}>
        <div style={{ height:5, background:color }}/>
        <div style={{ padding:'clamp(14px,2vw,22px)', flex:1, display:'flex', flexDirection:'column' }}>
          <div style={{ marginBottom:10 }}>
            <span style={{ padding:'3px 10px', borderRadius:20, background:color+'15', color, fontSize:10.5, fontWeight:700, textTransform:'uppercase', letterSpacing:'.06em' }}>{post.category}</span>
          </div>
          <div style={{ fontFamily:'Amiri,serif', fontSize:15, color:'var(--muted)', direction:'rtl', marginBottom:8, lineHeight:1.4 }}>{post.titleAr}</div>
          <h3 style={{ ...S, fontSize:'clamp(15px,2vw,18px)', color:'var(--ink)', marginBottom:8, lineHeight:1.25, flex:1 }}>{post.title}</h3>
          <p style={{ fontSize:12.5, color:'var(--muted)', lineHeight:1.65, marginBottom:12 }}>{post.excerpt.slice(0, 100)}...</p>
          <div style={{ display:'flex', justifyContent:'space-between', fontSize:11.5, color:'var(--muted)' }}>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const featured = POSTS.find(p => p.featured);
  const rest = POSTS.filter(p => !p.featured);

  return (
    <Layout>
      <SEO title="Blog — MoroccoPedia" description="Articles sur la culture marocaine — Darija, zellige, Gnawa, médinas, histoire et traditions. Apprenez le Maroc en profondeur."/>

      {/* Hero */}
      <div style={{ background:'linear-gradient(155deg,#1a0800,#2e1200,#0a2318)', padding:'clamp(48px,6vw,80px) 0', position:'relative', overflow:'hidden', textAlign:'center' }}>
        <div style={{ position:'relative', zIndex:2, maxWidth:580, margin:'0 auto', padding:'0 24px' }}>
          <div style={{ fontFamily:'Amiri,serif', fontSize:18, color:'var(--gold2)', marginBottom:12, direction:'rtl' }}>المدونة الثقافية</div>
          <h1 style={{ ...S, fontSize:'clamp(30px,5vw,52px)', color:'#fff', lineHeight:1.05, marginBottom:14 }}>
            Le Blog<br/><span style={{ color:'var(--gold2)' }}>Culturel</span>
          </h1>
          <p style={{ fontSize:15, color:'rgba(245,237,220,.55)', lineHeight:1.8 }}>
            Plongez dans la culture, la langue et l'histoire marocaine — des articles approfondis que vous ne trouverez nulle part ailleurs.
          </p>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(28px,4vw,52px) clamp(16px,4vw,48px)' }}>

        {/* Featured */}
        {featured && (
          <div style={{ marginBottom:40 }}>
            <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', color:'var(--terra)', marginBottom:14 }}>Article à la une</div>
            <div style={{ maxWidth:780 }}>
              <PostCard post={featured} large/>
            </div>
          </div>
        )}

        {/* Grid */}
        <div>
          <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', color:'var(--muted)', marginBottom:16 }}>Tous les articles</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'clamp(12px,2vw,20px)' }}>
            {rest.map(post => <PostCard key={post.slug} post={post}/>)}
          </div>
        </div>

        {/* Newsletter */}
        <div style={{ marginTop:52, background:'linear-gradient(135deg,#1c1007,#0a2318)', borderRadius:20, padding:'clamp(28px,4vw,44px)', textAlign:'center', position:'relative', overflow:'hidden' }}>
          <h3 style={{ ...S, fontSize:'clamp(22px,3.5vw,32px)', color:'#fff', marginBottom:10 }}>Un article Darija chaque semaine</h3>
          <p style={{ fontSize:14.5, color:'rgba(245,237,220,.55)', marginBottom:24, maxWidth:420, margin:'0 auto 24px' }}>
            Rejoignez 2,000+ passionnés de culture marocaine — chaque dimanche, un article approfondi dans votre boîte mail.
          </p>
          <div style={{ display:'flex', maxWidth:420, margin:'0 auto', gap:10 }}>
            <input type="email" placeholder="votre@email.com"
              style={{ flex:1, padding:'12px 16px', borderRadius:10, border:'1px solid rgba(255,255,255,.2)', background:'rgba(255,255,255,.08)', color:'#fff', fontSize:14, fontFamily:'Outfit,sans-serif', outline:'none' }}/>
            <button className="btn-primary" style={{ flexShrink:0 }}>S'abonner</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
