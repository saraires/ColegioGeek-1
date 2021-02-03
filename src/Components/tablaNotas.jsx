import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {getFromLocal, saveToLocal} from '../functions/localstorage'

function TablaGrados() {

    const [notas, setNotas] = useState([]);
    const id = getFromLocal("id_usuario");
    const id_grupo = getFromLocal("cod_grupo")
    // const url_grupo = 
    // const grupo = 
    // const desc_grupo = grupo[0];

    useEffect(() => {

        axios.post(`http://localhost:5000/profesor-grado-notas/${id}`,{"cod_grupo": id_grupo}).then((res) => {
            setNotas(res.data);
            console.log(res.data);

        }).catch((err) => {
            console.log(err);
        });

    }, []);

    return (
        <div className="container" style={{ marginTop: "40px" }}>
            <h3 className="card-tittle">Estos son las notas del grupo $grado-grupo en la materia de $materia del profe</h3>
            <br />
            <table className="table table-bordered">
                <thead>
                    <tr className="table-info">
                        <th scope="col">#</th>
                        <th scope="col">Estudiante</th>
                        <th scope="col">Notas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notas.map((notas) => {
                            return (
                                <tr key={notas._id}>
                                    <td>{notas}</td>
                                    <td>{notas.cod_grupo}
                                    <Link to ={`/profesor-editar-notas/${notas.cod_grupo}`} style={{ float: "right", color:"#47525E" }}><button type="button" class="btn btn-outline-info">Editar notas</button></Link>                                  
                                    </td>
                                    <td>{notas.grupo}</td>
                                    <td>{notas.jornada}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TablaGrados;