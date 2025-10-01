import React from 'react';
import './Navbar.css';

const Navbar = ({
  onShowButtons,
  onShowLiquidacion,
  onShowCompensaciones,
  onShowReporteQuery,
  activeSection // ← sección activa recibida desde el componente padre
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">REPORTES EMPLEADOS</div>
      <div className="navbar-actions">
        <button
          className={`nav-btn ${activeSection === 'menu' ? 'active' : ''}`}
          onClick={onShowButtons}
        >
          Datos Maestros
        </button>
        <button
          className={`nav-btn ${activeSection === 'liquidacion' ? 'active' : ''}`}
          onClick={onShowLiquidacion}
        >
          Liquidación
        </button>
        <button
          className={`nav-btn ${activeSection === 'compensaciones' ? 'active' : ''}`}
          onClick={onShowCompensaciones}
        >
          Compensaciones
        </button>
        <button
          className={`nav-btn ${activeSection === 'reporteQuery' ? 'active' : ''}`}
          onClick={onShowReporteQuery}
        >
          Reporte Query
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

