import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import html2pdf from "html2pdf.js";
import "./VistaRutinaComponent.css";
import HeaderComponent from "../../HeaderComponent/HeaderComponent";
import { FaShareAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const VistaRutinaComponent = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const { idRV } = useParams();
  const [rutina, setRutina] = useState("Cargando...");
  const [rutinaUser, setRutinaUser] = useState("Cargando...");
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    const fetchRutina = async () => {
      try {
        const response = await fetch(
          `https://2daw14.iesalonsocano.org/api/?ruta=rutina&id=${idRV}`
        );
        const data = await response.json();

        if (data.success) {
          setRutina(data.rutina.nombre || "Rutina sin nombre");
          setEjercicios(data.ejercicios || []);
          setRutinaUser(data.rutina.usuario_id || 0);
        } else {
          console.error("Error del servidor:", data.message);
        }
      } catch (error) {
        console.error("Error al obtener rutina:", error);
      }
    };

    fetchRutina();
  }, [idRV]);

  const descargarRutinaPDF = () => {
    const element = document.getElementById("contenido-rutina");
    const opciones = {
      margin: 10,
      filename: `${rutina}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
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
    const publicPath = src.replace(
      "./src/assets/img/ejercicios/",
      "/ejercicios/"
    );
    if (extension === "mp4") {
      return (
        <video autoPlay loop muted playsInline style={commonStyles}>
          <source src={publicPath} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      );
    } else {
      return <img src={publicPath} alt="ejercicio" style={commonStyles} />;
    }
  };

  const agruparEjercicios = () => {
    const resultado = [];
    let mapa = {};

    ejercicios.forEach((ejercicio) => {
      const idEjercicio = ejercicio.ejercicio_id;
      if (!mapa[idEjercicio]) {
        mapa[idEjercicio] = {
          ejercicio_id: idEjercicio,
          nombre: ejercicio.nombre,
          foto: ejercicio.foto,
          series: [],
        };
        resultado.push(mapa[idEjercicio]);
      }

      mapa[idEjercicio].series.push({
        id_serie: ejercicio.id_serie,
        descanso: ejercicio.descanso,
        reps: ejercicio.repeticiones,
        peso: ejercicio.peso,
      });
    });

    return resultado;
  };

  const ejerciciosAgrupados = agruparEjercicios();
   function compartir() {
    if (navigator.share) {
      navigator.share({
        title: 'Golds Fit',
        text: '¡Mira esta rutina!, '+rutina,
        url: window.location.href
      })
      .then(() => console.log('Compartido con éxito'))
      .catch((error) => console.log('Error al compartir', error));
    } else {
      alert('La función de compartir no está soportada en este navegador.');
    }
  }

  return (
    <div>
      <HeaderComponent />
      <div id="contenido-rutina" className="contenido container">
        <div className="row">
          <h1 className="titulo col-12">{rutina}</h1>
          
        </div>

        {usuario.id === rutinaUser && (
          <div className="container-fluid ">
            <div className="row d-flex align-items-center justify-content-center my-3">
              <Link
                className="col-12 text-center border-m p-2 noEnlace rounded t-m"
                to={`/EmpezarRutina/${idRV}`}
              >
                Empezar entrenamiento
              </Link>
            </div>
          </div>
        )}
        <div className="container-fluid">
          <div className="row my-3">
            <button className="col-12 text-center border-m p-2 noEnlace rounded t-m bg-transparent" onClick={compartir}>
            Compartir <IoShareSocialOutline />
          </button>
          </div>
        </div>
        {ejercicios.length === 0 ? (
          <p className="text-center">No hay ejercicios cargados.</p>
        ) : (
          ejerciciosAgrupados.map((ejercicio) => (
            <div key={ejercicio.id} className="mb-4 row ejercicioM">
              <h4 className="titulo col-12">{ejercicio?.nombre}</h4>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                {renderMedia(ejercicio?.foto)}
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                {ejercicio.series.map((serie, idx) => (
                  <div
                    key={idx}
                    className="row rounded mx-1 serie p-2 text-center d-flex justify-content-center align-items-center mb-2 cursor-pointer"
                  >
                    <p className="col">
                      <strong>SERIE:</strong> {idx + 1}
                    </p>
                    <p className="col">
                      <strong>REPS:</strong> {usuario.id === rutinaUser ? serie.reps : '12 recomendadas'}
                    </p>
                    <p className="col">
                      <strong>KG:</strong> {usuario.id === rutinaUser ? serie.peso || "--" : '--'} {}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
      {/* <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={descargarRutinaPDF}>Descargar PDF</button>
      </div> */}
    </div>
  );
};

export default VistaRutinaComponent;
