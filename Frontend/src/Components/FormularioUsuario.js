import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import InsertarUsuario from "./Modals/InsertarUsuario";
import axios from "axios";
import EditarUsuario from "./Modals/EditarUsuario";

function FormularioGrupo() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get(`http://34.75.240.23:5000/administrador-usuario/`).then((res) => {
      setUsuarios(res.data.rows);
      console.log(res.data);
    });
  }, []);

    const deleteUsuario =(id)=>{
      try {
        axios.delete(`http://34.75.240.23:5000/eliminar-usuario/${id}`)

        setUsuarios(usuarios.filter(usuario=>usuario.id_usuario !== id));
        window.location = "/administrador-usuario/"
      } catch (error) {
        console.log(error.message)
      }
    }

  return (
    <div>
      <Container className="text-center">
        <h1 className="m-5">Usuarios</h1>

        <InsertarUsuario  />
      </Container>
      <Container>
        <Table
          striped
          hover
          className="table-responsive mb-5"
          style={{ width: "100%", display: "block", margin: "auto" }}
        >
          <thead className="text-info text-center table-bordered">
            <tr className="table-info">
              <th scope="col">Codigo Usuario</th>
              <th scope="col">Tipo documento</th>
              <th scope="col"># Documento</th>
              <th scope="col">Nombre Completo</th>
              <th scope="col">Genero</th>
              <th scope="col">Fecha de nacimiento</th>
              <th scope="col">Dirección</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Telefono</th>
              <th scope="col">Celular</th>
              <th scope="col">Correo</th>
              <th scope="col">Rol</th>
              <th scope="col">Foto</th>
              <th scope="col">Documento PDF</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="text-center table-bordered">
            {usuarios.map((item, index) => {
              return (
                <tr key={`${index - item.id_usuario}`}>
                  <td >{item.id_usuario}</td>
                  <td >{item.tipo_documento}</td>
                  <td >{item.documento}</td>
                  <td >{item.nombre_completo}</td>
                  <td >{item.genero}</td>
                  <td >{Date(item.fecha_nacimiento)}</td>
                  <td >{item.direccion}</td>
                  <td >{item.ciudad}</td>
                  <td >{item.telefono}</td>
                  <td >{item.celular}</td>
                  <td >{item.correo}</td>
                  <td >{item.rol}</td>
                  <td >{item.foto}</td>
                  <td >{item.pdf_documento}</td>
                  <td >
                    <EditarUsuario usuario={item} />{" "}
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteUsuario(item.id_usuario)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default FormularioGrupo;
