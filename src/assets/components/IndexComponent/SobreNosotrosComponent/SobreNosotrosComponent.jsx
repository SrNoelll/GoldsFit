import React from "react";
import "./SobreNosotrosComponent.css";
import { Link } from "react-router-dom";
const SobreNosotrosComponent = () => {
  return (
    <div className="mx-1">
      <div className="container py-5">
        <div className="row">
          <div className="contenedorTit col-lg-6 col-md-7 col-sm-12 col-12 p-3 h-100 text-white">
            <div>
              <h2 className="titulo">Porque Gold's Fit?</h2>
            </div>
            <p className="">
              En un mundo lleno de apps de gimnasio, la nuestra destaca por
              estar creada por expertos en fitness que entienden lo que
              realmente necesitas. Ya seas principiante o avanzado, te ofrecemos
              una plataforma intuitiva, accesible y efectiva para alcanzar tus
              metas sin complicaciones. Evitamos que pierdas tiempo con pruebas
              y errores: tendrás guías claras, rutinas personalizadas y
              herramientas desde el primer día. Si buscas transformar tu cuerpo
              de forma sencilla y efectiva, esta es tu mejor opción. ¡Empieza
              hoy y entrena con inteligencia!
            </p>
            <div className="d-flex justify-content-end">
              <Link to={"/login"}>
                <button className="x t-m">
                  <span> Empieza ahora</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-md-5 d-none d-md-flex row h-100 justify-content-center">
            <img className="col-lg-8 col-md-12" src="/pareja.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotrosComponent;
