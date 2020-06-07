import React from "react";
import {connect} from 'react-redux'

import './styles.css'
import * as selectors from '../../reducers'
import * as reportActions from '../../actions/report'
import defaultUser from '../../resources/default.svg'
import {Link} from "react-router-dom";
import find from "lodash/find";

const PersonInfo = ({info, dismiss, follow}) => (
    <div className='person-info'>
        <div className='top-info'>
            <img className='user-stock' src={defaultUser}/>
            <div className='main-info'>
                <div className='name'>
                    {info.nametag}
                </div>
                <div className='extra-info'>
                    {
                        info.file ?
                            find(info.file, ['id_questions.id', 2]).description:
                            'N/A'
                    }
                </div>
                <div className= 'extra-info'>
                    {info.useruvg}
                </div>
            </div>
            <div className='state'>
                State
            </div>
            <div className='state-color' style={!info.consent ? {backgroundColor: '#2B8BE4'} :
                !info.is_contacted ? {backgroundColor: '#21822B'} :
                    !info.is_confirmed ? {backgroundColor: '#DDE100'} :
                        {backgroundColor: '#E12900'}}/>
        </div>
        <div className='middle-info'>
            <div className = 'tabs'>
                <div className = 'tab first'>
                    Información personal
                </div>
                <div className='tab second'>
                    Listado de síntomas
                </div>
                <div className='tab third'>
                    Comorbilidades
                </div>
            </div>
            <div className='line'/>
            <div className='info-wrapper'>
                <p className='info one'>
                    {info.file?
                        <ul>
                            {info.file
                                .filter(answer => (answer.id_questions.id > 0 && answer.id_questions.id < 11) || (answer.id_questions.id > 45))
                                .map(answer => <li>{`${answer.id_questions.title}: ${answer.id_answer}`}</li>)
                            }
                        </ul>:
                        <p>Seleccione un reporte</p>
                    }
                </p>
                <p className='info two'>
                    {info.report?
                        <ul>
                            {info.report
                                .map(answer => <li>{`${answer.id_questions.title}: ${answer.id_answer}`}</li>)
                            }
                        </ul>:<p>Seleccione un reporte</p>
                    }
                </p>
                <p className='info three'>
                    {info.file?
                        <ul>
                            {info.file
                                .filter(answer => answer.id_questions.id > 12 && answer.id_questions.id < 28)
                                .map(answer => <li>{`${answer.id_questions.title}: ${answer.id_answer}`}</li>)
                            }
                        </ul>:<p>Seleccione un reporte</p>
                    }
                </p>
            </div>
        </div>
        <div className='buttons-wrapper'>
            <button className='button no' onClick={dismiss}>
                No es caso
            </button>
            <Link to={'/agreement'} style={{ textDecoration: 'none' }}>
                <button className= ' button yes' onClick={follow}>
                    Dar seguimiento
                </button>
            </Link>
        </div>
    </div>
)

export default connect(
    (state) => ({
        info:selectors.getSelected(state) ? selectors.getSelected(state) : 'nel'
    }),
    (dispatch) => ({
        dismiss(report){
            dispatch(reportActions.dismissReport(report))
            dispatch(reportActions.deSelectReport(report))
        },
        follow(report){
            dispatch(reportActions.followReport(report))
        },
        selectReport(userID){
            dispatch(reportActions.selectReport(userID))
        }
    }),
    (stateProps, dispatchProps, {info})=>({
        info:stateProps.info,
        dismiss(){
            dispatchProps.dismiss(stateProps.info.id)
        },
        follow(){
            dispatchProps.follow(stateProps.info.id)
        }
    })
)(PersonInfo)