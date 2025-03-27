import React, { useState } from "react";
import cultu from '../../../img/cultu.webp'

const FormLoginComponent = () => {
  const [message, setMessage] = useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      fetch("http://localhost/php/peticiones.php", {
          method: "POST",
          body: formData
      })
      .then(response => {
          if (!response.ok) throw new Error(`Error: ${response.statusText}`);
          return response.json();
      })
      .then(data => {
        setMessage(data.message || "Login Exitoso");
        if (data.success) {
          alert("bien")
        }
      })
      .catch(() => setMessage("Hubo un error al registrar el usuario"));
  };

  return (
    <div className="row d-flex align-items-center justify-content-center p-5 fomrLogin">
      <div className="col-6 text-center loginCont text-white">
        <img className="cultu" src={cultu} alt="" />
        <h2 className="titulo">GOLD'S FIT</h2>
        <form className="row text-start" name="login" onSubmit={handleSubmit} method="post">
        <input type="hidden" name="login" />
          <div className="col-12 my-2">
            E-mail
            <input className="col-12 textoIn" name="email" type="email" />
          </div>
          <div className="col-12 my-2">
            Contraseña
            <input className="col-12 textoIn" name="password" type="password" />
          </div>
          <div className="col-12 my-2">
          <div class="advanced-checkbox">
            <input type="checkbox" id="advancedCheckbox" />
            <label for="advancedCheckbox">
                <div class="box">
                <div class="front"></div>
                <div class="back"></div>
                <div class="left"></div>
                <div class="right"></div>
                <div class="top"></div>
                <div class="bottom"></div>
                </div>
                <span class="checkmark"></span>
            </label>
            </div>
            <span className="px-2">He leido y acepto los terminos y
            condiciones de uso</span>
          </div>
          <div className="col-12 my-2">
            <input className="enviar p-2" type="submit" value="Login" />
          </div>
        </form>
        {message && <p className="mt-3">{message}</p>}
        <a className="enlace" href="/register">No tienes una cuenta? Registrate</a>
      </div>
    </div>
  );
};

export default FormLoginComponent;
