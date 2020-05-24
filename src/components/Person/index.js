import React from "react";
import {connect} from 'react-redux'

import './styles.css'
import * as actions from '../../actions/report'
import * as selectors from '../../reducers'

const Person = ({name, phone, select, index, carne, isSelected, selected}) => (
    <div className='person-wrapper' style={index%2===0 ? {backgroundColor:'#c4c4c4'} : {backgroundColor:'#e7e7e7'}}>
        <div className = 'person' onClick={select} style = {selected ? {backgroundColor:'#078B45'}: index%2===0 ? {backgroundColor:'#c4c4c4'} : {backgroundColor:'#e7e7e7'}}>
            <p className='info-report name-report'>
                {name}
            </p>
            <p className='info-report phone-report'>
                {phone}
            </p>
            <p className='info-report carne-report'>
                {carne}
            </p>
            <p className='info-report status-report'>
                Nuevo reporte
            </p>
        </div>
        <div className= 'sign-wrapper'>
            <div className='sign'/>
        </div>
    </div>

)

export default connect(
    (state, {id}) => ({
        selected: (selectors.getSelectedId(state)) ? (selectors.getSelectedId(state).id)===id :false,
    }),
    (dispatch, {id}) => ({
        select(){
            dispatch(actions.selectReport(id))
        }
    })
    )(Person)
