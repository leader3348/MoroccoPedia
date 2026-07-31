import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ShareButtons from '../components/ShareButtons';

const S = { fontFamily: 'Playfair Display,serif' };

const ALL_QUESTIONS = [
  {
    id: 1, category: 'Dialect', difficulty: 'easy',
    question: 'What does "Labas alik?" mean in Moroccan Darija?',
    answers: ['Are you hungry?', 'How are you?', 'Where are you going?', 'What is your name?'],
    correct: 1,
    explanation: '"Labas alik?" is the most common daily greeting in Moroccan Darija — literally "no harm upon you?" — meaning "how are you / are you okay?"',
    city: null,
  },
  {
    id: 2, category: 'History', difficulty: 'easy',
    question: 'Which city is known as "The Red City" of Morocco?',
    answers: ['Fès', 'Casablanca', 'Marrakesh', 'Tangier'],
    correct: 2,
    explanation: 'Marrakesh is called The Red City (المدينة الحمراء) because of the distinctive red-pink colour of its ancient walls and buildings, built from local sandstone.',
    city: 'Marrakesh',
  },
  {
    id: 3, category: 'Dialect', difficulty: 'medium',
    question: 'In northern Morocco (Tangier), what word do locals use for "a lot" instead of "bezzaf"?',
    answers: ['Ktir', 'Wajid', 'Barsha', 'Attas'],
    correct: 1,
    explanation: '"Wajid" is used in northern Morocco, especially Tangier, under Spanish influence (from "mucho" / "muy"). This shows the strong Spanish cultural and linguistic footprint in northern Morocco.',
    city: 'Tangier',
  },
  {
    id: 4, category: 'Food', difficulty: 'easy',
    question: 'What is the special Marrakesh dish that is cooked overnight in hammam coals in a clay urn?',
    answers: ['Tagine', 'Tangia', 'Pastilla', 'Rfissa'],
    correct: 1,
    explanation: 'Tangia (الطانجية) is unique to Marrakesh — lamb slow-cooked for hours in a clay urn called a tangia, traditionally placed in the hot coals of the neighbourhood hammam (public bath). It is impossible to find elsewhere in Morocco.',
    city: 'Marrakesh',
  },
  {
    id: 5, category: 'Culture', difficulty: 'easy',
    question: 'How many glasses of mint tea are traditionally served in the Moroccan tea ceremony of the south?',
    answers: ['One', 'Two', 'Three', 'Five'],
    correct: 2,
    explanation: 'Three glasses are traditional in southern Morocco: "The first glass is bitter like life, the second sweet like love, the third gentle as death." Refusing tea is considered impolite — it is a sacred act of hospitality.',
    city: null,
  },
  {
    id: 6, category: 'History', difficulty: 'medium',
    question: 'What is the world\'s oldest continuously operating university, founded in Fès in 859 CE?',
    answers: ['University of Bologna', 'Oxford University', 'Al-Qarawiyyin University', 'Al-Azhar University'],
    correct: 2,
    explanation: 'Al-Qarawiyyin (القرويين) in Fès was founded in 859 CE by Fatima al-Fihri — a woman. It is recognized by UNESCO and the Guinness World Records as the world\'s oldest existing and continuously operating university, predating Oxford by over 200 years.',
    city: 'Fès',
  },
  {
    id: 7, category: 'Geography', difficulty: 'easy',
    question: 'Which Moroccan city is famous for its entirely blue-painted medina in the Rif Mountains?',
    answers: ['Essaouira', 'Tangier', 'Tetouan', 'Chefchaouen'],
    correct: 3,
    explanation: 'Chefchaouen (شفشاون) — The Blue City — is famous worldwide for its medina painted in dozens of shades of blue. The blue-painting tradition has been maintained since the 1930s and the city repaints every year before Ramadan.',
    city: 'Chefchaouen',
  },
  {
    id: 8, category: 'Dialect', difficulty: 'hard',
    question: 'How do you say "thank you" in Tachelhit Amazigh (spoken in the Souss region)?',
    answers: ['Shukran', 'Merci', 'Mamnoun', 'Tanmirt'],
    correct: 2,
    explanation: '"Mamnoun" (مأنون) is the Tachelhit Amazigh word for thank you in the Souss region (Agadir). "Tanmirt" is used in Tarifit (Rif) and "Tanmmirt" in Tamazight (Middle Atlas). This shows the linguistic diversity within Morocco\'s Amazigh languages.',
    city: 'Agadir',
  },
  {
    id: 9, category: 'Culture', difficulty: 'medium',
    question: 'Which Moroccan craft is a UNESCO-listed technique of leather dyeing unchanged for over 1,000 years?',
    answers: ['Zellige tilework', 'Kaftan embroidery', 'Chouara Tannery', 'Thuya wood marquetry'],
    correct: 2,
    explanation: 'The Chouara Tannery in Fès has been operating continuously for over 1,000 years using exactly the same natural dyes — saffron, poppy, pomegranate and indigo. The view from the surrounding leather shop terraces is one of the most iconic in the world.',
    city: 'Fès',
  },
  {
    id: 10, category: 'Music', difficulty: 'medium',
    question: 'Which UNESCO-listed Moroccan musical tradition has West African spiritual roots and is centred in Essaouira?',
    answers: ['Malhoun', 'Chaabi', 'Gnawa', 'Ahwach'],
    correct: 2,
    explanation: 'Gnawa (كناوة) music was listed by UNESCO in 2019. It originated from sub-Saharan African slaves brought to Morocco and combines Islamic mysticism with West African rhythms. Essaouira hosts the world\'s largest Gnawa festival every June, attracting 500,000 visitors.',
    city: 'Essaouira',
  },
  {
    id: 11, category: 'Food', difficulty: 'medium',
    question: 'Which spice blend used in Moroccan cooking can contain up to 30 different spices and literally means "top of the shop"?',
    answers: ['Chermoula', 'Harissa', 'Ras el Hanout', 'Za\'atar'],
    correct: 2,
    explanation: '"Ras el Hanout" (رأس الحانوت) means "top of the shop" — the best spices the herbalist has. Each herbalist has their own secret recipe, and no two are identical. It can contain rose petals, dried fruit, roots, bark and over 30 spices.',
    city: null,
  },
  {
    id: 12, category: 'History', difficulty: 'hard',
    question: 'Which famous film has NOT been shot at the Ait Benhaddou kasbah in Ouarzazate?',
    answers: ['Gladiator', 'The English Patient', 'Game of Thrones', 'Lawrence of Arabia'],
    correct: 1,
    explanation: 'The English Patient was filmed in Tunisia, not Morocco. Ait Benhaddou has appeared in Gladiator (2000), the Game of Thrones Yunkai scenes, Lawrence of Arabia (1962), The Mummy (1999) and many other productions — earning Ouarzazate the nickname "Hollywood of Africa".',
    city: 'Ouarzazate',
  },
];

