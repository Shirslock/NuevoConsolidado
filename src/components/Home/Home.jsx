import React, { useState } from 'react';
import AppCard from '../AppCard/AppCard';
import './Home.css';

const Home = ({ onNavigate }) => {
  const [favorites, setFavorites] = useState({
    reporteEmpleados: true,
    reporteIngresos: true,
    
  });

  const toggleFavorite = (key) => {
    setFavorites((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const datosMaestrosApps = [
    {
      id: 'reporteEmpleados',
      icon: '👥',
      title: 'Reporte de Empleados',
      view: 'reporteEmpleados',
      favoriteKey: 'reporteEmpleados'
    },
    {
      id: 'reporteActivos',
      icon: '✅',
      title: 'Reporte de Activos',
      view: 'reporteActivos',
      favoriteKey: 'reporteActivos'
    },
    {
      id: 'reporteIngresos',
      icon: '📥',
      title: 'Reporte de Ingresos',
      view: 'reporteIngresos',
      favoriteKey: 'reporteIngresos'
    },
    {
      id: 'reporteEgresos',
      icon: '📤',
      title: 'Reporte de Egresos',
      view: 'reporteEgresos',
      favoriteKey: 'reporteEgresos'
    }
  ];

  const favoritosApps = [
    {
      id: 'reporteEmpleados',
      icon: '👥',
      title: 'Reporte de Empleados',
      view: 'reporteEmpleados',
      favoriteKey: 'reporteEmpleados'
    },
    {
      id: 'reporteIngresos',
      icon: '📥',
      title: 'Reporte de Ingresos',
      view: 'reporteIngresos',
      favoriteKey: 'reporteIngresos'
    },
    
   
  ];

  const transversalApps = [
    {
      id: 'acceso',
      icon: '',
      title: '',
      favoriteKey: 'acceso'
    },
    { id: 'aris',
      icon: '', 
      title: '', 
      favoriteKey: 'aris' },
    {
      id: 'campus',
      icon: '',
      title: '',
      favoriteKey: 'campus'
    },
    {
      id: 'portal',
      icon: '',
      title: '',
      favoriteKey: 'portal'
    },
    { id: 'sap',
      icon: '', 
      title: '', 
      favoriteKey: 'sap' }
  ];

  return (
    <div className="home-container">
      {/* Sección Mis Favoritos - PRIMERO */}
      <section className="section-box">
        <h2 className="section-title">Mis favoritos</h2>
        <div className="cards-grid">
          {favoritosApps.map((app) => (
            <AppCard
              key={app.id}
              icon={app.icon}
              title={app.title}
              onClick={() => app.view ? onNavigate(app.view) : console.log(`Clicked ${app.title}`)}
              isFavorite={favorites[app.favoriteKey]}
              onToggleFavorite={() => toggleFavorite(app.favoriteKey)}
            />
          ))}
        </div>
      </section>

      {/* Sección Datos Maestros - SEGUNDO */}
      <section className="section-box">
        <h2 className="section-title">Datos Maestros</h2>
        <div className="cards-grid">
          {datosMaestrosApps.map((app) => (
            <AppCard
              key={app.id}
              icon={app.icon}
              title={app.title}
              onClick={() => app.view && onNavigate(app.view)}
              isFavorite={favorites[app.favoriteKey]}
              onToggleFavorite={() => toggleFavorite(app.favoriteKey)}
            />
          ))}
        </div>
      </section>

      {/* Sección Transversal - TERCERO */}
      <section className="section-box">
        <h2 className="section-title">Liquidacion</h2>
        <div className="cards-grid">
          {transversalApps.map((app) => (
            <AppCard
              key={app.id}
              icon={app.icon}
              title={app.title}
              onClick={() => console.log(`Clicked ${app.title}`)}
              isFavorite={favorites[app.favoriteKey]}
              onToggleFavorite={() => toggleFavorite(app.favoriteKey)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;