import { useState, useEffect } from "react";
import "./RutinasComponent.css";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const RutinasComponent = () => {
  const [rutinas, setRutinas] = useState([]);
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  useEffect(() => {
    const fetchEntrenamientos = () => {
      fetch("http://localhost/php/peticiones.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `id=${encodeURIComponent(usuario.id)}&rutinas=${encodeURIComponent(
          "rutinas"
        )}`,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setRutinas(data.rutinas);
          } else {
            console.error("Error del servidor:", data.message);
          }
        })
        .catch((error) => {
          console.error("Error al obtener entrenamientos:", error);
        });
    };

    fetchEntrenamientos();
  }, []);

  return (
    <div className="rutinas container">
      <div className="row">
        <h3 className="col-12 titulo">Mis Rutinas</h3>
        <div className="col-4 row">
          <div className="col-12 rounded">
            <a className="noEnlace" href="aniadirRutina">
            <div className="col-12 rounded my-2 p-4 rutina">
             <h4 >Aniadir rutina <FaPlusCircle /></h4>
            </div>
            </a>
          </div>
        </div>
        <div className="col-8 row">
          {rutinas.map((rutina, index) => (
            <Link className="noEnlace" to={`/rutina/${rutina.id}`}>
            <div className="col-12 rounded row m-2 p-4 rutina display-flex" id={index}>
              <h4 className="col-lg-10">{rutina.nombre || `Rutina ${index + 1}`}</h4>
              <div className="col-lg-2 row"><FaPencilAlt className="col"/>
              <RiDeleteBin2Fill className="col"/></div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RutinasComponent;
