import React from "react";
import './styles.css'

const Person = ({name, phone, onClick}) => (
    <div className = 'person'>
        {name} {phone}
    </div>
)

export default Person
