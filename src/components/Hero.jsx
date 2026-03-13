import React, { useEffect, useRef, useState } from 'react';

function GridBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Grid lines */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06 }}>
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0057A8" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Glowing orbs */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,87,168,0.25) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute', top: '30%', right: '5%',
        width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,166,35,0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      {/* Scan line */}
      <div style={{
        position: 'absolute', left: 0, right: 0,
        height: 2,
        background: 'linear-gradient(90deg, transparent, rgba(0,87,168,0.4), transparent)',
        animation: 'scan 6s linear infinite',
        top: 0,
      }} />

      {/* Floating nodes */}
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: 6, height: 6,
          borderRadius: '50%',
          background: i % 2 === 0 ? 'var(--gla-blue)' : 'var(--gla-orange)',
          opacity: 0.4,
          left: `${10 + i * 12}%`,
          top: `${20 + (i % 3) * 20}%`,
          animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
          animationDelay: `${i * 0.3}s`,
        }} />
      ))}
    </div>
  );
}

function RobotIcon() {
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Pulse rings */}
      {[1, 2, 3].map(i => (
        <div key={i} style={{
          position: 'absolute',
          width: 200, height: 200,
          borderRadius: '50%',
          border: `1px solid rgba(0,87,168,${0.3 / i})`,
          animation: 'pulse-ring 3s ease-out infinite',
          animationDelay: `${i * 0.8}s`,
        }} />
      ))}

      {/* Robot SVG */}
      <div style={{
        width: 160, height: 160,
        background: 'linear-gradient(135deg, var(--gla-blue-dark) 0%, var(--gla-blue) 100%)',
        borderRadius: 24,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 0 60px rgba(0,87,168,0.5), 0 20px 60px rgba(0,0,0,0.5)',
        animation: 'float 4s ease-in-out infinite',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
          borderRadius: 24,
        }} />
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          {/* Robot head */}
          <rect x="20" y="15" width="50" height="35" rx="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
          {/* Eyes */}
          <circle cx="33" cy="30" r="6" fill="var(--gla-orange)" opacity="0.9"/>
          <circle cx="57" cy="30" r="6" fill="var(--gla-orange)" opacity="0.9"/>
          <circle cx="33" cy="30" r="3" fill="white"/>
          <circle cx="57" cy="30" r="3" fill="white"/>
          {/* Mouth */}
          <rect x="30" y="40" width="30" height="4" rx="2" fill="rgba(255,255,255,0.4)"/>
          {/* Antenna */}
          <line x1="45" y1="15" x2="45" y2="5" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
          <circle cx="45" cy="3" r="3" fill="var(--gla-orange)"/>
          {/* Body */}
          <rect x="25" y="53" width="40" height="25" rx="6" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
          {/* Chest light */}
          <circle cx="45" cy="65" r="5" fill="var(--gla-orange)" opacity="0.8"/>
          {/* Arms */}
          <rect x="10" y="55" width="13" height="8" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
          <rect x="67" y="55" width="13" height="8" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
        </svg>
      </div>
    </div>
  );
}

export default function Hero() {
  const [typed, setTyped] = useState('');
  const words = ['Innovar.', 'Programar.', 'Construir.', 'Liderar.', 'Competir.'];
  const wordRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const word = words[wordRef.current];
      if (!deletingRef.current) {
        charRef.current++;
        setTyped(word.slice(0, charRef.current));
        if (charRef.current === word.length) {
          setTimeout(() => { deletingRef.current = true; }, 1800);
        }
      } else {
        charRef.current--;
        setTyped(word.slice(0, charRef.current));
        if (charRef.current === 0) {
          deletingRef.current = false;
          wordRef.current = (wordRef.current + 1) % words.length;
        }
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #0a0e1a 0%, #0d1829 50%, #0a0e1a 100%)',
      padding: '120px 40px 80px',
    }}>
      <GridBackground />

      <div style={{
        maxWidth: 1200, margin: '0 auto', width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 60,
        alignItems: 'center',
        position: 'relative', zIndex: 1,
      }}>
        {/* Left content */}
        <div style={{ animation: 'fadeUp 0.8s ease forwards' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(0,87,168,0.15)',
            border: '1px solid rgba(0,87,168,0.4)',
            padding: '6px 16px',
            borderRadius: 40,
            marginBottom: 28,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'blink 1.5s infinite' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,0.7)', letterSpacing: 1.5 }}>
              INSCRIPCIONES ABIERTAS 2025
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(42px, 6vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 16,
          }}>
            Aprende a{' '}
            <span style={{
              color: 'var(--gla-orange)',
              display: 'inline-block',
              minWidth: 240,
            }}>
              {typed}
              <span style={{ animation: 'blink 0.8s infinite', color: 'var(--gla-blue-light)' }}>|</span>
            </span>
          </h1>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: 24,
            lineHeight: 1.1,
          }}>
            Club de Robótica{' '}
            <span style={{
              background: 'linear-gradient(90deg, var(--gla-blue), var(--gla-blue-light))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>GLA</span>
          </h2>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 500,
          }}>
            Únete a la comunidad de jóvenes innovadores del Gimnasio Los Arrayanes Bilingüe. 
            Diseña robots, programa con IA y compite a nivel nacional.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#signup" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'var(--gla-orange)',
              color: 'var(--gla-dark)',
              padding: '14px 32px',
              borderRadius: 50,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 30px rgba(245,166,35,0.3)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(245,166,35,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(245,166,35,0.3)'; }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              Quiero unirme
            </a>
            <a href="#benefits" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'transparent',
              color: 'white',
              padding: '14px 32px',
              borderRadius: 50,
              fontWeight: 600,
              fontSize: 16,
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gla-blue)'; e.currentTarget.style.background = 'rgba(0,87,168,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent'; }}
            >
              Descubrir más
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 40, marginTop: 52 }}>
            {[
              { num: '50+', label: 'Estudiantes activos' },
              { num: '3', label: 'Competencias ganadas' },
              { num: '5+', label: 'Años de trayectoria' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800, color: 'var(--gla-orange)' }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Robot illustration */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          animation: 'fadeUp 0.8s 0.3s ease forwards',
          opacity: 0,
          animationFillMode: 'forwards',
        }}>
          <div style={{ position: 'relative' }}>
            {/* Hexagon grid background */}
            <div style={{
              position: 'absolute', inset: -60,
              background: `radial-gradient(circle at center, rgba(0,87,168,0.12) 0%, transparent 70%)`,
              borderRadius: '50%',
            }} />
            <RobotIcon />

            {/* Floating info cards */}
            <div style={{
              position: 'absolute', top: -20, right: -80,
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 16, padding: '12px 16px',
              animation: 'float 3.5s ease-in-out infinite',
              animationDelay: '0.5s',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gla-orange)', marginBottom: 4 }}>
                {'>'} STEM Score
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700 }}>98%</div>
            </div>

            <div style={{
              position: 'absolute', bottom: 10, left: -90,
              background: 'rgba(0,87,168,0.2)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0,87,168,0.4)',
              borderRadius: 16, padding: '12px 16px',
              animation: 'float 4s ease-in-out infinite',
              animationDelay: '1.2s',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>
                Tecnologías
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600 }}>
                Arduino · Python · AI
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 40, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        animation: 'float 2s ease-in-out infinite',
      }}>
        <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', letterSpacing: 2 }}>SCROLL</span>
        <svg width="20" height="20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero > div > div:first-child { grid-column: 1 / -1; }
          #hero > div > div:last-child { display: none; }
          #hero > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
