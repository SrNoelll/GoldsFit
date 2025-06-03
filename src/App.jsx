import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './assets/components/LoginComponent/LoginComponent';
import RegisterComponent from './assets/components/LoginComponent/RegisterComponent';
import IndexComponent from './assets/components/IndexComponent/IndexComponent';
import EntrenamientoComponent from './assets/components/EntrenamientosComponent/EntrenamientoComponent';
import AniadirRutinaComponent from './assets/components/EntrenamientosComponent/AniadirRutinaComponent/AniadirRutinaComponent';
import SeleccionarEjercicioComponent from './assets/components/EntrenamientosComponent/AniadirRutinaComponent/SeleccionarEjercicioComponent/SeleccionarEjercicioComponent';
import VistaRutinaComponent from './assets/components/EntrenamientosComponent/VistaRutinaComponent/VistaRutinaComponent';
import EmpezarRutinaComponent from './assets/components/EntrenamientosComponent/EmpezarRutinaComponent/EmpezarRutinaComponent';
import AlimentacionComponent from './assets/components/AlimentacionComponent/AlimentacionComponent';
import CalculadoraMacros from './assets/components/AlimentacionComponent/CalculadoraMacros/CalculadoraMacros';
import PesoComponent from './assets/components/PesoComponent/PesoComponent';
import AlturaComponent from './assets/components/AlturaComponent/AlturaComponent';
import ObjetivoComponent from './assets/components/ObjetivoComponent/ObjetivoComponent';
import NivelComponent from './assets/components/NivelComponent/NivelComponent';
import SexoComponent from './assets/components/SexoComponent/SexoComponent';
import { GeneradorDietaComponent } from './assets/components/AlimentacionComponent/GeneradorDietaComponent/GeneradorDietaComponent';
import BuscadorAlimentosComponent from './assets/components/AlimentacionComponent/BuscadorAlimentosComponent/BuscadorAlimentosComponent';
import PerfilComponent from './assets/components/PerfilComponent/PerfilComponent';
import DescripcionConponent from './assets/components/DescripcionConponent/DescripcionConponent';
import { BuscadorEjerciciosComponent } from './assets/components/EntrenamientosComponent/BuscadorEjerciciosComponent/BuscadorEjerciciosComponent';
import EjercicioComponent from './assets/components/EntrenamientosComponent/BuscadorEjerciciosComponent/EjercicioComponent';
import { NosotrosComponent } from './assets/components/nosotrosComponent/nosotrosComponent';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<IndexComponent></IndexComponent>} />
        <Route path="/login" element={<LoginComponent></LoginComponent>} />
        <Route path="/register" element={<RegisterComponent></RegisterComponent>} />
        <Route path="/entrenamiento" element={<EntrenamientoComponent></EntrenamientoComponent>} />
        <Route path="/aniadirRutina" element={<AniadirRutinaComponent></AniadirRutinaComponent>} />
        <Route path="/seleccionarEjercicio" element={<SeleccionarEjercicioComponent/>} />
        <Route path="/rutina/:idRV" element={<VistaRutinaComponent/>} />
        <Route path="/EmpezarRutina/:idRV" element={<EmpezarRutinaComponent/>} />
        <Route path="/alimentacion" element={<AlimentacionComponent></AlimentacionComponent>} />
        <Route path="/calculadora" element={<CalculadoraMacros></CalculadoraMacros>} />
        <Route path="/peso" element={<PesoComponent></PesoComponent>} />
        <Route path="/altura" element={<AlturaComponent></AlturaComponent>} />
        <Route path="/objetivo" element={<ObjetivoComponent></ObjetivoComponent>}/>
        <Route path="/nivel" element={<NivelComponent></NivelComponent>}/>
        <Route path="/sexo" element={<SexoComponent></SexoComponent>} />
        <Route path="/dieta" element={<GeneradorDietaComponent></GeneradorDietaComponent>}/>
        <Route path="/alimentos" element={<BuscadorAlimentosComponent></BuscadorAlimentosComponent>}/>
        <Route path="/perfil" element={<PerfilComponent></PerfilComponent>}/>
        <Route path="/descripcion" element={<DescripcionConponent></DescripcionConponent>}/>
        <Route path="/ejercicios" element={<BuscadorEjerciciosComponent></BuscadorEjerciciosComponent>}/>
        <Route path="/ejercicio/:idEj" element={<EjercicioComponent></EjercicioComponent>}/>
        <Route path="/nosotros" element={<NosotrosComponent></NosotrosComponent>}/>
      </Routes>
    </Router>
  )
}

export default App
