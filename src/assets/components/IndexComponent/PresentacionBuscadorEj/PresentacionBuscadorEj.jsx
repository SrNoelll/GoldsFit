import React from 'react'
import { Link } from 'react-router-dom'

export const PresentacionBuscadorEj = () => {
    return (
        <div className="mx-1">
  <div className="container py-5">
    <div className="row">
      <div className="contenedorTit col-lg-6 col-md-7 col-sm-12 col-12 p-3 h-100 text-white order-1 order-md-2">
        <div>
          <h2 className="titulo">Siempre con buena técnica</h2>
        </div>
        <p>
          Explora nuestro buscador de ejercicios y descubre cómo hacer cada movimiento de forma correcta y segura. Accede a una extensa biblioteca de ejercicios clasificados por grupo muscular, tipo de equipo, nivel de dificultad y objetivo específico. Cada ejercicio incluye instrucciones detalladas paso a paso, consejos técnicos y variantes para que puedas adaptarlo a tu nivel y necesidades.
          Ya sea que entrenes en casa, en el gimnasio o al aire libre, siempre encontrarás ejercicios adecuados para tu rutina. Además, podrás guardar tus favoritos, combinarlos en tus entrenamientos personalizados o integrarlos fácilmente en nuestras rutinas ya diseñadas por expertos.
          Con esta herramienta, aprender nuevos ejercicios y ejecutarlos con confianza está al alcance de todos, desde principiantes hasta atletas avanzados.
        </p>
        <div className="d-flex justify-content-end">
          <Link to={"/ejercicios"}>
            <button className="x t-m">
              <span>Consultar ejercicios</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="col-lg-6 col-md-5 col-sm-8 col-8 d-md-flex mt-3 row h-100 justify-content-center order-2 order-md-1">
        <img className="col-lg-8 col-md-12" src="/buscador.webp" alt="" />
      </div>
    </div>
  </div>
</div>

    )
}
