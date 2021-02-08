import React, { useState } from "react";
import axios from "axios";
import { getFromLocal } from "../../functions/localstorage";
import { Form, Row, Col } from "react-bootstrap";

function EditarUsuario({ usuario }) {
  const [codigo, setCodigo] = useState();
  const [tipoDocumento, setTipoDocumento] = useState(usuario.tipo_documento);
  const [documento, setDocumento] = useState(usuario.documento);
  const [nombreCompleto, setNombreCompleto] = useState(usuario.nombre_completo);
  const [genero, setgenero] = useState(usuario.genero);
  const [fechaNacimiento, setFechaNacimiento] = useState(
    usuario.fecha_nacimiento
  );
  const [direccion, setDireccion] = useState(usuario.direccion);
  const [ciudad, setCiudad] = useState(usuario.ciudad);
  const [telefono, setTelefono] = useState(usuario.telefono);
  const [celular, setCelular] = useState(usuario.celular);
  const [correo, setCorreo] = useState(usuario.correo);
  const [contrasena, setContrasena] = useState(usuario.contraseña);
  const [rol, setRol] = useState(usuario.rol);
  const [foto, setFoto] = useState(usuario.foto);
  const [pdf, setPdf] = useState(usuario.pdf_documento);
  const [id_grupo, setId_grupo] = useState(usuario.id_grupo);

  const EditarUsuario = async (e) => {
    e.preventDefault();
    axios
      .patch(`http://34.75.240.23:5000/editar-usuario/`, {
        id_usuario: usuario.id_usuario,
        tipo_documento: tipoDocumento,
        documento: documento,
        nombre_completo: nombreCompleto,
        genero: genero,
        fecha_nacimiento: fechaNacimiento,
        direccion: direccion,
        ciudad: ciudad,
        telefono: telefono,
        celular: celular,
        correo: correo,
        contraseña: contrasena,
        rol: rol,
        foto: foto,
        pdf: pdf,
        id_grupo: id_grupo,
      })
      .then((res) => {
        console.log(res);
      });
    window.location = `/administrador-usuario/`;
  };

  const agregarUsuario = (e) => {
    console.log(usuario);
    e.preventDefault();
    if (usuario.rol === 2) {
      axios
        .post(`http://34.75.240.23:5000/registro-profesor/`, {
          id_usuario: usuario.id_usuario,
        })
        .then((res) => {
          console.log(res);
        });
      // window.location = `/administrador-usuario/`;
    } else if (usuario.rol === 3) {
      axios
        .post(`http://34.75.240.23:5000/registro-estudiante/`, {
          id_usuario: usuario.id_usuario,
          id_grupo: id_grupo,
        })
        .then((res) => {
          console.log(res);
        });
      //   window.location = `/administrador-usuario/`;
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-success mb-5"
        data-toggle="modal"
        data-target={`#id${usuario.id_usuario}`}
        onClick={(e) => {
          agregarUsuario(e);
        }}
      >
        Editar
      </button>
      <div className="modal" id={`id${usuario.id_usuario}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Usuario</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setCodigo();
                  setTipoDocumento();
                  setDocumento();
                  setNombreCompleto();
                  setgenero();
                  setFechaNacimiento();
                  setDireccion();
                  setCiudad();
                  setTelefono();
                  setCelular();
                  setCorreo();
                  setContrasena();
                  setRol();
                  setFoto();
                  setPdf();
                }}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <Form>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="4">
                    Tipo de documento
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      as="select"
                      onChange={(e) => {
                        setTipoDocumento(e.target.value);
                      }}
                      placeholder="Tipo de documento"
                      value={tipoDocumento}
                    >
                      <option value="" selected>
                        Seleccione...
                      </option>
                      <option value="TI">TI</option>
                      <option value="CC">CC</option>
                      <option value="NUIP">NUIP</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="4">
                    Número de documento
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="number"
                      placeholder="Número de documento"
                      onChange={(e) => {
                        setDocumento(e.target.value);
                      }}
                      value={documento}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="4">
                    Nombre Completo
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="text"
                      placeholder="Nombre Completo"
                      onChange={(e) => {
                        setNombreCompleto(e.target.value);
                      }}
                      value={nombreCompleto}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="4">
                    Genero
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      as="select"
                      onChange={(e) => {
                        setgenero(e.target.value);
                      }}
                      placeholder="Genero"
                      value={genero}
                    >
                      <option value="" selected>
                        Seleccione...
                      </option>
                      <option value="Femenino">Femenino</option>
                      <option value="Masculino">Masculino</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="4">
                    Fecha de nacimiento
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="date"
                      placeholder=" Fecha de nacimiento"
                      onChange={(e) => {
                        setFechaNacimiento(e.target.value);
                      }}
                      value={fechaNacimiento}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="4">
                    Direccion
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="text"
                      placeholder="Direccion"
                      onChange={(e) => {
                        setDireccion(e.target.value);
                      }}
                      value={direccion}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="4">
                    Ciudad
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="text"
                      placeholder="Ciudad"
                      onChange={(e) => {
                        setCiudad(e.target.value);
                      }}
                      value={ciudad}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="4">
                    Teléfono
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="number"
                      placeholder="Teléfono"
                      onChange={(e) => {
                        setTelefono(e.target.value);
                      }}
                      value={telefono}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="4">
                    Celular
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="number"
                      placeholder="Celular"
                      onChange={(e) => {
                        setCelular(e.target.value);
                      }}
                      value={celular}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="4">
                    Correo
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="email"
                      placeholder="Correo"
                      onChange={(e) => {
                        setCorreo(e.target.value);
                      }}
                      value={correo}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="4">
                    Contraseña
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="password"
                      placeholder="Contraseña"
                      onChange={(e) => {
                        setContrasena(e.target.value);
                      }}
                      value={contrasena}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="4">
                    Rol
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      as="select"
                      onChange={(e) => {
                        setRol(e.target.value);
                      }}
                      placeholder="Rol"
                      value={rol}
                    >
                      <option value="" selected>
                        Seleccione...
                      </option>
                      <option value="2">Profesor</option>
                      <option value="3">Estudiante</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
                {/* <h6 className="text-center m-3">Solo para estudiantes</h6>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="4">
                    Ingrese el id del grupo
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="number"
                      placeholder="Id grupo"
                      onChange={(e) => {
                        setId_grupo(e.target.value);
                      }}
                      value={id_grupo}
                    />
                  </Col>
                </Form.Group> */}
              </Form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={(e) => {
                  EditarUsuario(e);
                  agregarUsuario(e);
                  console.log("Nota actualizada");
                }}
              >
                Editar Usuario
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setCodigo();
                  setTipoDocumento();
                  setDocumento();
                  setNombreCompleto();
                  setgenero();
                  setFechaNacimiento();
                  setDireccion();
                  setCiudad();
                  setTelefono();
                  setCelular();
                  setCorreo();
                  setContrasena();
                  setRol();
                  setFoto();
                  setPdf();
                }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditarUsuario;
