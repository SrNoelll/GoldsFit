import React, { useEffect } from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import './AlimentacionComponent.css'
import HeroNutricionComponent from './HeroNutricionComponent/HeroNutricionComponent'
import { PresentacionCalculadoraMacosComponent } from './PresentacionCalculadoraMacosComponent/PresentacionCalculadoraMacosComponent'
import { PresentacionGeneradorDietaComponent } from './PresentacionGeneradorDietaComponent/PresentacionGeneradorDietaComponent'
import PresentacionBuscadorComponent from './PresentacionBuscadorComponent/PresentacionBuscadorComponent'
const AlimentacionComponent = () => {
  useEffect(() => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
}, []);

  return (
    <div className='nutricion'>
      <HeaderComponent dieta={true} />
      <HeroNutricionComponent></HeroNutricionComponent>
      <PresentacionCalculadoraMacosComponent></PresentacionCalculadoraMacosComponent>
      <PresentacionGeneradorDietaComponent></PresentacionGeneradorDietaComponent>
      <PresentacionBuscadorComponent></PresentacionBuscadorComponent>
    </div>
  )
}

export default AlimentacionComponent
