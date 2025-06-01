import React, { useEffect } from 'react'
import './HeroNutricionComponent.css'
import Aos from 'aos';



const HeroNutricionComponent = () => {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);

  return (
    <div className='contenido heroN d-flex align-items-center justify-content-center'>
  <div className="container">
    <div className="row align-items-center">
      
      {/* Image section */}
      <div className="col-lg-6 d-none d-lg-flex justify-content-center" data-aos="fade-left">
        <img src="/herN.webp" alt="App Preview" className="img-fluid imgHN" />
      </div>


      {/* Text section */}
      <div className="col-lg-6 col-md-12 col-sm-12 col-12 contenedorTit" data-aos="fade-right">
        <h1 className="tituloN mb-2">Gold's Nutrition</h1>
        <h2 className="tituloN mb-3">¡Transforma tu bienestar desde la raíz!</h2>
        <p className="text-light fs-5">
          Mejora tu alimentación. Fortalece tu salud. Vive con energía.
        </p>
        <p className="text-light">
          Gold's Fit es tu guía integral de nutrición y salud. Diseña planes alimenticios, recibe consejos personalizados y cuida tu cuerpo como se merece.
        </p>

        {/* Store buttons */}
        <div className="mt-3">
          <img src="/appstore.png" alt="App Store" className="store-btn me-2" />
          <img src="/googleplay.png" alt="Google Play" className="store-btn" />
        </div>

        {/* Rating */}
        <div className="mt-3 text-light">
          ⭐⭐⭐⭐⭐ 4.9 App Store & Google Play — Elegida por miles que buscan una vida más saludable
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default HeroNutricionComponent
