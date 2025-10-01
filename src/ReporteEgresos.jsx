import React, { useState } from 'react';
import './ReporteEgresos.css';

const ReporteEgresos = () => {
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const handleFiltrar = () => {
    setMostrarResultados(true);
  };

  return (
    <div className="egresos-wrapper">
      <h2>Reporte de Ingresos</h2>

      <div className="filtros-egresos">
        <select><option>División</option></select>
        <select><option>Área de Personal</option></select>
        <select><option>Mes informado desde</option></select>
        <select><option>Año informado desde</option></select>
        <select><option>Mes informado hasta</option></select>
        <select><option>Año informado hasta</option></select>
        <select><option>Mes egreso</option></select>
        <select><option>Año egreso</option></select>
      </div>

      <div className="acciones-centradas">
        <button onClick={handleFiltrar}>Filtrar</button>
        <button onClick={() => setMostrarResultados(false)}>Limpiar búsqueda</button>
      </div>

      {mostrarResultados && (
        <>
          <div className="indicadores-egresos">
            <div><strong>Altas Puras:</strong> 9</div>
            <div><strong>Transferencias por División:</strong> 3</div>
            <div><strong>Total de ingresos:</strong> 12</div>
          </div>

          <div className="tabla-egresos">
            <h3>Resultado de búsqueda</h3>
            <table>
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
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ReporteEgresos;
