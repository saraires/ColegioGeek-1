import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import {getFromLocal } from "../functions/localstorage";

function Tabla() {
  const [notas, setNotas] = useState([]);
  const id = getFromLocal("id_usuario");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/estudiante-nota/${id}`)
      .then((res) => {
        setNotas(res.data.rows);
        console.log(res.data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Container className="  ">
      <Table striped hover size="md" className="table-responsive ml-5 pl-5">
        <thead className="text-info text-center">
          <tr>
            <th>Código Materia</th>
            <th>Materia</th>
            <th>Seguimiento </th>
            <th>Conocimiento </th>
            <th>Bimensuales </th>
            <th>Autoevaluación </th>
            <th>Nota Final </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {notas.map((item, index) => {
            return (
              <tr key={index} id={index}>
                <td>{item.cod_materia}</td>
                <td>{item.nombre_materia}</td>
                <td>{Number(item.seguimiento).toFixed(2)}</td>
                <td>{Number(item.bimensual_1).toFixed(2)}</td>
                <td>{Number(item.bimensual_2).toFixed(2)}</td>
                <td>{Number(item.autoevaluacion).toFixed(2)}</td>
                <td>{Number(item.nota_final).toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
export default Tabla;
