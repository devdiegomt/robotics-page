import React, { useState } from 'react';

const grades = [
  'Grado 1° - Primaria', 'Grado 2° - Primaria', 'Grado 3° - Primaria',
  'Grado 4° - Primaria', 'Grado 5° - Primaria',
  'Grado 6°', 'Grado 7°', 'Grado 8°', 'Grado 9°', 'Grado 10°', 'Grado 11°',
];

const interests = [
  { label: 'Programación', icon: '💻' },
  { label: 'Mecánica', icon: '🔧' },
  { label: 'IA / Machine Learning', icon: '🤖' },
  { label: 'Competencias', icon: '🏆' },
  { label: 'Diseño 3D', icon: '📐' },
  { label: 'Electrónica', icon: '⚡' },
];

export default function Signup() {
  const [form, setForm] = useState({ name: '', grade: '', email: '', phone: '' });
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleInterest = (label) => {
    setSelected(prev => prev.includes(label) ? prev.filter(i => i !== label) : [...prev, label]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="signup" style={{ padding: '120px 40px', background: 'linear-gradient(180deg, #0d1829, var(--gla-dark))' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontSize: 80, marginBottom: 32,
            animation: 'float 3s ease-in-out infinite',
            display: 'block',
          }}>🎉</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 800, marginBottom: 16 }}>
            ¡Bienvenido al club!
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 32 }}>
            Tu solicitud fue recibida. Nos pondremos en contacto contigo en las próximas 24 horas con los detalles de tu primera sesión.
          </p>
          <div style={{
            background: 'rgba(0,87,168,0.1)',
            border: '1px solid rgba(0,87,168,0.3)',
            borderRadius: 16, padding: '20px 32px',
            fontFamily: 'var(--font-mono)', fontSize: 14,
            color: 'rgba(255,255,255,0.6)',
          }}>
            <span style={{ color: '#22c55e' }}>✓</span> Formulario enviado — <span style={{ color: 'var(--gla-orange)' }}>Solicitud #{Math.floor(Math.random() * 9000) + 1000}</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" style={{
      padding: '120px 40px',
      background: 'linear-gradient(180deg, #0d1829 0%, var(--gla-dark) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* BG */}
      <div style={{
        position: 'absolute', top: '10%', right: '-150px',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,87,168,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 3, color: 'var(--gla-orange)', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>
            Únete ahora
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
            ¿Listo para{' '}
            <span style={{ background: 'linear-gradient(90deg, var(--gla-blue-light), var(--gla-orange))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              construir el futuro?
            </span>
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            Inscripción gratuita para estudiantes del Gimnasio Los Arrayanes. Cupos limitados cada semestre.
          </p>
        </div>

        {/* Form card */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 28,
          padding: '52px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Top gradient border */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: 'linear-gradient(90deg, var(--gla-blue), var(--gla-orange), var(--gla-blue))',
          }} />

          <form onSubmit={handleSubmit}>
            {/* Name + Grade row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>Nombre completo *</label>
                <input
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Tu nombre"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--gla-blue)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <label style={labelStyle}>Grado *</label>
                <select
                  required
                  value={form.grade}
                  onChange={e => setForm({ ...form, grade: e.target.value })}
                  style={{ ...inputStyle, color: form.grade ? 'white' : 'rgba(255,255,255,0.3)' }}
                  onFocus={e => e.target.style.borderColor = 'var(--gla-blue)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                >
                  <option value="" disabled>Selecciona tu grado</option>
                  {grades.map(g => <option key={g} value={g} style={{ background: '#0a0e1a' }}>{g}</option>)}
                </select>
              </div>
            </div>

            {/* Email + Phone */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
              <div>
                <label style={labelStyle}>Correo electrónico</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="correo@ejemplo.com"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--gla-blue)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <label style={labelStyle}>Celular (WhatsApp)</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  placeholder="+57 300 000 0000"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--gla-blue)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
            </div>

            {/* Interests */}
            <div style={{ marginBottom: 40 }}>
              <label style={{ ...labelStyle, display: 'block', marginBottom: 16 }}>
                ¿Qué te interesa más? (selecciona varios)
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {interests.map(({ label, icon }) => (
                  <button type="button" key={label} onClick={() => toggleInterest(label)} style={{
                    background: selected.includes(label) ? 'rgba(0,87,168,0.3)' : 'rgba(255,255,255,0.05)',
                    border: selected.includes(label) ? '1px solid var(--gla-blue)' : '1px solid rgba(255,255,255,0.1)',
                    color: selected.includes(label) ? 'white' : 'rgba(255,255,255,0.55)',
                    padding: '10px 18px', borderRadius: 40,
                    fontSize: 13, fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'var(--font-body)',
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    {icon} {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button type="submit" disabled={loading} style={{
              width: '100%',
              background: loading ? 'rgba(245,166,35,0.4)' : 'var(--gla-orange)',
              color: 'var(--gla-dark)',
              border: 'none',
              padding: '18px 40px',
              borderRadius: 50,
              fontSize: 18, fontWeight: 800,
              cursor: loading ? 'wait' : 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'var(--font-display)',
              letterSpacing: 0.5,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              boxShadow: loading ? 'none' : '0 8px 30px rgba(245,166,35,0.3)',
            }}
            onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(245,166,35,0.5)'; }}}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(245,166,35,0.3)'; }}
            >
              {loading ? (
                <>
                  <div style={{ width: 20, height: 20, border: '2px solid rgba(0,0,0,0.3)', borderTop: '2px solid var(--gla-dark)', borderRadius: '50%', animation: 'rotate 0.8s linear infinite' }} />
                  Enviando...
                </>
              ) : (
                <>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  Quiero unirme al Club GLA Robotics
                </>
              )}
            </button>

            <p style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 16, lineHeight: 1.5 }}>
              Al enviar confirmas que eres estudiante del Gimnasio Los Arrayanes Bilingüe.<br />
              Te contactaremos en menos de 24 horas.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #signup form > div:first-child,
          #signup form > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: 13, fontWeight: 600,
  color: 'rgba(255,255,255,0.6)',
  marginBottom: 8,
  letterSpacing: 0.3,
};

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 12,
  padding: '14px 18px',
  fontSize: 15,
  color: 'white',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  fontFamily: 'var(--font-body)',
  appearance: 'none',
  WebkitAppearance: 'none',
  boxSizing: 'border-box',
};
