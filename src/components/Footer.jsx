import Link from 'next/link';

const COLS = [
  { title: 'Platform',   links: ['Cultural Map','Dictionary','Translation','Tourism Mode'] },
  { title: 'Community',  links: ['Contribute','Heritage Archive','Oral Traditions'] },
  { title: 'About',      links: ['Mission','Partnerships','API Docs','Contact'] },
];

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(135deg,#1c1007,#0a2318)', padding: '44px 0 28px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 36 }}>
        <div>
          <div style={{ fontFamily: 'Playfair Display,serif', fontSize: 22, color: 'var(--gold2)', marginBottom: 10 }}>MoroccoPedia</div>
          <div style={{ fontSize: 12.5, color: 'rgba(253,248,242,.42)', lineHeight: 1.65, maxWidth: 210 }}>
            The living encyclopedia of Moroccan culture, dialect and heritage.
          </div>
        </div>
        {COLS.map(col => (
          <div key={col.title}>
            <h5 style={{ fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '.17em', color: 'rgba(253,248,242,.38)', marginBottom: 14, fontWeight: 500 }}>
              {col.title}
            </h5>
            {col.links.map(link => (
              <a key={link} href="#" style={{ display: 'block', fontSize: 13, color: 'rgba(253,248,242,.62)', marginBottom: 9, textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--gold2)'}
                onMouseLeave={e => e.target.style.color = 'rgba(253,248,242,.62)'}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(253,248,242,.08)', marginTop: 36, paddingTop: 20, textAlign: 'center', fontSize: 12, color: 'rgba(253,248,242,.3)' }}>
        2025 MoroccoPedia — Preserving Moroccan culture for future generations
      </div>
    </footer>
  );
}
