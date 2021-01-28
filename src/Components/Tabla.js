import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";

function Tabla() {
  const [materia, setMateria] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/materias")
      .then((res) => {
        setMateria(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container className="p-0">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Código Materia</th>
            <th>Materia</th>
            <th>Profesor</th>
            <th>Nota Promedio</th>
          </tr>
        </thead>
        <tbody>
          {materia.map((item, index) => {
            return (
              <tr>
                <td>{item.codigo}</td>
                <td>{item.materia}</td>
                <td>{item.profesor}</td>
                <td>{item.nota}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
export default Tabla;
