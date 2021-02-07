import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { Card, Container, Button } from "react-bootstrap";
import { getFromLocal } from "../functions/localstorage";

function CardPerfil() {
  const [estudiante, setEstudiante] = useState([]);
  const id = getFromLocal("id_usuario");

  useEffect(() => {
    axios.get(`http://localhost:5000/estudiante-perfil/${id}`).then((res) => {
      setEstudiante(res.data.rows[0]);
      console.log(res);
    });
  }, [id]);

  return (
      <Card style={{ width: "30rem" }}>
        <Container>
          <Card.Img
            variant="top"
            //src={estudiante.imagen} cambiar el src de abajo por este
            src="https://img.ecartelera.com/noticias/56800/56825-m.jpg"
            alt={estudiante.nombre_completo}
            style={{ width: "50%", display: "block", margin: "auto" }}
            className="mt-5"
          />
        </Container>
        <Card.Body>
          <Card.Title className="text-center">
            {estudiante.nombre_completo} 
          </Card.Title>
          <Card.Text className="text-center m-0">
            <span className="font-weight-bold">Documento Identidad: </span>{" "}{estudiante.documento}
          </Card.Text>
          <Card.Text className="text-center m-0">
            <span className="font-weight-bold"> Codigo Estudiante: </span>{estudiante.cod_estudiante}
          </Card.Text>
          <Card.Text className="text-center m-0">
            <span className="font-weight-bold"> Estado:</span>{estudiante.estado}
          </Card.Text>
          <Card.Text className="text-center mb-3">
            <span className="font-weight-bold"> Grupo: </span>{estudiante.descripcion}
          </Card.Text>
          <Button className="d-flex m-auto" variant="info">
            Cerrar Sesión
          </Button>
        </Card.Body>
      </Card>
    
  );
}

export default CardPerfil;
