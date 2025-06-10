import React, { useState } from 'react';
import SiguienteComponent from '../AlimentacionComponent/AtrasSiguienteComponent/SiguienteComponent';

const NivelComponent = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario')) || {};
  const [nivel, setNivel] = useState(usuario.nivel_entrenamiento || 'moderado');

  const seleccionarNivel = (nuevoObjetivo) => {
    setNivel(nuevoObjetivo);
  };

  const guardarObjetivo = async () => {
    usuario.nivel_entrenamiento = nivel;
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
        console.log("Usuario actualizado correctamente");
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
        <h1 className="titulo">Selecciona tu nivel de entrenamiento</h1>
        <div className="row w-100">
          <div
            className={`col-lg-4 col-md-4 col-sm-6 col-6 p-4 t-m`}
            onClick={() => seleccionarNivel("bajo")}
          >
            <img
              className={`img-fluid obj ${
                nivel === "bajo" ? "seleccionImg" : ""
              }`}
              src="/bajo.png"
              alt=""
            />
            Nivel bajo 1 a 2 veces por semana
          </div>
          <div
            className={`col-lg-4 col-md-4 col-sm-6 col-6 p-4 t-m`}
            onClick={() => seleccionarNivel("moderado")}
          >
            <img
              className={`img-fluid obj ${
                nivel === "moderado" ? "seleccionImg" : ""
              }`}
              src="/moderado.png"
              alt=""
            />
            Nivel moderado 3 a 4 veces por semana
          </div>
          <div
            className={`col-lg-4 col-md-4 col-sm-6 col-6 p-4 t-m `}
            onClick={() => seleccionarNivel("alto")}
          >
            <img
              className={`img-fluid obj ${
                nivel === "alto" ? "seleccionImg" : ""
              }`}
              src="/alto.webp"
              alt=""
            />
            Nivel alto 5 o mas veces por semana
          </div>
        </div>
        <SiguienteComponent
          atras="/objetivo"
          siguiente="/descripcion"
          funcion={guardarObjetivo}
        />
      </div>
    </div>
  );
};

export default NivelComponent;
