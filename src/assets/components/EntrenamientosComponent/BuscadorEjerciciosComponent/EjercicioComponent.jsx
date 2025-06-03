import React from 'react'
import HeaderComponent from '../../HeaderComponent/HeaderComponent'
import { Link, useParams } from 'react-router-dom';
import { IoReturnUpBackSharp } from 'react-icons/io5';

const EjercicioComponent = () => {

    const renderMedia = (src) => {
    if (!src) return null;
    const extension = src.split(".").pop().toLowerCase();
    const commonStyles = {
      borderRadius: "8px",
      width: "100%",
      height: "auto",
      objectFit: "cover",
    };

    let publicPath = src.replace('./src/assets/img/ejercicios/', '/ejercicios/');

    if (extension === "mp4") {
      return (
        <video autoPlay loop muted playsInline style={commonStyles}>
          <source src={publicPath} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      );
    } else {
      return <img src={publicPath} alt="ejercicio" style={commonStyles} />;
    }
  };
    const { idEj } = useParams();
    const ejercicios = JSON.parse(localStorage.getItem('ejercicios')) || [];
    const id = parseInt(idEj, 10);
    const ejercicio = ejercicios.find(ej => ej.id === id);


  return (
    <div className='contenido container'>
        <HeaderComponent></HeaderComponent>
        <div className='row my-3'>
            <div className='col-12'>
                <Link className="noEnlace" to={'/ejercicios'}>
                <h1 className='t-m'>
                    <IoReturnUpBackSharp />
                </h1>
                </Link>
                <h2 className='titulo'>
                    {ejercicio.nombre}
                </h2>
            </div>
            <div className='col-lg-6 my-2 col-md-12 col-sm-12 col-12'>
                {renderMedia(ejercicio.foto)}
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 col-12 t-m'>
                <div className='my-2'>
                    Musculo principal: {ejercicio.musPrin}
                </div>
                <div className='my-2'>
                   Musculo secundario: {ejercicio.musSec}
                </div>
                <div className='my-2 text-white'>
                   Instruccioines: {ejercicio.indicaciones}
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default EjercicioComponent