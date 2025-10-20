import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import ReporteEmpleados from './components/Reportes/ReporteEmpleados/ReporteEmpleados';
import ReporteActivos from './components/Reportes/ReporteActivos/ReporteActivos';
import ReporteIngresos from './components/Reportes/ReporteIngresos/ReporteIngresos';
import ReporteEgresos from './components/Reportes/ReporteEgresos/ReporteEgresos';
import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [activeSection, setActiveSection] = useState('Reportes');

  const handleNavigation = (view) => {
    setCurrentView(view);
    
    // Actualizar el título de la sección según la vista
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
      default:
        setActiveSection('Reportes');
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
        onSectionChange={setActiveSection}
      />

      <div className="app-layout">
        <Sidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <main className="app-main">
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
        </main>
      </div>
    </div>
  );
};

export default App;




