import React from 'react';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '30px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <div>
          <h3 style={{ margin: '0 0 10px 0', color: '#4da6ff' }}>Mi Plataforma LMS</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#ccc' }}>
            Transformando la educación secundaria.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Sobre Nosotros</a>
          <a href="/privacy" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Privacidad</a>
          <a href="/support" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Soporte</a>
        </div>

      </div>
      <div style={{ textAlign: 'center', marginTop: '20px', borderTop: '1px solid #333', paddingTop: '10px', fontSize: '12px', color: '#888' }}>
        &copy; {new Date().getFullYear()} Mi Institución. Todos los derechos reservados.
      </div>
    </div>
  );
};

export default Footer;