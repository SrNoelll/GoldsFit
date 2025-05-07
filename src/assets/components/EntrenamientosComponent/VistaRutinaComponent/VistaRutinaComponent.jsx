import React, { useEffect, useState } from "react";
import html2pdf from "html2pdf.js";
import { useParams } from 'react-router-dom';
import './VistaRutinaComponent.css'
import HeaderComponent from "../../HeaderComponent/HeaderComponent";

const VistaRutinaComponent = () => {
  const { idRV } = useParams();
  const descargarRutinaPDF = () => {
    const element = document.getElementById('contenido-rutina');
  
    const opciones = {
      margin:       10,
      filename:     `${rutina}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
  
    html2pdf().set(opciones).from(element).save();
  };
  

  const renderMedia = (src) => {
    if (!src) return null;
  
    const extension = src.split(".").pop().toLowerCase();
  
    const commonStyles = {
      borderRadius: "8px",
      width: "100%",
      height: "auto",
      objectFit: "cover",
    };
  
    let publicPath = src.replace('./src/assets/img/ejercicios/', '/ejercicios/');
  
    if (extension === "mp4") {
      return (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={commonStyles}
        >
          <source src={publicPath} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      );
    } else {
      return (
        <img
          src={publicPath}
          alt="ejercicio"
          style={commonStyles}
        />
      );
    }
  };
  
  
  
  

  const [rutina, setRutina] = useState("Cargando...");
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    const fetchEntrenamientos = () => {
      fetch("http://localhost/php/peticiones.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `verRutinaId=${encodeURIComponent(idRV)}`,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setEjercicios(data.ejercicios || []);
            console.log(data)
            setRutina(data.rutina?.[0]?.nombre || "Rutina sin nombre");
          } else {
            console.error("Error del servidor:", data.message);
          }
        })
        .catch((error) => {
          console.error("Error al obtener rutina:", error);
        });
    };
    fetchEntrenamientos();
  }, [idRV]);

  // Agrupar las series por ejercicio
  const agruparEjercicios = () => {
    const resultado = [];
    let actual = null;

    ejercicios.forEach((ejercicio) => {
      if (!actual || actual.id !== ejercicio.id) {
        actual = { ...ejercicio, series: [] };
        resultado.push(actual);
      }
      actual.series.push({
        descanso: ejercicio.descanso,
        reps: ejercicio.repeticiones,
        peso: ejercicio.peso,
      });
    });

    return resultado;
  };

  const ejerciciosAgrupados = agruparEjercicios();

  return (
    <div>
      <HeaderComponent />
      <div id="contenido-rutina" className="contenido container">
        {/* <div className="btn btn-primary" onClick={descargarRutinaPDF}>Descargar rutina</div> */}
        <div className="row">
          <h1 className="titulo col">{rutina}</h1>
          <a className="col noEnlace" href="">
            <div className="rounded serie p-2 text-center d-flex justify-content-center align-items-center">
              Iniciar Entrenamiento
            </div>
          </a>
        </div>
        

        {ejercicios.length === 0 ? (
          <p className="text-center">No hay ejercicios cargados.</p>
        ) : (
          ejerciciosAgrupados.map((ejercicio) => (
            <div key={ejercicio.id} className="mb-4 row ejercicioM">
              <h4 className="titulo col-12">{ejercicio?.nombre}</h4>
              <div className="col-4">
                {renderMedia(ejercicio?.foto)}
              </div>
              <div className="col-8">
                {ejercicio.series.map((serie, idx) => (
                  <div key={idx} className="row rounded serie p-2 text-center d-flex justify-content-center align-items-center mb-2">
                    <p className="col"><strong>SERIE:</strong> {idx + 1}</p>
                    <p className="col"><strong>REPS:</strong> {serie.reps}</p>
                    <p className="col"><strong>KG:</strong> {serie.peso || '--'}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VistaRutinaComponent;
