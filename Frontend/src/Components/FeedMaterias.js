import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import InsertarMateria from "./Modals/InsertarMateria";
import axios from "axios";
import EditarGrupo from "./Modals/EditarGrupo";

function FeedMateria() {
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/administrador-materias/`).then((res) => {
      setMaterias(res.data.rows);
      console.log(res.data);
    });
  }, []);

  const deleteGrupo = (id) => {
    try {
      axios.delete(`http://localhost:5000/eliminar-grupo/${id}`);

      setMaterias(materias.filter((grupo) => grupo.id_grupo !== id));
      window.location = "/administrador-materia/";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Container className="text-center">
        <h1 className="m-5">Materias</h1>

        <InsertarMateria />
      </Container>
      <Container>
        <Table
          striped
          hover
          className="table-responsive"
          style={{ width: "100%", display: "block", margin: "auto" }}
        >
          <thead className="text-info text-center table-bordered">
            <tr className="table-info">
              <th scope="col">Codigo Materia</th>
              <th scope="col">Nombre Materia</th>
              <th scope="col">Código Profesor</th>
              <th scope="col">6</th>
              <th scope="col">7</th>
              <th scope="col">8</th>
              <th scope="col">9</th>
              <th scope="col">10</th>
              <th scope="col">11</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="text-center table-bordered">
            {materias.map((item, index) => {
              console.log(item.id_grupo);
              return (
                <tr key={`${index - item.id}`}>
                  <td width="10%">{item.cod_materia}</td>
                  <td width="10%">{item.nombre_materia}</td>
                  <td width="10%">{item.cod_profesor}</td>
                  <td >{item.sexto}</td>
                  <td >{item.septimo}</td>
                  <td >{item.octavo}</td>
                  <td >{item.noveno}</td>
                  <td >{item.decimo}</td>
                  <td >{item.once}</td>
                  <td><EditarGrupo grupo={item} />{" "}
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteGrupo(item.id_grupo)}
                  >
                    Eliminar
                  </button></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default FeedMateria;
