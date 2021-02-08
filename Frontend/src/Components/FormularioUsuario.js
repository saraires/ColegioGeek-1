import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import InsertarUsuario from "./Modals/InsertarUsuario";
import axios from "axios";
import EditarUsuario from "./Modals/EditarUsuario";

function FormularioUsuario() {
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/administrador-usuario/`).then((res) => {
            setUsuario(res.data.rows);
            console.log(res.data);
        });
    }, []);

    const deleteUsuario = (id) => {
        try {
            axios.delete(`http://localhost:5000/eliminar-usuario/${id}`)

            setUsuario(usuario.filter(usuario => usuario.id_usuario !== id));
            window.location = "/administrador-grupo/"
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <Container className="text-center">
                <h1 className="m-5">Usuario</h1>

                <InsertarUsuario />
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
                            <th scope="col">Codigo Usuario</th>
                            <th scope="col">Tipo documento</th>
                            <th scope="col"># Documento</th>
                            <th scope="col">Nombre Completo</th>
                            <th scope="col">Sexo</th>
                            <th scope="col">Fecha de nacimiento</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Celular</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Contraseña</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Foto</th>
                            <th scope="col">PDF</th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody className="text-center table-bordered">
                        {usuario.map((item, index) => {
                            console.log(item.id_grupo)
                            return (
                                <tr key={`${index - item.id}`}>
                                    <th whidth="10%">{item.id_usuario}</th>
                                    <th whidth="10%">{item.tipo_documento}o</th>
                                    <th whidth="10%">{item.documento}</th>
                                    <th whidth="10%">{item.nombre_completo}</th>
                                    <th whidth="10%">{item.genero}</th>
                                    <th whidth="10%">{item.fecha_nacimiento}</th>
                                    <th whidth="10%">{item.direccion}</th>
                                    <th whidth="10%">{item.ciudad}</th>
                                    <th whidth="10%">{item.telefono}</th>
                                    <th whidth="10%">{item.celular}</th>
                                    <th whidth="10%">{item.correo}</th>
                                    <th whidth="10%">{item.contraseña}</th>
                                    <th whidth="10%">{item.rol}</th>
                                    <th whidth="10%">{item.foto}</th>
                                    <th whidth="10%">{item.pdf_documento}</th>
                                    <td width="10%">
                                        <EditarUsuario usuario={item} />{" "}
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => deleteUsuario(item.id_usuario)}
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

export default FormularioUsuario;
