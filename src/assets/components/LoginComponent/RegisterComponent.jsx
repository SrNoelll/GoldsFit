import React from 'react'
import './LoginComponent.css'
import logo from '../../img/GoldFitEs.webp'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FormLoginComponent from './FormLoginComponent.jsx/FormLoginComponent';
import FormRegisterComponent from './FormRegisterComponent/FormRegisterComponent';
const RegisterComponent = () => {
    const pagina = ''
    const loginRegister = () =>{
        if (pagina === 'loin') {
            return <FormLoginComponent></FormLoginComponent>
        } else{
            return <FormRegisterComponent></FormRegisterComponent>
        }
    }
  return (
    <div>
      <div className='container-fluid'>
        <div className='row login-page'>
            <div className='col-6'>
                {loginRegister()}
            </div>
            <div className='col-6'>
                <div className='fotoLogin row d-flex align-items-end justify-content-end'>
                    <div className='cuadrado col-6 p-5 d-flex aling-items-center justify-content-center'>
                        <img className='img-fluid' src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterComponent
