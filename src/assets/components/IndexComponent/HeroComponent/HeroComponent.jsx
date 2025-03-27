import React from 'react';
import './HeroComponent.css';
import logo from '../../../img/GoldFitEs.webp'
import hombre from '../../../img/hero.webp'

const HeroComponent = () => {
  return (
    <div className="hero container-fluid d-flex align-items-center">
      <div className='row'>
        <div className='contenedorTit p-3' >
          <h1 className='col-12 titulo'>Gold's Fit</h1>
          <h1 className='col-12 titulo'>Disciplina, fuerza y resultados</h1>
          <h1 className='col-12 titulo'>¡Toma el control de tu evolución!</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;