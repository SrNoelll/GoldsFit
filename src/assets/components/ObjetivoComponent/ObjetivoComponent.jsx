import React, { useState } from 'react';
import SiguienteComponent from '../AlimentacionComponent/AtrasSiguienteComponent/SiguienteComponent';
import './ObjetivoComponent.css'

const ObjetivoComponent = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario')) || {};
  const [objetivo, setObjetivo] = useState(usuario.objetivo || 'mantenimiento');

  const seleccionarObjetivo = (nuevoObjetivo) => {
    setObjetivo(nuevoObjetivo);
  };

  const guardarObjetivo = async () => {
    usuario.objetivo = objetivo;
    localStorage.setItem("usuario", JSON.stringify(usuario));
     try {
      const respuesta = await fetch("https://2daw14.iesalonsocano.org/api/?ruta=actualizarUser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ usuario })
      });

      const resultado = await respuesta.json();

      if (respuesta.ok && resultado.success) {
        console.log("Usuario actualizado y peso guardado en histórico correctamente");
      } else {
        console.error("Error al actualizar usuario:", resultado.message || resultado.error);
      }
    } catch (error) {
      console.error("Error de red o servidor:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center container">
        <h1 className='titulo'>Selecciona tu objetivo</h1>
        <div className='row w-100'>
          <div
            className={`col-4 p-4 t-m`}
            onClick={() => seleccionarObjetivo('mantenimiento')}
          >
            <img className={`img-fluid obj ${objetivo === 'mantenimiento' ? 'seleccionImg' : ''}`} src="/Mantenimiento.png" alt="" />
            Mantenimiento
          </div>
          <div
            className={`col-4 p-4 t-m`}
            onClick={() => seleccionarObjetivo('ganar musculo')}
          >
            <img className={`img-fluid obj ${objetivo === 'ganar musculo' ? 'seleccionImg' : ''}`} src="/gananrMusculo.png" alt="" />
            Ganar masa muscular
          </div>
          <div
            className={`col-4 p-4 t-m `}
            onClick={() => seleccionarObjetivo('perder grasa')}
          >
            <img className={`img-fluid obj ${objetivo === 'perder grasa' ? 'seleccionImg' : ''}`} src="/PerderGrasapng.png" alt="" />
            Perder Grasa
          </div>
        </div>
        <SiguienteComponent atras='/altura' siguiente='/nivel' funcion={guardarObjetivo} />
      </div>
    </div>
  );
};

export default ObjetivoComponent;
