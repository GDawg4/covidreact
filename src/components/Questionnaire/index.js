import React, {useEffect, Fragment} from "react";
import {Field, reduxForm, formValueSelector} from 'redux-form'
import {connect} from "react-redux";
import orderBy from 'lodash/orderBy'
import {Spinner} from "react-redux-spinner";
import {Link} from "react-router-dom";

import './styles.css'
import source from '../../resources/default.svg'
import * as selectors from '../../reducers'
import * as qActions from '../../actions/questionnaire'
import answer from "../../reducers/answer";
import * as answerActions from '../../actions/answer'

const required = value => value? undefined:'*'
const selectRequired = value => value? undefined:'*'

const selector = formValueSelector('report')

const Questionnaire = ({selected, questions, onLoad, onClick, handleSubmit, goBack}) =>{
    useEffect(onLoad,[])
    return(
        <div>
            <div className='questionnaire-wrapper'>
                <Spinner/>
                <div className='wrapper q-patient-information'>
                    <strong>Información</strong>
                    <div>
                        {selected.file?
                            selected.file
                                .filter(answer => (answer.id_questions.id > 0 && answer.id_questions.id < 11) || (answer.id_questions.id > 45))
                                .map(answer => answer.id_questions.id_question_type !== 'TEXTBOX'? <div className='question'>{`${answer.id_questions.title}: ${answer.id_answer}`}</div>:
                                    <div className='question'>{`${answer.id_questions.title}: ${answer.description}`}</div>
                                )
                            :
                            <p>N/A</p>
                        }
                    </div>
                </div>
                <div className='wrapper q-patient-morbility'>
                    <strong>Comorbilidades</strong>
                    <div>
                        {selected.file?
                            selected.file
                                .filter(answer => answer.id_questions.id > 12 && answer.id_questions.id < 28)
                                .map(answer => <div className='question'>{`${answer.id_questions.title}: ${answer.id_answer}`}</div>)
                            :<p>N/A</p>
                        }
                    </div>
                </div>
                <div className='wrapper form-wrapper'>
                    <strong>Síntomas</strong>
                    <form onSubmit={handleSubmit}>
                        {orderBy(questions, ['id_sections', 'correlative'], ['asc', 'asc']).map(question =>
                            question.id_question_type === 'TITTLE'?
                                <div className='question q-title'>{question.title}</div>:
                                question.id_question_type === 'LABEL'?
                                    <div className='question q-label'>{question.title}</div>:
                                    question.id_question_type === 'TEXTBOX'?
                                        <div className='question textbox-wrapper'>
                                            <div className={'q-label-div'}>{question.title}</div>
                                            <Field name={`${question.name}`}
                                                   component={RenderInput}
                                                   type='text'
                                                   clasName={'textbox-field'}
                                                   validate={[required]}
                                            />
                                        </div>:
                                        question.id_question_type === 'DATEBOX'?
                                            <div className='question date-wrapper'>
                                                <div className={'q-label-div'}>{question.title}</div>
                                                <Field
                                                    name={`${question.name}`}
                                                    component={RenderDate}
                                                    type='date'
                                                    validate={required}
                                                />
                                            </div>:
                                            question.id_question_type === 'CHECK'?
                                                <div className='question check-wrapper'>
                                                    <div className={'q-label-div'}>{question.title}</div>
                                                    <Field name={`${question.name}`}
                                                           component='input'
                                                           type='checkbox'
                                                    />
                                                </div>:
                                                question.id_question_type === 'SELECTED'?
                                                    <div className='question select-wrapper'>
                                                        <div className={'q-label-div'}>{question.title}</div>
                                                        <Field
                                                            name={`${question.name}`}
                                                            component={RenderSelectField}
                                                            validate={[selectRequired]}
                                                        >
                                                            <option value={''}>{ }</option>
                                                            {question.answers.map(answer => <option value={answer.description}>{answer.description}</option>)}
                                                        </Field>
                                                    </div>:
                                                    <div className={`${question.name}`}>{question.title}</div>)}
                    </form>
                </div>
            </div>
            <div>
                <div className='q-button-wrapper'>
                    <Link to={'/dash'} style={{ textDecoration: 'none' }}>
                        <button className='button q-back' onClick={goBack}>Limpiar y regresar</button>
                    </Link>
                    <button className='button q-submit' type='submit'>
                        Enviar
                    </button>
                </div>
            </div>
        </div>
)}

const RenderInput = ({input, label, type, meta: { touched, error, warning }, children}) => (
    <div>
        <div>
            <input{...input} placeholder={label} type={type}/>
            {touched && error && <strong style={{color:'red', fontSize:'1.5rem'}}>{error}</strong>}
        </div>
    </div>
)

const RenderSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
    <div>
        <div>
            <select {...input}>
                {children}
            </select>
            {touched && error && <strong style={{color:'red', fontSize:'1.5rem'}}>{error}</strong>}
        </div>
    </div>
)

const RenderDate = ({input, label, type, meta: { touched, error, warning }, children}) => (
    <div>
        <div>
            <input{...input} placeholder={label} type={type}/>
            {touched && error && <strong style={{color:'red', fontSize:'1.5rem'}}>{error}</strong>}
        </div>
    </div>
)


const submit = (values, dispatch) => {
    dispatch(answerActions.startAddingAnswer(values))
    console.log('Enviado')
}

export default reduxForm({
    form:'report',
    onSubmit:submit
})(connect(
    (state)=>({
        selected:selectors.getSelected(state),
        questions:selectors.getAllQuestionnaires(state)
    }),
    dispatch=>({
            onLoad(){
                //console.log('yay')
                dispatch(qActions.startFetchingQuestionnaire())
            },
            goBack(){
                console.log('yay')
            }
        }
)
)(Questionnaire))