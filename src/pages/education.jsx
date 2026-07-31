import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';

const S = { fontFamily: 'Playfair Display,serif' };

const COURSES = [
  { level: 'Beginner',     title: 'Introduction to Moroccan History',  lessons: 12, lang: 'AR / FR / EN', color: 'terra' },
  { level: 'Beginner',     title: 'Moroccan Darija for Beginners',     lessons: 20, lang: 'EN / FR',     color: 'teal'  },
  { level: 'Intermediate', title: 'Moroccan Arts and Crafts',          lessons: 8,  lang: 'AR / FR',    color: 'gold'  },
  { level: 'Advanced',     title: 'Moroccan Sociolinguistics',         lessons: 16, lang: 'EN / FR',    color: 'terra' },
  { level: 'All levels',   title: 'Amazigh Culture and Language',      lessons: 14, lang: 'AR / TZM',   color: 'teal'  },
  { level: 'Beginner',     title: 'Moroccan Cuisine and Food Culture', lessons: 10, lang: 'AR / FR / EN', color: 'gold' },
];

const AUDIENCES = ['K-12 Schools','Universities','Researchers','Diaspora','International'];

const C = { terra: { bg: 'var(--terra3)', color: '#8a2500' }, teal: { bg: 'var(--teal3)', color: '#065048' }, gold: { bg: 'var(--gold3)', color: '#7a4c00' } };

export default function EducationPage() {
  const [audience, setAudience] = useState('');

  return (
    <Layout>
      <Head><title>Education Hub — MoroccoPedia</title></Head>

      <div className="page-hdr">
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h1 style={{ ...S, fontSize: 44, color: '#fff', marginBottom: 10 }}>Education Hub</h1>
          <p style={{ fontSize: 15, color: 'rgba(253,248,242,.50)', maxWidth: 480 }}>
            Curriculum-aligned cultural content for Moroccan schools, universities and international researchers. Available in Arabic, French, English and Tamazight.
          </p>
        </div>
      </div>

      <section style={{ padding: '52px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 36, flexWrap: 'wrap' }}>
            {['', ...AUDIENCES].map(a => (
              <button key={a} onClick={() => setAudience(a)}
                className={`tag-chip${audience === a ? ' active' : ''}`}
                style={{ fontFamily: 'Outfit,sans-serif' }}>
                {a || 'All Audiences'}
              </button>
            ))}
          </div>

          <SectionHeader label="Courses" title="Cultural Learning Modules"
            desc="Self-paced courses taught in multiple languages, with quizzes and digital certificates." />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
            {COURSES.map(course => {
              const cs = C[course.color];
              return (
                <div key={course.title} className="card" style={{ padding: 24, cursor: 'pointer', transition: 'all .25s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'rgba(192,57,10,.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: cs.bg, marginBottom: 16 }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <span className="badge" style={{ background: cs.bg, color: cs.color }}>{course.level}</span>
                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>{course.lang}</span>
                  </div>
                  <h3 style={{ ...S, fontSize: 17, marginBottom: 8, lineHeight: 1.25, color: 'var(--ink)' }}>{course.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 14 }}>
                    <span style={{ fontSize: 12, color: 'var(--muted)' }}>{course.lessons} lessons</span>
                    <button className="btn-primary" style={{ padding: '6px 14px', fontSize: 12 }}>Enroll</button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Partners */}
          <div style={{ marginTop: 52 }}>
            <SectionHeader label="Academic Partners" title="University Partnerships" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
              {[
                { name: 'Mohammed V University', location: 'Rabat', dept: 'Linguistics and Cultural Studies' },
                { name: 'Cadi Ayyad University', location: 'Marrakesh', dept: 'Regional Heritage Research' },
                { name: 'SOAS University London', location: 'London', dept: 'Middle Eastern and North African Studies' },
                { name: 'Sorbonne Paris',          location: 'Paris', dept: 'Moroccan Literature and Dialect Research' },
                { name: 'UM6P Polytechnic',        location: 'Ben Guerir', dept: 'AI Research Collaboration' },
                { name: 'IRCAM',                   location: 'Rabat', dept: 'Royal Institute of Amazigh Culture' },
              ].map(p => (
                <div key={p.name} className="card" style={{ padding: 18 }}>
                  <div style={{ ...S, fontSize: 15, marginBottom: 5, color: 'var(--ink)' }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--terra)', fontWeight: 600, marginBottom: 5 }}>{p.location}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{p.dept}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
