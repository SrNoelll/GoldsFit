import React, { useState, useEffect } from "react";
import './SeleccionarEjercicioComponent.css';
import HeaderComponent from "../../../HeaderComponent/HeaderComponent";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosSave } from "react-icons/io";

const SeleccionarEjercicioComponent = () => {
  const [ejercicios, setEjercicios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("ejercicios")) || [];
    setEjercicios(datos);
  }, []);

  const renderMedia = (src) => {
    const extension = src.split(".").pop().toLowerCase();
    if (extension === "mp4") {
      return (
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
      );
    } else {
      return (
        <img
          src={src}
          alt="ejercicio"
          width="200"
          style={{ borderRadius: "8px" }}
        />
      );
    }
  };

  // Filtrar ejercicios por nombre
  const ejerciciosFiltrados = ejercicios.filter((ej) =>
    ej.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <HeaderComponent />

      <div className="container contenido">
        <div className="row mb-3">
          <a className="noDec col" href="/aniadirRutina">
            <div className="d-flex justify-content-center text-center align-items-center agregar p-3 rounded">
              Cancelar <MdOutlineCancel />
            </div>
          </a>
          <a className="noDec col" href="/aniadirRutina">
            <div className="d-flex justify-content-center text-center align-items-center agregar p-3 rounded">
              Guardar <IoIosSave />
            </div>
          </a>
        </div>

        {/* Buscador */}
        <div className="row mb-4">
          <input
            type="text"
            className="textoIn"
            placeholder="Buscar ejercicio por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        {/* Lista de ejercicios filtrados */}
        {ejerciciosFiltrados.map((ejercicio) => (
          <div
            key={ejercicio.id}
            id={ejercicio.id}
            className="row d-flex justify-content-center text-center align-items-center agregar my-4 p-3 rounded"
            onClick={(e) => {
              const id = ejercicio.id;
              const seleccionados = JSON.parse(sessionStorage.getItem('seleccionados')) || [];
              const index = seleccionados.indexOf(id);
              e.currentTarget.classList.toggle('ejercicioSe');
              if (index === -1) {
                seleccionados.push(id);
              } else {
                seleccionados.splice(index, 1);
              }
              sessionStorage.setItem('seleccionados', JSON.stringify(seleccionados));
            }}
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
