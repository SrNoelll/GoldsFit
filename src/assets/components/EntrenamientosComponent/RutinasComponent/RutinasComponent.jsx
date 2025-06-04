import { useState, useEffect } from "react";
import "./RutinasComponent.css";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const RutinasComponent = () => {
  const [rutinas, setRutinas] = useState([]);
  const [rutinasP, setRutinasP] = useState([]);
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

const fetchEntrenamientosRecomendados = async () => {
  try {
    const response = await fetch(`https://2daw14.iesalonsocano.org/api/?ruta=rutinas&idUsuario=5`);
    const data = await response.json();

    if (data.success) {
      setRutinasP(data.rutinas);
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
useEffect(() => {
  fetchEntrenamientosRecomendados();
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

  return (
    <div className="contenido container">
  <div className="row">
    <h3 className="col-12 titulo">Mis Rutinas</h3>

    <div className="col-12 col-lg-4">
      <Link className="noEnlace" to="/aniadirRutina">
        <div className="rounded m-2 p-4 rutina">
          <h4>Añadir rutina <FaPlusCircle /></h4>
        </div>
      </Link>
    </div>

    <div className="col-12 col-lg-8">
      {rutinas.map((rutina, index) => (
        <Link className="noEnlace" to={`/rutina/${rutina.id}`} key={rutina.id}>
          <div className="rounded row m-2 p-4 rutina">
            <h4 className="col-8 col-sm-8 col-md-8 col-lg-10">
              {rutina.nombre || `Rutina ${index + 1}`}
            </h4>
            <RiDeleteBin2Fill
              className="col-2 col-sm-2 col-md-2 col-lg-1"
              onClick={(e) => {
                e.preventDefault();
                eliminarRutina(rutina.id);
              }}
            />
          </div>
        </Link>
      ))}
      <div className="col-12 my-4">
      <h4 className="titulo">Rutinas Predefinidas</h4>
      {rutinasP.map((rutina, index) => (
        <Link className="noEnlace" to={`/rutina/${rutina.id}`} key={rutina.id}>
          <div className="rounded row m-2 p-4 rutina">
            <h4 className="col-12">
              {rutina.nombre || `Rutina ${index + 1}`}
            </h4>
            
          </div>
        </Link>
      ))}
    </div>
    </div>
    
  </div>
</div>
  );
};

export default RutinasComponent;
