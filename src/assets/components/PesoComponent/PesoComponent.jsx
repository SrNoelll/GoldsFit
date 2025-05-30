import React, { useState } from 'react';
import './PesoComponent.css'
import SiguienteComponent from '../AlimentacionComponent/AtrasSiguienteComponent/SiguienteComponent';




const PesoComponent = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario')) || {};
  const [valor, setValor] = useState(60);

  const handleChange = (e) => {
    setValor(Number(e.target.value));
  };

  const guardarPeso = async () => {
  usuario.peso = valor;
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

  const scale = 1 + (valor - 60) / 100;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center" style={{ width: '80%' }}>
        <h1 className='titulo'>Selecciona tu peso</h1>
        <div className="position-relative" style={{ height: '200px', marginBottom: '40px' }}>
          <img
            src="/hombre.webp"
            alt="Hombre"
            className="position-absolute"
            style={{
              bottom: 0,
              left: `${(valor / 200) * 100}%`,
              transform: `translateX(-50%) scaleX(${scale.toFixed(2)})`,
              transition: 'left 0.1s ease, transform 0.3s ease',
              height: '100px'
            }}
          />
        </div>
        <input
        id='pesob'
          type="range"
          className="barraPeso w-100"
          min="0"
          max="200"
          step="1"
          value={valor}
          onChange={handleChange}
        />
        <p className="mt-3 t-m">Peso seleccionado: <strong>{valor} kg</strong></p>
            <SiguienteComponent atras='/sexo' siguiente='/altura' funcion={guardarPeso}></SiguienteComponent>
      </div>
    </div>
  );
};

export default PesoComponent;
