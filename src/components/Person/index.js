import React from "react";
import {connect} from 'react-redux'

import './styles.css'
import * as actions from '../../actions/report'

const Person = ({name, phone, select}) => (
    <div className = 'person' onClick={select}>
        {name} {phone}
    </div>
)

export default connect(undefined,
    (dispatch, {id}) => ({
        select(){
            dispatch(actions.selectReport(id))
        }
    })
    )(Person)
