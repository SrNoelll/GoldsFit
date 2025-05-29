import React, { useEffect } from 'react';
import { CgGym } from "react-icons/cg";
import { TbMeat } from "react-icons/tb";
import { TfiStatsUp } from "react-icons/tfi";
import { RiTeamLine } from "react-icons/ri";
import './HeaderComponent.css';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = ({ dieta }) => {
  const usuario = JSON.parse(localStorage.getItem('usuario')) || {};
  const navigate = useNavigate();
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuario')) || {};

    if (usuario.sexo === null) {
      navigate('/sexo');
      return;
    }
    if (usuario.peso === null) {
      navigate('/peso');
      return;
    }
    if (usuario.altura === null) {
      navigate('/altura');
      return;
    }
    if (usuario.objetivo === null) {
      navigate('/objetivo');
      return;
    }
    if (usuario.nivel_entrenamiento === "") {
      navigate('/nivel');
      return;
    }
  }, [navigate]);
  return (
    <header className='container-fluid'>
      <nav className={dieta ? 'fonA navbar navbar-light py-2 fixed-top': 'navbar navbar-light bg-warning py-2 fixed-top'}>
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="/">
            <img src={dieta ? '/logoNutri.webp' : "/GoldFitEs.webp"} alt="Logo" />
          </a>
          {/* Botón hamburguesa solo visible en md hacia abajo */}
          <button
            className="btn d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú en pantallas grandes */}
          <div className="d-none d-lg-flex gap-4 align-items-center">
            <a className="hen" href="/entrenamiento"><CgGym size={20} /> Entrenamiento</a>
            <a className="hen" href="/alimentacion"><TbMeat size={20} /> Nutrición</a>
            <a className="hen" href="#"><TfiStatsUp size={20} /> Tus Marcas</a>
            <a className="hen" href="#"><RiTeamLine size={20} /> Nuestro Propósito</a>
            <a className="hen" href="#">{usuario.nombre ?? "User"}</a>
          </div>
        </div>
      </nav>

      {/* Offcanvas para móviles */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuLabel">Menú</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-3">
          <a className="hen" href="/entrenamiento"><CgGym size={20} /> Entrenamiento</a>
          <a className="hen" href="/alimentacion"><TbMeat size={20} /> Nutrición</a>
          <a className="hen" href="#" data-bs-dismiss="offcanvas"><TfiStatsUp size={20} /> Tus Marcas</a>
          <a className="hen" href="#" data-bs-dismiss="offcanvas"><RiTeamLine size={20} /> Nuestro Propósito</a>
          <a className="hen" href="#" data-bs-dismiss="offcanvas">{usuario.nombre ?? "User"}</a>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
