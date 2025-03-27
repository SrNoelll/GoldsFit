import React from 'react'
import logo from '../../img/GoldFitEs.webp'
import { CgGym } from "react-icons/cg";
import { TbMeat } from "react-icons/tb";
import { TfiStatsUp } from "react-icons/tfi";
import { RiTeamLine } from "react-icons/ri";
import './HeaderComponent.css'
const HeaderComponent = () => {
  return (
    <header className='container-fluid'>
        <div className='container'>
            <div className="row p-2 d-flex align-items-center text-center justify-content-center">
                <div className='col'><img src={logo} alt="" /></div>
                <div className='col'><a className='hen' href=""><CgGym size={25}/> Entrenamiento</a></div>
                <div className='col'><a className='hen' href=""><TbMeat size={25} /> Nutricion</a></div>
                <div className='col'><a className='hen' href=""><TfiStatsUp size={25} /> Tus Marcas</a></div>
                <div className='col'><a className='hen' href=""><RiTeamLine size={25} /> Nuestro Proposito</a></div>
                <div className='col'><a className='hen' href="">User</a></div>
            </div>
        </div>
    </header>
  )
}

export default HeaderComponent
