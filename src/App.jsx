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
      </Routes>
    </Router>
  )
}

export default App
