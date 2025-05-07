import React from 'react'
import './LoginComponent.css'
import logo from '../../img/GoldFitEs.webp'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FormLoginComponent from './FormLoginComponent.jsx/FormLoginComponent';
import FormRegisterComponent from './FormRegisterComponent/FormRegisterComponent';
const LoginComponent = () => {
    const pagina = 'login'
    const loginRegister = () =>{
        if (pagina === 'login') {
            return <FormLoginComponent></FormLoginComponent>
        } else{
            return <FormRegisterComponent></FormRegisterComponent>
        }
    }
    const cargarEjercicios = () =>{
        fetch('https://proxy.cors.sh/https://goldsfit.infinityfreeapp.com/index.php', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: "ejercicios=" + encodeURIComponent("ejercicios")
        })
        .then(response => {
            if (!response.ok) throw new Error(`Error: ${response.statusText}`);
            return response.json();
        })
        .then(data => {
          if (data.success) {
            localStorage.setItem('ejercicios', JSON.stringify(data.ejercicios))
          }
        })
        .catch(() => alert("Hubo un error en la peticion de ejercicios"));
    }
    cargarEjercicios();
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

export default LoginComponent
