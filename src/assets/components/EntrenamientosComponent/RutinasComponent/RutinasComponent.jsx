import { useState, useEffect } from "react";
import "./RutinasComponent.css";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const RutinasComponent = () => {
  const [rutinas, setRutinas] = useState([]);
  const usuario = JSON.parse(localStorage.getItem('usuario'));

const fetchEntrenamientos = async () => {
  try {
    const response = await fetch(`https://2daw14.iesalonsocano.org/api/?ruta=rutinas&idUsuario=${usuario.id}`);
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

useEffect(() => {
  fetchEntrenamientos();
}, []);


  const eliminarRutina = async (idRutina) => {
  try {
    const response = await fetch('https://2daw14.iesalonsocano.org/api/?ruta=rutina', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ idRutina })
    });

    const data = await response.json();

    if (data.success) {
      console.log("Rutina eliminada correctamente");
      // Opcional: vuelve a cargar la lista de rutinas
      fetchEntrenamientos();
    } else {
      console.error("Error del servidor:", data.message);
    }
  } catch (error) {
    console.error("Error al eliminar la rutina:", error);
  }
};


  useEffect(() => {
  const eliminarEntrenamiento = async (entrenamientoId) => {
    try {
      const response = await fetch(`https://2daw14.iesalonsocano.org/api/?ruta=rutinas&id=${entrenamientoId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        console.log("Entrenamiento eliminado correctamente");

        const updatedResponse = await fetch(`https://2daw14.iesalonsocano.org/api/?ruta=rutinas&idUsuario=${usuario.id}`);
        const updatedData = await updatedResponse.json();
        if (updatedData.success) {
          setRutinas(updatedData.rutinas);
        }
      } else {
        console.error("Error al eliminar:", data.message);
      }
    } catch (error) {
      console.error("Error al eliminar entrenamiento:", error);
    }
  };
}, []);


  return (
    <div className="rutinas container">
      <div className="row">
        <h3 className="col-12 titulo">Mis Rutinas</h3>
        <div className="col-4 row">
          <div className="col-12 rounded">
            <a className="noEnlace" href="aniadirRutina">
              <div className="col-12 rounded my-2 p-4 rutina">
                <h4>Añadir rutina <FaPlusCircle /></h4>
              </div>
            </a>
          </div>
        </div>
        <div className="col-8 row">
          {rutinas.map((rutina, index) => (
            <Link className="noEnlace" to={`/rutina/${rutina.id}`} key={rutina.id}>
              <div className="col-12 rounded row m-2 p-4 rutina display-flex">
                <h4 className="col-lg-10">{rutina.nombre || `Rutina ${index + 1}`}</h4>
                <div className="col-lg-2 row">
                  <FaPencilAlt className="col" />
<<<<<<< HEAD
                  <RiDeleteBin2Fill className="col"/>
=======
                  <RiDeleteBin2Fill
                    className="col"
                    onClick={(e) => {
                      e.preventDefault(); // evita navegar por el <Link>
                      eliminarRutina(rutina.id);
                    }}
                  />
>>>>>>> ef0c91f51d8504ad15c3cc8ddcc3668bbf27ca0b
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RutinasComponent;
