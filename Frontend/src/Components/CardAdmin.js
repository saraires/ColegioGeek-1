import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Button } from "react-bootstrap";
import { getFromLocal } from "../functions/localstorage";

function CardAdmin() {
  const [administrador, setAdministrador] = useState([]);
  const id = getFromLocal("id_usuario");

  useEffect(() => {
    axios.get(`http://localhost:5000/administrador-perfil/${id}`).then((res) => {
      setAdministrador(res.data.rows[0]);
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
          alt={administrador.nombre_completo}
          style={{ width: "50%", display: "block", margin: "auto" }}
          className="mt-5"
        />
      </Container>
      <Card.Body>
        <Card.Title className="text-center">
          {administrador.nombre_completo}
        </Card.Title>
        <Card.Text className="text-center mb-5">
          <span className="font-weight-bold">Documento Identidad: </span>{" "}
          {administrador.documento}
        </Card.Text>

        <Button onClick={() => (localStorage.clear(), window.location.href="/")} className="d-flex m-auto" variant="info">
          Cerrar Sesión
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardAdmin;
