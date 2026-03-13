import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Valentina Rodríguez',
    grade: 'Grado 10°',
    quote: 'El club de robótica cambió completamente mi perspectiva sobre lo que quiero estudiar. Ahora sé que quiero ser ingeniera. Programé mi primer robot en la segunda semana y fue increíble.',
    role: 'Capitana del equipo GLA Prime',
    avatar: 'VR',
    color: '#0057A8',
  },
  {
    name: 'Santiago Gómez',
    grade: 'Grado 8°',
    quote: 'Lo que más me gusta es que no importa si eres de primaria o bachillerato — todos aprendemos juntos. He hecho amigos de otros cursos que nunca hubiera conocido de otra manera.',
    role: 'Programador Jr.',
    avatar: 'SG',
    color: '#F5A623',
  },
  {
    name: 'Daniela Moreno',
    grade: 'Grado 11°',
    quote: 'Gracias al club pude participar en una competencia nacional y conseguir carta de recomendación para mi aplicación a universidades en el exterior. Fue la mejor decisión de mi vida en el colegio.',
    role: 'Ingeniera de hardware',
    avatar: 'DM',
    color: '#a855f7',
  },
  {
    name: 'Mateo Vargas',
    grade: 'Grado 5° — Primaria',
    quote: 'Me uní porque me gustan los LEGO y ahora estoy aprendiendo a programar robots de verdad. ¡Ya gané mi primera medalla en el torneo del colegio!',
    role: 'Equipo Junior',
    avatar: 'MV',
    color: '#22c55e',
  },
  {
    name: 'Ana Lucía Herrera',
    grade: 'Grado 9°',
    quote: 'El profe del club nos enseña a pensar como ingenieros: primero el problema, luego la solución. Eso lo aplico hasta en matemáticas. El club me hizo mejor estudiante en general.',
    role: 'Diseñadora mecánica',
    avatar: 'AL',
    color: '#ef4444',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const t = testimonials[active];

  return (
    <section id="testimonials" style={{
      padding: '120px 40px',
      background: 'var(--gla-dark)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* BG decor */}
      <div style={{
        position: 'absolute', top: '20%', left: '-100px',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,87,168,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 3, color: 'var(--gla-orange)', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>
            Voces del club
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.1 }}>
            Lo que dicen nuestros{' '}
            <span style={{ background: 'linear-gradient(90deg, var(--gla-blue-light), var(--gla-orange))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              estudiantes
            </span>
          </h2>
        </div>

        {/* Main testimonial card */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: `1px solid ${t.color}30`,
          borderRadius: 28,
          padding: '52px 60px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.5s ease',
          marginBottom: 40,
        }}>
          {/* Quote marks */}
          <div style={{
            position: 'absolute', top: 24, left: 40,
            fontFamily: 'Georgia, serif',
            fontSize: 100, lineHeight: 1,
            color: t.color, opacity: 0.12,
            fontWeight: 900,
            transition: 'color 0.5s ease',
          }}>"</div>

          {/* Gradient top border */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: `linear-gradient(90deg, transparent, ${t.color}, transparent)`,
            transition: 'all 0.5s ease',
          }} />

          {/* Avatar */}
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: `linear-gradient(135deg, ${t.color}30, ${t.color}60)`,
            border: `2px solid ${t.color}50`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22,
            color: t.color,
            margin: '0 auto 24px',
            transition: 'all 0.5s ease',
            boxShadow: `0 0 30px ${t.color}20`,
          }}>
            {t.avatar}
          </div>

          <p style={{
            fontSize: 20, lineHeight: 1.7,
            color: 'rgba(255,255,255,0.82)',
            fontStyle: 'italic',
            marginBottom: 32,
            maxWidth: 640, margin: '0 auto 32px',
          }}>
            "{t.quote}"
          </p>

          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{t.name}</div>
            <div style={{ fontSize: 13, color: t.color, marginTop: 4, marginBottom: 4, fontWeight: 600 }}>{t.role}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>{t.grade}</div>
          </div>
        </div>

        {/* Dots + mini cards */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 40 }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => { setActive(i); clearInterval(intervalRef.current); }} style={{
              width: i === active ? 28 : 10, height: 10,
              borderRadius: 5,
              background: i === active ? 'var(--gla-orange)' : 'rgba(255,255,255,0.2)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }} />
          ))}
        </div>

        {/* Mini avatars row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
          {testimonials.map((t2, i) => (
            <button key={i} onClick={() => { setActive(i); clearInterval(intervalRef.current); }} style={{
              width: 48, height: 48, borderRadius: '50%',
              background: `${t2.color}20`,
              border: i === active ? `2px solid ${t2.color}` : '2px solid transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12,
              color: t2.color,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: i === active ? 'scale(1.15)' : 'scale(1)',
            }}>
              {t2.avatar}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
