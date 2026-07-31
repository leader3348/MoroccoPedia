export default function SectionHeader({ label, title, desc, light = false }) {
  return (
    <div style={{ marginBottom: 40 }}>
      {label && <span className="sec-label" style={light ? { color: 'rgba(253,248,242,.55)' } : {}}>{label}</span>}
      <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: 'clamp(26px,4vw,38px)', lineHeight: 1.15, marginBottom: 10, color: light ? '#fff' : 'var(--ink)' }}>
        {title}
      </h2>
      {desc && (
        <p style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 520, color: light ? 'rgba(253,248,242,.55)' : 'var(--muted)' }}>
          {desc}
        </p>
      )}
    </div>
  );
}
