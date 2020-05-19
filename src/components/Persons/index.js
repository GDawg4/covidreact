import React from "react";
import './styles.css'
import {useEffect} from 'react'
import {connect} from 'react-redux'

import Person from "../Person";
import * as reportActions from '../../actions/report'
import * as selectors from '../../reducers'

const Persons = ({onLoad, allPersons}) => {
    useEffect(onLoad, [])
    return (
    <div className='persons'>
        {allPersons.map(person => <Person key = {person.id} id = {person.id} name={person.nametag} phone={'12345678'}/>)}
    </div>
    )
}

export default connect (
    (state) =>({
        allPersons:selectors.getReports(state)
    }),
    (dispatch) => ({
        onLoad(){
            dispatch(reportActions.startFetchingReport())
        }
    })
    )(Persons)