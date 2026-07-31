import { useState } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const S = { fontFamily: 'Playfair Display, Georgia, serif' };

const TABS = [
  { id: 'terms', label: "Conditions d'utilisation", icon: null },
  { id: 'privacy', label: 'Politique de confidentialité', icon: null },
  { id: 'cookies', label: 'Politique des cookies', icon: null },
];

const CONTENT = {
  terms: [
    { title: "1. Acceptation des conditions", body: "En utilisant MoroccoPedia (moroccoPedia.app), vous acceptez les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service. MoroccoPedia est exploité par [Nom de la société], enregistrée au Maroc." },
    { title: "2. Description du service", body: "MoroccoPedia est une encyclopédie culturelle numérique marocaine proposant : un dictionnaire Darija, des guides de villes, du contenu historique, une IA culturelle et une communauté de partage. Certaines fonctionnalités sont disponibles gratuitement, d'autres nécessitent un abonnement payant." },
    { title: "3. Comptes utilisateurs", body: "Vous devez créer un compte pour accéder à certaines fonctionnalités. Vous êtes responsable de la sécurité de vos identifiants. MoroccoPedia se réserve le droit de suspendre un compte en cas de violation des présentes conditions ou d'utilisation abusive du service." },
    { title: "4. Propriété intellectuelle", body: "Le contenu de MoroccoPedia — textes, images, données dialectales, code source et design — est protégé par les lois sur la propriété intellectuelle. La Darija API et les données du dictionnaire sont protégées et ne peuvent être reproduites commercialement sans licence. Les contributions communautaires restent la propriété de leurs auteurs, mais vous accordez à MoroccoPedia une licence mondiale pour les utiliser sur la plateforme." },
    { title: "5. Utilisation acceptable", body: "Vous vous engagez à ne pas utiliser MoroccoPedia à des fins illégales, à ne pas tenter de contourner les mesures de sécurité, à ne pas scraper ou copier massivement le contenu, et à ne pas soumettre de contenu offensant, discriminatoire ou faux dans la section communauté." },
    { title: "6. Limitation de responsabilité", body: "MoroccoPedia s'efforce de fournir des informations culturelles et linguistiques exactes. Cependant, nous ne garantissons pas l'exactitude absolue de toutes les données. MoroccoPedia ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation du service." },
    { title: "7. Résiliation", body: "Vous pouvez supprimer votre compte à tout moment depuis vos paramètres. MoroccoPedia peut résilier un compte en cas de violation grave des présentes conditions, avec ou sans préavis." },
    { title: "8. Modifications", body: "MoroccoPedia se réserve le droit de modifier ces conditions à tout moment. Les modifications importantes seront communiquées par email. L'utilisation continue du service après modification vaut acceptation des nouvelles conditions." },
    { title: "9. Droit applicable", body: "Les présentes conditions sont régies par le droit marocain. Tout litige sera soumis à la juridiction compétente de Casablanca, Maroc." },
  ],
  privacy: [
    { title: "1. Données collectées", body: "MoroccoPedia collecte : données de compte (email, nom, mot de passe hashé), données d'utilisation (pages visitées, recherches effectuées), données de contenu (contributions communautaires), et données techniques (adresse IP, navigateur, appareil). Nous ne collectons pas de données sensibles (race, religion, données de santé)." },
    { title: "2. Utilisation des données", body: "Vos données sont utilisées pour : fournir et améliorer le service, personnaliser votre expérience, envoyer des notifications importantes (jamais de spam commercial sans consentement), analyser l'usage anonymisé pour améliorer le produit, et respecter nos obligations légales." },
    { title: "3. Partage des données", body: "MoroccoPedia ne vend jamais vos données personnelles. Nous pouvons partager des données agrégées et anonymisées avec des partenaires. Certains fournisseurs tiers (hébergement, analytics) ont accès à des données limitées sous contrat de confidentialité." },
    { title: "4. Sécurité", body: "Vos données sont protégées par chiffrement SSL/TLS, des mots de passe hashés (bcrypt), une infrastructure sécurisée (MongoDB Atlas, Railway) et des audits de sécurité réguliers. En cas de violation de données, vous serez notifié dans les 72 heures." },
    { title: "5. Vos droits (RGPD)", body: "Conformément au RGPD et à la loi 09-08 marocaine, vous avez le droit d'accéder à vos données, de les corriger, de les supprimer, de vous opposer au traitement, et de les exporter (portabilité). Pour exercer ces droits : privacy@moroccoPedia.app" },
    { title: "6. Rétention des données", body: "Les données de compte sont conservées tant que le compte est actif + 30 jours après suppression. Les données analytiques anonymisées sont conservées 24 mois. Les logs techniques sont conservés 90 jours." },
    { title: "7. Transferts internationaux", body: "Vos données peuvent être traitées dans des serveurs en Europe (Union Européenne) dans le respect du RGPD. Aucun transfert vers des pays non-adéquats sans garanties appropriées." },
    { title: "8. Contact DPO", body: "Délégué à la Protection des Données : privacy@moroccoPedia.app — MoroccoPedia, Technopark, Casablanca, Maroc." },
  ],
  cookies: [
    { title: "Cookies essentiels", body: "Nécessaires au fonctionnement du site : session d'authentification, préférences de langue, consentement cookies. Ne peuvent pas être désactivés. Durée : session ou 30 jours." },
    { title: "Cookies analytiques", body: "Nous utilisons une solution analytics respectueuse de la vie privée pour comprendre comment les utilisateurs naviguent sur MoroccoPedia. Ces données sont anonymisées et ne sont pas partagées avec des tiers. Vous pouvez les désactiver." },
    { title: "Cookies de performance", body: "Permettent d'optimiser la vitesse de chargement et l'expérience utilisateur. Incluent le cache des données du dictionnaire et des guides de villes pour un accès hors ligne." },
    { title: "Gestion des cookies", body: "Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau de consentement ou dans vos paramètres de navigateur. Le refus des cookies analytiques n'affecte pas le fonctionnement principal du service." },
  ],
};

