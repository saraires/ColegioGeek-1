import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import InsertarGrupo from "./Modals/InsertarGrupo";
import axios from "axios";
import EditarGrupo from "./Modals/EditarGrupo";
import EliminarGrupo from "./Modals/EliminarGrupo";

function Grupo() {
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/administrador-grupo/`).then((res) => {
      setGrupos(res.data.rows);
      console.log(res.data);
    });
  }, []);
  
  const deleteGrupo =(id)=>{
    try {
      axios.delete(`http://localhost:5000/eliminar-grupo/${id}`)

      setGrupos(grupos.filter(grupo=>grupo.id_grupo !== id));
      window.location = "/administrador-grupo/"
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <Container className="text-center">
        <h1 className="m-5">Grupos</h1>

        <InsertarGrupo />
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
              <th scope="col">Codigo Grupo</th>
              <th scope="col">Descripción Grupo</th>
              <th scope="col">Jornada</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="text-center table-bordered">
            {grupos.map((item, index) => {
             console.log(item.id_grupo)
    return(
              <tr key={`${index - item.id}`}>
                <td width="10%">{item.cod_grupo}</td>
                <td width="10%">{item.descripcion}</td>
                <td width="10%">{item.jornada}</td>
                <td width="10%">
                  <EditarGrupo grupo={item} />{" "}
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteGrupo(item.id_grupo)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>)
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Grupo;
