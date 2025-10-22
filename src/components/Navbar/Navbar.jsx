import React, { useState, useRef, useEffect } from 'react';
import { Menu, Settings } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ userName, activeSection, onNavigateToConfig }) => {
  const [menuConfigOpen, setMenuConfigOpen] = useState(false);
  const menuRef = useRef(null);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuConfigOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleConfigClick = (opcion) => {
    setMenuConfigOpen(false);
    if (onNavigateToConfig) {
      onNavigateToConfig(opcion);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Menu size={24} className="menu-icon" />
        <span className="navbar-logo">Consolidado</span>
      </div>
      
      <div className="navbar-center">
        {activeSection}
      </div>

      <div className="navbar-right">
        <span className="user-welcome">
          Hola, <strong>{userName}</strong>
        </span>

        {/* Ruedita de configuración */}
        <div className="config-container" ref={menuRef}>
          <button 
            className="config-button"
            onClick={() => setMenuConfigOpen(!menuConfigOpen)}
            title="Configuraciones"
          >
            <Settings size={20} />
          </button>

          {/* Menú desplegable */}
          {menuConfigOpen && (
            <div className="config-menu">
              <div className="config-menu-header">Configuraciones</div>
              <button 
                className="config-menu-item"
                onClick={() => handleConfigClick('familiaPuesto')}
              >
                Familia de Puesto
              </button>
              <button 
                className="config-menu-item"
                onClick={() => handleConfigClick('otroABM')}
              >
                Otra Configuración
              </button>
            </div>
          )}
        </div>

        <div className="user-avatar">
          {userName.split(' ').map(n => n[0]).join('').substring(0, 2)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;