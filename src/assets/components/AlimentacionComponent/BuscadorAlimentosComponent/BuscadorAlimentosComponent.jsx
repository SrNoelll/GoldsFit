import React, { useEffect, useState } from 'react'
import HeaderComponent from '../../HeaderComponent/HeaderComponent';
import './BuscadorAlimentosComponent.css'
import Aos from 'aos';

const BuscadorAlimentosComponent = () => {
  const [alimentos, setAlimentos] = useState([]);
const [busqueda, setBusqueda] = useState("");
  
    useEffect(() => {
      const fetchDieta = () => {
    fetch("https://2daw14.iesalonsocano.org/api/?ruta=alimentos", {
      method: "GET"
    })
      .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        return response.json();
      })
      .then(data => {
        if (data.success) {
          setAlimentos(data.alimentos);
        }
      })
      .catch(() => alert("Hubo un error en la generación de dieta"));
  };
      fetchDieta()
    }, []);
  
  
    const alimentosFiltrados = alimentos.filter((al) =>
      al.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
    return (
      <div className='nutricion dieta'>
        <HeaderComponent dieta/>
        <div className="container contenido pantalla pb-4">
          {/* Buscador */}
          <div className="row mb-4">
            <input
              type="text"
              className="buscador border-n p-3 rounded"
              placeholder="Buscar alimento por nombre..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
  
          {/* Lista de ejercicios */}
          {alimentosFiltrados.map((alimento) => (
            <div
              key={alimento.id}
              id={alimento.id}
              className={`row d-flex justify-content-center text-center border-n align-items-center my-4 p-3 rounded`}
              data-aos="fade-left"
            >
              <div className="col">
                <h3 className='tituloN'>{alimento.nombre}</h3>
              </div>
              <div className="col">Calorias: {alimento.calorias}g</div>
              <div className="col">Proteina: {alimento.proteinas}g</div>
              <div className="col">Grasas: {alimento.grasas}g</div>
              <div className="col">Carbohidratos: {alimento.carbohidratos}g</div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default BuscadorAlimentosComponent
