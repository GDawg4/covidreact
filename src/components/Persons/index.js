import React from "react";
import './styles.css'
import {useEffect} from 'react'
import {connect} from 'react-redux'
import sortBy from 'lodash/sortBy'

import Person from "../Person";
import * as reportActions from '../../actions/report'
import * as selectors from '../../reducers'
import defaultUser from "../../resources/default.svg";
import {startFetchingReport} from "../../actions/report";

const Persons = ({allPersons, sort, fetch}) => {
    return (
        <div>
            <div className='botones'>
                Haga click sobre un caso para ver los detalles
                <img src={defaultUser} className='sort-button oneb' onClick={fetch}/>
                <img src={defaultUser} className='sort-button twob' onClick={sort}/>
            </div>
            <div className='persons'>
                {allPersons.map((person, index) => <Person person = {person} index = {index}/>)}
            </div>
        </div>
    )
}

export default connect (
    (state) =>({
        allPersons:selectors.getSomeReports(state, 0),
        sort(){
            return sortBy(selectors.getSomeReports(state, 0), 'nametag')
        }
    }),
    (dispatch) => ({
        fetch(){
            dispatch(startFetchingReport())
        }
    })
)(Persons)