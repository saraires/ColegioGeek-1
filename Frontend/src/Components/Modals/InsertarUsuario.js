import React, { useState } from "react";
import axios from "axios";
import { Form, Row, Col } from "react-bootstrap";

function InsertarUsuario() {
  const [id_usuario, setIdUsuario] = useState();
  const [tipoDocumento, setTipoDocumento] = useState();
  const [documento, setDocumento] = useState();
  const [nombreCompleto, setNombreCompleto] = useState();
  const [genero, setgenero] = useState();
  const [fechaNacimiento, setFechaNacimiento] = useState();
  const [direccion, setDireccion] = useState();
  const [ciudad, setCiudad] = useState();
  const [telefono, setTelefono] = useState();
  const [celular, setCelular] = useState();
  const [correo, setCorreo] = useState();
  const [contrasena, setContrasena] = useState();
  const [rol, setRol] = useState();
  const [foto, setFoto] = useState();
  const [pdf, setPdf] = useState();
  const [id_grupo, setId_Grupo] = useState();

  const InsertUsuario = async (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/registro-usuario/`, {
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
        pdf_documento: pdf,
        id_usuario: id_usuario,
        id_grupo: id_grupo
      })
      .then((res) => {
        console.log(res);
      });
    window.location = `/administrador-usuario/`;
  };


  return (
    <>
      <button
        type="button"
        className="btn btn-success mb-5"
        data-toggle="modal"
        data-target={`#id`}
      >
        Insertar Usuario
      </button>
      <div className="modal" id={`id`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Insertar Usuario</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setIdUsuario();
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
                    >
                      <option value="" selected>
                        Seleccione...
                      </option>
                      <option value="2">Profesor</option>
                      <option value="3">Estudiante</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
                <h6 className="text-center m-3">Solo para estudiantes</h6>
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
                        setId_Grupo(e.target.value);
                      }}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={(e) => {
                  InsertUsuario(e);
                  console.log("Nota actualizada");
                }}
              >
                Insertar Usuario
              </button>

              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setIdUsuario();
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

export default InsertarUsuario;
