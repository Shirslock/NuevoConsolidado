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
    <div className="ingresos-wrapper">
      <h2>Reporte de Egresos</h2>

      <div className="filtros-ingresos">
        <select><option>División</option></select>
        <select><option>Área de Personal</option></select>

        <div className="mes-año">
          <label>Mes/Año informado desde</label>
          <div className="doble-select">
            <select>{meses.map((mes, i) => <option key={i}>{mes}</option>)}</select>
            <select>{años.map((año, i) => <option key={i}>{año}</option>)}</select>
          </div>
        </div>

        <div className="mes-año">
          <label>Mes/Año informado hasta</label>
          <div className="doble-select">
            <select>{meses.map((mes, i) => <option key={i}>{mes}</option>)}</select>
            <select>{años.map((año, i) => <option key={i}>{año}</option>)}</select>
          </div>
        </div>

        <div className="mes-año">
          <label>Mes/Año egreso</label>
          <div className="doble-select">
            <select>{meses.map((mes, i) => <option key={i}>{mes}</option>)}</select>
            <select>{años.map((año, i) => <option key={i}>{año}</option>)}</select>
          </div>
        </div>
      </div>

      <div className="acciones-centradas">
        <button onClick={handleFiltrar}>Filtrar</button>
        <button onClick={() => setMostrarResultados(false)}>Limpiar búsqueda</button>
        <button onClick={handleFiltrar}>Exportar</button>
      </div>

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
                  <th>Correspondencia</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Central</td>
                  <td>45678</td>
                  <td>Gómez María</td>
                  <td>Fuera de Convenio</td>
                  <td>Personal en comision de servicios</td>
                  <td>Coordinador</td>
                  <td>Com. Servicios</td>
                  <td>Universidad AR</td>
                  <td>2025-08-10</td>
                  <td>2020-02-01</td>
                  <td>2025-08-01</td>
                  <td>Traslado entre empresas</td>
                  <td>Agosto 2025</td>
                  <td>Correspondiente</td>
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

export default ReporteIngresos;

