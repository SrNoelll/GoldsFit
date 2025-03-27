import React from 'react'
import './SobreNosotrosComponent.css'
import imgSobre from '../../../img/pareja.jpg'
const SobreNosotrosComponent = () => {
  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
        <div><h2 className='titulo'>Por que Gold's Fit?</h2></div>
            <div className='col-6'><p className='ct p-4'>En un mundo lleno de aplicaciones de gimnasio, la nuestra destaca porque ha sido creada por expertos en fitness con años de experiencia, entendiendo las necesidades reales de todo tipo de usuarios. Ya seas principiante o un atleta avanzado, hemos diseñado una plataforma accesible, intuitiva y efectiva para ayudarte a alcanzar tus objetivos sin complicaciones.

            Sabemos que empezar en el mundo del entrenamiento puede ser abrumador. Muchas personas pierden años de progreso por la falta de orientación adecuada. Por eso, nuestra aplicación elimina la curva de aprendizaje innecesaria y te proporciona guías claras, rutinas personalizadas y herramientas que te permitirán avanzar desde el primer día.

            Queremos que cualquier persona, sin importar su nivel o experiencia, pueda mejorar su estilo de vida de forma sencilla y efectiva. Te damos todo lo que necesitas para entrenar de manera inteligente, sin perder el tiempo en pruebas y errores.

            Si buscas una aplicación que realmente te ayude a transformar tu cuerpo y alcanzar tus metas sin rodeos, esta es la mejor opción. ¡Empieza hoy mismo y lleva tu entrenamiento al siguiente nivel!</p></div>
            <div className='col-6'>
                <img className='img-fluid' src={imgSobre} alt=""/>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default SobreNosotrosComponent
