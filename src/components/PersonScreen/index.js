import React, {useEffect}from "react";
import './styles.css'
import {connect} from 'react-redux'

import Persons from "../Persons";
import PersonInfo from "../PersonInfo";
import * as reportActions from "../../actions/report";
import {startFetchingReport} from "../../actions/report";

const PersonScreen = ({onLoad}) => (
    <div className='person-screen'>
        {useEffect(onLoad, [])}
        <Persons/>
        <PersonInfo/>
    </div>
)

export default connect(
    undefined,
    (dispatch) => ({
        onLoad(){
            dispatch(startFetchingReport())
        }
    })
)(PersonScreen)