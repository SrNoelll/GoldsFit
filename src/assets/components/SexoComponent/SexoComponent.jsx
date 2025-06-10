import React, { useState } from "react";
import SiguienteComponent from "../AlimentacionComponent/AtrasSiguienteComponent/SiguienteComponent";
import "./SexoComponent.css";

const SexoComponent = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario")) || {};
  const [sexo, setSexo] = useState(usuario.sexo || "hombre");

  const seleccionarSexo = (nuevoSexo) => {
    setSexo(nuevoSexo);
  };

  const guardarSexo = async () => {
    usuario.sexo = sexo;
    localStorage.setItem("usuario", JSON.stringify(usuario));
    try {
      const respuesta = await fetch(
        "https://2daw14.iesalonsocano.org/api/?ruta=actualizarUser",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ usuario }),
        }
      );

      const resultado = await respuesta.json();

      if (respuesta.ok && resultado.success) {
        console.log(
          "Usuario actualizado correctamente"
        );
      } else {
        console.error(
          "Error al actualizar usuario:",
          resultado.message || resultado.error
        );
      }
    } catch (error) {
      console.error("Error de red o servidor:", error);
    }
  };
  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center container">
        <h1 className="titulo">Selecciona tu sexo</h1>
        <div className="row w-100 ">
          <div
            className={`col-6 p-4 t-m`}
            onClick={() => seleccionarSexo("hombre")}
          >
            <img
              className={`img-fluid imgSexo  obj ${
                sexo === "hombre" ? "seleccionImg" : ""
              }`}
              src="/masculino.png"
              alt=""
            />
          </div>
          <div
            className={`col-6 p-4 t-m `}
            onClick={() => seleccionarSexo("mujer")}
          >
            <img
              className={`img-fluid imgSexo obj ${
                sexo === "mujer" ? "seleccionImg" : ""
              }`}
              src="/femenino.png"
              alt=""
            />
          </div>
        </div>
        <SiguienteComponent atras="/" siguiente="/peso" funcion={guardarSexo} />
      </div>
    </div>
  );
};

export default SexoComponent;
