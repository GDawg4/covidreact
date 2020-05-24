import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {configureStore} from "./store";
import PersonScreen from "./components/PersonScreen";
import {BrowserRouter as Router} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";

import 'normalize.css/normalize.css'
import './styles.css'

const {store, persistor} =configureStore()


ReactDOM.render(
    <Provider store = {store}>
        <Header/>
        <PersonScreen/>
        <Footer/>
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