import './IndexComponent.css'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import HeroComponent from './HeroComponent/HeroComponent'
import SobreNosotrosComponent from './SobreNosotrosComponent/SobreNosotrosComponent';
import TecnologiasComponent from './TecnologiasComponent/TecnologiasComponent';
import SeguimientoComponent from './SeguimientoComponent/SeguimientoComponent';
const IndexComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent /> 
      <SobreNosotrosComponent></SobreNosotrosComponent>
      <TecnologiasComponent></TecnologiasComponent>
      <SeguimientoComponent></SeguimientoComponent>
    </div>
  );
};

export default IndexComponent
