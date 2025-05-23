import React, { useEffect } from 'react';
import './HeroComponent.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Text section */}
          <div className="col-md-6 contenedorTit" data-aos="fade-right">
            <h1 className="titulo mb-2">Gold's Fit</h1>
            <h2 className="subtitulo mb-3 titulo">¡Toma el control de tu evolución!</h2>
            <p className="text-light fs-5">
              Sigue tu progreso. Mantente motivado. Entrena con disciplina.
            </p>
            <p className="text-light">
              Gold's Fit es un rastreador de entrenamientos gratuito. Crea rutinas, haz seguimiento y evoluciona.
            </p>

            {/* Store buttons */}
            <div className="mt-3">
              <img src="/appstore.png" alt="App Store" className="store-btn me-2" />
              <img src="/googleplay.png" alt="Google Play" className="store-btn" />
            </div>

            {/* Rating */}
            <div className="mt-3 text-light">
              ⭐⭐⭐⭐⭐ 4.9 App Store & Google Play — Usado por miles de atletas
            </div>
          </div>

          {/* Image section */}
          <div className="col-md-6 d-flex justify-content-center" data-aos="fade-left">
            <img src="/ecosistema.png.webp" alt="App Preview" className="imagenHero" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
