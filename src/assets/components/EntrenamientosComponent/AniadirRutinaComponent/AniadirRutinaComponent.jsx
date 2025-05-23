import React from 'react';
import HeaderComponent from '../../HeaderComponent/HeaderComponent';
import './AniadirRutinaComponent.css';
import { MdOutlineCancel } from "react-icons/md";
import { IoIosSave } from "react-icons/io";

const usuario = JSON.parse(localStorage.getItem('usuario'));
const AniadirRutinaComponent = () => {
  const seleccionados = JSON.parse(sessionStorage.getItem('seleccionados')) || [];
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

 const handleGuardar = async () => {
  const tituloInput = document.getElementById("titulo");
  const titulo = tituloInput?.value.trim();

  if (!titulo) {
    alert("Por favor, introduce un título para la rutina.");
    return;
  }

  const datos = seleccionados.map((id) => {
    const ejercicio = ejercicios.find((e) => e.id === id);
    const repeticiones = parseInt(document.getElementById(`reps-${id}`)?.value) || 0;
    const series = parseInt(document.getElementById(`series-${id}`)?.value) || 0;
    const time = parseInt(document.getElementById(`time-${id}`)?.value) || 0;

    return {
      id: ejercicio.id,
      nombre: ejercicio.nombre,
      repeticiones,
      series,
      time,
    };
  });

  try {
    const response = await fetch("https://2daw14.iesalonsocano.org/api/?ruta=rutina", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombreRut: titulo,
        id: usuario.id,
        rutina: datos,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error al guardar la rutina:", errorData);
      alert("Hubo un error al guardar la rutina: " + (errorData.message || response.statusText));
      return;
    }

    const data = await response.json();

    if (data.success) {
      sessionStorage.clear();
      window.location.href = "/entrenamiento";
    } else {
      console.error("Error en la respuesta del servidor:", data);
      alert("Hubo un error al guardar la rutina.");
    }
  } catch (error) {
    console.error("Error en la solicitud fetch:", error);
    alert("Hubo un error al guardar la rutina.");
  }
};


  
  const mostrarEjer = () => {
    return seleccionados.map((id, index) => {
      const ejercicio = ejercicios.find((e) => e.id === id);
      if (!ejercicio) return null;

      return (
        <div
          key={ejercicio.id}
          id={ejercicio.id}
          className="row d-flex justify-content-center text-center align-items-center agregar my-4 p-3 rounded"
        >
          <div className="col">
            <p>{ejercicio.nombre}</p>
          </div>
          <div className="col">{renderMedia(ejercicio.foto)}</div>
          <div className="col row">
            <div className='col'>Repeticiones:</div>
            <input
              type="number"
              defaultValue="12"
              name={`reps-${ejercicio.id}`}
              id={`reps-${ejercicio.id}`}
              className="form-control col"
            />
          </div>
          <div className="col row">
            <div className='col'>Series:</div>
            <input
              type="number"
              defaultValue="3"
              name={`series-${ejercicio.id}`}
              id={`series-${ejercicio.id}`}
              className="form-control col"
            />
          </div>
          <div className="col row">
            <div className='col'>Descanso:</div>
            <input
              type="number"
              defaultValue="120"
              name={`time-${ejercicio.id}`}
              id={`time-${ejercicio.id}`}
              className="form-control col"
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <HeaderComponent />
      <div className='contenido container'>
        <div className="row">
          <div className='col-12'>
            <input id='titulo' type="text" placeholder='Titulo' className='w-50 rounded titulo p-2 tituloR'/>
          </div>
          <a className="noDec col" href="/entrenamiento">
          <div className=" d-flex justify-content-center text-center align-items-center agregar my-3 p-3 rounded">
              Cancelar <MdOutlineCancel />
          </div>
          </a>
          <a className="noDec col bg-transparent border-0" onClick={handleGuardar}>
          <div className=" d-flex justify-content-center text-center align-items-center agregar my-3 p-3 rounded">
              Guardar <IoIosSave />
          </div>
          </a>
        </div>

        <div className='container'>{mostrarEjer()}</div>

        <a className='noEnlace' href="/seleccionarEjercicio">
          <div className='container d-flex rounded align-items-center p-2 justify-content-center text-center agregar'>
            Agregar ejercicio
          </div>
        </a>
      </div>
    </div>
  );
};

export default AniadirRutinaComponent;
