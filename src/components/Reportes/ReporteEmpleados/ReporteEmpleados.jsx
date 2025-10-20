import React, { useState } from 'react';
import './ReporteEmpleados.css';

const ReporteEmpleados = ({ onBack }) => {
  const [mostrarTabla, setMostrarTabla] = useState(false);

  return (
    <div className="reporte-container">
      <button className="btn-back" onClick={onBack}>
        ← Volver
      </button>

      <h2 className="reporte-title">Reporte de Empleados</h2>

      <div className="filtros-container">
        {/* Bloque Datos personales */}
        <div className="filtro-box">
          <h3 className="filtro-title">Datos personales</h3>
          <div className="filtro-row">
            <input type="text" placeholder="Legajo" className="filtro-input" />
            <input type="text" placeholder="DNI" className="filtro-input" />
          </div>
          <div className="filtro-row">
            <input type="text" placeholder="CUIL" className="filtro-input" />
          </div>
          <div className="filtro-row">
            <input type="text" placeholder="Nombre" className="filtro-input" />
            <input
              type="text"
              placeholder="Apellido"
              className="filtro-input"
            />
          </div>
        </div>

        {/* Bloque Datos organizativos */}
        <div className="filtro-box">
          <h3 className="filtro-title">Datos organizativos</h3>
          <div className="filtro-row">
            <select className="filtro-input">
              <option>División</option>
            </select>
            <select className="filtro-input">
              <option>Subdivisión</option>
            </select>
          </div>
          <div className="filtro-row">
            <select className="filtro-input">
              <option>Área Personal</option>
            </select>
          </div>
        </div>

        {/* Bloque Fechas */}
        <div className="filtro-box">
          <h3 className="filtro-title">Fechas</h3>
          <div className="filtro-row-vertical">
            <label className="filtro-label">Fecha de ingreso desde</label>
            <input type="date" className="filtro-input" />
          </div>
          <div className="filtro-row-vertical">
            <label className="filtro-label">Fecha de ingreso hasta</label>
            <input type="date" className="filtro-input" />
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="acciones-container">
        <button
          className="btn-primary"
          onClick={() => setMostrarTabla(true)}
        >
          Filtrar
        </button>
        <button className="btn-secondary">Exportar</button>
        <button
          className="btn-outline"
          onClick={() => setMostrarTabla(false)}
        >
          Limpiar búsqueda
        </button>
      </div>

      {/* Tabla de resultados */}
      {mostrarTabla && (
        <div className="tabla-container">
          <h3 className="tabla-title">Resultado de búsqueda</h3>
          <table className="tabla-resultados">
            <thead>
              <tr>
                <th>División</th>
                <th>Área Personal</th>
                <th>Legajo</th>
                <th>Apellido y Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operativa</td>
                <td>RRHH</td>
                <td>12345</td>
                <td>Pérez Juan</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReporteEmpleados;