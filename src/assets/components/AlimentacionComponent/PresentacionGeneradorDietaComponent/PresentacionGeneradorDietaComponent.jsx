import React from 'react'
import { Link } from 'react-router-dom'

export const PresentacionGeneradorDietaComponent = () => {
    return (
        <div>
            <div className='container py-5'>
                <div className='row'>

                    

                    <div data-aos="fade-right" className='col-lg-6 col-md-5 d-none d-md-flex h-100 justify-content-center'>
                        <img className='w-50 ' src='/dieta.webp' alt="" />
                    </div>
                    <div className='contenedorTit col-lg-6 col-md-7 col-sm-12 col-12 p-3 h-100 text-white'  data-aos="fade-left">
                        <div><h2 className='tituloN'>Generador de dieta inteligente Gold's Nutrition</h2></div>
                        <p className='' >
                        
                        Alcanza tus metas con precisión y facilidad
                    Nuestra herramienta genera planes de alimentación personalizados según tus calorías objetivo, asegurando siempre un desayuno, almuerzo y cena equilibrados. Además, añade meriendas si lo necesitas, para que mantengas tu energía durante todo el día. Utiliza tu base de datos para crear combinaciones reales y efectivas de alimentos que se ajusten a tus necesidades.
                    <br />
                    ✅ Comidas automatizadas según tus calorías<br />
                    ✅ Estructura diaria garantizada: desayuno, almuerzo y cena<br />
                    ✅ Meriendas estratégicas si son necesarias<br />
                    ✅ Ideal para ganar músculo, perder grasa o mantener tu peso<br />

                    Empieza hoy con Gold’s Fit y lleva tu nutrición al siguiente nivel, con lógica y estructura adaptadas a tu estilo de vida.

                    </p>
                        <div className='d-flex justify-content-end'>
                            <Link to={'/dieta'}>
                                <button className='bg-n p-2 formNu rounded'>
                                <span>Genera tu dieta
                                </span>
                            </button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
