import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { getFromLocal } from "../functions/localstorage";

function Student() {
  const [estudiante, setEstudiante] = useState([]);
  const id = getFromLocal("id_usuario");
  

  useEffect(() => {
    axios.get(`http://localhost:5000/estudiante-perfil/${id}`).then((res) => {
      setEstudiante(res.data.rows[0]);
      console.log(res.data);
    });
  }, [id]);

  return (
    <Container className="mt-5 mb-5">
      <div className="row  justify-content-center">
        <h1 className="text-center">{estudiante.nombre_completo}</h1>
      </div>
      <div className="row  justify-content-center">
        <h2 className="text-center">{estudiante.descripcion_grupo}</h2>
      </div>
    </Container>
  );
}

export default Student;
