import React from "react";
import './styles.css'

import Persons from "../Persons";
import PersonInfo from "../PersonInfo";

const PersonScreen = ({}) => (
    <div className='person-screen'>
        <Persons/>
        <PersonInfo/>
    </div>
)

export default PersonScreen