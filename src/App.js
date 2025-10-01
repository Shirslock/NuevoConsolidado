import React, { useState } from 'react';
import Navbar from './Navbar';
import ReporteEmpleados from './ReporteEmpleados';
import ReporteIngresos from './ReporteIngresos';
import ReporteEgresos from './ReporteEgresos';
import './App.css';

function App() {
  const [vista, setVista] = useState('menu');

  const mostrarMenu = () => setVista('menu');
  const mostrarReporte = () => setVista('reporte');
  const mostrarIngresos = () => setVista('ingresos');
  const mostrarEgresos = () => setVista('egresos');
  const mostrarLiquidacion = () => setVista('liquidacion');
  const mostrarCompensaciones = () => setVista ('compensaciones');
  const mostrarQuery = () => setVista('reporteQuery')

  return (
    <div>
      <Navbar onShowButtons={mostrarMenu} onShowLiquidacion={mostrarLiquidacion} onShowCompensaciones={mostrarCompensaciones} onShowReporteQuery={mostrarQuery} />
      <main className="main-content">
        {vista === 'menu' && (
          <div className="button-group">
            <button onClick={mostrarReporte}>Reporte empleados</button>
            <button onClick={mostrarIngresos}>Reporte de ingresos</button>
            <button onClick={mostrarEgresos}>Reporte de egresos</button>
            <button onClick={() => alert('Empleados activos')}>Empleados activos</button>
          </div>
        )}

        {vista === 'reporte' && <ReporteEmpleados />}
        {vista === 'ingresos' && <ReporteIngresos />}
        {vista === 'egresos' && <ReporteEgresos />}
        {vista === 'liquidacion' && (
          <div className="button-group">
            {/* Acá irán los botones que me vas a pasar */}
            <button>Informe De Agrupamiento De Concepto SOFSE</button>
            <button>Informe Detallado De Los Conceptos</button>
            <button>Acumulado De Conceptos</button>
            <button>Informe Masa Salarial y Costo Laboral</button>
            <button>Informe Ausentismo</button>
            <button>Liquidacion Empleado</button>
            <button>Horas Extras</button>
            <button>Costo Laboral Por Empleado</button>
            <button>Categoria Entre Fechas</button>
            <button>Posiciones Entre Fechas</button>
          </div>
        )}
        {vista === 'compensaciones' && (
          <div className='button-group'>
            <button>Acumulado de Conceptos</button>
            <button>Liquidacion de Empleados</button>
            <button>Clasificacion de Conceptos</button>
            <button>Informe de Valores Fijos Conformados</button>
            <button>Informe de Valores Variables</button>
            <button>Variacion Empleados</button>
            <button>Valor Viatico</button>
          </div>
        )}
        {vista === 'reporteQuery' && (
          <div className='button-group'>
            <button>Reporte de Autogestion</button>
            <button>Nomina Gestionable</button>
          </div>
        )}
        

      </main>
    </div>
  );
}

export default App;



