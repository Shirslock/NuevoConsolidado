import React, { useState } from 'react';
import './ReporteEmpleados.css';

const ReporteEmpleados = () => {
  const [mostrarTabla, setMostrarTabla] = useState(false);

  const handleFiltrar = () => {
    setMostrarTabla(true);
  };

  return (
    <div className="reporte-wrapper">
      <h2>Empleados Activos a la Fecha</h2>

      <div className="filtros-container">
        {/* Bloque Izquierdo */}
        <div className="bloque bloque-izquierdo">
          <select><option>Division</option></select>
          <select><option>Subdivision</option></select>
          <select><option>Área Personal / Grupo Profesional</option></select>
          <select><option>Familia de puestos</option></select>
          <input type="text" placeholder="Legajo" />
          <input type="text" placeholder="DNI" />
          <input type="text" placeholder="CUIL" />
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <select><option>Unidad Organizativa</option></select>
          <select><option>Estado</option></select>
        </div>

        {/* Bloque Derecho */}
        <div className="bloque bloque-derecho">
          <select><option>Estudio alcanzado</option></select>
          <select><option>Sexo</option></select>
          <select><option>Fuero Gremial</option></select>
          <label>Fecha de ingreso desde</label>
          <input type="date" />
          <label>Fecha de ingreso hasta</label>
          <input type="date" />
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

export default ReporteEmpleados;

