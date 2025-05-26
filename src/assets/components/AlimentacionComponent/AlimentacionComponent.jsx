import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import './AlimentacionComponent.css'
import HeroNutricionComponent from './HeroNutricionComponent/HeroNutricionComponent'
const AlimentacionComponent = () => {
  return (
    <div>
      <HeaderComponent dieta={true} />
      <HeroNutricionComponent></HeroNutricionComponent>
    </div>
  )
}

export default AlimentacionComponent
