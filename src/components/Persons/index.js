import React from "react";
import './styles.css'
import {useEffect} from 'react'
import {connect} from 'react-redux'
import sortBy from 'lodash/sortBy'

import Person from "../Person";
import * as reportActions from '../../actions/report'
import * as selectors from '../../reducers'
import defaultUser from "../../resources/default.svg";

const Persons = ({allPersons, sort}) => {
    return (
        <div>
            <div className='botones'>
                Haga click sobre un caso para ver los detalles
                <img src={defaultUser} className='sort-button oneb'/>
                <img src={defaultUser} className='sort-button twob' onClick={sort}/>
            </div>
            <div className='persons'>
                {allPersons.map((person, index) => <Person key = {person.id} index={index} id = {person.id} name={person.nametag} carne = {person.useruvg} phone={'12345678'}/>)}
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
    undefined
    )(Persons)