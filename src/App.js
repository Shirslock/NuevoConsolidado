import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ReporteEmpleados from './components/Reportes/ReporteEmpleados/ReporteEmpleados';
import ReporteActivos from './components/Reportes/ReporteActivos/ReporteActivos';
import ReporteIngresos from './components/Reportes/ReporteIngresos/ReporteIngresos';
import ReporteEgresos from './components/Reportes/ReporteEgresos/ReporteEgresos';
import FamiliaPuesto from './components/Configuraciones/FamiliaPuesto/FamiliaPuesto';
import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [activeSection, setActiveSection] = useState('Reportes');

  const handleNavigation = (view) => {
    setCurrentView(view);
    
    switch(view) {
      case 'reporteEmpleados':
        setActiveSection('Reporte de Empleados');
        break;
      case 'reporteActivos':
        setActiveSection('Reporte de Empleados Activos');
        break;
      case 'reporteIngresos':
        setActiveSection('Reporte de Ingresos');
        break;
      case 'reporteEgresos':
        setActiveSection('Reporte de Egresos');
        break;
      case 'familiaPuesto':
        setActiveSection('Familia de Puesto');
        break;
      default:
        setActiveSection('Reportes');
    }
  };

  // Navegación desde el menú de configuración del Navbar
  const handleNavigateToConfig = (opcion) => {
    if (opcion === 'familiaPuesto') {
      setCurrentView('familiaPuesto');
      setActiveSection('Familia de Puesto');
    } else if (opcion === 'otroABM') {
      // Aquí puedes agregar más opciones
      console.log('Otra configuración seleccionada');
    }
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setActiveSection('Reportes');
  };

  return (
    <div className="app">
      <Navbar
        userName="CRISTIAN ALBERTO GIL"
        activeSection={activeSection}
        onNavigateToConfig={handleNavigateToConfig}
      />

      <main className="app-main-full">
        {currentView === 'home' && <Home onNavigate={handleNavigation} />}
        
        {currentView === 'reporteEmpleados' && (
          <ReporteEmpleados onBack={handleBackToHome} />
        )}
        
        {currentView === 'reporteActivos' && (
          <ReporteActivos onBack={handleBackToHome} />
        )}
        
        {currentView === 'reporteIngresos' && (
          <ReporteIngresos onBack={handleBackToHome} />
        )}
        
        {currentView === 'reporteEgresos' && (
          <ReporteEgresos onBack={handleBackToHome} />
        )}

        {currentView === 'familiaPuesto' && (
          <FamiliaPuesto onBack={handleBackToHome} />
        )}
      </main>
    </div>
  );
};

export default App;




