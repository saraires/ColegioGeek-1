import React from 'react';
import { Container } from 'react-bootstrap';
import Student from "../Components/Student"
import TableNotes from "../Components/TableNotes"
import { useParams } from "react-router-dom";
import MenuEstudiante from '../Components/menuEstudiante';
import Encabezado from "../Components/Navbar"
function Notas() {

    const id = useParams();
    console.log(id);

    return (
        <>
                <Encabezado/>
        <Container>
                {/* <MenuEstudiante /> */}
                <Student />
                <TableNotes />
            </Container>
</>
    )
}

export default Notas;