import React from 'react'
import { CgGym } from "react-icons/cg";
import { TbMeat } from "react-icons/tb";
import { TfiStatsUp } from "react-icons/tfi";
import { RiTeamLine } from "react-icons/ri";
import './HeaderComponent.css';

const HeaderComponent = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario')) || {};

  return (
    <header className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/GoldFitEs.webp" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <a className="nav-link hen" href="/entrenamiento">
                  <CgGym size={20} /> Entrenamiento
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hen" href="#">
                  <TbMeat size={20} /> Nutrición
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hen" href="#">
                  <TfiStatsUp size={20} /> Tus Marcas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hen" href="#">
                  <RiTeamLine size={20} /> Nuestro Propósito
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hen" href="#">
                  {usuario.nombre ?? "User"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
