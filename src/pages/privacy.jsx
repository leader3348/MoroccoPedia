import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';

const S = { fontFamily: 'Playfair Display, Georgia, serif' };

const SECTIONS = [
  {
    title: 'Qui sommes-nous ?',
    content: `MoroccoPedia est une plateforme numérique dédiée à la culture, la langue et le patrimoine marocains. Le responsable du traitement des données est le fondateur de MoroccoPedia, joignable à l'adresse : privacy@moroccoPedia.app`,
  },
  {
    title: 'Quelles données collectons-nous ?',
    content: `Lors de la création d'un compte, nous collectons : votre nom, adresse e-mail, mot de passe (chiffré avec bcrypt), ville et région (optionnel), dialecte préféré (optionnel), langue d'interface.

En utilisant la plateforme, nous pouvons collecter : les mots Darija que vous sauvegardez, vos contributions au dictionnaire, vos préférences de navigation, des données analytiques anonymisées (pages visitées, durée de session).

Nous ne collectons jamais : numéro de carte bancaire, numéro de téléphone (sauf si fourni volontairement), données biométriques, localisation GPS précise.`,
  },
  {
    title: 'Pourquoi collectons-nous ces données ?',
    content: `Vos données sont utilisées uniquement pour :
— Créer et gérer votre compte personnel
— Personnaliser votre expérience (dialecte, langue, préférences)
— Sauvegarder vos mots et favoris
— Vous envoyer des notifications que vous avez activées
— Améliorer la plateforme via des statistiques anonymisées
— Répondre à vos demandes de support

Nous ne vendons jamais vos données à des tiers.`,
  },
  {
    title: 'Base légale du traitement',
    content: `Conformément au RGPD (UE) et à la loi marocaine 09-08, le traitement de vos données repose sur :
— Votre consentement explicite lors de l'inscription
— L'exécution du contrat (fourniture du service)
— Notre intérêt légitime (amélioration du service, sécurité)`,
  },
  {
    title: 'Cookies',
    content: `MoroccoPedia utilise des cookies essentiels pour :
— Maintenir votre session connectée (JWT stocké localement)
— Mémoriser vos préférences de langue et de dialecte
— Mesurer l'audience de façon anonymisée

Aucun cookie publicitaire ou de tracking tiers n'est utilisé. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais certaines fonctionnalités pourraient ne plus fonctionner.`,
  },
  {
    title: 'Durée de conservation',
    content: `Vos données sont conservées :
— Données de compte : tant que votre compte est actif
— Logs de connexion : 90 jours
— Données analytiques anonymisées : 24 mois
— Après suppression du compte : 30 jours (période de récupération), puis suppression définitive`,
  },
  {
    title: 'Partage avec des tiers',
    content: `Vos données peuvent être partagées uniquement avec :
— MongoDB Atlas (hébergement base de données — USA/EU)
— Vercel Inc. (hébergement frontend — USA)
— Railway Corp. (hébergement backend — USA)
— Resend Inc. (envoi d'emails transactionnels)

Tous ces prestataires sont soumis à des accords de traitement des données conformes au RGPD.

Nous ne partageons jamais vos données avec des annonceurs, brokers de données, ou gouvernements (sauf obligation légale).`,
  },
  {
    title: 'Vos droits',
    content: `Conformément au RGPD et à la loi marocaine 09-08, vous disposez des droits suivants :
— Droit d'accès : obtenir une copie de vos données
— Droit de rectification : corriger vos informations
— Droit à l'effacement : supprimer votre compte et vos données
— Droit à la portabilité : exporter vos données en JSON
— Droit d'opposition : vous opposer à certains traitements
— Droit de retrait du consentement : à tout moment

Pour exercer ces droits, contactez-nous : privacy@moroccoPedia.app
Nous répondons dans les 30 jours.`,
  },
  {
    title: 'Sécurité',
    content: `Nous mettons en œuvre les mesures suivantes pour protéger vos données :
— Mots de passe chiffrés avec bcrypt (salt factor 12)
— Communications chiffrées HTTPS/TLS sur toutes les connexions
— Tokens JWT avec expiration courte (7 jours)
— Rate limiting sur toutes les routes d'authentification
— Base de données accessible uniquement depuis le backend
— Pas de stockage de données sensibles en clair`,
  },
  {
    title: 'Mineurs',
    content: `MoroccoPedia est accessible à tous mais n'est pas spécifiquement destiné aux enfants de moins de 13 ans. Si vous êtes parent et pensez que votre enfant nous a fourni des données, contactez-nous à privacy@moroccoPedia.app pour suppression immédiate.`,
  },
  {
    title: 'Modifications de cette politique',
    content: `Cette politique peut être mise à jour. En cas de modification substantielle, vous serez notifié par e-mail (si vous avez un compte) et par un bandeau sur le site. La date de dernière mise à jour est indiquée en bas de page.`,
  },
  {
    title: 'Contact & Réclamations',
    content: `Pour toute question relative à la protection de vos données :
E-mail : privacy@moroccoPedia.app
Délai de réponse : 30 jours maximum

Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNDP (Commission Nationale de contrôle de la protection des Données à caractère Personnel) au Maroc : www.cndp.ma`,
  },
];

