import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, hideFooter = false }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
