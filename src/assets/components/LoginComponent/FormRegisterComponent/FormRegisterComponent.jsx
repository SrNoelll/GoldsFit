import React, { useState } from "react";
import cultu from '../../../img/cultu.webp'

const FormRegisterComponent = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch('https://proxy.cors.sh/https://goldsfit.infinityfreeapp.com/index.php', {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        return response.json();
    })
    .then(data => {
      setMessage(data.message || "Registro exitoso");
      if (data.success) {
        window.location.href = "/login";
      }
    })
    .catch(() => setMessage("Hubo un error al registrar el usuario"));
};


  return (
    <div className="row d-flex align-items-center justify-content-center p-5 fomrLogin">
      <div className="col-6 text-center loginCont text-white">
        <img className="cultu" src={cultu} alt="" />
        <h2 className="titulo">GOLD'S FIT</h2>
        <form className="row text-start" name="registro" onSubmit={handleSubmit}>
          <input type="hidden" name="registro" />
          <div className="col-12 my-2">
            Nombre
            <input className="col-12 textoIn" type="text" name="nombre" required />
          </div>
          <div className="col-12 my-2">
            Nombre de usuario
            <input className="col-12 textoIn" type="text" name="userName" required />
          </div>
          <div className="col-12 my-2">
            E-mail
            <input className="col-12 textoIn" type="email" name="email" required />
          </div>
          <div className="col-12 my-2">
            Contraseña
            <input className="col-12 textoIn" type="password" name="password" required />
          </div>
          <div className="col-12 my-2">
            Confirmar contraseña
            <input className="col-12 textoIn" type="password" name="confirmPassword" required />
          </div>
          <div className="col-12 my-2">
            <div className="advanced-checkbox">
              <input type="checkbox" required id="advancedCheckbox" />
              <label htmlFor="advancedCheckbox">
                <div className="box">
                  <div className="front"></div>
                  <div className="back"></div>
                  <div className="left"></div>
                  <div className="right"></div>
                  <div className="top"></div>
                  <div className="bottom"></div>
                </div>
                <span className="checkmark"></span>
              </label>
            </div>
            <span className="px-2">
              He leído y acepto los términos y condiciones de uso
            </span>
          </div>
          <div className="col-12 my-2">
            <input className="enviar p-2" type="submit" value="Registrarse" />
          </div>
        </form>
        {message && <p className="mt-3">{message}</p>}
        <a className="enlace" href="/login">Ya tienes una cuenta? Inicia sesion</a>
      </div>
      
    </div>
  );
};

export default FormRegisterComponent;
