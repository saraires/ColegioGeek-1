import React from 'react';
import {  Container } from "react-bootstrap";
import MenuProfesor from '../Components/menuProfesor';
import ProfesorPerfil from '../Components/perfil';

function Perfil() {
    return (
        <div>
            <MenuProfesor />
            <Container className="mt-5 d-flex justify-content-center">
            <ProfesorPerfil/>
            </Container>
        </div>
    );
}

export default Perfil;