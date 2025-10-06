import React, { useState } from 'react';
import './ReporteEgresos.css';

const ReporteEgresos = () => {
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
      <h2>Reporte de Egresos</h2>

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
          <h3>Mes de Egreso</h3>
          <label>Egreso</label>
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
            <div><strong>Bajas Puras:</strong> 12</div>
            <div><strong>Transferencias por división:</strong> 5</div>
            <div><strong>Total de Egresos:</strong> 17</div>
          </div>

          <div className="tabla-ingresos">
            <h3>Resultado de búsqueda</h3>
            <table>
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
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ReporteEgresos;

