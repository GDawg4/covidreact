import React from 'react'

import './styles.css'
import Tab from "../Tabs";

const componentTitles = ['USUARIO', 'SEGUIMIENTO DE CASOS', 'REPORTES', 'ESTADÍSTICAS', 'CONFIGURACIÓN']

const Header = () => (
    <div className = 'header-wrapper'>
        <div className= 'title-wrapper'>
            <img className='uvg'/>
            <div className='title'>
                SEGUIMIENTO DE CASOS
            </div>
            <img className='ods'/>
        </div>
        <div className='tabs-wrapper'>
            {componentTitles.map(title => <Tab title={title}/>)}
        </div>
    </div>
)

export default Header