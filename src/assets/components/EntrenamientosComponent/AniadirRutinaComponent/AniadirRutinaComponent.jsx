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

  const handleGuardar = () => {
    const datos = seleccionados.map((id) => {
      const ejercicio = ejercicios.find((e) => e.id === id);
      const repeticiones = document.getElementById(`reps-${ejercicio.id}`)?.value || 0;
      const series = document.getElementById(`series-${ejercicio.id}`)?.value || 0;
      const time = document.getElementById(`time-${ejercicio.id}`)?.value || 0;
      
      return {
        id: ejercicio.id,
        nombre: ejercicio.nombre,
        repeticiones: parseInt(repeticiones),
        series: parseInt(series),
        time: parseInt(time),
      };
    });
    const titulo = document.getElementById(`titulo`)?.value || "";
    const body = "nombreRut="+ encodeURIComponent(titulo) +"&id="+ encodeURIComponent(usuario.id) +"&rutina=" + encodeURIComponent(JSON.stringify(datos));
  
    fetch("http://localhost/php/peticiones.php", {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    })
    .then(response => {
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      return response.json();
    })
    .then(data => {
      if (data.success) {
        sessionStorage.clear()
        window.location.href = "/entrenamiento";
      } else {
        console.log("Error al guardar la rutina");
      }
    })
    .catch(() => {
      alert("Hubo un error al guardar la rutina");
    });
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
          <div className="col d-flex justify-content-center text-center align-items-center agregar m-3 p-3 rounded">
            <a className="noDec" href="/entrenamiento">
              Cancelar <MdOutlineCancel />
            </a>
          </div>
          <div className="col d-flex justify-content-center text-center align-items-center agregar m-3 p-3 rounded">
            <a className="noDec bg-transparent border-0" onClick={handleGuardar}>
              Guardar <IoIosSave />
            </a>
          </div>
        </div>

        <div className='container'>{mostrarEjer()}</div>

        <a className='noEnlace' href="/seleccionarEjercicio">
          <div className='container d-flex align-items-center p-2 justify-content-center text-center agregar'>
            Agregar ejercicio
          </div>
        </a>
      </div>
    </div>
  );
};

export default AniadirRutinaComponent;
