import React from 'react'
import './TecnologiasComponent.css'
const TecnologiasComponent = () => {
  return (
    <div>
      <div className='container py-3'>
              <div className='row nosotros d-flex align-items-center justify-content-center'>
                <div><h2 className='titulo'>Siempre con la ultima tecnologia</h2></div>
                <div className='ct col-4 p-3'><p className=' '>Nuestra aplicación combina la experiencia de profesionales del fitness y la nutrición con las últimas tecnologías en inteligencia artificial. Analizamos tu progreso, adaptamos tus rutinas de entrenamiento y tu alimentación, y te proporcionamos recomendaciones personalizadas en tiempo real. Con nuestro sistema inteligente, llevar un estilo de vida saludable nunca ha sido tan fácil y eficiente.</p>
                  <div className='container-fluid d-flex justify-content-end'>
                    <button>
                      <span> EMPIEZA YA
                      </span>
                    </button>
                  </div>
                </div>
      
                <div className='col-4 px-5'>
                  <img className='reloj' src='/reloj.webp' alt="" />
                </div>
                <div className='ct col-4 p-3'><p className=' '>Nos aseguramos de que tu experiencia sea completa, integrando nuestra aplicación con los mejores smartwatches del mercado. Monitoriza tu rendimiento físico, controla tu frecuencia cardíaca y recibe recomendaciones personalizadas sobre ejercicio y alimentación directamente en tu muñeca. Con nuestra tecnología, optimizar tu salud y bienestar está al alcance de tu mano.</p>
                  <div className='container-fluid d-flex justify-content-end'>
                    <button>
                      <span> EMPIEZA YA
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default TecnologiasComponent
