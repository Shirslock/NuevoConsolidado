import React, { useState } from 'react';
import './ReporteIngresos.css';

const ReporteIngresos = () => {
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  const años = Array.from({ length: 15 }, (_, i) => 2015 + i);

  const handleFiltrar = () => {
    setMostrarResultados(true);
  };

  return (
    <div className="egresos-wrapper">
      <h2>Reporte de Ingresos</h2>

      {/* Filtros organizados en 3 bloques horizontales */}
      <div className="filtros-egresos-horizontal">
        {/* Bloque 1: Unidad Organizativa */}
        <div className="bloque-egreso">
          <h3>Unidad Organizativa</h3>
          <select><option>División</option></select>
          <select><option>Área de Personal</option></select>
        </div>

        {/* Bloque 2: Periodo informado */}
        <div className="bloque-egreso">
          <h3>Periodo informado</h3>
          <label>Desde</label>
          <div className="doble-select">
            <select>{meses.map((mes, i) => <option key={i}>{mes}</option>)}</select>
            <select>{años.map((año, i) => <option key={i}>{año}</option>)}</select>
          </div>
          <label>Hasta</label>
          <div className="doble-select">
            <select>{meses.map((mes, i) => <option key={i}>{mes}</option>)}</select>
            <select>{años.map((año, i) => <option key={i}>{año}</option>)}</select>
          </div>
        </div>

        {/* Bloque 3: Mes de egreso */}
        <div className="bloque-egreso">
          <h3>Mes de Ingreso</h3>
          <label>Ingreso</label>
          <div className="doble-select">
            <select>{meses.map((mes, i) => <option key={i}>{mes}</option>)}</select>
            <select>{años.map((año, i) => <option key={i}>{año}</option>)}</select>
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="acciones-centradas">
        <button onClick={handleFiltrar}>Filtrar</button>
        <button onClick={() => setMostrarResultados(false)}>Limpiar búsqueda</button>
        <button onClick={handleFiltrar}>Exportar</button>
      </div>

      {/* Resultados */}
      {mostrarResultados && (
        <>
          <div className="indicadores-egresos">
            <div><strong>Altas Puras:</strong> 12</div>
            <div><strong>Transferencias por división:</strong> 5</div>
            <div><strong>Total de Ingresos:</strong> 17</div>
          </div>

          <div className="tabla-ingresos">
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

export default ReporteIngresos;

