import React, { useState } from 'react';
import Navbar from './Navbar';
import ReporteEmpleados from './ReporteEmpleados';
import ReporteIngresos from './ReporteIngresos';
import ReporteEgresos from './ReporteEgresos';
import ReporteActivos from './ReporteActivos';
import './App.css';

function App() {
  const [vista, setVista] = useState('menu');

  const mostrarMenu = () => setVista('menu');
  const mostrarReporte = () => setVista('reporte');
  const mostrarActivos = () => setVista('activos');
  const mostrarIngresos = () => setVista('ingresos');
  const mostrarEgresos = () => setVista('egresos');
  const mostrarLiquidacion = () => setVista('liquidacion');
  const mostrarCompensaciones = () => setVista('compensaciones');
  const mostrarQuery = () => setVista('reporteQuery');

  return (
    <div>
      <Navbar
        onShowButtons={mostrarMenu}
        onShowLiquidacion={mostrarLiquidacion}
        onShowCompensaciones={mostrarCompensaciones}
        onShowReporteQuery={mostrarQuery}
        activeSection={vista} // ← pasamos la vista actual al Navbar
      />
      <main className="main-content">
        {vista === 'menu' && (
          <div className="button-group">
            <button onClick={mostrarReporte}>Reporte Empleados al Cierre</button>
            <button onClick={mostrarActivos}>Empleados Activos a la Fecha</button>
            <button onClick={mostrarIngresos}>Reporte De Ingresos</button>
            <button onClick={mostrarEgresos}>Reporte De Egresos</button>
            
          </div>
        )}

        {vista === 'reporte' && <ReporteEmpleados />}
        {vista === 'activos' && <ReporteActivos />}
        {vista === 'ingresos' && <ReporteIngresos />}
        {vista === 'egresos' && <ReporteEgresos />}
        {vista === 'liquidacion' && (
          <div className="seccion-liquidacion">
            <label className="grupo-label">Costo Laboral</label>
            <div className="grupo-botones">
            <button>Informe De Agrupamiento De Concepto SOFSE</button>
            <button>Informe Detallado De Los Conceptos</button>
            <button>Acumulado De Conceptos</button>
            <button>Informe Masa Salarial y Costo Laboral</button>
            <button>Liquidacion Empleado</button>
            <button>Horas Extras</button>
            <button>Costo Laboral Por Empleado</button>
            </div>
          
            <label className="grupo-label">Informes</label>
            <div className="grupo-botones">
              <button>Informe Ausentismo</button>
              <button>Horas Extras</button>
              <button>Categoria Entre Fechas</button>
              <button>Posiciones Entre Fechas</button>
            </div>
          </div>

            
            

        )}

        {vista === 'compensaciones' && (
          <div className="seccion-compensaciones">
           {/* Grupo 1: Costo Laboral */}
            <label className="grupo-label">Costo Laboral</label>
            <div className="grupo-botones">
              <button>Acumulado de Conceptos</button>
              <button>Liquidación de Empleados</button>
              <button>Informe de Valores Fijos Conformados</button>
              <button>Informe de Valores Variables</button>
              <button>Variación Empleados</button>
            </div>

            {/* Grupo 2: Datos */}
            <label className="grupo-label">Datos</label>
            <div className="grupo-botones">
              <button>Clasificación de Conceptos</button>
              <button>Valor Viático</button>
            </div>
          </div>
        )}


        {vista === 'reporteQuery' && (
          <div className="button-group">
            <button>Reporte de Autogestion</button>
            
          </div>
        )}
      </main>
    </div>
  );
}

export default App;




