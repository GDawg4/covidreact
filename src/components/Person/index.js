import React from "react";
import {connect} from 'react-redux'

import './styles.css'
import * as actions from '../../actions/report'

const Person = ({name, phone, select}) => (
    <div className = 'person' onClick={select}>
        <p className='info-report name-report'>
            {name}
        </p>
        <p className='info-report phone-report'>
            {phone}
        </p>
        <p className='info-report carne-report'>
            18102
        </p>
        <p className='info-report status-report'>
            Nuevo reporte
        </p>
        <div className='sign'/>
    </div>
)

export default connect(undefined,
    (dispatch, {id}) => ({
        select(){
            dispatch(actions.selectReport(id))
        }
    })
    )(Person)
