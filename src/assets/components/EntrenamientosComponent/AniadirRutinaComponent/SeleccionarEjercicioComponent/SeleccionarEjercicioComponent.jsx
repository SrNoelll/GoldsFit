import React, { useState, useEffect } from "react";
import './SeleccionarEjercicioComponent.css';
import HeaderComponent from "../../../HeaderComponent/HeaderComponent";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { Link } from "react-router-dom";

const SeleccionarEjercicioComponent = () => {
  const [ejercicios, setEjercicios] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("ejercicios")) || [];
    const seleccionadosPrevios = JSON.parse(sessionStorage.getItem("seleccionados")) || [];
    setEjercicios(datos);
    setSeleccionados(seleccionadosPrevios);
  }, []);

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

  const toggleSeleccion = (id) => {
    const nuevaSeleccion = [...seleccionados];
    const index = nuevaSeleccion.indexOf(id);
    if (index === -1) {
      nuevaSeleccion.push(id);
    } else {
      nuevaSeleccion.splice(index, 1);
    }
    setSeleccionados(nuevaSeleccion);
    sessionStorage.setItem("seleccionados", JSON.stringify(nuevaSeleccion));
  };

  const ejerciciosFiltrados = ejercicios.filter((ej) =>
    ej.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <HeaderComponent />
      <div className="container contenido">

        {/* Botones Cancelar/Guardar */}
        <div className="row mb-3">
          <Link className="noDec col" to="/aniadirRutina">
            <div className="d-flex justify-content-center text-center align-items-center agregar p-3 rounded" onClick={()=>{sessionStorage.clear()}}>
              Cancelar <MdOutlineCancel />
            </div>
          </Link>
          <Link className="noDec col" to="/aniadirRutina">
            <div className="d-flex justify-content-center text-center align-items-center agregar p-3 rounded">
              Guardar <IoIosSave />
            </div>
          </Link>
        </div>

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
          <div
            key={ejercicio.id}
            id={ejercicio.id}
            className={`row mx-1 d-flex justify-content-center text-center align-items-center agregar my-4 p-3 rounded ${seleccionados.includes(ejercicio.id) ? 'ejercicioSe' : ''}`}
            onClick={() => toggleSeleccion(ejercicio.id)}
          >
            <div className="col">
              <p>{ejercicio.nombre}</p>
            </div>
            <div className="col">{renderMedia(ejercicio.foto)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeleccionarEjercicioComponent;
