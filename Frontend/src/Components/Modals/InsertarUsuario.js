import React, { useState } from "react";
import axios from "axios";
import { Form, Row, Col } from "react-bootstrap";

function InsertarUsuario({ usuario }) {
    const [codigo, setCodigo] = useState();
    const [tipoDocumento, setTipoDocumento] = useState();
    const [documento, setDocumento] = useState();
    const [nombreCompleto, setNombreCompleto] = useState();
    const [sexo, setSexo] = useState();
    const [fechaNacimiento, setFechaNacimiento] = useState();
    const [direccion, setDireccion] = useState();
    const [ciudad, setCiudad] = useState();
    const [telefono, setTelefono] = useState();
    const [celular, setCelular] = useState();
    const [correo, setCorreo] = useState();
    const [contraseña, setContraseña] = useState();
    const [rol, setRol] = useState();
    const [foto, setFoto] = useState();
    const [pdf, setPdf] = useState();

    console.log(usuario);


    const InsertUsuario = async (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:5000/registro-usuario/`, {
                codigoUsuario: codigo,
                tipoDocumento: tipoDocumento,
                documento: documento,
                nombreCompleto: nombreCompleto,
                sexo: sexo,
                fechaNacimiento: fechaNacimiento,
                direccion: direccion,
                ciudad: ciudad,
                telefono: telefono,
                celular: celular,
                correo: correo,
                contraseña: contraseña,
                rol: rol,
                foto: foto,
                pdf: pdf
            })
            .then((res) => {
                console.log(res);
            });
        window.location = `/administrador-grupo/`;
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-success mb-5"
                data-toggle="modal"
                data-target={`#id`}
            >
                Insertar Grupo
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
                                // onClick={() => {
                                //     setCodigo(),
                                //     setTipoDocumento(),
                                //     setDocumento(),
                                //     setNombreCompleto(),
                                //     setSexo(),
                                //     setFechaNacimiento(),
                                //     setDireccion(),
                                //     setCiudad(),
                                //     setTelefono(),
                                //     setCelular(),
                                //     setCorreo(),
                                //     setContraseña(),
                                //     setRol(),
                                //     setFoto(),
                                //     setPdf()
                                // }}
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
                                        Codigo usuario
                                    </Form.Label>
                                    <Col sm="5">
                                        <Form.Control
                                            type="number"
                                            placeholder="Cod Usuario"
                                            onChange={(e) => {
                                                setCodigo(e.target.value);
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
                                        Tipo de documento
                                    </Form.Label>
                                    <Col sm="5">
                                        <Form.Control
                                            as="select"
                                            value={tipoDocumento}
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
                                        Numero de documento
                                    </Form.Label>
                                    <Col sm="5">
                                        <Form.Control
                                            type="number"
                                            placeholder="# documento"
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
                                        nombre Completo
                                    </Form.Label>
                                    <Col sm="5">
                                        <Form.Control
                                            type="number"
                                            placeholder="Nombre completo"
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
                                        Sexo
                                    </Form.Label>
                                    <Col sm="5">
                                        <Form.Control
                                            type="number"
                                            placeholder="Sexo"
                                            onChange={(e) => {
                                                setSexo(e.target.value);
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
                                        Fecha de nacimiento
                                    </Form.Label>
                                    <Col sm="5">
                                        <Form.Control
                                            type="number"
                                            placeholder="Fecha de Nacimiento"
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
                                        Dirección
                                    </Form.Label>
                                    <Col sm="5">
                                        <Form.Control
                                            type="number"
                                            placeholder="Dirección"
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
                                            type="number"
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
                                        Telefono
                                    </Form.Label>
                                    <Col sm="5">
                                        <Form.Control
                                            type="number"
                                            placeholder="Telefono"
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
                                            type="number"
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
                                            type="number"
                                            placeholder="Contraseña"
                                            onChange={(e) => {
                                                setContraseña(e.target.value);
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
                                            type="number"
                                            placeholder="Rol"
                                            onChange={(e) => {
                                                setRol(e.target.value);
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
                                Insertar Grupo
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
                                    setSexo();
                                    setFechaNacimiento();
                                    setDireccion();
                                    setCiudad();
                                    setTelefono();
                                    setCelular();
                                    setCorreo();
                                    setContraseña();
                                    setRol();
                                    setFoto();
                                    setPdf()
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