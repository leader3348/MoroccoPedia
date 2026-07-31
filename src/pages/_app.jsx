import '../styles/globals.css';
import Head from 'next/head';
import { AuthProvider } from '../context/AuthContext';
import ErrorBoundary from '../components/ErrorBoundary';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* ── PWA & Mobile ─── */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        <meta name="apple-mobile-web-app-title" content="MoroccoPedia"/>
        <link rel="manifest" href="/manifest.json"/>

        {/* ── Theme color ─── */}
        <meta name="theme-color" content="#c0390a"/>
        <meta name="msapplication-TileColor" content="#1a0800"/>

        {/* ── Default SEO ─── */}
        <meta name="description" content="La première encyclopédie culturelle numérique marocaine — Dictionnaire Darija, 9 guides de villes, 1 200 ans d'histoire et IA culturelle."/>
        <meta property="og:site_name" content="MoroccoPedia"/>
        <meta property="og:type" content="website"/>
        <meta property="og:locale" content="fr_MA"/>
        <meta name="twitter:card" content="summary_large_image"/>

        {/* ── Favicon ─── */}
        <link rel="icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" href="/icons/icon-192.png"/>

        {/* ── Fonts preload ─── */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link rel="preload" as="style"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&family=Amiri:wght@400;700&display=swap"/>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&family=Amiri:wght@400;700&display=swap"/>

        <title>MoroccoPedia — L'encyclopédie culturelle marocaine</title>
      </Head>

      <AuthProvider>
        <ErrorBoundary>
          <Component {...pageProps}/>
        </ErrorBoundary>
      </AuthProvider>
    </>
  );
}
