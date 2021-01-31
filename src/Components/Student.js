import React, { useEffect, useState } from "react";
import axios from "axios";
import {  Container } from "react-bootstrap";



function Student() {
  const [estudiante, setEstudiante] = useState([]);
   const id = 1;

  useEffect(() => {
    axios.get(`http://localhost:3004/estudiantes/${id}`).then((res) => {
      setEstudiante(res.data);
      console.log(res.data);
    });
  }, []);

  return (

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
  );
}

export default Student;
