import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import './AlimentacionComponent.css'
const AlimentacionComponent = () => {
  return (
    <div>
      <HeaderComponent dieta={true} />
      <div className='container prueba contenido'>
        hola
      </div>
    </div>
  )
}

export default AlimentacionComponent
