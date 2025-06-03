import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import { NosotrosComponent } from './assets/components/nosotrosComponent/NosotrosComponent';

const PrivateRoute = ({ children }) => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  return usuario ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<IndexComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/nosotros" element={<NosotrosComponent />} />
        <Route path="/alimentacion" element={<AlimentacionComponent />} />

        {/* Rutas protegidas */}
        <Route path="/entrenamiento" element={
          <PrivateRoute><EntrenamientoComponent /></PrivateRoute>
        } />
        <Route path="/aniadirRutina" element={
          <PrivateRoute><AniadirRutinaComponent /></PrivateRoute>
        } />
        <Route path="/seleccionarEjercicio" element={
          <PrivateRoute><SeleccionarEjercicioComponent /></PrivateRoute>
        } />
        <Route path="/rutina/:idRV" element={
          <PrivateRoute><VistaRutinaComponent /></PrivateRoute>
        } />
        <Route path="/EmpezarRutina/:idRV" element={
          <PrivateRoute><EmpezarRutinaComponent /></PrivateRoute>
        } />
        <Route path="/calculadora" element={
          <PrivateRoute><CalculadoraMacros /></PrivateRoute>
        } />
        <Route path="/peso" element={
          <PrivateRoute><PesoComponent /></PrivateRoute>
        } />
        <Route path="/altura" element={
          <PrivateRoute><AlturaComponent /></PrivateRoute>
        } />
        <Route path="/objetivo" element={
          <PrivateRoute><ObjetivoComponent /></PrivateRoute>
        } />
        <Route path="/nivel" element={
          <PrivateRoute><NivelComponent /></PrivateRoute>
        } />
        <Route path="/sexo" element={
          <PrivateRoute><SexoComponent /></PrivateRoute>
        } />
        <Route path="/alimentos" element={
          <PrivateRoute><BuscadorAlimentosComponent /></PrivateRoute>
        } />
        <Route path="/perfil" element={
          <PrivateRoute><PerfilComponent /></PrivateRoute>
        } />
        <Route path="/descripcion" element={
          <PrivateRoute><DescripcionConponent /></PrivateRoute>
        } />
        <Route path="/ejercicios" element={
          <PrivateRoute><BuscadorEjerciciosComponent /></PrivateRoute>
        } />
        <Route path="/dieta" element={
          <PrivateRoute><GeneradorDietaComponent></GeneradorDietaComponent></PrivateRoute>
        } />
        <Route path="/ejercicio/:idEj" element={
          <PrivateRoute><EjercicioComponent /></PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App