export default function TermsPage() {
  const [tab, setTab] = useState('terms');
  const last_updated = '22 Mars 2026';

  return (
    <Layout>
      <SEO title="Conditions & Confidentialité — MoroccoPedia" description="Conditions d'utilisation, politique de confidentialité et gestion des cookies de MoroccoPedia."/>

      {/* Header */}
      <div style={{ background:'linear-gradient(135deg,#1c1007,#0a2318)', padding:'clamp(40px,5vw,64px) 0', textAlign:'center' }}>
        <h1 style={{ ...S, fontSize:'clamp(28px,4.5vw,48px)', color:'#fff', marginBottom:10 }}>Mentions légales</h1>
        <p style={{ fontSize:14, color:'rgba(245,237,220,.5)' }}>Dernière mise à jour : {last_updated}</p>
      </div>

      {/* Tab bar */}
      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)', position:'sticky', top:62, zIndex:100 }}>
        <div style={{ maxWidth:900, margin:'0 auto', padding:'0 clamp(16px,4vw,40px)', display:'flex', gap:0 }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding:'clamp(10px,2vw,16px) clamp(14px,2.5vw,24px)', fontSize:'clamp(11px,1.5vw,13.5px)', fontWeight:tab===t.id?700:400, cursor:'pointer', border:'none', background:'transparent', fontFamily:'Outfit,sans-serif', color:tab===t.id?'var(--terra)':'var(--muted)', borderBottom:`3px solid ${tab===t.id?'var(--terra)':'transparent'}`, transition:'all .18s', display:'flex', alignItems:'center', gap:6, whiteSpace:'nowrap' }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth:800, margin:'0 auto', padding:'clamp(28px,4vw,48px) clamp(16px,4vw,40px)' }}>
        {CONTENT[tab].map((section, i) => (
          <div key={i} style={{ marginBottom:28 }}>
            <h2 style={{ ...S, fontSize:18, color:'var(--terra)', marginBottom:10 }}>{section.title}</h2>
            <p style={{ fontSize:14.5, color:'var(--muted)', lineHeight:1.85 }}>{section.body}</p>
          </div>
        ))}

        <div style={{ marginTop:40, padding:'20px 24px', background:'var(--bg2)', borderRadius:14, border:'1px solid var(--border)', fontSize:14, color:'var(--muted)', lineHeight:1.7 }}>
          <strong style={{ color:'var(--ink)' }}>Contact légal :</strong> legal@moroccoPedia.app<br/>
          <strong style={{ color:'var(--ink)' }}>Siège :</strong> MoroccoPedia — Technopark, Route de Nouacer, Casablanca 20150, Maroc<br/>
          <strong style={{ color:'var(--ink)' }}>Version :</strong> 1.0 — {last_updated}
        </div>
      </div>
    </Layout>
  );
}
