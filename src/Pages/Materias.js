import axios from "axios";
import React, { useEffect, useParams, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Quote from "../Components/Quote";
import Tabla from "../Components/Tabla";


function Materias() {
  const [estudiante, setEstudiante] = useState([]);
  const id = 1;

  useEffect(() => {
    axios.get(`http://localhost:3004/estudiantes/${id}`).then((res) => {
      setEstudiante(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Container className="mb-5">
      <Container className="mt-5 mb-5">
        <div className="row  justify-content-center">
          <h1 text-center>
            {estudiante.nombre} {estudiante.apellido}
          </h1>
        </div>
        <div className="row  justify-content-center">
          <h2>
            {estudiante.grado} {estudiante.grupo}
          </h2>
        </div>
      </Container>
      <div className="row m-0 d-flex">
        <Col className="mb-2 p-0 col-sm-4 d-flex align-items-center">
          <Quote />
        </Col>
        <Col  className="p-0 col-sm-7 ">
          <Tabla />
        </Col>
      </div>
    </Container>
  );
}

export default Materias;
