import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

import './styles.css'
import * as selectors from '../../reducers'
import * as reportActions from "../../actions/report";

const text1 = `Buen día. En la comunidad UVG queremos contribuir a notificar y darle seguimiento a personas que hayan estado en contacto con casos infectados de coronavirus durante la pandemia de COVID-19. Para esto, hemos creado esta aplicación, en la que solicitaremos información de las personas contactos que no presentan síntomas para clasificarlo como un caso de bajo o alto riesgo. De esta manera podremos realizar una vigilancia de los miembros de la comunidad UVG y sus familiares o las personas con las que vives, que hayan estado con un caso de COVID-19. Al ingresar en esta aplicación pediremos, de cada contacto, datos demográficos (edad, sexo, lugar de residencia), factores de riesgo (por ejemplo personas con enfermedades cardiovasculares, de riñones, pulmones, diabetes, embarazo), y preguntas de su relación con el caso (por ejemplo: si viven en la misma casa, si ha tenido contacto directo y físico con un caso, distancia y tiempo a la que está estado de un caso). `
const text2 = `Estos datos no permitirán conocer su clasificación y las medidas de vigilancia que se tendrán con cada uno de los contactos. El reporte del esta información incluye responder preguntas simples con un sí o un no, lo que te llevará 10 minutos. Este reporte de caso es un proceso confidencial y no solicitaremos el nombre. Solamente las personas del equipo de salud ocupacional de la UVG, serán los únicos que conocerán esta identificación, guardando la`

const Agreement =({dismiss})=>(
    <div className='agreement-wrapper'>
        <div className='agreement-text'>
            {text1}
            <br/>
            <br/>
            {text2}
        </div>
        <div className='agreements-buttons'>
            <Link to='/dash' style={{ textDecoration: 'none' }}>
                <button className='button no' onClick={dismiss}>
                        Rechazar
                </button>
            </Link>
            <Link to='/questionnaire' style={{textDecoration:'none'}}>
                <button className='button yes ag'>Aceptar</button>
            </Link>
        </div>
    </div>
)

export default connect(
    (state)=>({
        selected:selectors.getSelectedId(state)
    }),
    (dispatch)=>({
        dismiss(report){
            dispatch(reportActions.dismissReport(report))
        },
    }),
    (stateProps, dispatchProps)=>({
        selected:stateProps.selectReport,
        dismiss(){
            dispatchProps.dismiss(stateProps.selected)
        }
    })
)(Agreement)