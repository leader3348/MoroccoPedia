import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';

const S = { fontFamily: 'Playfair Display,serif' };

const ITEMS = [
  { type: 'MS', category: 'Manuscript', title: 'Kitab al-Istibsar', era: '12th Century', region: 'Fes', status: 'Digitised', statusColor: 'teal' },
  { type: 'AU', category: 'Audio',      title: 'Malhoun — Qasida of Love', era: '18th Century', region: 'Meknes', status: 'Digitised', statusColor: 'teal' },
  { type: 'PH', category: 'Photo',      title: 'Jemaa el-Fna — 1930s archive', era: '1930s', region: 'Marrakesh', status: 'Restored', statusColor: 'gold' },
  { type: 'AR', category: 'Artifact',   title: 'Hammered Brass Lantern', era: 'Marinid Period', region: 'Fes', status: 'Documented', statusColor: 'terra' },
  { type: 'OT', category: 'Oral Tale',  title: 'The Seven Saints of Marrakesh', era: 'Traditional', region: 'Marrakesh', status: 'Transcribed', statusColor: 'teal' },
  { type: 'CR', category: 'Craft',      title: 'Zellige Geometric Patterns Atlas', era: '14th–20th C', region: 'Nationwide', status: 'Catalogued', statusColor: 'gold' },
  { type: 'MU', category: 'Music',      title: 'Gnawa Lila Ceremony — Recording', era: '1990s', region: 'Essaouira', status: 'Digitised', statusColor: 'teal' },
  { type: 'TX', category: 'Textile',    title: 'Ait Benhaddou Carpet Collection', era: '19th–20th C', region: 'Ouarzazate', status: 'Documented', statusColor: 'terra' },
];

const STATS = [
  { value: '24,830', label: 'Total records' },
  { value: '9,440',  label: 'Photos' },
  { value: '1,890',  label: 'Audio files' },
  { value: '312',    label: 'Manuscripts' },
];

const STATUS_BG    = { teal: 'var(--teal3)', gold: 'var(--gold3)', terra: 'var(--terra3)' };
const STATUS_COLOR = { teal: '#065048',      gold: '#7a4c00',      terra: '#8a2500' };

export default function ArchivePage() {
  const [filter, setFilter] = useState('');
  const filtered = filter ? ITEMS.filter(i => i.category.toLowerCase() === filter) : ITEMS;

  return (
    <Layout>
      <Head><title>Heritage Archive — MoroccoPedia</title></Head>

      <div className="page-hdr">
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h1 style={{ ...S, fontSize: 44, color: '#fff', marginBottom: 10 }}>National Heritage Archive</h1>
          <p style={{ fontSize: 15, color: 'rgba(253,248,242,.50)', maxWidth: 480 }}>
            A structured digital repository of Moroccan manuscripts, oral histories, photographs, artifacts and cultural records — open to researchers worldwide.
          </p>
        </div>
      </div>

      <section style={{ padding: '52px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 44 }}>
            {STATS.map(s => (
              <div key={s.label} className="card" style={{ padding: 20, textAlign: 'center' }}>
                <div style={{ ...S, fontSize: 28, color: 'var(--terra)', marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <SectionHeader label="Archive" title="Browse the Collection"
            desc="Explore digitised cultural records contributed by institutions and community members." />

          {/* Category filter */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 22, flexWrap: 'wrap' }}>
            {['', 'Manuscript','Audio','Photo','Artifact','Oral Tale','Craft','Music','Textile'].map(cat => (
              <button key={cat} onClick={() => setFilter(cat.toLowerCase())}
                className={`tag-chip${(filter === cat.toLowerCase() || (filter === '' && cat === '')) ? ' active' : ''}`}
                style={{ fontFamily: 'Outfit,sans-serif' }}>
                {cat || 'All'}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
            {filtered.map(item => (
              <div key={item.title} className="card" style={{ padding: 18, display: 'flex', gap: 14, cursor: 'pointer', transition: 'all .2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(192,57,10,.28)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 11, fontWeight: 700, color: 'var(--terra)' }}>
                  {item.type}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 4 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.3 }}>{item.title}</div>
                    <span className="badge" style={{ flexShrink: 0, background: STATUS_BG[item.statusColor], color: STATUS_COLOR[item.statusColor] }}>{item.status}</span>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 3 }}>{item.category} · {item.era}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--terra)' }}>{item.region}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
