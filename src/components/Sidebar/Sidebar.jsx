import React, { useState } from 'react';
import { Home, ChevronDown } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ activeSection, onSectionChange }) => {
  const [soporteOpen, setSoporteOpen] = useState(false);

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
          onClick={() => setSoporteOpen(!soporteOpen)}
        >
          <span>SOPORTE</span>
          <ChevronDown
            size={16}
            className={`chevron ${soporteOpen ? 'open' : ''}`}
          />
        </div>
        
        {soporteOpen && (
          <div className="sidebar-section-content">
            {/* Aquí puedes agregar opciones de soporte */}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;