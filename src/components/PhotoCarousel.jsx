import { useState, useEffect, useRef, useCallback } from 'react';

const photos = [
  {
    src: "/images/image1.jpg",
    caption: 'Sesión de ensamblaje — Robot seguidor de línea',
    tag: 'Robótica',
  },
  {
    src: "/images/image2.jpg",
    caption: 'Competencia regional — Copa Robótica Bogotá 2024',
    tag: 'Robótica',
  },
  {
    src: "/images/image3.jpg",
    caption: 'Programación con Arduino — Grado 10°',
    tag: 'Robótica',
  },
  {
    src: "/images/image4.jpg",
    caption: 'Exposición de proyectos — Festival GLA',
    tag: 'Robótica',
  },
  {
    src: "/images/image5.jpg",
    caption: 'Equipo Junior — LEGO Mindstorms',
    tag: 'Robótica',
  },
  {
    src: "/images/image6.jpg",
    caption: 'Pruebas de campo — Drone exploratorio',
    tag: 'Programación',
  },
];
// ───────────────────────────────────────────────────────────────────────────

const TAG_COLORS = {
  Taller:       { bg: 'rgba(26,115,200,0.2)',  border: 'rgba(26,115,200,0.5)',  text: '#7ab4e8' },
  Competencia:  { bg: 'rgba(245,166,35,0.2)',  border: 'rgba(245,166,35,0.5)',  text: '#f5c76a' },
  Programación: { bg: 'rgba(34,197,94,0.2)',   border: 'rgba(34,197,94,0.5)',   text: '#6ee79a' },
  Exposición:   { bg: 'rgba(168,85,247,0.2)',  border: 'rgba(168,85,247,0.5)',  text: '#c084fc' },
  Junior:       { bg: 'rgba(26,115,200,0.2)',  border: 'rgba(26,115,200,0.5)',  text: '#7ab4e8' },
  Innovación:   { bg: 'rgba(245,166,35,0.2)',  border: 'rgba(245,166,35,0.5)',  text: '#f5c76a' },
};

function TagBadge({ tag }) {
  const c = TAG_COLORS[tag] || TAG_COLORS['Taller'];
  return (
    <span style={{
      background: c.bg, border: `1px solid ${c.border}`, color: c.text,
      fontSize: 11, fontWeight: 700, fontFamily: 'var(--font-mono)',
      padding: '3px 12px', borderRadius: 20, letterSpacing: 1,
      textTransform: 'uppercase',
    }}>{tag}</span>
  );
}

