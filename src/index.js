import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {configureStore} from "./store";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import PersonScreen from "./components/PersonScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Agreement from "./components/Agreement";
import Questionnaire from "./components/Questionnaire";
import 'normalize.css/normalize.css'
import './styles.css'

const {store, persistor} =configureStore()


ReactDOM.render(
    <Provider store = {store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <Header/>
                <Footer/>
                <Switch>
                    <Route path='/dash' exact component ={PersonScreen}/>
                    <Route path='/agreement' exact component={Agreement}/>
                    <Route path='/questionnaire' exact component={Questionnaire}/>
                </Switch>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);



/*ESTADO DE LA APP (REDUX)
// TENEMOS USERS Y REPORTES
// 

USERS: {
    order: [],
    byId: {
        id: {
            username,
            nombre,
            numero de telefono,
            numero de carné,
            password,
            direccion,
            carrera
        },

    }

}

reports: {
    order: [],
    byId: {
        idUsuario,
        estadoReporte,
        listaSintomas
    }
}

*/