import React, { useEffect, useState, useRef } from 'react';
import './TemporizadorComponent.css';

const TemporizadorComponent = ({ duracion, trigger }) => {
  const [tiempoRestante, setTiempoRestante] = useState(duracion);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Limpiar el temporizador anterior
    if (intervalRef.current) clearInterval(intervalRef.current);

    setTiempoRestante(duracion);

    if (duracion > 0) {
      intervalRef.current = setInterval(() => {
        setTiempoRestante(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [trigger]);

  return (
    <div
      className={`descanso container-fluid d-flex justify-content-center align-items-center ${tiempoRestante === 0 ? 'oculto' : ''}`}
    >
      <h4>{tiempoRestante}"</h4>
    </div>
  );
};

export default TemporizadorComponent;
