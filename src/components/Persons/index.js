import React, {useEffect} from "react";
import {connect} from 'react-redux'
import sortBy from 'lodash/sortBy'
import includes from 'lodash/includes'
import {Spinner} from "react-redux-spinner";

import Person from "../Person";
import * as reportActions from '../../actions/report'
import * as questionnaireActions from '../../actions/questionnaire'
import * as selectors from '../../reducers'
import defaultUser from "../../resources/default.svg";
import './styles.css'
import * as actions from "../../actions/report";

const Persons = ({allPersons, sort, fetch, fetchQuestionnaire}) => {
    useEffect(fetchQuestionnaire, [])
    return (
        <div>
            <div className='botones'>
                Haga click sobre un caso para ver los detalles
                <img src={defaultUser} className='sort-button oneb' onClick={fetch}/>
                <img src={defaultUser} className='sort-button twob' onClick={sort}/>
            </div>
            <div className='persons'>
                <Spinner/>
                {allPersons.map((person, index) => <Person person = {person} index = {index}/>)}
            </div>
        </div>
    )
}

export default connect (
    (state) =>({
        allPersons:selectors.getActiveObject(state),
        sort(){
            return sortBy(selectors.getSomeReports(state, 0), 'nametag')
        }
    }),
    (dispatch) => ({
        fetch(){
            dispatch(actions.startFetchingReport())
        },
        fetchQuestionnaire(){
            console.log('yya')
            //dispatch(questionnaireActions.startFetchingQuestionnaire())
        }
    })
)(Persons)