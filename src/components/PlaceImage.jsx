import { useState, useRef, useEffect } from 'react';

/**
 * Smart image component for Moroccan places
 * - Tries primary src first
 * - Falls back through chain if image fails
 * - Lazy loads with IntersectionObserver
 * - Shows skeleton while loading
 * - Accessible alt text
 */
export default function PlaceImage({
  src,
  fallbacks = [],
  alt = '',
  style = {},
  className = '',
  objectFit = 'cover',
  placeholder = null, // custom placeholder content
}) {
  const [currentIndex, setCurrentIndex] = useState(-1); // -1 = not loaded yet
  const [failed,       setFailed]        = useState(false);
  const [loaded,       setLoaded]        = useState(false);
  const imgRef  = useRef(null);
  const wrapRef = useRef(null);

  const allSrcs = [src, ...fallbacks].filter(Boolean);

  useEffect(() => {
    if (!wrapRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCurrentIndex(0); },
      { rootMargin: '200px' }
    );
    observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, []);

  const handleError = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < allSrcs.length) {
      setCurrentIndex(nextIndex);
    } else {
      setFailed(true);
    }
  };

  const currentSrc = currentIndex >= 0 && currentIndex < allSrcs.length
    ? allSrcs[currentIndex]
    : null;

  return (
    <div ref={wrapRef} style={{ position: 'relative', overflow: 'hidden', ...style }} className={className}>
      {/* Skeleton while loading */}
      {!loaded && !failed && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg,var(--bg2) 25%,var(--bg3) 50%,var(--bg2) 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
          zIndex: 1,
        }} />
      )}

      {/* Failed state */}
      {failed && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg,var(--bg2),var(--bg3))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 2,
        }}>
          {placeholder || (
            <div style={{ textAlign: 'center', padding: 12 }}>
              <div style={{ fontSize: 24, marginBottom: 6, opacity: .4 }}>🏛️</div>
              <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 500 }}>{alt}</div>
            </div>
          )}
        </div>
      )}

      {/* Actual image */}
      {currentSrc && !failed && (
        <img
          ref={imgRef}
          src={currentSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={handleError}
          style={{
            width: '100%', height: '100%',
            objectFit,
            opacity: loaded ? 1 : 0,
            transition: 'opacity .3s ease',
            display: 'block',
          }}
        />
      )}
    </div>
  );
}
