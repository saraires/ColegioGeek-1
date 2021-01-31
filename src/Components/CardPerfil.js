import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function CardPerfil({id}) {
  const [estudiante, setEstudiante] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3004/estudiantes/${id}`).then((res) => {
      setEstudiante(res.data);
      console.log(res.data);
    });
  }, []);

  return (
      <Card style={{ width: "30rem" }}>
        <Container>
          <Card.Img
            variant="top"
            //src={estudiante.imagen} cambiar el src de abajo por este
            src="https://img.ecartelera.com/noticias/56800/56825-m.jpg"
            alt={estudiante.nombre}
            style={{ width: "50%", display: "block", margin: "auto" }}
            className="mt-5"
          />
        </Container>
        <Card.Body>
          <Card.Title className="text-center">
            {estudiante.nombre} {estudiante.apellido}{" "}
          </Card.Title>
          <Card.Text className="text-center m-0">
            Documento Identidad: {estudiante.documento}
          </Card.Text>
          <Card.Text className="text-center m-0">
            Estado: {estudiante.estado}
          </Card.Text>
          <Card.Text className="text-center mb-5">
            Grupo: {estudiante.grado}
            {estudiante.grupo}
          </Card.Text>
          <Button className="d-flex m-auto" variant="info">
            Cerrar Sesión
          </Button>
        </Card.Body>
      </Card>
    
  );
}

export default CardPerfil;
