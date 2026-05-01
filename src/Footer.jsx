import React from 'react';
import './tailwind.css';
import logo from './logo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-500">Impulsado por</span>
          <img src={logo} alt="Logo" className="h-8 object-contain" />
        </div>

        <ul className="flex space-x-8">
          <li>
            <a href="/about" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Nosotros</a>
          </li>
          <li>
            <a href="/privacy" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Privacidad</a>
          </li>
          <li>
            <a href="/contact" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Contacto</a>
          </li>
        </ul>

        <div />
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-6">
        <p className="text-xs text-gray-400">Copyright ©2026. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;