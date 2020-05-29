import React from 'react'

import './styles.css'
import Tab from "../Tabs";
import ods from './../../resources/image__2_-removebg-preview.png'
import uvgLogo from './../../resources/image__3_-removebg-preview.png'

const componentTitles = ['USUARIO', 'SEGUIMIENTO DE CASOS', 'REPORTES', 'ESTADÍSTICAS', 'CONFIGURACIÓN']

const Header = () => (
    <div className = 'header-wrapper'>
        <div className= 'title-wrapper'>
            <img className='photo uvg' src={uvgLogo}/>
            <div className='title'>
                SEGUIMIENTO DE CASOS
            </div>
            <img className='photo ods' src={ods}/>
        </div>
        <div className='tabs-wrapper'>
            {componentTitles.map(title => <Tab title={title}/>)}
        </div>
    </div>
)

export default Header