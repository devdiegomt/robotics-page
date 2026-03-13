import React, { useState } from 'react';

const projects = [
  {
    title: 'Robot Seguidor de Línea',
    category: 'Competencia',
    year: '2024',
    tech: ['Arduino', 'C++', 'Sensores IR'],
    desc: 'Robot autónomo capaz de seguir trayectorias complejas a más de 1m/s.',
    color: '#0057A8',
    emoji: '🤖',
  },
  {
    title: 'Brazo Robótico Asistencial',
    category: 'Innovación',
    year: '2023',
    tech: ['Python', 'Servo Motors', 'OpenCV'],
    desc: 'Diseñado para asistir a personas con movilidad reducida mediante comandos de voz.',
    color: '#F5A623',
    emoji: '🦾',
  },
  {
    title: 'Drone Exploratorio',
    category: 'STEM',
    year: '2024',
    tech: ['Raspberry Pi', 'Python', 'GPS'],
    desc: 'Drone de bajo costo para cartografía y exploración de zonas de difícil acceso.',
    color: '#a855f7',
    emoji: '🚁',
  },
  {
    title: 'Robot de Rescate',
    category: 'Competencia',
    year: '2024',
    tech: ['Arduino', 'Ultrasónico', 'Cámara'],
    desc: 'Campeón regional — navega laberintos y rescata objetos autónomamente.',
    color: '#22c55e',
    emoji: '🏆',
  },
  {
    title: 'IA para Agricultura',
    category: 'Innovación',
    year: '2023',
    tech: ['TensorFlow', 'Python', 'IoT'],
    desc: 'Sistema de monitoreo de cultivos con reconocimiento de enfermedades en plantas.',
    color: '#ef4444',
    emoji: '🌱',
  },
  {
    title: 'LEGO Mindstorms EV3',
    category: 'Primaria',
    year: '2022',
    tech: ['EV3', 'Scratch', 'LEGO'],
    desc: 'Proyecto de la categoría junior — robots LEGO programados para tareas cooperativas.',
    color: '#f97316',
    emoji: '🧱',
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState('Todos');
  const [hovered, setHovered] = useState(null);

  const categories = ['Todos', 'Competencia', 'Innovación', 'STEM', 'Primaria'];
  const filtered = filter === 'Todos' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="gallery" style={{
      padding: '120px 40px',
      background: 'var(--gla-dark)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 3, color: 'var(--gla-orange)', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>
            Nuestros proyectos
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
            Lo que{' '}
            <span style={{ background: 'linear-gradient(90deg, var(--gla-blue-light), var(--gla-orange))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              construimos
            </span>
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Proyectos reales creados por estudiantes GLA — desde primaria hasta bachillerato.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{
              background: filter === cat ? 'var(--gla-blue)' : 'rgba(255,255,255,0.05)',
              color: filter === cat ? 'white' : 'rgba(255,255,255,0.5)',
              border: filter === cat ? '1px solid var(--gla-blue)' : '1px solid rgba(255,255,255,0.1)',
              padding: '8px 20px', borderRadius: 40,
              fontSize: 13, fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'var(--font-body)',
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
        }}>
          {filtered.map((project, i) => (
            <div key={project.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? `rgba(${hexToRgb(project.color)}, 0.08)` : 'rgba(255,255,255,0.03)',
                border: hovered === i ? `1px solid ${project.color}40` : '1px solid rgba(255,255,255,0.07)',
                borderRadius: 20,
                padding: 28,
                transition: 'all 0.3s ease',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}>
              {/* Top */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${project.color}, transparent)`,
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div style={{ fontSize: 48 }}>{project.emoji}</div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                  <span style={{
                    background: `${project.color}20`,
                    border: `1px solid ${project.color}40`,
                    color: project.color,
                    fontSize: 11, fontWeight: 700,
                    padding: '3px 10px', borderRadius: 20,
                    fontFamily: 'var(--font-mono)',
                  }}>{project.category}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)' }}>{project.year}</span>
                </div>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, marginBottom: 10 }}>
                {project.title}
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: 20 }}>
                {project.desc}
              </p>

              {/* Tech stack */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: 11, color: 'rgba(255,255,255,0.6)',
                    padding: '3px 10px', borderRadius: 6,
                    fontFamily: 'var(--font-mono)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add your content note */}
        <div style={{
          marginTop: 48,
          padding: '24px 32px',
          background: 'rgba(0,87,168,0.08)',
          border: '1px dashed rgba(0,87,168,0.3)',
          borderRadius: 16,
          display: 'flex', alignItems: 'center', gap: 16,
          textAlign: 'left',
        }}>
          <div style={{ fontSize: 28, flexShrink: 0 }}>📸</div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 4 }}>¿Tienes fotos o videos reales del club?</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
              Reemplaza estos proyectos con imágenes reales importando tus archivos en <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--gla-orange)' }}>src/assets/</code> o usando un CDN como Cloudinary.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
