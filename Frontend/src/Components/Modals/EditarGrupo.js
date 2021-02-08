import React, { useState } from "react";
import axios from "axios";
import { Form, Row, Col } from "react-bootstrap";

function EditarGrupo({ grupo }) {
  const [codigo, setCodigo] = useState(grupo.cod_grupo);
  const [jornada, setJornada] = useState(grupo.jornada);
  const [descripcion, setDescripcion] = useState(grupo.descripcion);

  const udpateGrupo = async (e) => {
    e.preventDefault();
    axios
      .patch(`http://34.75.240.23:5000/editar-grupo/`, {
        codigo: codigo,
        jornada: jornada,
        descripcion: descripcion,
        id_grupo: grupo.id_grupo,
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
        className="btn btn-success"
        data-toggle="modal"
        data-target={`#id${grupo.id_grupo}`}
      >
        Editar
      </button>
      <div className="modal" id={`id${grupo.id_grupo}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Grupo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setJornada(grupo.jornada);
                  setCodigo(grupo.cod_grupo);
                  setDescripcion(grupo.descripcion);
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
                    Código Grupo
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="number"
                      placeholder="Código Grupo"
                      value={codigo}
                      onChange={(e) => setCodigo(e.target.value)}
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
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
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
                      value={jornada}
                      onChange={(e) => {
                        setJornada(e.target.value);
                      }}
                      placeholder="Jornada"
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
                  udpateGrupo(e);
                  console.log("Grupo actualizado");
                }}
              >
                Editar Notas
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setJornada(grupo.jornada);
                  setCodigo(grupo.cod_grupo);
                  setDescripcion(grupo.descripcion);
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

export default EditarGrupo;
