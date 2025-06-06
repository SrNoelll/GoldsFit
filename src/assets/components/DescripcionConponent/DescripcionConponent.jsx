import React, { useState } from "react";
import SiguienteComponent from "../AlimentacionComponent/AtrasSiguienteComponent/SiguienteComponent";

const DescripcionConponent = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario")) || {};
  const [descripcion, setDescripcion] = useState(usuario.descripcion || "");

  const handleChange = (e) => {
    setDescripcion(e.target.value); // <- corregido aquí
  };

  const guardarDescripcion = async () => {
    usuario.descripcion = descripcion;
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
        console.log("Usuario actualizado y descripción guardada correctamente");
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
        <h1 className="titulo">Cuéntanos sobre ti</h1>
        <textarea
          className="textoIn my-3 w-100"
          name="Texto"
          value={descripcion}
          onChange={handleChange}
          placeholder="Descripción"
        ></textarea>
        <SiguienteComponent
          atras="/nivel"
          siguiente="/"
          funcion={guardarDescripcion}
        />
      </div>
    </div>
  );
};

export default DescripcionConponent;
