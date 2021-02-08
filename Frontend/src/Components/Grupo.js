import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
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

  return (
    <div className="Container">
      <Container className="text-center">
        <h1 className="m-5">Grupos</h1>

        <InsertarGrupo />
      </Container>
      <Container>
        <table className="table table-bordered table-responsive">
          <thead>
            <tr>
              <th>Codigo Grupo</th>
              <th>Descripción Grupo</th>
              <th>Jornada</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {grupos.map((item, index) => (
              <tr key={`${index - item.id}`}>
                <td>{item.cod_grupo}</td>
                <td>{item.descripcion}</td>
                <td>{item.jornada}</td>
                <td className="text-center">
                  <EditarGrupo grupo={item}/>
                  {" "}
                  <EliminarGrupo grupo={item} />
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default Grupo;
