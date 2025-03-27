import './IndexComponent.css'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import HeroComponent from './HeroComponent/HeroComponent'
import SobreNosotrosComponent from './SobreNosotrosComponent/SobreNosotrosComponent';
const IndexComponent = () => {
  let ejercicios = JSON.parse(localStorage.getItem('ejercicios'))
  return (
    <div>
      <HeaderComponent />
      <HeroComponent /> 
      <SobreNosotrosComponent/>
    </div>
  );
};

export default IndexComponent
