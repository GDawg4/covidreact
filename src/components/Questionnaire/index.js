import React from "react";
import {Field, reduxForm} from 'redux-form'

import './styles.css'
import source from '../../resources/default.svg'

const Questionnaire = ({}) => (
    <div className='questionnaire-wrapper'>
        <form>
            <div className='affection-columns'>
                <div className='affection-wrapper a-one'>
                    <div className='one-affection'>
                        <label>Diabetes</label>
                        <div className='field'>
                            <Field classname='field' name='diabetes' id='diabetes' type='checkbox' component='input'/>
                        </div>
                    </div>
                    <div className='one-affection'>
                        <label>Hipertensión Arterial</label>
                        <div className='field'>
                            <Field classname='field' name='hypertension' id='hypertension' type='checkbox' component='input'/>
                        </div>
                    </div>
                    <div className='one-affection'>
                        <label>Asma</label>
                        <div className='field'>
                            <Field classname='field' name='asthma' id='asthma' type='checkbox' component='input'/>
                        </div>
                    </div>
                    <div className='one-affection'>
                        <label>Cardiopatía Congestiva</label>
                        <div className='field'>
                            <Field classname='field' name='congestive' id='congestive' type='checkbox' component='input'/>
                        </div>
                    </div>
                    <div className='one-affection'>
                        <label>Arritmia Cardiaca</label>
                        <div className='field'>
                            <Field classname='field' name='arrhythmia' id='arrhythmia' type='checkbox' component='input'/>
                        </div>
                    </div>
                    <div>
                        <div className='affection-name'>
                            Name
                        </div>
                        <img src={source} className='affection-photo'/>
                    </div>
                </div>
                <div className='affection-wrapper a-two'>
                    <div className='one-affection'>
                        <label>Diabetes</label>
                        <div className='field'>
                            <Field classname='field' name='diabetes' id='diabetes' type='checkbox' component='input'/>
                        </div>
                    </div>
                    <div className='one-affection'>
                        <label>Hipertensión Arterial</label>
                        <div className='field'>
                            <Field classname='field' name='hypertension' id='hypertension' type='checkbox' component='input'/>
                        </div>
                    </div>
                    <div className='one-affection'>
                        <label>Asma</label>
                        <div className='field'>
                            <Field classname='field' name='asthma' id='asthma' type='checkbox' component='input'/>
                        </div>
                    </div>
                    <div className='one-affection'>
                        <label>Cardiopatía Congestiva</label>
                        <div className='field'>
                            <Field classname='field' name='congestive' id='congestive' type='checkbox' component='input'/>
                        </div>
                    </div>
                    <div className='one-affection'>
                        <label>Arritmia Cardiaca</label>
                        <div className='field'>
                            <Field classname='field' name='arrhythmia' id='arrhythmia' type='checkbox' component='input'/>
                        </div>
                    </div>
                </div>
                <div className='affection-wrapper a-three'>
                    <div className='one-affection'>
                        <label>Diabetes</label>
                        <div className='field'>
                            <Field classname='field' name='diabetes' id='diabetes' type='checkbox' component='input'/>
                        </div>
                    </div>
                    <div className='one-affection'>
                        <label>Hipertensión Arterial</label>
                        <div className='field'>
                            <Field classname='field' name='hypertension' id='hypertension' type='checkbox' component='input'/>
                        </div>
                    </div>
                    <div className='one-affection'>
                        <label>Asma</label>
                        <div className='field'>
                            <Field classname='field' name='asthma' id='asthma' type='checkbox' component='input'/>
                        </div>
                    </div>
                    <div className='one-affection'>
                        <label>Cardiopatía Congestiva</label>
                        <div className='field'>
                            <Field classname='field' name='congestive' id='congestive' type='checkbox' component='input'/>
                        </div>
                    </div>
                    <div className='one-affection'>
                        <label>Arritmia Cardiaca</label>
                        <div className='field'>
                            <Field classname='field' name='arrhythmia' id='arrhythmia' type='checkbox' component='input'/>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

)
export default reduxForm({
    form:'report'
})(Questionnaire)