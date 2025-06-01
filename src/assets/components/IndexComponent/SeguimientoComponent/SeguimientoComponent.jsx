import React from "react";
import { Link } from "react-router-dom";

const SeguimientoComponent = () => {
  return (
    <div className="mx-1">
      <div className="container py-5">
        <div className="row">
          <div className="contenedorTit col-lg-6 col-md-7 col-sm-12 col-12 p-3 h-100 text-white">
            <div>
              <h2 className="titulo">Sigue tu evolución</h2>
            </div>
            <p className="">
              Mantén el rumbo hacia tus objetivos con un sistema de seguimiento
              claro y eficaz. Nuestra plataforma te permite registrar tu
              progreso y ver de forma visual cómo evolucionas tanto a nivel
              personal como en tus entrenamientos. Con esta información, puedes
              tomar decisiones informadas, mantener la motivación alta y ajustar
              tu rutina si lo necesitas. Todo está diseñado para ayudarte a
              tener una visión completa de tu avance sin complicaciones. Llevar
              un control nunca había sido tan fácil y accesible.
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
            <img className="col-lg-8 col-md-12" src="/perfil.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeguimientoComponent;
