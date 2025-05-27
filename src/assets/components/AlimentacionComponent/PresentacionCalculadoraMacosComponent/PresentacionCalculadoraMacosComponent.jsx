import React from 'react'

export const PresentacionCalculadoraMacosComponent = () => {
    return (
        <div>
            <div className='container py-5'>
                <div className='row nosotros'>

                    <div className='contenedorTit col-6 p-3 h-100 text-white'><p className=''>
                        <div><h2 className='tituloN'>Calculadora de Macros Gold's Nutrition</h2></div>
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
                        <div className='container-fluid d-flex justify-content-end'>
                            <button className='btn bg-n'>
                                <span> EMPIEZA YA
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className='col-md-6 d-flex h-100 justify-content-center'>
                        <img className='img-fluid ' src='/pareja.webp' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
