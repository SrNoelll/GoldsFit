import React, { useState } from "react";
import HeaderComponent from "../../HeaderComponent/HeaderComponent";
import "./CalculadoraMacros.css";

const CalculadoraMacros = () => {
  const [resultado, setResultado] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const usuario = JSON.parse(localStorage.getItem("usuario")) || {};

  const objetivoUsuario = (() => {
  switch (usuario.objetivo?.toLowerCase()) {
    case 'ganar musculo':
      return 'ganar musculo';
    case 'perder grasa':
      return 'perder grasa';
    default:
      return 'mantener';
      }
    })();

    const entrenamientoUsuario = (() => {
  switch (usuario.nivel_entrenamiento?.toLowerCase()) {
    case 'bajo':
      return 'bajo';
    case 'moderado':
      return 'moderado';
    default:
      return 'alto';
      }
    })();
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const data = {
      peso: parseFloat(form.peso.value),
      altura: parseFloat(form.altura.value),
      edad: parseInt(form.edad.value),
      sexo: form.sexo.value.toLowerCase(),
      objetivo: form.objetivo.value.toLowerCase(),
      nivel_entrenamiento: form.nivel_entrenamiento.value.toLowerCase(),
    };

    fetch("https://2daw14.iesalonsocano.org/api/?ruta=calcularMacros", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error en la respuesta del servidor");
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setResultado(data.macros);
          setMensaje("");
        } else {
          setMensaje(data.message || "Error en los datos");
          setResultado(null);
        }
      })
      .catch(() => {
        setMensaje("Error al calcular macros");
        setResultado(null);
      });
  };
  const calcularEdad = (fechaNacimiento) => {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  return edad;
};

const edadCalculada = usuario.edad ? calcularEdad(usuario.edad) : '';

  return (
    <div className="calculadora nutricion">
      <HeaderComponent dieta />
      <div className="container contenido">
        <h1 className="tituloN text-center mb-4">Calculadora de Macros</h1>
        <div className="row">
          {/* Formulario */}
          <div className="col-6 text-white">
            <form className="row text-start" onSubmit={handleSubmit}>
              <div className="col-6 my-2">
                <h3 className="tituloN">Peso (kg)</h3>
                <input
                  className="col-12 rounded p-2 formNu"
                  type="number"
                  defaultValue={usuario.peso}
                  step="0.1"
                  name="peso"
                  required
                />
              </div>
              <div className="col-6 my-2">
                <h3 className="tituloN">Altura (cm)</h3>
                <input
                  className="col-12 rounded p-2 formNu"
                  defaultValue={usuario.altura}
                  type="number"
                  name="altura"
                  required
                />
              </div>
              <div className="col-6 my-2">
                <h3 className="tituloN">Edad</h3>
                <input
                  className="col-12 rounded p-2 formNu"
                  defaultValue={edadCalculada}
                  type="number"
                  name="edad"
                  required
                />
              </div>
              <div className="col-6 my-2">
                <h3 className="tituloN">Sexo</h3>
                <select
                  className="col-12 rounded p-2 formNu"
                  name="sexo"
                  required
                  defaultValue={
                    usuario.sexo?.toLowerCase() === "hombre" ? "hombre" : "mujer"
                  }
                >
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                </select>
              </div>
              <div className="col-6 my-2">
                <h3 className="tituloN">Objetivo</h3>
               <select
              className="col-12 rounded p-2 formNu"
              name="objetivo"
              defaultValue={objetivoUsuario}
              required
            >
              <option value="mantener">Mantener</option>
              <option value="perder grasa">Perder grasa</option>
              <option value="ganar musculo">Ganar músculo</option>
            </select>
              </div>
              <div className="col-6 my-2">
                <h3 className="tituloN">Nivel de entrenamiento</h3>
                <select
                  className="col-12 rounded p-2 formNu"
                  name="nivel_entrenamiento"
                  required
                  defaultValue={entrenamientoUsuario}
                >
                  <option value="bajo">Bajo</option>
                  <option value="moderado">Moderado</option>
                  <option value="alto">Alto</option>
                </select>
              </div>
              <div className="col-12 my-2">
                <input
                  className="rounded col-12 p-2 formNu"
                  type="submit"
                  value="Calcular macros"
                />
              </div>
            </form>
            {mensaje && <p className="mt-3 text-warning">{mensaje}</p>}
          </div>

          {/* Resultado */}
          <div className="col-6 p-4">
            <div className="text-start row text-black h-100 bg-n p-4 rounded">
                <div className="col-6">
                <h2 className="tituloN text-white mb-3">Resultado</h2>
              {resultado ? (
                <>
                  <p>
                    <strong>Calorías totales:</strong> {resultado.calorias_totales} kcal
                  </p>
                  <p>
                    <strong>Proteínas:</strong> {resultado.proteinas_g} g
                  </p>
                  <p>
                    <strong>Grasas:</strong> {resultado.grasas_g} g
                  </p>
                  <p>
                    <strong>Carbohidratos:</strong> {resultado.carbohidratos_g} g
                  </p>
                </>
              ) : (
                <p className="text-muted">
                  Rellena el formulario y pulsa <strong>Calcular macros</strong> para ver los resultados.
                </p>
              )}
                </div>
                <div className="col-6">
                    <img src="/calculadoraMacros.webp" className="img-fluid " alt="" />
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculadoraMacros;
