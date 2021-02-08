import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import InsertarGrupo from "./Modals/InsertarGrupo";
import axios from "axios"

function Grupo() {

    const [grupo, setGrupo]=useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/administrador-grupo`).then((res)=>{
            setGrupo(res.data.rows)
            console.log(res.data)
        })
    },[])

  return (
    <div className="Container">
      <Container className="text-center m-5">
        <h1 className="m-3">Grupos</h1>

        <InsertarGrupo />
      </Container>
      <Container>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Cod grupo</th>
              <th>Descripción Grupo</th>
              <th>Jornada</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {grupo.map((item,index) => (
              <tr key={`${index-item.id}`}>
                <td>
                    {item.cod_grupo}
                </td>
                <td>
                    {item.descripcion}
                </td>
                <td>
                    {item.jornada}
                </td>
                <td>
                  <button
                    className="btn btn-success"
                   
                  >
                    Editar Grupo
                  </button>
                  {"   "}
                  <button
                    className="btn btn-danger"
               
                  >
                    Eliminar
                  </button>
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
