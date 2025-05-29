import React, { useState } from 'react';
import HeaderComponent from '../../HeaderComponent/HeaderComponent';
import './GeneradorDietaComponent.css'

export const GeneradorDietaComponent = () => {
  const [calorias, setCalorias] = useState('');
  const [dieta, setDieta] = useState(null);
  const [desplegados, setDesplegados] = useState({});

  const toggleAlimentos = (id) => {
    setDesplegados(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const fetchDieta = () => {
    fetch("https://2daw14.iesalonsocano.org/api/?ruta=alimentos&numeroCals=" + calorias, {
      method: "GET"
    })
      .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        return response.json();
      })
      .then(data => {
        if (data.success) {
          setDieta(data);
          setDesplegados({});
        }
      })
      .catch(() => alert("Hubo un error en la generación de dieta"));
  };

  return (
    <div className='calculadora pantalla h-100 nutricion'>p
      <HeaderComponent dieta />
      <div className="container contenido">
        <h1 className="tituloN text-center mb-4">Generador de dieta Gold's Nutrition</h1>
        <div className="row">
          <div className='col-3 my-4 row'>
            <div className='col-8 '>
              <input
                type="text"
                className='rounded p-2 formNu'
                value={calorias}
                onChange={(e) => setCalorias(e.target.value)}
              />
            </div>
            <div className='col-4'>
              <input
                type="submit"
                value='Calcular'
                className='bg-n p-2 formNu rounded'
                onClick={fetchDieta}
              />
            </div>
          </div>
          <div className='rounded col-9 p-4 my-4 bg-n'>
            {dieta ? (
              <>
                <p><strong>Calorías objetivo:</strong> {dieta.caloriasObjetivo}</p>
                <p><strong>Calorías totales de la dieta:</strong> {dieta.caloriasTotales}</p>
                <table className="table table-bordered table-striped mt-3">
                  <thead>
                    <tr>
                      <th>Tipo</th>
                      <th>Nombre</th>
                      <th>Calorías</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dieta.dieta.map((item) => (
                      <React.Fragment key={item.id}>
                        <tr onClick={() => toggleAlimentos(item.id)} style={{ cursor: 'pointer' }}>
                          <td>{item.tipo}</td>
                          <td>{item.nombre}</td>
                          <td>{item.calorias}</td>
                        </tr>
                        {desplegados[item.id] && (
                          <tr>
                            <td colSpan="3">
                              <strong>Alimentos:</strong>
                              <ul className="mb-0">
                                {item.alimentos.map((alimento, index) => (
                                  <li key={index}>
                                    {alimento.nombre} - {alimento.cantidad}g - {alimento.calorias} kcal, {alimento.proteinas}g proteínas, {alimento.grasas}g grasas, {alimento.carbohidratos}g carbs
                                  </li>
                                ))}
                              </ul>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <p>Rellena el formulario y pulsa <strong>Calcular</strong> para ver los resultados.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
