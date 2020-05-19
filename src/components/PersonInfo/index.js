import React from "react";
import './styles.css'

const PersonInfo = ({info}) => (
    <div className='person-info'>
        Info
        <button className='no'>
            No es caso
        </button>
        <button className= 'yes'>
            Dar seguimiento
        </button>
    </div>
)

export default PersonInfo