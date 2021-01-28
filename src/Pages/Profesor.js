import React from 'react';
import contenido from './Components/contenido';
import MenuProfesor from '../Components/menu';


function inicioProfesor() {
    return (
        <div>
            <MenuProfesor />
            <contenido/>
        </div>
    );
}

export default inicioProfesor();
