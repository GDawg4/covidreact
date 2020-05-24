import React from "react";
import {connect} from 'react-redux'

import './styles.css'
import * as actions from '../../actions/report'
import * as selectors from '../../reducers'

const Person = ({person, index, selected, select}) => (
    <div className='person-wrapper' style={index%2===0 ? {backgroundColor:'#c4c4c4'} : {backgroundColor:'#e7e7e7'}}>
        <div className = 'person' onClick={select} style = {selected ? {backgroundColor:'#078B45'}: index%2===0 ? {backgroundColor:'#c4c4c4'} : {backgroundColor:'#e7e7e7'}}>
            <p className='info-report name-report'>
                {person.nametag}
            </p>
            <p className='info-report phone-report'>
                12345678
            </p>
            <p className='info-report carne-report'>
                {person.carne}
            </p>
            <p className='info-report status-report'>
                Nuevo reporte
            </p>
        </div>
        <div className= 'sign-wrapper'>
            <div className='sign'
                 style={!person.consent ? {backgroundColor: '#2B8BE4'} :
                     !person.is_contacted ? {backgroundColor: '#21822B'} :
                         !person.is_confirmed ? {backgroundColor: '#DDE100'} :
                             {backgroundColor: '#E12900'}}/>
        </div>
    </div>

)

export default connect(
    (state, {person}) => ({
        selected: (selectors.getSelectedId(state)) ? (selectors.getSelectedId(state).id)===person.id :false,
    }),
    (dispatch, {person}) => ({
        select(){
            dispatch(actions.selectReport(person.id))
        }
    })
    )(Person)
