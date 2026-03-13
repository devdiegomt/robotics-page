import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: '#060a14',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '60px 40px 40px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 52 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 44, height: 44,
                background: 'var(--gla-blue)',
                borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16,
              }}>GLA</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>Robotics Club</div>
                <div style={{ fontSize: 11, color: 'var(--gla-orange)', fontFamily: 'var(--font-mono)', letterSpacing: 1.5, textTransform: 'uppercase' }}>Los Arrayanes</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 280 }}>
              Formando a los ingenieros, programadores y líderes tecnológicos del mañana desde las aulas del Gimnasio Los Arrayanes Bilingüe.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, marginBottom: 20, color: 'rgba(255,255,255,0.8)' }}>
              Explorar
            </div>
            {['Beneficios', 'Proyectos', 'Cronograma', 'Testimonios', 'Inscríbete'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace('í', 'i')}`} style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'white'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
              >{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, marginBottom: 20, color: 'rgba(255,255,255,0.8)' }}>
              Contacto
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8 }}>
              <div>📍 Cl. 219 No 50-10</div>
              <div>Bogotá, Colombia</div>
              <div style={{ marginTop: 10 }}>📞 317 644 1202</div>
              <div>✉️ robotics@gla.edu.co</div>
            </div>
          </div>

          {/* GLA Official */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, marginBottom: 20, color: 'rgba(255,255,255,0.8)' }}>
              GLA Oficial
            </div>
            <a href="https://gla.edu.co" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(0,87,168,0.15)',
              border: '1px solid rgba(0,87,168,0.3)',
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              padding: '10px 16px', borderRadius: 10,
              fontSize: 13, fontWeight: 600,
              marginBottom: 12,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gla-blue)'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,87,168,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
              gla.edu.co
            </a>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>
              Gimnasio Los Arrayanes<br />Bilingüe — Bogotá, Colombia
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 28,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>
            © 2025 Club de Robótica GLA · Gimnasio Los Arrayanes Bilingüe · Todos los derechos reservados
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>
            v1.0.0 · Built with ❤️ by GLA Dev Team
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
