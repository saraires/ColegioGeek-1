import React, { useState } from "react";
import axios from "axios";
import { Form, Row, Col } from "react-bootstrap";

function InsertarGrupo({ notas }) {
  const [codigo, setCodigo] = useState();
  const [descripcion, setDescripcion] = useState();
  const [jornada, setJornada] = useState();

  const InsertGrupo = async (e) => {
    e.preventDefault();
    axios
      .post(`http://34.75.240.23:5000/registro-grupo/`, {
        codigo: codigo,
        descripcion: descripcion,
        jornada: jornada,
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
              <h4 className="modal-title">Insertar Grupo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setCodigo();
                  setDescripcion();
                  setJornada();
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
                    Codigo Grupo
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="number"
                      placeholder="Cod Grupo"
                      onChange={(e) => {
                        setCodigo(e.target.value);
                        console.log(codigo);
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
                    Descripción Grupo
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="text"
                      placeholder="Descripción Grupo"
                      onChange={(e) => {
                        setDescripcion(e.target.value);
                        console.log(codigo);
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
                    Jornada
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      as="select"
                      onChange={(e) => {
                        setJornada(e.target.value);
                        console.log(e.target.value);
                      }}
                    >
                      <option value="" selected>
                        Seleccione...
                      </option>
                      <option value="Mañana">Mañana</option>
                      <option value="Tarde">Tarde</option>
                    </Form.Control>
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
                  InsertGrupo(e);
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
                  setDescripcion();
                  setJornada();
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

export default InsertarGrupo;
