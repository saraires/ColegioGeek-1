import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


function TablaGrados() {

    const [notas, setNotas] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3001/notas").then((res) => {
            setNotas(res.data);
            console.log(res.data);

        }).catch((err) => {
            console.log(err);
        });

    }, []);

    return (
        <div className="container" style={{ marginTop: "40px" }}>
            <h3 className="card-tittle">Estos son tus grupos</h3>
            <br />
            <table className="table table-bordered">
                <thead>
                    <tr className="table-info">
                        <th scope="col">#</th>
                        <th scope="col">Codigo de grupo</th>
                        <th scope="col">Grupo</th>
                        <th scope="col">Jornada</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notas.map((notas) => {
                            return (
                                <tr key={notas._id}>
                                    <td scope="row">{notas.id}</td>
                                    <td scope="row">{notas.cod_grupo}
                                    <Link to ="/profesor-grado-notas" style={{ float: "right", color:"#47525E" }}><button type="button" class="btn btn-outline-info">Ver notas</button></Link>                                  
                                    </td>
                                    <td scope="row">{notas.grupo}</td>
                                    <td scope="row">{notas.jornada}</td>
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