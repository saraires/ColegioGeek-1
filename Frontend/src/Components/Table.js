import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { getFromLocal } from "../functions/localstorage";

function Tabla() {
  const [materia, setMateria] = useState([]);
  const id = getFromLocal("id_usuario");

  useEffect(() => {
    axios
      .get(`http://34.75.240.23:5000/estudiante-materia/${id}`)
      .then((res) => {
        setMateria(res.data.rows);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Container className="p-0 d-flex justify-content-center row">
      <Table striped bordered hover size="sm" className="col-9">
        <thead className="text-info text-center">
          <tr>
            <th>Código Materia</th>
            <th>Materia</th>
            <th>Nota Promedio</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {materia.map((item, index) => {
            return (
              <tr key={index} id={index}>
                <td>{item.cod_materia}</td>
                <td>{item.nombre_materia}</td>
              <td>{item.nota_promedio}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
export default Tabla;
