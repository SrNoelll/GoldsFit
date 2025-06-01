import React from 'react'
import { Link } from 'react-router-dom'

export const PresentacionCalculadoraMacosComponent = () => {
    return (
        <div>
            <div className='container py-5'>
                <div className='row'>

                    <div data-aos="fade-right" className='contenedorTit col-lg-6 col-md-7 col-sm-12 col-12 p-3 h-100 text-white'>
                         <div><h2 className='tituloN'>Calculadora de Macros Gold's Nutrition</h2></div>
                        <p className=''>
                       
                        Descubre el equilibrio perfecto para alcanzar tus metas

                        Con nuestra calculadora inteligente de macronutrientes, obtendrás una guía 100% personalizada basada en tus objetivos, tipo de cuerpo, nivel de actividad y preferencias alimenticias. Ya sea que busques ganar músculo, perder grasa o mantenerte en forma, esta herramienta te ofrece la distribución exacta de proteínas, carbohidratos y grasas que tu cuerpo necesita.
                        <br />
                        ✅ Precisión nutricional en segundos
                        <br />
                        ✅ Adaptada a tu estilo de vida y metas
                        <br />
                        ✅ Ideal para entrenamientos, dietas o recomposición corporal<br />

                        Empieza ahora y transforma tu nutrición con la ciencia detrás de Gold’s Nutrition.

                    </p>
                        <div className='d-flex justify-content-end'>
                            <Link to={'/calculadora'}>
                                <button className='bg-n p-2 formNu rounded'>
                                <span> Calcula Tus Macros
                                </span>
                            </button>
                            </Link>
                            
                        </div>
                    </div>

                    <div data-aos="fade-left" className='col-lg-6 col-md-5 d-none d-md-flex h-100 justify-content-center'>
                        <img className='w-50 ' src='/calculadoraMacros.webp' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
