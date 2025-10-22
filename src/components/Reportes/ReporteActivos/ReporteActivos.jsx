import React, { useState } from 'react';
import './ReporteActivos.css';

const ReporteActivos = ({ onBack }) => {
  const [mostrarTabla, setMostrarTabla] = useState(false);

  const handleFiltrar = () => {
    setMostrarTabla(true);
  };

  const handleLimpiar = () => {
    setMostrarTabla(false);
  };

  return (
    <div className="reporte-container">
      <button className="btn-back" onClick={onBack}>
        ← Volver
      </button>

      <h2 className="reporte-title">Reporte de Empleados Activos a la Fecha</h2>

      {/* Contenedor horizontal de filtros */}
      <div className="filtros-activos-container">
        {/* Bloque 1: Datos personales */}
        <div className="filtro-box">
          <h3 className="filtro-title">Datos personales</h3>
          <div className="filtro-row">
            <input type="text" placeholder="Legajo" className="filtro-input" />
            <input type="text" placeholder="DNI" className="filtro-input" />
            <input type="text" placeholder="CUIL" className="filtro-input" />
          </div>
          <div className="filtro-row">
            <input type="text" placeholder="Nombre" className="filtro-input" />
            <input type="text" placeholder="Apellido" className="filtro-input" />
          </div>
          <div className="filtro-row">
            <select className="filtro-input">
              <option>Estado</option>
              <option>Activo</option>
              <option>Suspendido</option>
              <option>Licencia</option>
            </select>
            <select className="filtro-input">
              <option>Estudio alcanzado</option>
              <option>Secundario</option>
              <option>Terciario</option>
              <option>Universidad AR</option>
              <option>Posgrado</option>
            </select>
          </div>
          <div className="filtro-row">
            <select className="filtro-input">
              <option>Sexo</option>
              <option>Masculino</option>
              <option>Femenino</option>
              <option>Otro</option>
            </select>
            <select className="filtro-input">
              <option>Fuero Gremial</option>
              <option>Sí</option>
              <option>No</option>
            </select>
          </div>
        </div>

        {/* Bloque 2: Datos organizativos */}
        <div className="filtro-box">
          <h3 className="filtro-title">Datos organizativos</h3>
          <div className="filtro-row">
            <select className="filtro-input">
              <option>División</option>
              <option>Central</option>
              <option>San Martin</option>
              <option>Belgrano Sur</option>
            </select>
            <select className="filtro-input">
              <option>Subdivisión</option>
              <option>Zona Norte</option>
              <option>Zona Sur</option>
              <option>Retiro</option>
            </select>
          </div>
          <div className="filtro-row">
            <select className="filtro-input">
              <option>Área Personal</option>
              <option>AC-APDFA Central</option>
              <option>UF-Amba</option>
              <option>LF-La Fraternidad</option>
            </select>
            <select className="filtro-input">
              <option>Grupo Profesional</option>
              <option>Profesional</option>
              <option>Coordinador</option>
              <option>Jefe</option>
              <option>Aprendiz</option>
            </select>
          </div>
          <div className="filtro-row">
            <select className="filtro-input">
              <option>Familia de puestos</option>
              <option>Presidente</option>
              <option>VicePresidente</option>
              <option>Gerente General</option>
              <option>Gerente</option>
              <option>Subgerente</option>
            </select>
          </div>
          <div className="filtro-row">
            <select className="filtro-input">
              <option>Unidad Organizativa</option>
              <option>Todos</option>
              <option>Presidencia</option>
              <option>Gerencia Seguridad Operacional</option>
              <option>Jefatura de Gabinete</option>
              <option>Secretaria General</option>
            </select>
          </div>
        </div>

        {/* Bloque 3: Fechas */}
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
          <div className="filtro-row-vertical">
            <label className="filtro-label">Fecha de Reporte</label>
            <input type="date" className="filtro-input" />
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="acciones-container">
        <button className="btn-primary" onClick={handleFiltrar}>
          Filtrar
        </button>
        <button className="btn-secondary">
          Exportar
        </button>
        <button className="btn-outline" onClick={handleLimpiar}>
          Limpiar búsqueda
        </button>
      </div>

      {/* Tabla de resultados */}
      {mostrarTabla && (
        <div className="tabla-container">
          <h3 className="tabla-title">Resultado de búsqueda</h3>
          <div className="tabla-wrapper">
            <table className="tabla-resultados">
              <thead>
                <tr>
                  <th>División</th>
                  <th>Área de Personal</th>
                  <th>Legajo</th>
                  <th>Apellido y Nombre</th>
                  <th>Familia de Puestos</th>
                  <th>Grupo Profesional</th>
                  <th>Posición</th>
                  <th>Subdivisión</th>
                  <th>Fecha de Antigüedad</th>
                  <th>Ingreso</th>
                  <th>Fecha Indemnización</th>
                  <th>Egreso</th>
                  <th>Detalle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Operativa</td>
                  <td>AC-APDFA Central</td>
                  <td>12345</td>
                  <td>Pérez Juan</td>
                  <td>Presidente</td>
                  <td>Profesional</td>
                  <td>Analista</td>
                  <td>Zona Norte</td>
                  <td>2019-05-01</td>
                  <td>2020-01-15</td>
                  <td>2025-08-01</td>
                  <td>-</td>
                  <td>
                    <button className="btn-lupa" title="Ver detalle">
                      🔍
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Central</td>
                  <td>FC-Fuera de Convenio</td>
                  <td>12346</td>
                  <td>González María</td>
                  <td>Vicepresidente</td>
                  <td>Coordinador</td>
                  <td>Coordinador de Área</td>
                  <td>Retiro</td>
                  <td>2018-03-10</td>
                  <td>2018-06-01</td>
                  <td>2025-09-01</td>
                  <td>-</td>
                  <td>
                    <button className="btn-lupa" title="Ver detalle">
                      🔍
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Belgrano Sur</td>
                  <td>UF-Amba</td>
                  <td>12347</td>
                  <td>Rodríguez Carlos</td>
                  <td>Asesos Gerencial</td>
                  <td>Profesional</td>
                  <td>Técnico</td>
                  <td>Tapiales</td>
                  <td>2020-07-15</td>
                  <td>2020-09-01</td>
                  <td>2026-01-01</td>
                  <td>-</td>
                  <td>
                    <button className="btn-lupa" title="Ver detalle">
                      🔍
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReporteActivos;