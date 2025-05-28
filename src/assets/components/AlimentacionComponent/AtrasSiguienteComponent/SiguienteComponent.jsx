import React from 'react'
import { FaBackwardStep } from 'react-icons/fa6'
import { GiNextButton } from 'react-icons/gi'
import { Link } from "react-router-dom";

const SiguienteComponent = ({atras,siguiente,funcion}) => {
  return (
    <div className='row'>
            <Link className='noEnlace col-6' to={atras}>
                <div className='col-12'>
                    <p className='enviar d-flex justify-content-center align-items-center p-2'>
                    <FaBackwardStep /> Volver
                    </p>
                </div>
            </Link>
            <Link className='noEnlace col-6' to={siguiente}>
            <div className='col-12' onClick={funcion}>
                <p className='enviar p-2'>
                Siguiente <GiNextButton />
                </p>
            </div>
            </Link>
        </div>
  )
}

export default SiguienteComponent
