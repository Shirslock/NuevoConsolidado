import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';
import './FamiliaPuesto.css';

const FamiliaPuesto = ({ onBack }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [familiaSeleccionada, setFamiliaSeleccionada] = useState(null);
  
  const [formulario, setFormulario] = useState({
    codigo: '',
    nombre: '',
    idFuncion: '',
    estado: 'Activo'
  });

  const [familias, setFamilias] = useState([
    {
      id: 1,
      codigo: 'FP001',
      nombre: 'Presidente',
      funcion: '300000001',
      estado: 'Activo'
    },
    {
      id: 2,
      codigo: 'FP002',
      nombre: 'Vicepresidente',
      funcion: '300000002',
      estado: 'Activo'
    },
    {
      id: 3,
      codigo: 'FP003',
      nombre: 'Director',
      funcion: '300000003',
      estado: 'Inactivo'
    }
  ]);

  const funciones = [
    { id: 1, nombre: '300000001' },
    { id: 2, nombre: '300000002' },
    { id: 3, nombre: '300000003' },
    { id: 4, nombre: '300000004' },
    { id: 5, nombre: '300000005' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNuevo = () => {
    setFormulario({
      codigo: '',
      nombre: '',
      idFuncion: '',
      estado: 'Activo'
    });
    setModoEdicion(false);
    setMostrarFormulario(true);
  };

  const handleEditar = (familia) => {
    setFamiliaSeleccionada(familia);
    setFormulario({
      codigo: familia.codigo,
      nombre: familia.nombre,
      idFuncion: funciones.find(f => f.nombre === familia.funcion)?.id.toString() || '',
      estado: familia.estado
    });
    setModoEdicion(true);
    setMostrarFormulario(true);
  };

  const handleEliminar = (id) => {
    if (window.confirm('¿Está seguro de eliminar esta familia de puesto?')) {
      setFamilias(familias.filter(f => f.id !== id));
    }
  };

  const handleGuardar = () => {
    const funcionSeleccionada = funciones.find(f => f.id.toString() === formulario.idFuncion);
    
    if (modoEdicion) {
      setFamilias(familias.map(f => 
        f.id === familiaSeleccionada.id 
          ? {
              ...f,
              codigo: formulario.codigo,
              nombre: formulario.nombre,
              funcion: funcionSeleccionada?.nombre || '',
              estado: formulario.estado
            }
          : f
      ));
    } else {
      const nuevaFamilia = {
        id: familias.length + 1,
        codigo: formulario.codigo,
        nombre: formulario.nombre,
        funcion: funcionSeleccionada?.nombre || '',
        estado: formulario.estado
      };
      setFamilias([...familias, nuevaFamilia]);
    }
    
    setMostrarFormulario(false);
    setFormulario({
      codigo: '',
      nombre: '',
      idFuncion: '',
      estado: 'Activo'
    });
  };

  const handleCancelar = () => {
    setMostrarFormulario(false);
    setFormulario({
      codigo: '',
      nombre: '',
      idFuncion: '',
      estado: 'Activo'
    });
  };

  return (
    <div className="familia-puesto-container">
      <button className="btn-back" onClick={onBack}>
        ← Volver
      </button>

      <h2 className="familia-puesto-title">ABM Familia de Puesto</h2>

      {!mostrarFormulario ? (
        <>
          {/* Barra de búsqueda y botón nuevo */}
          <div className="familia-puesto-header">
            <div className="search-box">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Buscar familia de puesto..."
                className="search-input"
              />
            </div>
            <button className="btn-nuevo" onClick={handleNuevo}>
              <Plus size={20} />
              Nuevo
            </button>
          </div>

          {/* Tabla de familias */}
          <div className="tabla-container">
            <table className="tabla-familias">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nombre</th>
                  <th>Función</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {familias.map((familia) => (
                  <tr key={familia.id}>
                    <td>{familia.codigo}</td>
                    <td>{familia.nombre}</td>
                    <td>{familia.funcion}</td>
                    <td>
                      <span className={`badge ${familia.estado.toLowerCase()}`}>
                        {familia.estado}
                      </span>
                    </td>
                    <td>
                      <div className="acciones-buttons">
                        <button
                          className="btn-icon btn-editar"
                          onClick={() => handleEditar(familia)}
                          title="Editar"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          className="btn-icon btn-eliminar"
                          onClick={() => handleEliminar(familia.id)}
                          title="Eliminar"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        /* Formulario de alta/modificación */
        <div className="formulario-container">
          <h3 className="formulario-title">
            {modoEdicion ? 'Modificar Familia de Puesto' : 'Nueva Familia de Puesto'}
          </h3>

          <div className="formulario-grid">
            <div className="form-group">
              <label className="form-label">Código Familia de Puesto *</label>
              <input
                type="text"
                name="codigo"
                value={formulario.codigo}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Ej: FP004"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Nombre Familia de Puesto *</label>
              <input
                type="text"
                name="nombre"
                value={formulario.nombre}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Ej: Recursos Humanos"
              />
            </div>

            <div className="form-group">
              <label className="form-label">ID Función *</label>
              <select
                name="idFuncion"
                value={formulario.idFuncion}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="">Seleccione una función</option>
                {funciones.map((funcion) => (
                  <option key={funcion.id} value={funcion.id}>
                    {funcion.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Estado *</label>
              <select
                name="estado"
                value={formulario.estado}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
          </div>

          <div className="formulario-acciones">
            <button className="btn-cancelar" onClick={handleCancelar}>
              Cancelar
            </button>
            <button className="btn-guardar" onClick={handleGuardar}>
              Guardar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FamiliaPuesto;