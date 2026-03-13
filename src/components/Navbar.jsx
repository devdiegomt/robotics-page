import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Beneficios', href: '#benefits' },
  { label: 'Logros', href: '#achievements' },
  { label: 'Proyectos', href: '#gallery' },
  { label: 'Cronograma', href: '#schedule' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Inscríbete', href: '#signup', cta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      padding: scrolled ? '12px 40px' : '20px 40px',
      background: scrolled ? 'rgba(10,14,26,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,87,168,0.2)' : 'none',
      transition: 'all 0.4s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 38, height: 38,
          background: 'var(--gla-blue)',
          borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 14,
          letterSpacing: 1,
        }}>GLA</div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, lineHeight: 1 }}>
            Robotics Club
          </div>
          <div style={{ fontSize: 10, color: 'var(--gla-orange)', fontFamily: 'var(--font-mono)', letterSpacing: 2, textTransform: 'uppercase' }}>
            Los Arrayanes
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="desktop-nav">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} style={{
            color: link.cta ? 'var(--gla-dark)' : 'rgba(255,255,255,0.75)',
            textDecoration: 'none',
            fontSize: 13,
            fontWeight: link.cta ? 700 : 500,
            padding: link.cta ? '8px 20px' : '8px 12px',
            borderRadius: link.cta ? 40 : 6,
            background: link.cta ? 'var(--gla-orange)' : 'transparent',
            transition: 'all 0.2s ease',
            letterSpacing: 0.3,
          }}
          onMouseEnter={e => {
            if (!link.cta) e.target.style.color = 'white';
            if (!link.cta) e.target.style.background = 'rgba(0,87,168,0.2)';
          }}
          onMouseLeave={e => {
            if (!link.cta) e.target.style.color = 'rgba(255,255,255,0.75)';
            if (!link.cta) e.target.style.background = 'transparent';
          }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: 'none',
        background: 'none', border: 'none', cursor: 'pointer',
        color: 'white', padding: 8,
      }} className="hamburger">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {menuOpen
            ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
          }
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 60, left: 0, right: 0,
          background: 'rgba(10,14,26,0.98)',
          backdropFilter: 'blur(20px)',
          padding: '20px',
          display: 'flex', flexDirection: 'column', gap: 4,
          borderBottom: '1px solid rgba(0,87,168,0.3)',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              color: link.cta ? 'var(--gla-orange)' : 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
              fontSize: 16, fontWeight: 600,
              padding: '12px 16px',
              borderRadius: 8,
              background: link.cta ? 'rgba(245,166,35,0.1)' : 'transparent',
            }}>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