export default function PhotoCarousel() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const total = photos.length;

  const go = useCallback((idx) => {
    setActive((idx + total) % total);
  }, [total]);

  const startAuto = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!paused) setActive(prev => (prev + 1) % total);
    }, 4500);
  }, [paused, total]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, [startAuto]);

  // Drag / swipe
  const onDragStart = (clientX) => { setDragging(true); setDragStart(clientX); };
  const onDragEnd   = (clientX) => {
    if (!dragging) return;
    const diff = dragStart - clientX;
    if (Math.abs(diff) > 40) go(active + (diff > 0 ? 1 : -1));
    setDragging(false);
  };

  return (
    <section id="gallery-carousel" style={{
      padding: '120px 40px',
      background: 'linear-gradient(180deg, var(--gla-dark) 0%, #0d1829 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* BG glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,87,168,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 3,
            color: 'var(--gla-orange)', textTransform: 'uppercase',
            display: 'block', marginBottom: 16,
          }}>Galería</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 54px)',
            fontWeight: 800, lineHeight: 1.1, marginBottom: 16,
          }}>
            El club en{' '}
            <span style={{
              background: 'linear-gradient(90deg, var(--gla-blue-light), var(--gla-orange))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>acción</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '0 auto' }}>
            Momentos reales de nuestras sesiones, talleres y competencias.
          </p>
        </div>

        {/* ── MAIN CAROUSEL ── */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onMouseDown={e => onDragStart(e.clientX)}
          onMouseUp={e => onDragEnd(e.clientX)}
          onTouchStart={e => onDragStart(e.touches[0].clientX)}
          onTouchEnd={e => onDragEnd(e.changedTouches[0].clientX)}
          style={{ position: 'relative', userSelect: 'none', cursor: dragging ? 'grabbing' : 'grab' }}
        >
          {/* Main image frame */}
          <div style={{
            position: 'relative',
            borderRadius: 24,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            aspectRatio: '16/9',
            background: '#060d1a',
          }}>
            {photos.map((photo, i) => (
              <div key={i} style={{
                position: 'absolute', inset: 0,
                opacity: i === active ? 1 : 0,
                transition: 'opacity 0.6s ease',
                pointerEvents: i === active ? 'auto' : 'none',
              }}>
                <img
                  src={photo.src}
                  alt={photo.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  draggable={false}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(6,13,26,0.85) 0%, rgba(6,13,26,0.2) 50%, transparent 100%)',
                }} />
                {/* Caption */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '28px 36px',
                  display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16,
                }}>
                  <div>
                    <TagBadge tag={photo.tag} />
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 18, fontWeight: 700,
                      color: 'white', marginTop: 8, lineHeight: 1.3,
                    }}>{photo.caption}</p>
                  </div>
                  {/* Counter */}
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 13,
                    color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap', flexShrink: 0,
                  }}>
                    <span style={{ color: 'var(--gla-orange)', fontWeight: 700 }}>{String(active + 1).padStart(2, '0')}</span>
                    {' / '}{String(total).padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))}

            {/* Prev / Next arrows */}
            {[
              { dir: -1, label: '←', side: { left: 20 } },
              { dir:  1, label: '→', side: { right: 20 } },
            ].map(({ dir, label, side }) => (
              <button key={dir} onClick={() => { go(active + dir); clearInterval(intervalRef.current); startAuto(); }}
                style={{
                  position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                  ...side,
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'rgba(10,14,26,0.7)', backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'white', fontSize: 18, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  zIndex: 10,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,87,168,0.8)'; e.currentTarget.style.borderColor = 'var(--gla-blue)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(10,14,26,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
              >{label}</button>
            ))}

            {/* Progress bar */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
              background: 'rgba(255,255,255,0.08)',
            }}>
              <div style={{
                height: '100%',
                width: `${((active + 1) / total) * 100}%`,
                background: 'linear-gradient(90deg, var(--gla-blue), var(--gla-orange))',
                transition: 'width 0.4s ease',
                borderRadius: '0 2px 2px 0',
              }} />
            </div>
          </div>

          {/* ── THUMBNAIL STRIP ── */}
          <div style={{
            display: 'flex', gap: 12, marginTop: 16,
            overflowX: 'auto', paddingBottom: 4,
            scrollbarWidth: 'none',
          }}>
            {photos.map((photo, i) => (
              <button key={i} onClick={() => { setActive(i); clearInterval(intervalRef.current); startAuto(); }}
                style={{
                  flexShrink: 0,
                  width: 96, height: 62,
                  borderRadius: 10, overflow: 'hidden',
                  border: i === active
                    ? '2px solid var(--gla-orange)'
                    : '2px solid rgba(255,255,255,0.08)',
                  opacity: i === active ? 1 : 0.45,
                  cursor: 'pointer', padding: 0,
                  transition: 'all 0.25s ease',
                  transform: i === active ? 'scale(1.06)' : 'scale(1)',
                }}
                onMouseEnter={e => { if (i !== active) e.currentTarget.style.opacity = '0.75'; }}
                onMouseLeave={e => { if (i !== active) e.currentTarget.style.opacity = '0.45'; }}
              >
                <img src={photo.src} alt={photo.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  draggable={false}
                />
              </button>
            ))}
          </div>

          {/* ── DOT INDICATORS ── */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
            {photos.map((_, i) => (
              <button key={i} onClick={() => { setActive(i); clearInterval(intervalRef.current); startAuto(); }}
                style={{
                  width: i === active ? 24 : 8, height: 8,
                  borderRadius: 4,
                  background: i === active ? 'var(--gla-orange)' : 'rgba(255,255,255,0.18)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        #gallery-carousel div::-webkit-scrollbar { display: none; }
        @media (max-width: 640px) {
          #gallery-carousel button[style*="width: 44px"] { width: 36px !important; height: 36px !important; font-size: 14px !important; }
        }
      `}</style>
    </section>
  );
}
