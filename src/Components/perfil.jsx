import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Perfil from '../Images/Perfil.png';


function Contenido() {

    const [profesor, setProfesor] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3001/profesor").then((res) => {
            setProfesor(res.data);
            console.log(res.data);

        }).catch((err) => {
            console.log(err);
        });

    }, []);

    return (
        <>
            <div className="container-fluid row" style={{ marginTop: "30px" }}>
                <div>
                    <img src={Perfil} className="ajuste2" alt="..." />
                </div>

                <div className="col">
                    <div className="frase" >
                        <br />
                        <br />
                        <h1 className="card-tittle">Hola profesor</h1> {/* Traer el nombre por prop */}
                        <br />
                        <table className="table table-bordered" >
                            <th>
                                <tr>
                                    <td>Nombre: </td>
                                </tr>
                                <tr>
                                    <td>Materia: </td>
                                </tr>
                                <tr>
                                    <td>Correo: </td>
                                </tr>
                                <tr>
                                    <td>Grados: </td>
                                </tr>
                            </th>
                            {
                                profesor.map((profesor) => {
                                    return (
                                        <td key={profesor._id}>
                                            <tr><td>{profesor.nombre}</td></tr>
                                            <tr><td>{profesor.materia}</td></tr>
                                            <tr><td>{profesor.correo}</td></tr>
                                            <tr><td>{profesor.grados}</td></tr>
                                        </td>
                                    )
                                })
                            }
                            
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contenido;