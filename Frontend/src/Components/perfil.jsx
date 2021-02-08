import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Button } from "react-bootstrap";
import { getFromLocal, saveToLocal } from "../functions/localstorage";

function CardProfesor() {
  const [profesor, setProfesor] = useState([]);
  const grado = JSON.parse(getFromLocal("datos"));
  const id = getFromLocal("id_usuario");
  const codigo = getFromLocal("codigo");

  useEffect(() => {
    axios.get(`http://localhost:5000/profesor-perfil/${id}`).then((res) => {
      setProfesor(res.data.rows[0]);
      saveToLocal("datos", JSON.stringify(res.data.rows));
     saveToLocal("codigo", res.data.rows[0]["cod_profesor"]);
     saveToLocal("materia", res.data.rows[0]["nombre_materia"])

    });
  }, [id]);

  return (
    <Card style={{ width: "30rem" }}>
      <Container>
        <Card.Img
          variant="top"
          //src={estudiante.imagen} cambiar el src de abajo por este
          src="https://img.ecartelera.com/noticias/56800/56825-m.jpg"
          alt={id}
          style={{ width: "50%", display: "block", margin: "auto" }}
          className="mt-5"
        />
      </Container>
      <Card.Body>
        <Card.Title className="text-center">
          {profesor.nombre_completo}
          <div>
          {codigo}
          </div>
        </Card.Title>
        <Card.Text className="text-center m-0">
          <span className="font-weight-bold">Documento Identidad: </span>{" "}
          {profesor.documento}
        </Card.Text>
        <Card.Text className="text-center m-0">
          <span className="font-weight-bold">
          Grupos:
          </span>
          {grado.map((item, index) => {
            return (<span >  {item.descripcion} -  </span>)
          })}
        </Card.Text>
        <Card.Text className="text-center mb-4">
          <span className="font-weight-bold"> Materia:</span> {profesor.nombre_materia}
        </Card.Text>
        <Button className="d-flex m-auto" variant="info">
          Cerrar Sesión
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardProfesor;
