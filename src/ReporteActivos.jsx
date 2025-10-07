import React, { useState } from 'react';
import './ReporteActivos.css';

const ReporteActivos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(false);

  const handleFiltrar = () => {
    setMostrarTabla(true);
  };

  return (
    <div className="reporte-wrapper">
      <h2>Reporte de Empleados Activos a la Fecha</h2>

      {/* Contenedor horizontal de filtros */}
      <div className="filtros-container-horizontal">
        {/* Bloque 1: Datos personales */}
        <div className="bloque-filtro">
          <h3>Datos personales</h3>
          <div className="fila">
            <input type="text" placeholder="Legajo" />
            <input type="text" placeholder="DNI" />
            <input type="text" placeholder="CUIL" />
          </div>
          <div className="fila">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
          </div>
          <div className="fila">
            <select><option>Estado</option></select>
            <select><option>Estudio alcanzado</option></select>
            <select><option>Sexo</option></select>
            <select><option>Fuero Gremial</option></select>
          </div>
        </div>

        {/* Bloque 2: Datos organizativos */}
        <div className="bloque-filtro">
          <h3>Datos organizativos</h3>
          <div className="fila">
            <select><option>División</option></select>
            <select><option>Subdivisión</option></select>
          </div>
          <div className="fila">
            <select><option>Área Personal</option></select>
            <select><option>Grupo Profesional</option></select>
            <select><option>Familia de puestos</option></select>
          </div>
          <div className="fila">
            <select><option>Unidad Organizativa</option></select>
          </div>
        </div>

        {/* Bloque 3: Fechas */}
        <div className="bloque-filtro">
          <h3>Fechas</h3> {/* Espacio para mantener alineación */}
          <div className="fila">
            <label>Fecha de ingreso desde</label>
            <input type="date" />
          </div>
          <div className="fila">
            <label>Fecha de ingreso hasta</label>
            <input type="date" />
          </div>
          <div className="fila">
            <label>Fecha de Reporte</label>
            <input type="date" />
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="acciones-centradas">
        <button onClick={handleFiltrar}>Filtrar</button>
        <button>Exportar</button>
        <button onClick={() => setMostrarTabla(false)}>Limpiar búsqueda</button>
      </div>

      {/* GridView */}
      {mostrarTabla && (
        <div className="tabla-empleados">
          <h3>Resultado de búsqueda</h3>
          <table>
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
                <td>RRHH</td>
                <td>12345</td>
                <td>Pérez Juan</td>
                <td>Administración</td>
                <td>Profesional</td>
                <td>Analista</td>
                <td>Zona Norte</td>
                <td>2019-05-01</td>
                <td>2020-01-15</td>
                <td>2025-08-01</td>
                <td>-</td>
                <td>
                  <button className="lupa-btn" title="Ver detalle">
                    🔍
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReporteActivos;