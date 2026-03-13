import React from 'react';

const schedule = [
  {
    day: 'Lunes',
    time: '3:00 PM – 5:00 PM',
    title: 'Taller de Programación',
    desc: 'Fundamentos de Python, Arduino y lógica de programación para robótica.',
    level: 'Todos los niveles',
    icon: '💻',
    color: '#0057A8',
  },
  {
    day: 'Miércoles',
    time: '3:00 PM – 5:30 PM',
    title: 'Construcción & Mecánica',
    desc: 'Ensamblaje de robots, diseño mecánico y trabajo con sensores y actuadores.',
    level: 'Bachillerato',
    icon: '🔧',
    color: '#F5A623',
  },
  {
    day: 'Jueves',
    time: '2:30 PM – 4:30 PM',
    title: 'Club LEGO Robotics',
    desc: 'Introducción a la robótica con kits LEGO Mindstorms. Ideal para primaria.',
    level: 'Primaria',
    icon: '🧱',
    color: '#22c55e',
  },
  {
    day: 'Viernes',
    time: '3:00 PM – 6:00 PM',
    title: 'Laboratorio Libre + IA',
    desc: 'Sesión avanzada: visión artificial, machine learning y preparación para competencias.',
    level: 'Avanzado',
    icon: '🤖',
    color: '#a855f7',
  },
];

const upcoming = [
  { date: 'Mar 22', event: 'Taller de introducción — nuevos integrantes', icon: '🎉' },
  { date: 'Abr 05', event: 'Competencia interna de robots seguidores', icon: '🏁' },
  { date: 'May 10', event: 'Copa Robótica Cundinamarca 2025', icon: '🏆' },
  { date: 'Jun 14', event: 'Exhibición de proyectos — Festival GLA', icon: '🎪' },
];

export default function Schedule() {
  return (
    <section id="schedule" style={{
      padding: '120px 40px',
      background: 'linear-gradient(180deg, var(--gla-dark) 0%, #0d1829 100%)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 3, color: 'var(--gla-orange)', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>
            Organización
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
            Cronograma &{' '}
            <span style={{ background: 'linear-gradient(90deg, var(--gla-blue-light), var(--gla-orange))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              próximas sesiones
            </span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {/* Weekly schedule */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, marginBottom: 24, color: 'rgba(255,255,255,0.8)' }}>
              📅 Sesiones semanales
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {schedule.map((s, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16, padding: '20px 24px',
                  position: 'relative', overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = s.color + '40';
                  e.currentTarget.style.background = `rgba(${hexToRgb(s.color)}, 0.06)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                }}
                >
                  <div style={{
                    width: 4, height: '100%', minHeight: 60,
                    background: s.color,
                    borderRadius: 4,
                    position: 'absolute', left: 0, top: 0, bottom: 0,
                  }} />
                  <div style={{ marginLeft: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                      <span style={{ fontSize: 22 }}>{s.icon}</span>
                      <div>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>{s.title}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gla-orange)' }}>
                        {s.day} · {s.time}
                      </span>
                      <span style={{
                        background: `${s.color}20`, border: `1px solid ${s.color}30`,
                        color: s.color, fontSize: 10, fontWeight: 700,
                        padding: '2px 8px', borderRadius: 10,
                        fontFamily: 'var(--font-mono)', letterSpacing: 0.5,
                      }}>{s.level}</span>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming events */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, marginBottom: 24, color: 'rgba(255,255,255,0.8)' }}>
              🚀 Próximos eventos
            </h3>

            <div style={{
              background: 'rgba(0,87,168,0.08)',
              border: '1px solid rgba(0,87,168,0.2)',
              borderRadius: 20, padding: 28,
              marginBottom: 24,
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {upcoming.map((u, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '16px 0',
                    borderBottom: i < upcoming.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}>
                    <div style={{
                      minWidth: 56, textAlign: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12, fontWeight: 700,
                      color: 'var(--gla-orange)',
                      background: 'rgba(245,166,35,0.1)',
                      padding: '6px 8px', borderRadius: 8,
                    }}>
                      {u.date}
                    </div>
                    <span style={{ fontSize: 20 }}>{u.icon}</span>
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>{u.event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0,87,168,0.2) 0%, rgba(245,166,35,0.1) 100%)',
              border: '1px solid rgba(0,87,168,0.3)',
              borderRadius: 20, padding: 28,
            }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>📍</div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                Ubicación del Club
              </h4>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 16 }}>
                Laboratorio de Tecnología — Bloque STEM<br />
                Gimnasio Los Arrayanes Bilingüe<br />
                Cl. 219 No 50-10, Bogotá
              </p>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontFamily: 'var(--font-mono)', fontSize: 12,
                color: 'var(--gla-orange)',
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'blink 1.5s infinite' }} />
                Sesiones activas este semestre
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #schedule > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
