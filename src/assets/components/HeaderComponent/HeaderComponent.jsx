import React, { useEffect } from 'react';
import { CgGym } from "react-icons/cg";
import { TbMeat } from "react-icons/tb";
import './HeaderComponent.css';
import { Link, useNavigate } from 'react-router-dom';
import { LuDna } from 'react-icons/lu';

const HeaderComponent = ({ dieta }) => {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const navigate = useNavigate();

  useEffect(() => {
    if (usuario) {
      if (usuario.sexo === null) navigate('/sexo');
    else if (usuario.peso === null) navigate('/peso');
    else if (usuario.altura === null) navigate('/altura');
    else if (usuario.objetivo === null) navigate('/objetivo');
    else if (usuario.nivel_entrenamiento === "") navigate('/nivel');
    }
    
  }, [navigate, usuario]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  };

  return (
    <>
      <header className='container-fluid'>
        <nav className={dieta ? 'fonA navbar navbar-light py-2 fixed-top' : 'navbar navbar-light bg-warning py-2 fixed-top'}>
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
            <Link className="hen" to={"/entrenamiento"}><CgGym size={20} /> Entrenamiento</Link>
            <Link className="hen" to={"/alimentacion"}><TbMeat size={20} /> Nutrición</Link>
            <Link className="hen" to={"/nosotros"}><LuDna size={20} /> Método Gold’s</Link>

              {/* Dropdown del usuario */}
              <div className="dropdown">
                <button
                  className="btn btn-link dropdown-toggle text-decoration-none hen"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img className='me-1' src={usuario?.sexo === 'mujer' ? '/iconoMujer.webp': '/iconoHombre.webp'} alt="" />
                  {usuario ? usuario.nombre : "User"}
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  {!usuario ? (
                    <li><a className="dropdown-item" href="/login">Iniciar sesión</a></li>
                  ) : (
                    <>
                      <li><a className="dropdown-item" href="/perfil">Perfil</a></li>
                      <li><button className="dropdown-item" onClick={handleLogout}>Cerrar sesión</button></li>
                    </>
                  )}
                </ul>
              </div>
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
            <Link className="hen" to={"/entrenamiento"}><CgGym size={20} /> Entrenamiento</Link>
            <Link className="hen" to={"/alimentacion"}><TbMeat size={20} /> Nutrición</Link>
            <Link className="hen" to={"/nosotros"}><LuDna size={20} /> Método Gold’s</Link>

            {/* Dropdown en móviles como lista normal */}
            <div className="dropdown">
              <button
                className="btn btn-link dropdown-toggle text-start hen"
                type="button"
                id="userDropdownMobile"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img className='me-1' src={usuario?.sexo === 'mujer' ? '/iconoMujer.webp': '/iconoHombre.webp'} alt="" />
                  {usuario ? usuario.nombre : "User"}
              </button>
              <ul className="dropdown-menu" aria-labelledby="userDropdownMobile">
                {!usuario ? (
                    <li><a className="dropdown-item" href="/login">Iniciar sesión</a></li>
                  ) : (
                    <>
                      <li><a className="dropdown-item" href="/perfil">Perfil</a></li>
                      <li><button className="dropdown-item" onClick={handleLogout}>Cerrar sesión</button></li>
                    </>
                  )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
