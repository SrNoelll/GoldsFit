import React from 'react';
import './HeroComponent.css';

const HeroComponent = () => {
  return (
    <div className="hero container d-flex align-items-center">
      <div className='row'>
        <div className='contenedorTit row col-6 p-3' >
          <h1 className='col-12 titulo'>Gold's Fit</h1>
          <h1 className='col-12 titulo'>Disciplina, fuerza y resultados</h1>
          <h1 className='col-12 titulo'>¡Toma el control de tu evolución!</h1>
        </div>
      <div className='col-6 row d-flex justify-content-center align-items-center'>
          <img src="/movilIndex.webp" className='imagenHero' alt="" />
      </div>
      </div>
    </div>
  );
};

export default HeroComponent;