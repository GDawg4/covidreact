import React from "react";
import './styles.css'
import Person from "../Person";

const test = [0, 1, 2, 3]

const Persons = ({}) => (
    <div className='persons'>
        {test.map(person => <Person name={person} phone={person*2} />)}
    </div>
)

export default Persons