const CATEGORIES = ['All', 'Dialect', 'History', 'Food', 'Culture', 'Geography', 'Music'];
const DIFFICULTY  = ['All', 'easy', 'medium', 'hard'];
const DIFF_COLORS = { easy:'var(--teal)', medium:'var(--gold)', hard:'var(--terra)' };
const CAT_COLORS  = { Dialect:'var(--terra3)', History:'var(--gold3)', Food:'rgba(100,50,10,.1)', Culture:'var(--teal3)', Geography:'rgba(30,80,150,.1)', Music:'rgba(100,50,180,.1)' };

function QuizCard({ q, index, selected, onSelect, showResult }) {
  return (
    <div style={{ animation:`fadeUp .35s ease ${index*0.05}s both` }}>
      {/* Question header */}
      <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
        <div style={{ width:32, height:32, borderRadius:'50%', background:'linear-gradient(135deg,var(--terra),var(--gold))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:700, color:'#fff', flexShrink:0 }}>
          {index+1}
        </div>
        <div style={{ display:'flex', gap:7, flexWrap:'wrap' }}>
          <span style={{ padding:'3px 10px', borderRadius:20, fontSize:10.5, fontWeight:700, background:CAT_COLORS[q.category]||'var(--bg3)', color:'var(--ink2)' }}>{q.category}</span>
          <span style={{ padding:'3px 10px', borderRadius:20, fontSize:10.5, fontWeight:700, background:'transparent', border:`1px solid ${DIFF_COLORS[q.difficulty]}`, color:DIFF_COLORS[q.difficulty] }}>
            {q.difficulty.charAt(0).toUpperCase()+q.difficulty.slice(1)}
          </span>
          {q.city && <span style={{ padding:'3px 10px', borderRadius:20, fontSize:10.5, fontWeight:700, background:'var(--terra3)', color:'#8a2500' }}>{q.city}</span>}
        </div>
      </div>

      {/* Question */}
      <p style={{ fontSize:16, fontWeight:600, color:'var(--ink)', lineHeight:1.55, marginBottom:18 }}>{q.question}</p>

      {/* Answers */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom: showResult && selected !== null ? 16 : 0 }}>
        {q.answers.map((ans, i) => {
          const isSelected = selected === i;
          const isCorrect  = i === q.correct;
          let bg = 'var(--bg2)', border = 'var(--border)', color = 'var(--ink)', shadow = 'none';

          if (showResult) {
            if (isCorrect)                          { bg='rgba(10,122,106,.12)'; border='var(--teal)'; color='#065048'; }
            else if (isSelected && !isCorrect)      { bg='rgba(192,57,10,.1)';  border='var(--terra)'; color='var(--terra)'; }
          } else if (isSelected) {
            bg='linear-gradient(135deg,rgba(192,57,10,.1),rgba(196,123,10,.08))'; border='var(--terra)'; color='var(--terra)';
          }

          return (
            <button key={i} onClick={() => !showResult && onSelect(i)}
              disabled={showResult}
              style={{ padding:'12px 14px', borderRadius:11, border:`1.5px solid ${border}`, background:bg, color, fontSize:13.5, fontWeight: isSelected || (showResult && isCorrect) ? 600 : 400, cursor:showResult?'default':'pointer', fontFamily:'Outfit,sans-serif', textAlign:'left', lineHeight:1.4, transition:'all .2s', boxShadow:shadow, display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ width:20, height:20, borderRadius:'50%', border:`1.5px solid ${border}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:700, flexShrink:0, background: showResult && isCorrect ? 'var(--teal)' : showResult && isSelected && !isCorrect ? 'var(--terra)' : 'transparent', color: showResult && (isCorrect || (isSelected && !isCorrect)) ? '#fff' : 'inherit' }}>
                {showResult && isCorrect ? '✓' : showResult && isSelected && !isCorrect ? '✕' : String.fromCharCode(65+i)}
              </span>
              {ans}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showResult && selected !== null && (
        <div style={{ background: selected===q.correct ? 'rgba(10,122,106,.08)' : 'rgba(192,57,10,.06)', border:`1px solid ${selected===q.correct?'rgba(10,122,106,.25)':'rgba(192,57,10,.2)'}`, borderRadius:11, padding:'14px 16px', animation:'fadeUp .3s ease' }}>
          <div style={{ fontSize:12, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:selected===q.correct?'var(--teal)':'var(--terra)', marginBottom:7 }}>
            {selected===q.correct ? '✓ Correct!' : '✕ Incorrect'} — Did you know?
          </div>
          <p style={{ fontSize:13.5, color:'var(--ink2)', lineHeight:1.65 }}>{q.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default function QuizPage() {
  const [catFilter,  setCatFilter]  = useState('All');
  const [diffFilter, setDiffFilter] = useState('All');
  const [mode,       setMode]       = useState('browse'); // browse | quiz | results
  const [questions,  setQuestions]  = useState([]);
  const [current,    setCurrent]    = useState(0);
  const [answers,    setAnswers]    = useState({});
  const [selected,   setSelected]   = useState(null);
  const [showExp,    setShowExp]    = useState(false);
  const [score,      setScore]      = useState(0);

  const filtered = ALL_QUESTIONS.filter(q =>
    (catFilter  === 'All' || q.category  === catFilter) &&
    (diffFilter === 'All' || q.difficulty === diffFilter)
  );

  const startQuiz = (qs) => {
    setQuestions(qs);
    setCurrent(0);
    setAnswers({});
    setSelected(null);
    setShowExp(false);
    setScore(0);
    setMode('quiz');
  };

  const handleSelect = (i) => {
    setSelected(i);
    setShowExp(true);
    const newAnswers = { ...answers, [questions[current].id]: i };
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(c => c+1);
      setSelected(null);
      setShowExp(false);
    } else {
      // Calculate score
      const correctCount = questions.filter(q => answers[q.id] === q.correct || (selected !== null && current === questions.indexOf(q) && selected === q.correct)).length;
      const finalAnswers = { ...answers };
      if (selected !== null) finalAnswers[questions[current].id] = selected;
      const finalScore = questions.filter(q => finalAnswers[q.id] === q.correct).length;
      setScore(finalScore);
      setMode('results');
    }
  };

  const getScoreLevel = (s, total) => {
    const pct = (s/total)*100;
    if (pct >= 90) return { label:'Expert!', sub:'You know Morocco deeply', color:'var(--teal)', emoji:'🏆' };
    if (pct >= 70) return { label:'Excellent!', sub:'Great knowledge of Morocco', color:'var(--gold)', emoji:'⭐' };
    if (pct >= 50) return { label:'Good job!', sub:'You know your Morocco basics', color:'var(--terra)', emoji:'👍' };
    return { label:'Keep learning!', sub:'MoroccoPedia will help you', color:'var(--muted)', emoji:'📚' };
  };

  const currentQ = questions[current];
  const progress  = questions.length > 0 ? ((current + (showExp ? 1 : 0)) / questions.length) * 100 : 0;

  return (
    <Layout>
      <SEO title="Morocco Cultural Quiz" description="Test your knowledge of Moroccan culture, dialect and history with our interactive quiz. 12 questions covering cities, food, music and traditions." />

      {/* Header */}
      <div style={{ background:'linear-gradient(155deg,#1c1007,#0a2318)', padding:'clamp(36px,5vw,56px) 0', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:`repeating-linear-gradient(45deg,rgba(245,237,220,.03) 0,rgba(245,237,220,.03) 1px,transparent 1px,transparent 24px),repeating-linear-gradient(-45deg,rgba(245,237,220,.03) 0,rgba(245,237,220,.03) 1px,transparent 1px,transparent 24px)` }} />
        <div style={{ maxWidth:900, margin:'0 auto', padding:'0 clamp(16px,4vw,32px)', position:'relative' }}>
          <div style={{ display:'inline-block', padding:'4px 14px', borderRadius:20, background:'rgba(196,123,10,.18)', border:'1px solid rgba(196,123,10,.3)', fontSize:10.5, fontWeight:700, color:'#d4a030', letterSpacing:'.12em', textTransform:'uppercase', marginBottom:16 }}>
            Cultural Quiz
          </div>
          <h1 style={{ ...S, fontSize:'clamp(30px,5vw,46px)', color:'#fff', marginBottom:10, lineHeight:1.1 }}>
            How Well Do You Know Morocco?
          </h1>
          <p style={{ fontSize:15, color:'rgba(255,255,255,.52)', maxWidth:500, lineHeight:1.7 }}>
            12 questions on dialect, history, food, culture and geography. Each question comes with a detailed cultural explanation.
          </p>
        </div>
      </div>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'clamp(24px,4vw,40px) clamp(16px,4vw,32px)' }}>

        {/* ── BROWSE MODE ── */}
        {mode === 'browse' && (
          <div>
            {/* Quick start */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:14, marginBottom:36 }}>
              {[
                { label:'Quick Quiz (5 questions)',  count:5,  qs:ALL_QUESTIONS.slice(0,5),  color:'var(--teal)', desc:'Perfect for a quick test' },
                { label:'Full Quiz (12 questions)', count:12, qs:ALL_QUESTIONS,               color:'var(--terra)', desc:'The complete challenge' },
                { label:'Dialect Only',             count:3,  qs:ALL_QUESTIONS.filter(q=>q.category==='Dialect'), color:'var(--gold)', desc:'Focus on Darija' },
              ].map(opt => (
                <button key={opt.label} onClick={() => startQuiz(opt.qs)}
                  style={{ padding:'20px', borderRadius:14, background:'#fff', border:`1.5px solid ${opt.color}22`, cursor:'pointer', textAlign:'left', fontFamily:'Outfit,sans-serif', transition:'all .25s' }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=opt.color;e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.boxShadow=`0 10px 32px ${opt.color}22`;}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=`${opt.color}22`;e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none';}}>
                  <div style={{ fontFamily:'Playfair Display,serif', fontSize:18, color:'var(--ink)', marginBottom:5, lineHeight:1.2 }}>{opt.label}</div>
                  <div style={{ fontSize:12, color:'var(--muted)', marginBottom:12 }}>{opt.desc}</div>
                  <div style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'5px 12px', borderRadius:20, background:`${opt.color}15`, color:opt.color, fontSize:12, fontWeight:700 }}>
                    {opt.count} questions →
                  </div>
                </button>
              ))}
            </div>

            {/* Filters */}
            <div style={{ display:'flex', gap:16, flexWrap:'wrap', marginBottom:24, alignItems:'center' }}>
              <div style={{ display:'flex', gap:7, flexWrap:'wrap' }}>
                <span style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', color:'var(--muted)', alignSelf:'center' }}>Category:</span>
                {CATEGORIES.map(c=>(
                  <button key={c} onClick={()=>setCatFilter(c)} className={`tag-chip${catFilter===c?' active':''}`} style={{ fontFamily:'Outfit,sans-serif' }}>{c}</button>
                ))}
              </div>
              <div style={{ display:'flex', gap:7, flexWrap:'wrap' }}>
                <span style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', color:'var(--muted)', alignSelf:'center' }}>Level:</span>
                {DIFFICULTY.map(d=>(
                  <button key={d} onClick={()=>setDiffFilter(d)} className={`tag-chip${diffFilter===d?' active':''}`} style={{ fontFamily:'Outfit,sans-serif', textTransform:'capitalize' }}>{d}</button>
                ))}
              </div>
            </div>

            {/* Question cards preview */}
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:18 }}>
              <div style={{ fontSize:14, color:'var(--muted)' }}>
                <strong style={{ color:'var(--ink)' }}>{filtered.length}</strong> questions
              </div>
              {filtered.length > 0 && (
                <button onClick={()=>startQuiz(filtered)} className="btn-primary" style={{ padding:'8px 20px', fontSize:13 }}>
                  Start filtered quiz ({filtered.length}q) →
                </button>
              )}
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {filtered.map((q,i)=>(
                <div key={q.id} className="card" style={{ padding:'16px 20px', display:'flex', alignItems:'flex-start', gap:14 }}>
                  <div style={{ width:32, height:32, borderRadius:'50%', background:'var(--bg2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:700, color:'var(--terra)', flexShrink:0, border:'1.5px solid var(--border)' }}>{i+1}</div>
                  <div style={{ flex:1 }}>
                    <p style={{ fontSize:14, fontWeight:600, color:'var(--ink)', marginBottom:8, lineHeight:1.4 }}>{q.question}</p>
                    <div style={{ display:'flex', gap:7, flexWrap:'wrap' }}>
                      <span style={{ padding:'2px 9px', borderRadius:20, fontSize:10.5, fontWeight:600, background:CAT_COLORS[q.category]||'var(--bg3)', color:'var(--ink2)' }}>{q.category}</span>
                      <span style={{ padding:'2px 9px', borderRadius:20, fontSize:10.5, fontWeight:600, background:'transparent', border:`1px solid ${DIFF_COLORS[q.difficulty]}`, color:DIFF_COLORS[q.difficulty] }}>{q.difficulty}</span>
                      {q.city && <span style={{ padding:'2px 9px', borderRadius:20, fontSize:10.5, fontWeight:600, background:'var(--terra3)', color:'#8a2500' }}>{q.city}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── QUIZ MODE ── */}
        {mode === 'quiz' && currentQ && (
          <div style={{ maxWidth:680, margin:'0 auto' }}>
            {/* Progress bar */}
            <div style={{ marginBottom:28 }}>
              <div style={{ display:'flex', justifyContent:'space-between', fontSize:13, color:'var(--muted)', marginBottom:8 }}>
                <span>Question {current+1} of {questions.length}</span>
                <span style={{ fontWeight:600, color:'var(--terra)' }}>{Math.round(progress)}% complete</span>
              </div>
              <div style={{ height:5, background:'var(--bg3)', borderRadius:3, overflow:'hidden' }}>
                <div style={{ height:'100%', width:`${progress}%`, background:'linear-gradient(90deg,var(--terra),var(--gold))', borderRadius:3, transition:'width .4s ease' }} />
              </div>
              {/* Question dots */}
              <div style={{ display:'flex', gap:5, marginTop:10, flexWrap:'wrap' }}>
                {questions.map((_,i)=>(
                  <div key={i} style={{ width:8, height:8, borderRadius:'50%', background:
                    i < current ? (answers[questions[i].id]===questions[i].correct?'var(--teal)':'var(--terra)') :
                    i === current ? 'var(--gold)' : 'var(--bg3)',
                    transition:'background .3s',
                  }} />
                ))}
              </div>
            </div>

            {/* Question */}
            <div className="card" style={{ padding:'28px 28px 24px' }}>
              <QuizCard
                q={currentQ}
                index={current}
                selected={selected}
                onSelect={handleSelect}
                showResult={showExp}
              />
              {/* Next button */}
              {showExp && (
                <button onClick={handleNext} className="btn-primary"
                  style={{ width:'100%', justifyContent:'center', padding:'13px', fontSize:14, marginTop:20, animation:'fadeUp .3s ease' }}>
                  {current < questions.length - 1 ? `Next Question →` : 'See My Results →'}
                </button>
              )}
            </div>
          </div>
        )}

        {/* ── RESULTS MODE ── */}
        {mode === 'results' && (
          <div style={{ maxWidth:640, margin:'0 auto', animation:'fadeUp .4s ease' }}>
            {(() => {
              const level = getScoreLevel(score, questions.length);
              const pct   = Math.round((score/questions.length)*100);
              return (
                <div className="card" style={{ padding:'40px 36px', textAlign:'center', marginBottom:24 }}>
                  <div style={{ fontSize:52, marginBottom:12 }}>{level.emoji}</div>
                  <div style={{ ...S, fontSize:34, color:level.color, marginBottom:6 }}>{level.label}</div>
                  <div style={{ fontSize:15, color:'var(--muted)', marginBottom:28 }}>{level.sub}</div>
                  {/* Score circle */}
                  <div style={{ width:120, height:120, borderRadius:'50%', background:`linear-gradient(135deg,${level.color}22,${level.color}11)`, border:`3px solid ${level.color}`, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', margin:'0 auto 28px' }}>
                    <div style={{ ...S, fontSize:36, color:level.color, lineHeight:1 }}>{score}</div>
                    <div style={{ fontSize:13, color:'var(--muted)' }}>/ {questions.length}</div>
                  </div>
                  <div style={{ fontSize:18, color:'var(--ink)', fontWeight:600, marginBottom:8 }}>
                    {pct}% correct — {score} out of {questions.length} questions
                  </div>
                  {/* Category breakdown */}
                  <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(120px,1fr))', gap:10, margin:'24px 0', textAlign:'left' }}>
                    {[...new Set(questions.map(q=>q.category))].map(cat => {
                      const catQs      = questions.filter(q=>q.category===cat);
                      const catCorrect = catQs.filter(q=>answers[q.id]===q.correct).length;
                      return (
                        <div key={cat} style={{ background:'var(--bg2)', borderRadius:10, padding:'10px 12px' }}>
                          <div style={{ fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', color:'var(--muted)', marginBottom:5 }}>{cat}</div>
                          <div style={{ fontSize:18, fontWeight:700, color:catCorrect===catQs.length?'var(--teal)':'var(--terra)' }}>{catCorrect}/{catQs.length}</div>
                        </div>
                      );
                    })}
                  </div>
                  {/* Actions */}
                  <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap', marginTop:8 }}>
                    <button onClick={()=>startQuiz(questions)} className="btn-primary" style={{ padding:'11px 22px', fontSize:13 }}>
                      Try Again
                    </button>
                    <button onClick={()=>setMode('browse')} className="btn-outline" style={{ padding:'11px 22px', fontSize:13 }}>
                      Browse Questions
                    </button>
                    <Link href="/dialect"><button className="btn-teal" style={{ padding:'11px 22px', fontSize:13 }}>
                      Learn More Darija
                    </button></Link>
                  </div>
                  {/* Share */}
                  <div style={{ marginTop:24 }}>
                    <ShareButtons
                      text={`I scored ${score}/${questions.length} (${pct}%) on the MoroccoPedia cultural quiz! Test your knowledge of Morocco 🇲🇦`}
                      compact
                    />
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </Layout>
  );
}
