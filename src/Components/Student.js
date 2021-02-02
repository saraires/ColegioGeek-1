import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { getFromLocal } from "../functions/localstorage";

function Student() {
  const [estudiante, setEstudiante] = useState([]);
  const id = getFromLocal("id_usuario");

  useEffect(() => {
    axios.get(`http://localhost:5000/estudiante-materias/${id}`).then((res) => {
      setEstudiante(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Container className="mt-5 mb-5">
      <div className="row  justify-content-center">
        <h1 text-center>{estudiante.nombre}</h1>
      </div>
      <div className="row  justify-content-center">
        <h2>{estudiante.grado}</h2>
      </div>
    </Container>
  );
}

export default Student;
