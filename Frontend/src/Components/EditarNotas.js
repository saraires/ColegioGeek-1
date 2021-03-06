import React, { useState } from "react";
import axios from "axios";
import { getFromLocal } from "../functions/localstorage";
import { Form, Row, Col } from "react-bootstrap";

function EditarNotas({ notas }) {
  const [seguimiento, setSeguimiento] = useState(notas.seguimiento);
  const [conocimiento, setConocimiento] = useState(notas.conocimiento);
  const [bimensual, setBimensual] = useState(notas.bimensual);
  const [autoevaluacion, setAutoevaluacion] = useState(notas.autoevaluacion);
  const id_notas = notas.id_nota;
  const id_estudiante= notas.id_estudiante;
  const id_materia= notas.id_materia;

  console.log(notas)


  const id = getFromLocal("id_usuario");
  const codigo = getFromLocal("cod_grupo");
  const grupo = getFromLocal("id_grupo");

  const updateNotas = () => {

    axios.patch(`http://34.75.240.23:5000/editar-notas/`, {
        seguimiento: seguimiento,
        id_nota: notas.id_nota,
        id_estudiante: notas.id_estudiante,
        id_materia: notas.id_materia,
        conocimiento: conocimiento,
        bimensual: bimensual,
        autoevaluacion: autoevaluacion
      })
      .then((res) => {
        console.log(res);
        console.log(seguimiento, conocimiento, bimensual, autoevaluacion, id_notas, id_estudiante, id_materia)
      });
    window.location = `/profesor-notas/${id}/${grupo}/${codigo}`;
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        data-toggle="modal"
        data-target={`#id${notas.id_nota}`}
      >
        Editar Notas
      </button>
      <div
        className="modal"
        id={`id${notas.id_nota}`}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Notas</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setSeguimiento(notas.seguimiento);
                  setConocimiento(notas.conocimiento);
                  setBimensual(notas.bimensual);
                  setAutoevaluacion(notas.autoevaluacion);
                }}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <h3>{notas.nombre_completo}</h3>
              <h6 className="mb-5">
                Codigo Estudiante: {notas.cod_estudiante}
              </h6>

              <Form>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="3">
                    Seguimiento
                  </Form.Label>
                  <Col sm="4">
                    <Form.Control
                      type="number"
                      placeholder="Seguimiento"
                      value={seguimiento}
                      onChange={(e) => setSeguimiento(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="3">
                    Conocimiento
                  </Form.Label>
                  <Col sm="4">
                    <Form.Control
                      type="number"
                      placeholder="Conocimiento"
                      value={conocimiento}
                      onChange={(e) => setConocimiento(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="3">
                    Bimensual
                  </Form.Label>
                  <Col sm="4">
                    <Form.Control
                      type="number"
                      placeholder="Bimensual"
                      value={bimensual}
                      onChange={(e) => setBimensual(e.target.value)}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  controlId="formPlaintextPassword"
                  className="d-flex justify-content-center"
                >
                  <Form.Label column sm="3">
                    Autoevaluación
                  </Form.Label>
                  <Col sm="4">
                    <Form.Control
                      type="number"
                      placeholder="Autoevaluacion"
                      value={autoevaluacion}
                      onChange={(e) => setAutoevaluacion(e.target.value)}
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
                onClick={() => {
                  updateNotas();
                  console.log("Nota actualizada");
                }}
              >
                Editar Notas
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setSeguimiento(notas.seguimiento);
                  setConocimiento(notas.conocimiento);
                  setBimensual(notas.bimensual);
                  setAutoevaluacion(notas.autoevaluacion);
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

export default EditarNotas;
