import React, { useState } from "react";

const FormLoginComponent = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const data = {
      email: form.email.value,
      password: form.password.value,
    };

    fetch("https://2daw14.iesalonsocano.org/api/?ruta=login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        return response.json();
      })
      .then(data => {
        setMessage(data.message || "Login exitoso");
        if (data.success) {
          localStorage.setItem("usuario", JSON.stringify(data.usuario));
          window.location.href = "/";
        }
      })
      .catch(() => setMessage("Hubo un error al iniciar sesión"));
  };

  return (
    <div className="row d-flex align-items-center justify-content-center p-5 fomrLogin">
      <div className="col-6 text-center loginCont text-white">
        <img className="cultu" src='/cultu.webp' alt="" />
        <h2 className="titulo">GOLD'S FIT</h2>
        <form className="row text-start" name="login" onSubmit={handleSubmit}>
          <div className="col-12 my-2">
            E-mail
            <input className="col-12 textoIn" name="email" type="email" required />
          </div>
          <div className="col-12 my-2">
            Contraseña
            <input className="col-12 textoIn" name="password" type="password" required />
          </div>
          <div className="col-12 my-2">
            <div className="advanced-checkbox">
              <input type="checkbox" id="advancedCheckbox" />
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
            <input className="enviar p-2" type="submit" value="Login" />
          </div>
        </form>
        {message && <p className="mt-3">{message}</p>}
        <a className="enlace" href="/register">¿No tienes una cuenta? Regístrate</a>
      </div>
    </div>
  );
};

export default FormLoginComponent;
