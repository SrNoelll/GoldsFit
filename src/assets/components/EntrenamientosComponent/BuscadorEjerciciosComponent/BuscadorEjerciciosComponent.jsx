import React, { useEffect, useState } from 'react'
import HeaderComponent from '../../HeaderComponent/HeaderComponent';
import { Link } from 'react-router-dom';

export const BuscadorEjerciciosComponent = () => {
    const [busqueda, setBusqueda] = useState("");
    const [ejercicios, setEjercicios] = useState(JSON.parse(localStorage.getItem('ejercicios')) || []);
     const renderMedia = (src) => {
    const extension = src.split(".").pop().toLowerCase();
    return extension === "mp4" ? (
      <video
        width="200"
        autoPlay
        loop
        muted
        playsInline
        style={{ borderRadius: "8px" }}
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    ) : (
      <img
        src={src}
        alt="ejercicio"
        width="200"
        style={{ borderRadius: "8px" }}
      />
    );
  };
  const ejerciciosFiltrados = ejercicios.filter((ej) =>
    ej.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );
  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeaderComponent />
      <div className="container contenido">

        {/* Buscador */}
        <div className="row mx-1 mb-4">
          <input
            type="text"
            className="textoIn"
            placeholder="Buscar ejercicio por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        {/* Lista de ejercicios */}
        {ejerciciosFiltrados.map((ejercicio) => (
            <Link className='noEnlace' to={'/ejercicio/'+ejercicio.id}>
                <div
            key={ejercicio.id}
            id={ejercicio.id}
            className={`row mx-1 d-flex justify-content-center text-center align-items-center agregar my-4 p-3 rounded`}
          >
            <div className="col">
              <p>{ejercicio.nombre}</p>
            </div>
            <div className="col">{renderMedia(ejercicio.foto)}</div>
          </div>
            </Link>
          
        ))}
      </div>
    </div>
  )
}
