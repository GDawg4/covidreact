import React, {useEffect}from "react";
import './styles.css'
import {connect} from 'react-redux'

import Persons from "../Persons";
import PersonInfo from "../PersonInfo";
import * as reportActions from "../../actions/report";
import {startFetchingReport} from "../../actions/report";
import defaultUser from '../../resources/default.svg'

const PersonScreen = ({onLoad, sort}) => (
    <div className='person-screen'>
            <Persons/>
            <PersonInfo/>
    </div>
)

export default PersonScreen