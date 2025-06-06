import React, { useEffect, useState } from "react";
import "./PerfilComponent.css";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { Link, useLocation } from "react-router-dom";
import GraficoComponent from "./GraficoComponent/GraficoComponent";
import GraficoVolumenComponent from "./GraficoVolumenComponent/GraficoVolumenComponent";
import { MdEdit } from "react-icons/md";

const PerfilComponent = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario")) || {};
  const [rutinas, setRutinas] = useState([]);
  const fetchEntrenamientos = async () => {
    try {
      const response = await fetch(
        `https://2daw14.iesalonsocano.org/api/?ruta=rutinas&idUsuario=${usuario.id}`
      );
      const data = await response.json();

      if (data.success) {
        setRutinas(data.rutinas);
      } else {
        console.error("Error del servidor:", data.message);
      }
    } catch (error) {
      console.error("Error al obtener entrenamientos:", error);
    }
  };
  const calcularVolumen = async () => {
    try {
      const response = await fetch(
        `https://2daw14.iesalonsocano.org/api/?ruta=historial_volumen&idUsuario=${usuario.id}`
      );
      const data = await response.json();

      if (data.success) {
      } else {
        console.error("Error del servidor:", data.message);
      }
    } catch (error) {
      console.error("Error al actualizar volumen", error);
    }
  };
  const location = useLocation();
  useEffect(() => {
    fetchEntrenamientos();
    calcularVolumen();
  }, [location]);

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div className=" contenido container">
        <div className="mx-1 row border-m p-3 rounded">
          <div className="col-lg-1 col-md-3 col-sm-4 col-4">
            <img
              className="img-fluid"
              src={
                usuario?.sexo === "mujer"
                  ? "/iconoMujer.webp"
                  : "/iconoHombre.webp"
              }
              alt=""
            />
          </div>
          <div className="col-lg-11 col-md-9 col-sm-8 col-8 row">
            <h2 className="col-12 titulo">
              {usuario.nombre}{" "}
              <Link className="t-m" to={"/sexo"}>
                <MdEdit />
              </Link>
            </h2>
            <div className="col-12 row d-flex align-items-baseline">
              <h3 className="titulo col-lg-2 col-md-4 col-sm-12 pe-4">
                {usuario.userName}
              </h3>
              <p className="pe-4 col-lg-2 col-md-4 col-sm-12 t-m">
                {rutinas.length} rutinas
              </p>
              <p className="pe-4 col-lg-2 col-md-4 col-sm-12 t-m">
                {usuario.sexo}
              </p>
              <p className="pe-4 col-lg-2 col-md-4 col-sm-12 t-m">
                {usuario.edad}
              </p>
              <p className="pe-4 col-lg-2 col-md-4 col-sm-12 t-m">
                {usuario.email}
              </p>
            </div>
          </div>
          <div className="col-12 d-flex align-items-baseline">
            <p className="pe-4 t-m">{usuario.descripcion}</p>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-lg-6 row col-md-12 col-sm-12 col-12">
            <GraficoComponent usuarioId={usuario.id} />
          </div>
          <div className="col-lg-6 row col-md-12 col-sm-12 col-12">
            <GraficoVolumenComponent usuarioId={usuario.id} />
          </div>
        </div>

        <div className="row border-m mx-1 my-3 p-3 d-flex align-items-center justify-content-center rounded">
          <h2 className="titulo">Tus rutinas</h2>
          {rutinas.map((rutina, index) => (
            <div className="col-12 my-2 rounded row p-4 t-m border-m display-flex">
              <h4 className="col-lg-10">
                {rutina.nombre || `Rutina ${index + 1}`}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerfilComponent;
