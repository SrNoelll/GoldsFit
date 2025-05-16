import React, { useEffect, useState } from 'react';
import './EmpezarRutinaComponent.css'
import { useParams } from "react-router-dom";
import HeaderComponent from '../../HeaderComponent/HeaderComponent';
import Timer from './TimerComponent/TimerComponent';
import TemporizadorComponent from './TemporizadorComponent/TemporizadorComponent';

const EmpezarRutinaComponent = () => {
  const { idRV } = useParams();
  const [rutina, setRutina] = useState("Cargando...");
  const [ejercicios, setEjercicios] = useState([]);
  const [temporizador, setTemporizador] = useState({ duracion: 0, trigger: 0 });

  useEffect(() => {
    const fetchRutina = async () => {
      try {
        const response = await fetch(`https://2daw14.iesalonsocano.org/api/?ruta=rutina&id=${idRV}`);
        const data = await response.json();
        if (data.success) {
          setEjercicios(data.ejercicios || []);
          setRutina(data.rutina?.[0]?.nombre || "Rutina sin nombre");
        } else {
          console.error("Error del servidor:", data.message);
        }
      } catch (error) {
        console.error("Error al obtener rutina:", error);
      }
    };
    fetchRutina();
  }, [idRV]);

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
        <div className="row">
          <div className='col-12'>
            <Timer />
          </div>
          <h1 className="titulo col">{rutina}</h1>
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
                  <div
                    key={idx}
                    className="row rounded serie p-2 text-center d-flex justify-content-center align-items-center mb-2 cursor-pointer"
                    onClick={() =>
                      setTemporizador({
                        duracion: parseInt(serie.descanso),
                        trigger: Date.now(),
                      })
                    }
                  >
                    <p className="col"><strong>SERIE:</strong> {idx + 1}</p>
                    <input className='col-1 p-1 rounded mx-1 carac' type="text" placeholder={serie.reps}/>REPS
                    <input className='col-1 p-1 rounded mx-1 carac' type="text" placeholder={serie.peso || '--'}/>KG
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
      <TemporizadorComponent duracion={temporizador.duracion} trigger={temporizador.trigger} />
    </div>
  );
};

export default EmpezarRutinaComponent;
