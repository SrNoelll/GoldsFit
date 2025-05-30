import React, { useEffect, useState } from 'react'
import './PerfilComponent.css'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import { Link } from 'react-router-dom';
import GraficoComponent from './GraficoComponent/GraficoComponent';

const PerfilComponent = () => {
    const usuario = JSON.parse(localStorage.getItem('usuario')) || {};
    const [rutinas,setRutinas] = useState([])
    const fetchEntrenamientos = async () => {
      try {
        const response = await fetch(`https://2daw14.iesalonsocano.org/api/?ruta=rutinas&idUsuario=${usuario.id}`);
        const data = await response.json();
    
        if (data.success) {
          setRutinas(data.rutinas);
        } else {
          console.error("Error del servidor:", data.message);
        }
      } catch (error) {
        console.error("Error al obtener entrenamientos:", error);
      }
    };
    
    useEffect(() => {
      fetchEntrenamientos();
    }, []);
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div className='contenido container'>
        <div className='row border-m p-3 rounded'>
            <div className='col-1'>
                <img className='rounded-circle img-fluid' src="/masculino.png" alt="" />
            </div>
            <div className='col-11 row'>
                <h2 className='col-12 titulo'>
                    {usuario.nombre}
                </h2>
                <div className='col-12 row d-flex align-items-baseline'>
                    
                    <div className='col-12 d-flex align-items-baseline'>
                    <h3 className='titulo pe-4'>
                        {usuario.userName}
                    </h3>
                    <p className='pe-4 t-m'>
                        {rutinas.length} rutinas
                    </p>
                    <p className='pe-4 t-m'>
                        {usuario.descripcion}
                    </p>
                    </div>
                    
                </div>

            </div>
        </div>
        <div className='row border-m my-3 p-3 d-flex align-items-center justify-content-center rounded'>
            <h2 className='titulo' >Tus rutinas</h2>
            {rutinas.map((rutina, index) => (
              <div className="col-12 rounded row p-4 t-m border-m display-flex">
                <h4 className="col-lg-10">{rutina.nombre || `Rutina ${index + 1}`}</h4>
              </div>
          ))}
        </div>
        <div className='col-6'>
          <GraficoComponent></GraficoComponent>
        </div>
        
      </div>
    </div>
  )
}

export default PerfilComponent
