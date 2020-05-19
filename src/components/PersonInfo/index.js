import React from "react";
import {connect} from 'react-redux'

import './styles.css'
import * as selectors from '../../reducers'

const PersonInfo = ({info}) => (
    <div className='person-info'>
        <div className='name'>
            {info.nametag}
        </div>
        <div className= 'extra-info'>
            {info.useruvg}
        </div>
        <button className='no'>
            No es caso
        </button>
        <button className= 'yes'>
            Dar seguimiento
        </button>
    </div>
)

export default connect(
    state => ({
        info:selectors.getSelected(state) ? selectors.getSelected(state): 'Seleccione'
    }),
    undefined
)(PersonInfo)