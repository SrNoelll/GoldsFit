import React from "react";
import './SeleccionarEjercicioComponent.css'
import HeaderComponent from "../../../HeaderComponent/HeaderComponent";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosSave } from "react-icons/io";

const SeleccionarEjercicioComponent = () => {
  const ejercicios = JSON.parse(localStorage.getItem("ejercicios")) || [];
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
  return (
    <div>
        <HeaderComponent></HeaderComponent>
        
      <div className="container contenido">
        <div className="row">
          <div className="col d-flex justify-content-center text-center align-items-center agregar m-3 p-3 rounded">
              <a className="noDec" href="/aniadirRutina">
              Cancelar <MdOutlineCancel />
            </a>
          </div>
          <div className="col d-flex justify-content-center text-center align-items-center agregar m-3 p-3 rounded">
              <a className="noDec" href="/aniadirRutina">
              Guardar <IoIosSave />
            </a>
          </div>
        </div>
      
        {ejercicios.map((ejercicio) => (
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
              console.log(seleccionados);
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
