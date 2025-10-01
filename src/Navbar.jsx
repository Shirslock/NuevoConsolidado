import React from 'react';
import './Navbar.css';

const Navbar = ({ onShowButtons, onShowLiquidacion, onShowCompensaciones , onShowReporteQuery }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">REPORTES EMPLEADOS</div>
      <div className="navbar-actions">
        <button
          className="nav-btn" onClick={onShowButtons}>
          Datos Maestros
        </button>
        <button className="nav-btn" onClick={onShowLiquidacion}>
          Liquidación
        </button>
        <button className="nav-btn" onClick={onShowCompensaciones}>
          Compensaciones
        </button>
        <button className="nav-btn" onClick={onShowReporteQuery}>
          Reporte Query
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
