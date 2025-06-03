import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import SobreNosotrosComponent from '../IndexComponent/SobreNosotrosComponent/SobreNosotrosComponent'
import { PresentacionGeneradorDietaComponent } from '../AlimentacionComponent/PresentacionGeneradorDietaComponent/PresentacionGeneradorDietaComponent'
import TecnologiasComponent from '../IndexComponent/TecnologiasComponent/TecnologiasComponent'
import SeguimientoComponent from '../IndexComponent/SeguimientoComponent/SeguimientoComponent'
import { PresentacionCalculadoraMacosComponent } from '../AlimentacionComponent/PresentacionCalculadoraMacosComponent/PresentacionCalculadoraMacosComponent'
import { PresentacionBuscadorEj } from '../IndexComponent/PresentacionBuscadorEj/PresentacionBuscadorEj'
import PresentacionBuscadorComponent from '../AlimentacionComponent/PresentacionBuscadorComponent/PresentacionBuscadorComponent'

export const NosotrosComponent = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <div className='contenido container'>
                <div className='row text-center'>
                    <div className='col-6 border-end border-warning border-4'>
                        <h2 className='titulo'>Gold's Fit</h2>
                    </div>
                    <div className='col-6 border-start border-info border-4'>
                        <h2 className='tituloN'>Gold's Nutrition</h2>
                    </div>
                    <div className='col-12 mt-3 row'>
                        <h2 className='titulo col-12'>Unión <span className='tituloN'>Perfecta</span> </h2>
                        <div className='col-12 text-white'>
                            <p>
                                Tu cuerpo es tu proyecto más importante, y cuidarlo requiere equilibrio.
                                Entrenar sin una buena alimentación es avanzar a medias. Por eso, la unión de Gold’s Fit y Gold’s Nutrition es la combinación ideal: te permite trabajar tu físico de forma completa, desde el entrenamiento hasta la comida que lo impulsa.

                                Con Gold’s Fit, entrenas con estructura, propósito y rutinas adaptadas a ti. Con Gold’s Nutrition, te alimentas con precisión, siguiendo un plan que se ajusta a tus objetivos y estilo de vida.

                                Juntas, estas herramientas te ayudan a transformar tu cuerpo con inteligencia, sin improvisaciones ni fórmulas genéricas.
                                Entrena bien. Come mejor. Evoluciona con propósito.
                            </p>
                        </div>

                    </div>
                    <div className='col-12 text-start'>
                        <SobreNosotrosComponent></SobreNosotrosComponent>
                        <PresentacionGeneradorDietaComponent></PresentacionGeneradorDietaComponent>
                        <SeguimientoComponent></SeguimientoComponent>
                        <PresentacionCalculadoraMacosComponent></PresentacionCalculadoraMacosComponent>
                        <TecnologiasComponent></TecnologiasComponent>
                        <PresentacionBuscadorComponent></PresentacionBuscadorComponent>
                        <PresentacionBuscadorEj></PresentacionBuscadorEj>
                    </div>
                </div>
            </div>
        </div>
    )
}
