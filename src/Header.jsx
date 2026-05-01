import React from 'react';
import './tailwind.css';
import logo from './logo.png';

const Header = () => {
  return (
    <header className="bg-white shadow w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* 
            El enlace ahora apunta directamente a la ruta general "/", 
            asegurando que todos los usuarios (logueados o no) vayan al mismo lugar,
            solucionando el bug reportado por QA.
          */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo CIDE PUCP" className="h-10 object-contain" />
          </a>
        </div>
        {/* Espacio reservado para futuros elementos de navegación (Login, Register, etc.) */}
        <div></div>
      </div>
    </header>
  );
};

export default Header;
