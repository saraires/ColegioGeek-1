import React from 'react';
import { Container } from 'react-bootstrap';
import Student from "../Components/Student"
import TableNotes from "../Components/TableNotes"

function Notas() {
    return(
        <Container>
            <Student />
            <TableNotes />
        </Container>
    )
}

export default Notas;