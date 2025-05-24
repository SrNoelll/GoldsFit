import React, { useEffect, useState } from 'react';
import './EmpezarRutinaComponent.css';
import { Link, useParams } from "react-router-dom";
import { FaRegCircleCheck } from "react-icons/fa6";
import HeaderComponent from '../../HeaderComponent/HeaderComponent';
import Timer from './TimerComponent/TimerComponent';
import TemporizadorComponent from './TemporizadorComponent/TemporizadorComponent';

const EmpezarRutinaComponent = () => {
  const { idRV } = useParams();
  const [rutina, setRutina] = useState("Cargando...");
  const [ejercicios, setEjercicios] = useState([]);
  const [temporizador, setTemporizador] = useState({ duracion: 0, trigger: 0 });

  const actualizarSerie = async (id_serie, campo, valor) => {
    try {
      const response = await fetch('https://2daw14.iesalonsocano.org/api/?ruta=actualizar_serie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_serie,
          campo,
          valor,
        }),
      });

      const data = await response.json();
      if (!data.success) {
        console.error("Error al actualizar:", data.message, data.error);
      }
    } catch (error) {
      console.error("Error en fetch:", error);
    }
  };

  useEffect(() => {
    const fetchRutina = async () => {
      try {
        const response = await fetch(`https://2daw14.iesalonsocano.org/api/?ruta=rutina&id=${idRV}`);
        const data = await response.json();
        if (data.success) {
          setEjercicios(data.ejercicios || []);
          setRutina(data.rutina.nombre || "Rutina sin nombre");
          console.log(data.rutina)
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
          ejerciciosAgrupados.map((ejercicio, idxEj) => (
            <div className="mb-4 row ejercicioM" key={idxEj}>
              <h4 className="titulo col-12">{ejercicio.nombre}</h4>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                {renderMedia(ejercicio.foto)}
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                {ejercicio.series.map((serie, idxSerie) => (
                  <div
                    key={idxSerie}
                    className="row rounded mx-1 serie p-2 text-center d-flex justify-content-center align-items-center mb-2 cursor-pointer"
                  >
                    <p className="col"><strong>SERIE:</strong> {idxSerie + 1}</p>
                    <input
                      className='col-1 p-1 rounded mx-1 carac'
                      type="number"
                      defaultValue={serie.reps}
                      onBlur={(e) =>
                        actualizarSerie(serie.id_serie, 'repeticiones', e.target.value)
                      }
                    />REPS
                    <input
                      className='col-1 p-1 rounded mx-1 carac'
                      type="number"
                      defaultValue={serie.peso}
                      onBlur={(e) =>
                        actualizarSerie(serie.id_serie, 'peso', e.target.value)
                      }
                    />KG
                    <div className='col-1' onClick={() =>
                      setTemporizador({
                        duracion: parseInt(serie.descanso),
                        trigger: Date.now(),
                      })
                    }>
                      <FaRegCircleCheck />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
        
      </div>
        <div className='container pb-5 mb-5'>
          <div className='row d-flex align-items-center justify-content-center'>
          <Link className='col-12 text-center border-m p-3 noEnlace rounded t-m' to={'/entrenamiento'}>
          Terminar entrenamos
          </Link>
        </div>
        </div>
        

      <TemporizadorComponent duracion={temporizador.duracion} trigger={temporizador.trigger} />
    </div>
  );
};

export default EmpezarRutinaComponent;
