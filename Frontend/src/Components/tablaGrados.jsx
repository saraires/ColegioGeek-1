import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFromLocal, saveToLocal } from "../functions/localstorage";
import axios from "axios";
import { Container, Table } from "react-bootstrap";

function TablaGrados() {
  const id = getFromLocal("id_usuario");
  const nombre = getFromLocal("nombre_completo");
  const [profesor, setProfesor] = useState([]);
  const codigo = getFromLocal("codigo");
  const materia = getFromLocal('materia')
  console.log(codigo)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/profesor-grupos/${codigo}`)
      .then((res) => {
        setProfesor(res.data.rows);
        console.log(res.data.rows);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <h3 className="card-tittle text-center">{nombre} </h3>
      <h4 className="card-tittle text-center">{materia}</h4>
      <br />
      <Table striped hover size="s">
        <thead className="text-info text-center table-bordered">
          <tr className="table-info">
            <th scope="col">Codigo de grupo</th>
            <th scope="col">Grupo</th>
            <th scope="col">Jornada</th>
          </tr>
        </thead>
        <tbody className=" text-center table-bordered">
          {profesor.map((item, index) => {
            return (
              <tr key={`${index}-${id}`}>
                <td width={"30%"}>
                  <span>
                  {item.cod_grupo}
                  </span>
                  <Link
                    to={`/profesor-notas/${id}/${item.id_grupo}/${item.cod_grupo}`}
                    style={{ float: "right", color: "#47525E" }}
                  >
                    <button
                      type="button"
                      class="btn btn-outline-info"
                      onClick={() => {
                        saveToLocal("cod_grupo", item.cod_grupo);
                        saveToLocal("id_grupo", item.id_grupo);
                        saveToLocal("cod_profesor", item.cod_profesor);
                      }}
                    >
                      Ver notas
                    </button>
                  </Link>
                </td>
                <td>{item.descripcion}</td>
                <td >{item.jornada}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TablaGrados;


