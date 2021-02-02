import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { saveToLocal,getFromLocal } from "../functions/localstorage";

function Tabla() {
  const [notas, setNotas] = useState({});
  const id = getFromLocal("id_usuario");
const getNota = getFromLocal("nota");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/estudiante-nota/${id}`)
      .then((res) => {
       const nota = saveToLocal("nota", res.data)
        console.log(res.data.rows);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
          
          {/* {nota.map((item, index) => {
            return (
              <tr key={index} id={index}>
                  <td>{item.cod_materia}</td>
                  <td>{item.materia}</td>
                  <td>{item.nota}</td>
                  <td>{item.final}</td>
              </tr>
            );
          })} */}
          <tr>
          {/* {getNota.map((item,index)=>{
            return(
              <td>{item.nota}</td>
            )
          })} */}
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
export default Tabla;
