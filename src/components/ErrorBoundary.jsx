import React from 'react';
import Link from 'next/link';

const S = { fontFamily: 'Playfair Display, Georgia, serif' };

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to monitoring service
    if (process.env.NODE_ENV === 'production') {
      console.error('MoroccoPedia Error:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 'clamp(32px,5vw,64px)', textAlign: 'center', background: 'var(--bg)', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>⚠️</div>
          <h2 style={{ ...S, fontSize: 24, color: 'var(--terra)', marginBottom: 10 }}>
            Quelque chose s'est mal passé
          </h2>
          <div style={{ fontFamily: 'Amiri,serif', fontSize: 18, color: 'var(--gold)', marginBottom: 16, direction: 'rtl' }}>
            حدث خطأ غير متوقع
          </div>
          <p style={{ fontSize: 14.5, color: 'var(--muted)', marginBottom: 24, maxWidth: 400, lineHeight: 1.75 }}>
            Une erreur inattendue s'est produite dans cette section. Les autres parties du site fonctionnent normalement.
          </p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <pre style={{ background: '#f5f5f5', padding: '12px 16px', borderRadius: 8, fontSize: 11, color: '#c00', textAlign: 'left', maxWidth: 600, overflow: 'auto', marginBottom: 20 }}>
              {this.state.error.toString()}
            </pre>
          )}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => this.setState({ hasError: false, error: null })}>
              Réessayer
            </button>
            <Link href="/">
              <button className="btn-outline">Retour à l'accueil</button>
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
