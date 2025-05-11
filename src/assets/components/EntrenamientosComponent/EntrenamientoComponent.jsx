import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import RutinasComponent from './RutinasComponent/RutinasComponent'

const EntrenamientoComponent = () => {
  if (localStorage.getItem("usuario") === null) {
    window.location.href = "/login";
  }
  
  return (
    <div>
      <HeaderComponent/>
      <RutinasComponent/>
    </div>
  )
}

export default EntrenamientoComponent
