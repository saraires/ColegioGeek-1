import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";

function Tabla() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/notas")
      .then((res) => {
        setNotas(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container className="p-0">
      <Table striped bordered hover size="sm">
        <thead className="text-info text-center ">
          <tr>
            <th>Código Materia</th>
            <th>Materia</th>
            <th>N1</th>
            <th>N2</th>
            <th>N3</th>
            <th>N4</th>
            <th>N5</th>
            <th>N6</th>
            <th>N7</th>
            <th>N8</th>
            <th>N9</th>
            <th>N10</th>
            <th>N11</th>
            <th>N12</th>
            <th>N13</th>
            <th>N14</th>
            <th>N15</th>
            <th>Nota Final</th>
          </tr>
        </thead>
        <tbody>
          {notas.map((item, index) => {
            return (
              <tr key={index} id={index}>
                  <td>{index.codigo}</td>
                  <td>{index.materia}</td>
                  <td>{index.n1}</td>
                  <td>{index.n2}</td>
                  <td>{index.n3}</td>
                  <td>{index.n4}</td>
                  <td>{index.n5}</td>
                  <td>{index.n6}</td>
                  <td>{index.n7}</td>
                  <td>{index.n8}</td>
                  <td>{index.n9}</td>
                  <td>{index.n10}</td>
                  <td>{index.n11}</td>
                  <td>{index.n12}</td>
                  <td>{index.n13}</td>
                  <td>{index.n14}</td>
                  <td>{index.n15}</td>
                  <td>{index.final}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
export default Tabla;
