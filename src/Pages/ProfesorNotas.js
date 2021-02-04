import React from 'react';
import MenuProfesor from '../Components/menuProfesor';
import Profesor from '../Components/profesor';
import TablaNotas from '../Components/tablaNotas';

function Notas() {
    return (
        <div>
            <MenuProfesor />
            <Profesor />
            <TablaNotas />
        </div>
    );
}

export default Notas;