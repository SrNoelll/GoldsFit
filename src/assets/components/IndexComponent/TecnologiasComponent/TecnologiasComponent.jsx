import React from "react";
import "./TecnologiasComponent.css";
import { Link } from "react-router-dom";
const TecnologiasComponent = () => {
  return (
    <div className="mx-1">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-md-5 d-none d-md-flex row h-100 justify-content-center">
            <img className="col-lg-8 col-md-12" src="/seguimiento.webp" alt="" />
          </div>
          <div className="contenedorTit col-lg-6 col-md-7 col-sm-12 col-12 p-3 h-100 text-white">
            <div>
              <h2 className="titulo">No te olvides de ninguna serie</h2>
            </div>
            <p className="">
              Diseña tus propias rutinas de entrenamiento eligiendo entre una
              amplia gama de ejercicios clasificados por grupos musculares,
              dificultad y objetivos. Nuestra aplicación te da el control total
              para personalizar tus sesiones según lo que necesitas, ya sea para
              ganar masa muscular, perder grasa o simplemente mantenerte activo.
              Y si no tienes tiempo, experiencia o simplemente prefieres no
              complicarte, también encontrarás rutinas ya hechas por
              profesionales, listas para seguir desde el primer día. Estas
              rutinas están pensadas para todos los niveles y te ayudarán a
              progresar sin perder tiempo. Ya sea creando tus propios
              entrenamientos o siguiendo los planes recomendados, siempre
              tendrás opciones efectivas y adaptadas a tu estilo de vida.
            </p>
            <div className="d-flex justify-content-end">
              <Link to={"/entrenamiento"}>
                <button className="x t-m">
                  <span> Empieza ahora</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TecnologiasComponent;
