import React, { useState } from 'react';
import './ReporteActivos.css';

const ReporteActivos = ({ onBack }) => {
  const [mostrarTabla, setMostrarTabla] = useState(false);

  // Datos de ejemplo - puedes agregar más registros
  const empleadosData = [
    {
      division: 'San Martin',
      areaPersonal: 'FC-Fuera de Convenio',
      legajo: '12345',
      apellidoNombre: 'Pérez Juan',
      familiaPuestos: 'Gerente',
      grupoProfesional: 'Profesional',
      posicion: 'Analista',
      subdivision: 'Zona Norte',
      fechaAntiguedad: '2019-05-01',
      ingreso: '2020-01-15',
      fechaIndemnizacion: '2025-08-01',
      egreso: '-'
    },
    {
      division: 'Central',
      areaPersonal: 'FC-Fuera de Convenio',
      legajo: '12346',
      apellidoNombre: 'González María',
      familiaPuestos: 'Gerente',
      grupoProfesional: 'Coordinador',
      posicion: 'Coordinador de Área',
      subdivision: 'Retiro',
      fechaAntiguedad: '2018-03-10',
      ingreso: '2018-06-01',
      fechaIndemnizacion: '2025-09-01',
      egreso: '-'
    },
    {
      division: 'Belgrano Sur',
      areaPersonal: 'UF-Amba',
      legajo: '12347',
      apellidoNombre: 'Rodríguez Carlos',
      familiaPuestos: 'Subgerente',
      grupoProfesional: 'Profesional',
      posicion: 'Técnico',
      subdivision: 'Tapiales',
      fechaAntiguedad: '2020-07-15',
      ingreso: '2020-09-01',
      fechaIndemnizacion: '2026-01-01',
      egreso: '-'
    }
  ];

  const handleFiltrar = () => {
    setMostrarTabla(true);
  };

  const handleLimpiar = () => {
    setMostrarTabla(false);
  };

  return (
    <div className="reporte-container">
      <button className="btn-back" onClick={onBack}>
        ← Volver
      </button>

      <h2 className="reporte-title">Reporte de Empleados Activos a la Fecha</h2>

      {/* Contenedor horizontal de filtros */}
      <div className="filtros-activos-container">
        {/* Bloque 1: Datos personales */}
        <div className="filtro-box">
          <h3 className="filtro-title">Datos personales</h3>
          <div className="filtro-row">
            <input type="text" placeholder="Legajo" className="filtro-input" />
            <input type="text" placeholder="DNI" className="filtro-input" />
            <input type="text" placeholder="CUIL" className="filtro-input" />
          </div>
          <div className="filtro-row">
            <input type="text" placeholder="Nombre" className="filtro-input" />
            <input type="text" placeholder="Apellido" className="filtro-input" />
          </div>
          <div className="filtro-row">
            <select className="filtro-input">
              <option>Estado</option>
              <option>Activo</option>
              <option>Suspendido</option>
              <option>Licencia</option>
            </select>
            <select className="filtro-input">
              <option>Estudio alcanzado</option>
              <option>Secundario</option>
              <option>Terciario</option>
              <option>Universidad AR</option>
              <option>Posgrado</option>
            </select>
          </div>
          <div className="filtro-row">
            <select className="filtro-input">
              <option>Sexo</option>
              <option>Masculino</option>
              <option>Femenino</option>
              <option>Otro</option>
            </select>
            <select className="filtro-input">
              <option>Fuero Gremial</option>
              <option>Sí</option>
              <option>No</option>
            </select>
          </div>
        </div>

        {/* Bloque 2: Datos organizativos */}
        <div className="filtro-box">
          <h3 className="filtro-title">Datos organizativos</h3>
          <div className="filtro-row">
            <select className="filtro-input">
              <option>División</option>
              <option>Central</option>
              <option>Operativa</option>
              <option>Belgrano Sur</option>
            </select>
            <select className="filtro-input">
              <option>Subdivisión</option>
              <option>Zona Norte</option>
              <option>Zona Sur</option>
              <option>Retiro</option>
            </select>
          </div>
          <div className="filtro-row">
            <select className="filtro-input">
              <option>Área Personal</option>
              <option>LF-La Fraternidad</option>
              <option>UF-Amba</option>
              <option>FC-Fuera de Convenio</option>
            </select>
            <select className="filtro-input">
              <option>Grupo Profesional</option>
              <option>Profesional</option>
              <option>Coordinador</option>
              <option>Jefe</option>
              <option>Aprendiz</option>
            </select>
          </div>
          <div className="filtro-row">
            <select className="filtro-input">
              <option>Familia de puestos</option>
              <option>Presidente</option>
              <option>Vicepresidente</option>
              <option>Gerente General</option>
              <option>Gerente</option>
              <option>Subgerente</option>
            </select>
          </div>
          <div className="filtro-row">
            <select className="filtro-input">
              <option>Unidad Organizativa</option>
              <option>Gerencia General</option>
              <option>Gerencia RRHH</option>
              <option>Gerencia Operativa</option>
            </select>
          </div>
        </div>

        {/* Bloque 3: Fechas */}
        <div className="filtro-box">
          <h3 className="filtro-title">Fechas</h3>
          <div className="filtro-row-vertical">
            <label className="filtro-label">Fecha de ingreso desde</label>
            <input type="date" className="filtro-input" />
          </div>
          <div className="filtro-row-vertical">
            <label className="filtro-label">Fecha de ingreso hasta</label>
            <input type="date" className="filtro-input" />
          </div>
          <div className="filtro-row-vertical">
            <label className="filtro-label">Fecha de Reporte</label>
            <input type="date" className="filtro-input" />
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="acciones-container">
        <button className="btn-primary" onClick={handleFiltrar}>
          Filtrar
        </button>
        <button className="btn-secondary">
          Exportar
        </button>
        <button className="btn-outline" onClick={handleLimpiar}>
          Limpiar búsqueda
        </button>
      </div>

      {/* Tabla de resultados */}
      {mostrarTabla && (
        <div className="tabla-container">
          <div className="tabla-header-info">
            <h3 className="tabla-title">Resultado de búsqueda</h3>
            <div className="total-resultados">
              Cantidad de Registros: <span className="total-numero">{empleadosData.length}</span>
            </div>
          </div>
          <div className="tabla-wrapper">
            <table className="tabla-resultados">
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
                {empleadosData.map((empleado, index) => (
                  <tr key={index}>
                    <td>{empleado.division}</td>
                    <td>{empleado.areaPersonal}</td>
                    <td>{empleado.legajo}</td>
                    <td>{empleado.apellidoNombre}</td>
                    <td>{empleado.familiaPuestos}</td>
                    <td>{empleado.grupoProfesional}</td>
                    <td>{empleado.posicion}</td>
                    <td>{empleado.subdivision}</td>
                    <td>{empleado.fechaAntiguedad}</td>
                    <td>{empleado.ingreso}</td>
                    <td>{empleado.fechaIndemnizacion}</td>
                    <td>{empleado.egreso}</td>
                    <td>
                      <button className="btn-lupa" title="Ver detalle">
                        🔍
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReporteActivos;