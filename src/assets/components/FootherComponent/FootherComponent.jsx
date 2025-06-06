import React from "react";
import { Link } from "react-router-dom";

export const FootherComponent = ({ nutricion }) => {
  return (
    <div className={`${nutricion ? "bg-n" : "bg-a"} text-dark py-5 mt-5`}>
      <div className="container px-2">
        <div className="row">
          <div className="col-md-3 text-center mb-4">
            <img
              src={nutricion ? "/logoNutri.webp" : "/GoldFitEs.webp"}
              alt="Gold Fit Logo"
              style={{ maxWidth: "120px" }}
              className="mb-3"
            />
            <p className="mb-1">Gold's Fit</p>
            <p className="mb-1">
              Email:{" "}
              <a
                href="mailto:noelalarconpuerta@gmail.com"
                className="text-dark text-decoration-none"
              >
                noelalarconpuerta@gmail.com
              </a>
            </p>
            <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>
              © 2025 Noel Alarcón Puerta
            </p>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Navegación</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/login" className="text-dark text-decoration-none">
                  Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-dark text-decoration-none">
                  Registrarse
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-dark text-decoration-none">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/perfil" className="text-dark text-decoration-none">
                  Perfil
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Salud y Fitness</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/alimentacion"
                  className="text-dark text-decoration-none"
                >
                  Nutrición
                </Link>
              </li>
              <li>
                <Link
                  to="/entrenamiento"
                  className="text-dark text-decoration-none"
                >
                  Entrenamiento
                </Link>
              </li>
              <li>
                <Link
                  to="/ejercicios"
                  className="text-dark text-decoration-none"
                >
                  Buscador de Ejercicios
                </Link>
              </li>
              <li>
                <Link to="/dieta" className="text-dark text-decoration-none">
                  Generador de Dieta
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Herramientas</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/calculadora"
                  className="text-dark text-decoration-none"
                >
                  Calculadora de Macronutrientes
                </Link>
              </li>
              <li>
                <Link
                  to="/alimentos"
                  className="text-dark text-decoration-none"
                >
                  Buscador de Alimentos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
