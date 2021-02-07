import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { getFromLocal } from "../functions/localstorage";

function Profesor() {
  const [profesor, setProfesor] = useState([]);
  const id = getFromLocal("id_usuario");
  const codigo = getFromLocal("cod_grupo")
  

  useEffect(() => {
    axios.get(`http://localhost:5000/profesor-perfil/${id}`).then((res) => {
      setProfesor(res.data.rows[0]);
      console.log(res.data);
    });
  }, [id]);

  return (
    <Container className="mt-5 mb-5">
      <div className="row  justify-content-center">
        <h1 className="text-center">{profesor.nombre_completo}</h1>
      </div>
      <div className="row  justify-content-center">
        <h3 className="text-center">Grupo {codigo}</h3>
      </div>
    </Container>
  );
}

export default Profesor;
