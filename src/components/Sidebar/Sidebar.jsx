import React, { useState } from 'react';
import { Home, ChevronDown } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ activeSection, onSectionChange }) => {
  const [configuracionesOpen, setConfiguracionesOpen] = useState(false);

  return (
    <aside className="sidebar">
      <button
        className={`sidebar-button ${activeSection === 'Reportes' ? 'active' : ''}`}
        onClick={() => onSectionChange('Reportes')}
      >
        <Home size={20} />
        Reportes
      </button>

      <div className="sidebar-section">
        <div
          className="sidebar-section-header"
          onClick={() => setConfiguracionesOpen(!configuracionesOpen)}
        >
          <span>CONFIGURACIONES</span>
          <ChevronDown
            size={16}
            className={`chevron ${configuracionesOpen ? 'open' : ''}`}
          />
        </div>
        
        {configuracionesOpen && (
          <div className="sidebar-section-content">
            <button
              className={`sidebar-button ${activeSection === 'Familia de Puesto' ? 'active' : ''}`}
              onClick={() => onSectionChange('Familia de Puesto')}
            >
              Familia de Puesto
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;