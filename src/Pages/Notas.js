import React from 'react';
import { Container } from 'react-bootstrap';
import Student from "../Components/Student"
import TableNotes from "../Components/TableNotes"
import { useParams } from "react-router-dom";

function Notas() {

    const id = useParams();
    console.log(id);

    return(
        <Container>
            <Student />
            <TableNotes />
        </Container>
    )
}

export default Notas;