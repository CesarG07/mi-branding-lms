import React from 'react';
import '../dist/tailwind.css';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-8 text-center">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h3 className="text-brand-blue font-bold text-xl">Mi LMS Moderno</h3>
        <ul className="flex space-x-6">
          <li><a href="/about" className="hover:text-blue-300 transition-colors">Nosotros</a></li>
          <li><a href="/privacy" className="hover:text-blue-300 transition-colors">Privacidad</a></li>
          <li><a href="/contact" className="hover:text-blue-300 transition-colors">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;