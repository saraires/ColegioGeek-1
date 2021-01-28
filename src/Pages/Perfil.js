import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Button } from "react-bootstrap";

function Perfil() {

    const styles = {
        imagen: {
          width: "25vw",
          display: "block",
          margin: "auto",
        },
        // media queries
        "@media (max-width: 400px)": {
          imagen: {
            width: "50vw",
          },
        },
      };
    
  const [estudiante, setEstudiante] = useState([]);
  const id = 1; //organizar id con la info que se recibe 

  useEffect(() => {
    axios.get(`http://localhost:3004/estudiantes/${id}`).then((res) => {
      setEstudiante(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "30rem" }}>
       <Container >
       <Card.Img
          variant="top"
          //src={estudiante.imagen} cambiar el src de abajo por este 
          src="https://img.ecartelera.com/noticias/56800/56825-m.jpg"
          alt={estudiante.nombre}
          style= {{width: "50%", display:"block", margin:"auto"}}
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
    </Container>
  );
}

export default Perfil;
