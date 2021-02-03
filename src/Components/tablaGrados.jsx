import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getFromLocal, saveToLocal } from "../functions/localstorage";


function TablaGrados() {

    const [grupos, setGrupos] = useState([]);
    const id = getFromLocal("id_usuario");
    // const id_grupo = "";
    const getDatos = getFromLocal("datos_grupo");
    console.log(getDatos);
    const [datos, setDatos] = useState(JSON.parse(getDatos));
    

    console.log(id);

    useEffect(() => {

        axios.get(`http://localhost:5000/profesor-grupos/${id}`).then((res) => {
            setGrupos(res.data.rows);
            console.log(`data ${res.data}`);
            const datos_grupo = saveToLocal("id_grupo", JSON.stringify(res.data.rows));
            const cod_grupo = saveToLocal(grupos.cod_grupo);

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
                        grupos.map((grupos) => {
                            return (
                                <tr key={grupos._id}>
                                    <td>{grupos.id}</td>
                                    <td>{grupos.cod_grupo}
                                    <Link to ={`/profesor-grado-notas/${grupos.cod_grupo}`} style={{ float: "right", color:"#47525E" }}><button type="button" onClick={() => {saveToLocal("cod_grupo", grupos.cod_grupo)}} class="btn btn-outline-info">Ver notas</button></Link>                                  
                                    </td>
                                    <td>{grupos.descripcion_grupo}</td>
                                    <td>{grupos.jornada}</td>
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