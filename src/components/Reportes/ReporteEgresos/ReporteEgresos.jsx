import React, { useState } from 'react';
import './ReporteEgresos.css';

const ReporteEgresos = ({ onBack }) => {
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  
  const años = Array.from({ length: 15 }, (_, i) => 2015 + i);

  const handleFiltrar = () => {
    setMostrarResultados(true);
  };

  const handleLimpiar = () => {
    setMostrarResultados(false);
  };

  return (
    <div className="reporte-container">
      <button className="btn-back" onClick={onBack}>
        ← Volver
      </button>

      <h2 className="reporte-title">Reporte de Egresos</h2>

      {/* Filtros organizados en 3 bloques horizontales */}
      <div className="filtros-egresos-container">
        {/* Bloque 1: Unidad Organizativa */}
        <div className="filtro-box">
          <h3 className="filtro-title">Unidad Organizativa</h3>
          <div className="filtro-row-vertical">
            <select className="filtro-input">
              <option>División</option>
              <option>Central</option>
              <option>Operativa</option>
              <option>Belgrano Sur</option>
            </select>
          </div>
          <div className="filtro-row-vertical">
            <select className="filtro-input">
              <option>Área de Personal</option>
              <option>RRHH</option>
              <option>UF Amba</option>
              <option>Fuera de Convenio</option>
            </select>
          </div>
        </div>

        {/* Bloque 2: Periodo informado */}
        <div className="filtro-box">
          <h3 className="filtro-title">Periodo informado</h3>
          <div className="filtro-row-vertical">
            <label className="filtro-label">Desde</label>
            <div className="doble-select">
              <select className="filtro-input-small">
                {meses.map((mes, i) => (
                  <option key={i}>{mes}</option>
                ))}
              </select>
              <select className="filtro-input-small">
                {años.map((año, i) => (
                  <option key={i}>{año}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="filtro-row-vertical">
            <label className="filtro-label">Hasta</label>
            <div className="doble-select">
              <select className="filtro-input-small">
                {meses.map((mes, i) => (
                  <option key={i}>{mes}</option>
                ))}
              </select>
              <select className="filtro-input-small">
                {años.map((año, i) => (
                  <option key={i}>{año}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Bloque 3: Mes de Egreso */}
        <div className="filtro-box">
          <h3 className="filtro-title">Mes de Egreso</h3>
          <div className="filtro-row-vertical">
            <label className="filtro-label">Egreso</label>
            <div className="doble-select">
              <select className="filtro-input-small">
                {meses.map((mes, i) => (
                  <option key={i}>{mes}</option>
                ))}
              </select>
              <select className="filtro-input-small">
                {años.map((año, i) => (
                  <option key={i}>{año}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="acciones-container">
        <button className="btn-primary" onClick={handleFiltrar}>
          Filtrar
        </button>
        <button className="btn-outline" onClick={handleLimpiar}>
          Limpiar búsqueda
        </button>
        <button className="btn-secondary" onClick={handleFiltrar}>
          Exportar
        </button>
      </div>

      {/* Resultados */}
      {mostrarResultados && (
        <>
          {/* Indicadores */}
          <div className="indicadores-container">
            <div className="indicador">
              <strong>Bajas Puras:</strong> <span>12</span>
            </div>
            <div className="indicador">
              <strong>Transferencias por división:</strong> <span>5</span>
            </div>
            <div className="indicador-total">
              <strong>Total de Egresos:</strong> <span>17</span>
            </div>
          </div>

          {/* Tabla de resultados */}
          <div className="tabla-container">
            <h3 className="tabla-title">Resultado de búsqueda</h3>
            <div className="tabla-wrapper">
              <table className="tabla-resultados">
                <thead>
                  <tr>
                    <th>División</th>
                    <th>Legajo</th>
                    <th>Apellido y Nombre</th>
                    <th>Área Personal</th>
                    <th>Posición</th>
                    <th>Grupo Profesional</th>
                    <th>Subdivisión</th>
                    <th>Nivel estudio alcanzado</th>
                    <th>Fecha egreso</th>
                    <th>Fecha ingreso</th>
                    <th>Fecha indemnización</th>
                    <th>Motivo</th>
                    <th>Periodo informado</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Central</td>
                    <td>45678</td>
                    <td>Gómez María</td>
                    <td>Fuera de Convenio</td>
                    <td>Personal en comisión de servicios</td>
                    <td>Coordinador</td>
                    <td>Com. Servicios</td>
                    <td>Universidad AR</td>
                    <td>2025-08-10</td>
                    <td>2020-02-01</td>
                    <td>2025-08-01</td>
                    <td>Traslado entre empresas</td>
                    <td>Agosto 2025</td>
                    <td>Baja pura</td>
                  </tr>
                  <tr>
                    <td>Operativa</td>
                    <td>45679</td>
                    <td>López Carlos</td>
                    <td>RRHH</td>
                    <td>Analista Sr.</td>
                    <td>Profesional</td>
                    <td>Zona Sur</td>
                    <td>Terciario</td>
                    <td>2025-08-15</td>
                    <td>2018-03-10</td>
                    <td>2025-08-01</td>
                    <td>Renuncia</td>
                    <td>Agosto 2025</td>
                    <td>Baja pura</td>
                  </tr>
                  <tr>
                    <td>Belgrano Sur</td>
                    <td>45680</td>
                    <td>Martínez Paula</td>
                    <td>UF Amba</td>
                    <td>Jefe de Área</td>
                    <td>Jefe</td>
                    <td>Tapiales</td>
                    <td>Universidad AR</td>
                    <td>2025-08-20</td>
                    <td>2015-06-01</td>
                    <td>2025-08-01</td>
                    <td>Transferencia</td>
                    <td>Agosto 2025</td>
                    <td>Transferencia</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ReporteEgresos;