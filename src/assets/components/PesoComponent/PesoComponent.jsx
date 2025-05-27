import React, { useState } from 'react';
import './PesoComponent.css'
import { GiNextButton } from "react-icons/gi";
import { FaBackwardStep } from "react-icons/fa6";




const PesoComponent = () => {
  const [valor, setValor] = useState(60); // Peso base

  const handleChange = (e) => {
    setValor(Number(e.target.value));
  };

  const scale = 1 + (valor - 60) / 100; // Cambios sutiles

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
          type="range"
          className="barraPeso w-100"
          min="0"
          max="200"
          step="1"
          value={valor}
          onChange={handleChange}
        />
        <p className="mt-3 t-m">Peso seleccionado: <strong>{valor} kg</strong></p>
        <div className='row'>
            <div className='col-6 '>
                <p className='enviar d-flex justify-content-center align-items-center p-2'>
                <FaBackwardStep /> Volver
                </p>
            </div>
            <div className='col-6'>
                <p className='enviar p-2'>
                Siguiente <GiNextButton />
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PesoComponent;
