import React, { useState } from 'react';
import './ReporteIngresos.css';

const ReporteIngresos = ({ onBack }) => {
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

      <h2 className="reporte-title">Reporte de Ingresos</h2>

      {/* Filtros organizados en 3 bloques horizontales */}
      <div className="filtros-ingresos-container">
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

        {/* Bloque 3: Mes de Ingreso */}
        <div className="filtro-box">
          <h3 className="filtro-title">Mes de Ingreso</h3>
          <div className="filtro-row-vertical">
            <label className="filtro-label">Ingreso</label>
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
              <strong>Altas Puras:</strong> <span>12</span>
            </div>
            <div className="indicador">
              <strong>Transferencias por división:</strong> <span>5</span>
            </div>
            <div className="indicador-total">
              <strong>Total de Ingresos:</strong> <span>17</span>
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
                    <th>Área de Personal</th>
                    <th>Posición</th>
                    <th>Grupo Profesional</th>
                    <th>Subdivisión</th>
                    <th>Fecha Ingreso</th>
                    <th>Motivo</th>
                    <th>Periodo Informado</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Belgrano Sur</td>
                    <td>78901</td>
                    <td>Fernández Lucía</td>
                    <td>UF Amba</td>
                    <td>Inicial Limpieza</td>
                    <td>Aprendiz</td>
                    <td>Tapiales</td>
                    <td>2023-04-01</td>
                    <td>Alta</td>
                    <td>Septiembre 2025</td>
                    <td>Alta pura</td>
                  </tr>
                  <tr>
                    <td>Central</td>
                    <td>78902</td>
                    <td>González Martín</td>
                    <td>RRHH</td>
                    <td>Analista Jr.</td>
                    <td>Profesional</td>
                    <td>Retiro</td>
                    <td>2023-05-15</td>
                    <td>Alta</td>
                    <td>Septiembre 2025</td>
                    <td>Alta pura</td>
                  </tr>
                  <tr>
                    <td>Operativa</td>
                    <td>78903</td>
                    <td>Rodríguez Ana</td>
                    <td>UF Amba</td>
                    <td>Coordinador</td>
                    <td>Coordinador</td>
                    <td>Constitución</td>
                    <td>2023-06-20</td>
                    <td>Transferencia</td>
                    <td>Septiembre 2025</td>
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

export default ReporteIngresos;