import React, { useEffect, useRef, useState } from 'react';

const achievements = [
  {
    year: '2024',
    title: '🥇 Campeones Regionales',
    event: 'Primera Copa Robótica Bogotá',
    desc: 'Nuestro equipo "GLA Prime" superó a 24 colegios con su robot de rescate autónomo.',
    badge: 'ORO',
    badgeColor: '#F5A623',
  },
  {
    year: '2023',
    title: '🥈 Segundo Lugar Nacional',
    event: 'Olimpiadas STEM Colombia',
    desc: 'Categoría secundaria — proyecto de brazo robótico para asistencia a personas mayores.',
    badge: 'PLATA',
    badgeColor: '#94a3b8',
  },
  {
    year: '2023',
    title: '🏆 Mejor Diseño',
    event: 'ExpoRobótica Cundinamarca',
    desc: 'Reconocimiento especial por innovación en el diseño de robot seguidor de línea con visión artificial.',
    badge: 'ESPECIAL',
    badgeColor: '#a855f7',
  },
  {
    year: '2022',
    title: '🥉 Tercer Lugar',
    event: 'Torneo FLL Bogotá',
    desc: 'FIRST LEGO League — equipo de primaria clasificó entre los tres mejores de la competencia.',
    badge: 'BRONCE',
    badgeColor: '#cd7c2f',
  },
  {
    year: '2024',
    title: '💡 Innovación Educativa',
    event: 'Premio GLA Creatividad',
    desc: 'El club fue reconocido internamente por integrar robótica como herramienta pedagógica transversal.',
    badge: 'INTERNO',
    badgeColor: '#0057A8',
  },
];

export default function Achievements() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="achievements" style={{
      padding: '120px 40px',
      background: 'linear-gradient(180deg, var(--gla-dark) 0%, #0d1829 50%, var(--gla-dark) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '30%', right: '-100px',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 3, color: 'var(--gla-orange)', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>
            Trayectoria
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.1 }}>
            Nuestros{' '}
            <span style={{ background: 'linear-gradient(90deg, var(--gla-orange), #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              logros
            </span>
          </h2>
        </div>

        <div ref={ref} style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 'calc(50% - 1px)', top: 0, bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, transparent, var(--gla-blue) 10%, var(--gla-blue) 90%, transparent)',
            opacity: 0.3,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {achievements.map((ach, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 60px 1fr',
                alignItems: 'center',
                gap: 24,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${i * 0.12}s`,
              }}>
                {/* Left content (odd) or empty (even) */}
                {i % 2 === 0 ? (
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20,
                    padding: 28,
                    textAlign: 'right',
                    transition: 'all 0.3s ease',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700 }}>{ach.title}</span>
                      <span style={{
                        background: ach.badgeColor,
                        color: 'white',
                        fontSize: 10, fontWeight: 700,
                        padding: '3px 10px', borderRadius: 20,
                        letterSpacing: 1, fontFamily: 'var(--font-mono)',
                      }}>{ach.badge}</span>
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--gla-orange)', marginBottom: 8, fontWeight: 600 }}>{ach.event}</div>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{ach.desc}</p>
                  </div>
                ) : <div />}

                {/* Center dot */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${ach.badgeColor}20, ${ach.badgeColor}40)`,
                    border: `2px solid ${ach.badgeColor}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 10,
                    color: ach.badgeColor,
                    boxShadow: `0 0 20px ${ach.badgeColor}30`,
                  }}>
                    {ach.year}
                  </div>
                </div>

                {/* Right content (even) or empty (odd) */}
                {i % 2 !== 0 ? (
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20,
                    padding: 28,
                    transition: 'all 0.3s ease',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700 }}>{ach.title}</span>
                      <span style={{
                        background: ach.badgeColor,
                        color: 'white',
                        fontSize: 10, fontWeight: 700,
                        padding: '3px 10px', borderRadius: 20,
                        letterSpacing: 1, fontFamily: 'var(--font-mono)',
                      }}>{ach.badge}</span>
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--gla-orange)', marginBottom: 8, fontWeight: 600 }}>{ach.event}</div>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{ach.desc}</p>
                  </div>
                ) : <div />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #achievements .timeline-item {
            grid-template-columns: 40px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
