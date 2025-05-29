import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import './AlimentacionComponent.css'
import HeroNutricionComponent from './HeroNutricionComponent/HeroNutricionComponent'
import { PresentacionCalculadoraMacosComponent } from './PresentacionCalculadoraMacosComponent/PresentacionCalculadoraMacosComponent'
import { PresentacionGeneradorDietaComponent } from './PresentacionGeneradorDietaComponent/PresentacionGeneradorDietaComponent'
const AlimentacionComponent = () => {
  return (
    <div className='nutricion'>
      <HeaderComponent dieta={true} />
      <HeroNutricionComponent></HeroNutricionComponent>
      <PresentacionCalculadoraMacosComponent></PresentacionCalculadoraMacosComponent>
      <PresentacionGeneradorDietaComponent></PresentacionGeneradorDietaComponent>
    </div>
  )
}

export default AlimentacionComponent
