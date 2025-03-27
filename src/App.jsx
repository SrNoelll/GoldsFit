import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './assets/components/LoginComponent/LoginComponent';
import RegisterComponent from './assets/components/LoginComponent/RegisterComponent';
import IndexComponent from './assets/components/IndexComponent/IndexComponent';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<IndexComponent></IndexComponent>} />
        <Route path="/login" element={<LoginComponent></LoginComponent>} />
        <Route path="/register" element={<RegisterComponent></RegisterComponent>} />
      </Routes>
    </Router>
  )
}

export default App
