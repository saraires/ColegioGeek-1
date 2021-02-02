import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { saveToLocal,getFromLocal } from "../functions/localstorage";

function Tabla() {
  const [notas, setNotas] = useState([]);
  const id = getFromLocal("id_usuario");
const getNota = getFromLocal("nota");
console.log(id)

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
    <Container className="p-0">
      <Table striped bordered hover size="sm">
        <thead className="text-info text-center ">
          <tr>
            <th>Código Materia</th>
            <th>Materia</th>
            <th>Seguimiento </th>
            <th>Bimensual 1 </th>
            <th>Bimensual 2 </th>
            <th>Autoevaluación </th>
            <th>Nota Final </th>
          </tr>
        </thead>
        <tbody>
          
          {notas.map((item, index) => {
            return (
              <tr key={index} id={index}>
                  <td>{item.cod_materia}</td>
                  <td>{item.nombre_materia}</td>
                  <td>{item.seguimiento}</td>
                  <td>{item.bimensual_1}</td>
                  <td>{item.bimensual_2}</td>
                  <td>{item.autoevaluacion}</td>
                  <td>{item.nota_final}</td>
              </tr>
            );
          })}
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
