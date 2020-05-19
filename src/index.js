import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {configureStore} from "./store";

import PersonScreen from "./components/PersonScreen";

const {store, persistor} =configureStore()


ReactDOM.render(
    <Provider store = {store}>
        <PersonScreen/>
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