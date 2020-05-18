import React from 'react';
import ReactDOM from 'react-dom';
import PersonScreen from "./components/PersonScreen";

ReactDOM.render(
    <PersonScreen/>,
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