import React from "react";
import { Link } from "react-router-dom";

const PresentacionBuscadorComponent = () => {
  return (
    <div className="mx-1">
      <div className="container py-5">
        <div className="row">
          <div
            className="contenedorTit col-lg-6 col-md-7 col-sm-12 col-12 p-3 h-100 text-white"
          >
            <div>
                <h2 className="tituloN">Buscador de alimentos</h2>
              </div>
            <p className="">
              
              Con nuestro buscador inteligente de alimentos, descubre al momento
              las calorías y macronutrientes (proteínas, carbohidratos y grasas)
              de una gran variedad de productos. Ya no tendrás que adivinar:
              accede a una base de datos actualizada y precisa para tomar el
              control de tu alimentación.
              <br /> ✅ Consulta rápida y sencilla <br /> ✅ Información clara y
              fiable de cada alimento <br /> ✅ Gran variedad de productos
              disponibles Empieza ahora y mejora tu nutrición con el respaldo de
              Gold’s Nutrition.
            </p>
            <div className="d-flex justify-content-end">
              <Link to={"/alimentos"}>
                <button className="bg-n p-2 formNu rounded">
                  <span> Buscador de alimentos</span>
                </button>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-5 d-none d-md-flex h-100 justify-content-center"
          >
            <img className="w-50" src="/alimentos.webp" alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default PresentacionBuscadorComponent;
