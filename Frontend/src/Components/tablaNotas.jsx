import React, { useEffect, useState } from "react";
import axios from "axios";
import { getFromLocal, saveToLocal } from "../functions/localstorage";
import { Container, Table } from "react-bootstrap";
import EditarNotas from "./Modals/EditarNotas";

function TablaGrados() {
  const id = getFromLocal("id_usuario");
  const codigo = getFromLocal("cod_grupo");
  const grupo = getFromLocal("id_grupo");
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/profesor-notas/${id}/${grupo}/${codigo}`)
      .then((res) => {
        setNotas(res.data.rows);
        saveToLocal("id_estudiante", res.data.rows[0].id_estudiante);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, grupo, codigo]);

  return (
    <Container>
      <Table striped hover size="md" className="table-responsive ">
        <thead className="text-info text-center table-bordered">
          <tr className="table-info">
            <th scope="col">Codigo Estudiante</th>
            <th scope="col">Nombre Estudiante</th>
            <th scope="col">Seguimiento</th>
            <th scope="col">Conocimiento</th>
            <th scope="col">Bimensual</th>
            <th scope="col">Autoevaluación</th>
            <th scope="col">Nota Final</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className=" text-center table-bordered">
          {notas.map((notas) => {
            return (
              <tr key={notas._id}>
                <td>{notas.cod_estudiante}</td>
                <td>{notas.nombre_completo}</td>
                <td>{Number(notas.seguimiento).toFixed(2)}</td>
                <td>{Number(notas.conocimiento).toFixed(2)}</td>
                <td>{Number(notas.bimensual).toFixed(2)}</td>
                <td>{Number(notas.autoevaluacion).toFixed(2)}</td>
                <td>{Number(notas.nota_promedio).toFixed(2)}</td>
                <td>
                  <EditarNotas notas={notas} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default TablaGrados;
