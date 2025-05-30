import React, { useState } from 'react';
import './AlturaComponent.css';
import SiguienteComponent from '../AlimentacionComponent/AtrasSiguienteComponent/SiguienteComponent';

const AlturaComponent = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario')) || {};
  const [valor, setValor] = useState(170);

  const handleChange = (e) => {
    setValor(Number(e.target.value));
  };

  const guardarAltura = async () => {
    usuario.altura = valor;
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

  const scaleY = valor / 170;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center" style={{ width: '80%' }}>
        <h1 className='titulo'>Selecciona tu altura</h1>
        
        <div
          className="d-flex justify-content-center align-items-end"
          style={{ height: '300px', gap: '40px' }}
        >
          <div className="contenedorBarra">
            <input
                id="alturab"
                type="range"
                className="barraAltura"
                min="100"
                max="230"
                value={valor}
                onChange={handleChange}
                orient="vertical"
            />
            </div>

          <div
            style={{
              height: '170px',
              transform: `scaleY(${scaleY})`,
              transformOrigin: 'bottom',
              transition: 'transform 0.3s ease',
              display: 'flex',
              alignItems: 'end'
            }}
          >
            <img
              src="/hombre.webp"
              alt="Hombre"
              style={{
                height: '100%',
              }}
            />
          </div>
        </div>

        <p className="mt-3 t-m">Altura seleccionada: <strong>{valor} cm</strong></p>
        <SiguienteComponent atras='/peso' siguiente='/objetivo' funcion={guardarAltura} />
      </div>
    </div>
  );
};

export default AlturaComponent;
