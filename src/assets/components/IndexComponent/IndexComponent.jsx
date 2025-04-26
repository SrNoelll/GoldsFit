import './IndexComponent.css'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import HeroComponent from './HeroComponent/HeroComponent'
import SobreNosotrosComponent from './SobreNosotrosComponent/SobreNosotrosComponent';
import TecnologiasComponent from './TecnologiasComponent/TecnologiasComponent';
const IndexComponent = () => {
  let ejercicios = JSON.parse(localStorage.getItem('ejercicios'))
  return (
    <div>
      <HeaderComponent />
      <HeroComponent /> 
      <SobreNosotrosComponent/>
      <TecnologiasComponent/>
    </div>
  );
};

export default IndexComponent
