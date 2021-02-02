import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { getFromLocal, saveToLocal } from "../functions/localstorage";

function Tabla() {
  //const getIdProfesor = getFromLocal("id_profesor");
  const [materia, setMateria] = useState([]);
//  const [profesor, setProfesor] = useState(JSON.parse(getIdProfesor));
  const id = getFromLocal("id_usuario");
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/estudiante-materia/${id}`)
      .then((res) => {
        setMateria(res.data.rows);
        const idProfesor = saveToLocal(
          "id_profesor",
          JSON.stringify(res.data.rows)
        );
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container className="p-0">
      <Table striped bordered hover size="sm">
        <thead className="text-info">
          <tr>
            <th>Código Materia</th>
            <th>Materia</th>
            <th>Nota Promedio</th>
          </tr>
        </thead>
        <tbody>
          {materia.map((item, index) => {
            return (
            
                <tr key={index} id={index}>
                  <td>{item.cod_materia}</td>
                  <td>{item.nombre_materia}</td>
                  <td>{item.avg}</td>
                </tr>
            
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
export default Tabla;
