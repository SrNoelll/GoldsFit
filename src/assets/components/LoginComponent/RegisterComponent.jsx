import React from "react";
import "./LoginComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FormLoginComponent from "./FormLoginComponent.jsx/FormLoginComponent";
import FormRegisterComponent from "./FormRegisterComponent/FormRegisterComponent";
const RegisterComponent = () => {
  const pagina = "";
  const loginRegister = () => {
    if (pagina === "loin") {
      return <FormLoginComponent></FormLoginComponent>;
    } else {
      return <FormRegisterComponent></FormRegisterComponent>;
    }
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row login-page">
          <div className="col-lg-6 col-md-8 col-sm-12 col-12">
            {loginRegister()}
          </div>
          <div className="col-lg-6 col-md-4 d-none d-md-block">
            <div className="fotoLogin row d-flex align-items-end justify-content-end">
              <div className="cuadrado col-lg-6 col-md-12 col-sm-12 col-12 p-5 d-flex aling-items-center justify-content-center">
                <img className="img-fluid" src="/GoldFitEs.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
