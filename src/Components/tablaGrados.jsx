import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFromLocal, saveToLocal } from "../functions/localstorage";
import axios from "axios";

function TablaGrados() {
  const id = getFromLocal("id_usuario");
  const nombre = getFromLocal("nombre_completo");
  const [profesor, setProfesor] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/profesor-grupos/${id}`)
      .then((res) => {
        setProfesor(res.data.rows);
        console.log(res.data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <h3 className="card-tittle text-center">{nombre} </h3>
      <br />
      <table className="table table-bordered">
        <thead>
          <tr className="table-info">
            <th scope="col">Codigo de grupo</th>
            <th scope="col">Grupo</th>
            <th scope="col">Jornada</th>
          </tr>
        </thead>
        <tbody>
          {profesor.map((item, index) => {
            return (
              <tr>
                <td>
                  {item.cod_grupo}
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
                      }}
                    >
                      Ver notas
                    </button>
                  </Link>
                </td>
                <td>{item.descripcion_grupo}</td>
                <td>{item.jornada}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TablaGrados;