export default function PrivacyPage() {
  return (
    <Layout>
      <SEO
        title="Politique de Confidentialité — MoroccoPedia"
        description="Comment MoroccoPedia collecte, utilise et protège vos données personnelles. Conformité RGPD et loi marocaine 09-08."
      />

      {/* Hero */}
      <section style={{ background:'linear-gradient(155deg,#1c1007,#0a2318)', padding:'clamp(48px,6vw,72px) 0', position:'relative', overflow:'hidden' }}>
        <svg style={{ position:'absolute',inset:0,width:'100%',height:'100%',opacity:.08,pointerEvents:'none' }}>
          <defs><pattern id="pp" x="0" y="0" width="70" height="70" patternUnits="userSpaceOnUse">
            <polygon points="35,3 44,19 61,19 48,29 53,46 35,37 17,46 22,29 9,19 26,19" fill="none" stroke="#c0390a" strokeWidth="1"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#pp)"/>
        </svg>
        <div style={{ maxWidth:800, margin:'0 auto', padding:'0 clamp(20px,4vw,48px)', position:'relative', zIndex:2 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(10,122,106,.15)', border:'1px solid rgba(10,122,106,.3)', borderRadius:20, padding:'4px 14px', marginBottom:16 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0a7a6a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span style={{ fontSize:11, fontWeight:700, color:'#0fa08c', letterSpacing:'.1em', textTransform:'uppercase' }}>RGPD Conforme</span>
          </div>
          <h1 style={{ ...S, fontSize:'clamp(28px,5vw,48px)', color:'#fff', lineHeight:1.05, marginBottom:12 }}>
            Politique de<br/><span style={{ color:'var(--gold2)' }}>Confidentialité</span>
          </h1>
          <p style={{ fontSize:15, color:'rgba(245,237,220,.5)', lineHeight:1.8 }}>
            Dernière mise à jour : <strong style={{ color:'rgba(245,237,220,.8)' }}>Avril 2025</strong> · Conforme au RGPD (UE 2016/679) et à la loi marocaine 09-08
          </p>
        </div>
      </section>

      <div style={{ maxWidth:800, margin:'0 auto', padding:'clamp(32px,5vw,56px) clamp(16px,4vw,48px)' }}>

        {/* Quick summary */}
        <div style={{ background:'rgba(10,122,106,.06)', border:'1px solid rgba(10,122,106,.2)', borderRadius:16, padding:'clamp(16px,3vw,24px)', marginBottom:40 }}>
          <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', color:'var(--teal)', marginBottom:12 }}>En bref</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:10 }}>
            {[
              { icon:'🔒', text:'Mots de passe chiffrés (bcrypt)' },
              { icon:'🚫', text:'Aucune vente de données' },
              { icon:'📧', text:'Aucun spam, jamais' },
              { icon:'🗑️', text:'Suppression sur demande' },
              { icon:'🌍', text:'HTTPS sur toutes les connexions' },
              { icon:'⚡', text:'Réponse en 30 jours max' },
            ].map(item => (
              <div key={item.text} style={{ display:'flex', gap:8, alignItems:'center', fontSize:13, color:'var(--ink2)' }}>
                <span>{item.icon}</span>{item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Table of contents */}
        <div style={{ background:'var(--bg2)', borderRadius:14, padding:'clamp(14px,3vw,22px)', marginBottom:40, border:'1px solid var(--border)' }}>
          <div style={{ fontSize:12, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color:'var(--muted)', marginBottom:12 }}>Table des matières</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:4 }}>
            {SECTIONS.map((s, i) => (
              <a key={i} href={`#section-${i}`} style={{ fontSize:13, color:'var(--terra)', textDecoration:'none', padding:'2px 0' }}>
                {i+1}. {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        {SECTIONS.map((section, i) => (
          <div key={i} id={`section-${i}`} style={{ marginBottom:40, paddingBottom:40, borderBottom: i < SECTIONS.length-1 ? '1px solid var(--border)' : 'none' }}>
            <h2 style={{ ...S, fontSize:'clamp(18px,3vw,24px)', color:'var(--ink)', marginBottom:16, display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ width:28, height:28, borderRadius:8, background:'var(--terra3)', display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:700, color:'var(--terra)', flexShrink:0 }}>{i+1}</span>
              {section.title}
            </h2>
            <div style={{ fontSize:14.5, color:'var(--ink2)', lineHeight:1.85 }}>
              {section.content.split('\n').map((line, j) => (
                line.trim() === '' ? <br key={j}/> :
                <p key={j} style={{ marginBottom: line.startsWith('—') ? 4 : 12 }}>{line}</p>
              ))}
            </div>
          </div>
        ))}

        {/* Footer links */}
        <div style={{ background:'var(--bg2)', borderRadius:14, padding:'clamp(16px,3vw,24px)', textAlign:'center', border:'1px solid var(--border)' }}>
          <p style={{ fontSize:14, color:'var(--muted)', marginBottom:16 }}>
            Des questions sur la confidentialité ?
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="mailto:privacy@moroccoPedia.app" style={{ textDecoration:'none' }}>
              <button className="btn-teal" style={{ fontSize:13 }}>Nous contacter</button>
            </a>
            <Link href="/terms" style={{ textDecoration:'none' }}>
              <button className="btn-outline" style={{ fontSize:13 }}>Voir les CGU →</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
