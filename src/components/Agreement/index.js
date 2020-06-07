import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

import './styles.css'
import * as selectors from '../../reducers'
import * as reportActions from "../../actions/report";

const Agreement =({notConsenting})=>(
    <div className='agreement-wrapper'>
        <div className='agreement-text'>
            {<p>Buen día.</p>}
            {<p>En la comunidad UVG queremos contribuir a notificar casos de personas infectadas de coronavirus durante la pandemia de COVID-19. Para esto, hemos creado esta aplicación, en la que puedes notificar la información de un caso; ya sea de tu persona o de alguna(s) de la(s) persona(s) que habitan en tu hogar. Con la notificación de esta persona enferma con COVID-19, también queremos saber, si alguna de las personas con las que haya estado, presentan síntomas respiratorios e identificarlos tempranamente, información que se colectará en otro formulario (Listado de contactos). De esta manera podremos realizar una vigilancia de los miembros de la comunidad UVG y sus familiares o las personas con las que vive. Al ingresar en esta aplicación te pediremos datos de la clasificación del caso, datos demográficos (edad, sexo, lugar de residencia), datos clínicos (fecha de inicio de síntomas, síntomas presentados), factores de riesgo (por ejemplo personas con enfermedades cardiovasculares, de riñones, pulmones, diabetes,  embarazo), si tuvo ingreso al hospital y datos epidemiológicos (por ejemplo si 14 días antes de enfermarse tuvo contacto con algún caso de COVID-19, si había viajado a algún país en el que se reporten casos, o a lugares locales en donde se han reportado casos) y datos de laboratorio (por ejemplo pruebas realizadas y sus resultados) . Estos datos no permitirán conocer información importante del caso y poder identificar grupos de riesgo y dar seguimiento a esta pandemia en tiempo, lugar y persona.  </p>}
            {<p>El reporte del esta información incluye responder preguntas simples con un sí o un no, lo que te llevará 10 minutos. Este reporte de caso es un proceso confidencial y no solicitaremos el nombre. Solamente las personas del equipo de salud ocupacional  de la UVG, serán los únicos que conocerán esta identificación, guardando la confidencialidad debida. Esta identificación permitirá tomar acciones oportunas para apoyar en todo momento a las personas con síntomas, para su tratamiento oportuno.  </p>}
            {<p>La participación es voluntaria, por lo que tienes el derecho de no contestar a las preguntas. El cuestionario fue autorizado previamente por el Comité de Ética del CES/UVG.  Tu decisión de participar en esta vigilancia de salud no afectará tu trabajo, tus estudios, o la atención de tu enfermedad.</p>}
            {<p>Si en caso tú o tus familiares presentan síntomas sugestivos de COVID-19 y autorizan que se les tome una muestra, el Centros de Estudios en Salud de la UVG coordinará la visita para tomar una muestra de hisopado nasofaríngeo y correrá las pruebas necesarias de manera gratuita.  Te informaremos el resultado. Si tienes alguna pregunta sobre esta vigilancia,  puedes comunicarte con XXX al correo XX@ uvg.edu.gt. Si tienes dudas sobre tus derechos como participante puedes comunicarte con la Dra. Ingrid Contreras, presidente del Comité de Ética del CES/UVG en horario de oficina al teléfono 2329-8456 o al email icontreras@ces.uvg.edu.gt. </p>}
        </div>
        <div className='agreements-buttons'>
            <Link to='/dash' style={{ textDecoration: 'none' }}>
                <button className='button no' onClick={notConsenting}>
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
        selected:selectors.getSelected(state)
    }),
    (dispatch)=>({
        notConsenting(report){
            dispatch(reportActions.notConsentingReport(report))
        },
    }),
    (stateProps, dispatchProps)=>({
        selected:stateProps.selectReport,
        notConsenting(){
            dispatchProps.notConsenting(stateProps.selected.id)
            console.log(stateProps.selected.id)
        }
    })
)(Agreement)