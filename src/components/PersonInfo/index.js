import React from "react";
import {connect} from 'react-redux'

import './styles.css'
import * as selectors from '../../reducers'
import defaultUser from '../../resources/default.svg'

const PersonInfo = ({info}) => (
    <div className='person-info'>
        <div className='top-info'>
            <img className='user-stock' src={defaultUser}/>
            <div className='main-info'>
                <div className='name'>
                    {info.nametag}
                </div>
                <div className='extra-info'>
                    22446688
                </div>
                <div className= 'extra-info'>
                    {info.useruvg}
                </div>
            </div>
            <div className='state'>
                State
            </div>
            <div className='state-color'/>
        </div>
        <div className='middle-info'>
            <div className = 'tabs'>
                <div className = 'tab first'>
                    Información personal
                </div>
                <div className='tab second'>
                    Listado de síntomas
                </div>
                <div className='tab third'>
                    Comorbilidades
                </div>
            </div>
            <div className='line'/>
            <div className='info-wrapper'>
                <p className='info one'>
                    Ubicación
                </p>
                <p className='info two'>
                    Síntomas
                </p>
                <p className='info three'>
                    Comorbilidades
                </p>
            </div>
        </div>
        <div className='buttons-wrapper'>
            <button className='button no'>
                No es caso
            </button>
            <button className= ' button yes'>
                Dar seguimiento
            </button>
        </div>
    </div>
)

export default connect(
    state => ({
        info:selectors.getSelected(state) ? selectors.getSelected(state): 'Seleccione'
    }),
    undefined
)(PersonInfo)