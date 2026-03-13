import React, { useEffect, useRef, useState } from 'react';

const benefits = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    title: 'Pensamiento STEM',
    desc: 'Desarrolla habilidades en ciencias, tecnología, ingeniería y matemáticas a través de proyectos reales y desafíos prácticos.',
    color: '#0057A8',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
      </svg>
    ),
    title: 'Programación & IA',
    desc: 'Aprende Python, Arduino y fundamentos de Inteligencia Artificial aplicados al control de robots autónomos.',
    color: '#1a73c8',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Trabajo en Equipo',
    desc: 'Colabora con compañeros de todos los grados, aprende a liderar proyectos y desarrolla comunicación efectiva.',
    color: '#F5A623',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Competencias Reales',
    desc: 'Participa en torneos locales y nacionales de robótica, poniendo a prueba tus creaciones contra otros equipos.',
    color: '#22c55e',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Portafolio Profesional',
    desc: 'Construye un portafolio de proyectos que destaque en aplicaciones universitarias y futuras oportunidades laborales.',
    color: '#a855f7',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: 'Visión Global',
    desc: 'Conecta con equipos internacionales, aprende sobre tendencias tecnológicas mundiales y prepárate para el futuro.',
    color: '#ef4444',
  },
];

function BenefitCard({ benefit, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 20,
      padding: 32,
      transition: 'all 0.6s ease',
      transitionDelay: `${index * 0.1}s`,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(30px)',
      cursor: 'default',
      position: 'relative',
      overflow: 'hidden',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = benefit.color + '40';
      e.currentTarget.style.background = `rgba(${hexToRgb(benefit.color)}, 0.06)`;
      e.currentTarget.style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      {/* Top accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${benefit.color}, transparent)`,
        opacity: 0.5,
      }} />

      <div style={{
        width: 60, height: 60,
        borderRadius: 16,
        background: `rgba(${hexToRgb(benefit.color)}, 0.12)`,
        border: `1px solid ${benefit.color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: benefit.color,
        marginBottom: 20,
      }}>
        {benefit.icon}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 20, fontWeight: 700,
        marginBottom: 12,
        color: 'white',
      }}>
        {benefit.title}
      </h3>
      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
        {benefit.desc}
      </p>
    </div>
  );
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export default function Benefits() {
  return (
    <section id="benefits" style={{
      padding: '120px 40px',
      background: 'var(--gla-dark)',
      position: 'relative',
    }}>
      {/* Section divider */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 1, height: 80,
        background: 'linear-gradient(to bottom, transparent, var(--gla-blue))',
        opacity: 0.4,
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12, letterSpacing: 3,
            color: 'var(--gla-orange)',
            textTransform: 'uppercase',
            display: 'block', marginBottom: 16,
          }}>
            ¿Por qué unirte?
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 54px)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            Todo lo que{' '}
            <span style={{
              background: 'linear-gradient(90deg, var(--gla-blue-light), var(--gla-orange))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>ganarás</span>{' '}
            al unirte
          </h2>
          <p style={{
            fontSize: 18, color: 'rgba(255,255,255,0.5)',
            maxWidth: 560, margin: '0 auto', lineHeight: 1.7,
          }}>
            El Club de Robótica GLA no es solo una actividad extracurricular — es tu trampolín hacia el futuro.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
        }}>
          {benefits.map((b, i) => <BenefitCard key={b.title} benefit={b} index={i} />)}
        </div>
      </div>
    </section>
  );
}
