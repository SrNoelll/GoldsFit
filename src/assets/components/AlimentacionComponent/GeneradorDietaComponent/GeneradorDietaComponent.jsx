import React, { useState } from 'react';
import HeaderComponent from '../../HeaderComponent/HeaderComponent';
import './GeneradorDietaComponent.css';
import html2pdf from 'html2pdf.js';

export const GeneradorDietaComponent = () => {
  const [calorias, setCalorias] = useState('');
  const [dieta, setDieta] = useState(null)
  const [desplegados, setDesplegados] = useState({});

  const toggleAlimentos = (id) => {
    setDesplegados(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const fetchDieta = () => {
    fetch(`https://2daw14.iesalonsocano.org/api/?ruta=alimentos&numeroCals=${calorias}`, {
      method: 'GET'
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
      .catch(() => alert('Hubo un error en la generación de dieta'));
  };

  const expandirTodosLosAlimentos = () => {
    if (!dieta) return;
    const todos = {};
    dieta.dieta.forEach(item => {
      todos[item.id] = true;
    });
    setDesplegados(todos);
  };

  const descargarDietaPDF = () => {
    expandirTodosLosAlimentos();

    setTimeout(() => {
      const element = document.getElementById('contenido-dieta');
      const boton = document.getElementById('boton-descarga');
      if (boton) boton.style.display = 'none';

      const opciones = {
        margin: 10,
        filename: `${dieta.caloriasTotales}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().set(opciones).from(element).save().then(() => {
        if (boton) boton.style.display = 'inline-block';
      });
    }, 100);
  };

  return (
    <div className='calculadora pantalla h-100 nutricion'>
      <HeaderComponent dieta />
      <div className="container contenido">
        <h1 className="tituloN text-center mb-4">Generador de dieta Gold's Nutrition</h1>
        <div className="row d-flex align-items-center justify-content-center">
          <div className='col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 my-4 row'>
            <div className='col-12 py-3'>
              <h3 className='tituloN'>Introduce un número de calorias para generar la dieta</h3>
            </div>
            <div className='col-6'>
              <input
                type="number"
                placeholder='Calorias'
                className='w-100 rounded p-2 formNu'
                value={calorias}
                onChange={(e) => setCalorias(e.target.value)}
              />
            </div>
            <div className='col-6'>
              <input
                type="submit"
                value='Calcular'
                className='w-100 bg-n p-2 formNu rounded'
                onClick={fetchDieta}
              />
            </div>
          </div>
          <div className='row col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 my-4'>
            <div id='contenido-dieta' className='rounded p-4 w-100 bg-n'>
              {dieta ? (
                <>
                  <h1 className="tituloN text-white text-center">Gold's Nutrition</h1>
                  <button id="boton-descarga" className='btn btn-light mb-3' onClick={descargarDietaPDF}>
                    Descargar dieta
                  </button>
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
    </div>
  );
};
