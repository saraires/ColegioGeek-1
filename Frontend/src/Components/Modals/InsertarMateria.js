import React, { useState } from "react";
import axios from "axios";
import { Form, Row, Col, FormControl } from "react-bootstrap";

function InsertarMateria({ notas }) {
  const [codigo, setCodigo] = useState();
  const [nombreMateria, setNombreMateria] = useState();
  const [codProfesor, setCodProfesor] = useState();
  const [seis, setSeis] = useState();
  const [siete, setSiete] = useState();
  const [ocho, setOcho] = useState();
  const [nueve, setNueve] = useState();
  const [diez, setDiez] = useState();
  const [once, setOnce] = useState();
  console.log(seis);

  const Checkbox = ({ initialState, id, onChange }) => {
    const [checked, setChecked] = useState();

    const onClick = (checked) => {
      setChecked(checked);
      onChange(id, checked);
    };

    return (
      <>
        <input
          type="checkbox"
          onClick={(e) => onClick(e.target.checked)}
          checked={checked}
        />
      </>
    );
  };

  const onCheckboxClicked = (idx, isChecked) => {
    console.log(`${idx} --> ${isChecked}`);
    //Aquí puedes guardar estados si es necesario
    setSeis(isChecked);
    setSiete(isChecked);
    setOcho(isChecked);
    setNueve(isChecked);
    setDiez(isChecked);
    setOnce(isChecked);
  };

  const InsertMateria = async (e) => {
    e.preventDefault();
    axios
      .post(`http://34.75.240.23:5000/registro-materia/`, {
        codigo: codigo,
        nombreMateria: nombreMateria,
        codProfesor: codProfesor,
        seis: seis,
        siete: siete,
        ocho: ocho,
        nueve: nueve,
        diez: diez,
        once: once,
      })
      .then((res) => {
        console.log(res);
      });
    window.location = `/administrador-materia/`;
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-success mb-5"
        data-toggle="modal"
        data-target={`#id`}
      >
        Insertar Materia
      </button>
      <div className="modal" id={`id`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Insertar Materia</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setCodProfesor();
                  setNombreMateria();
                  setCodigo();
                  setSeis();
                  setSiete();
                  setOcho();
                  setNueve();
                  setDiez();
                  setOnce();
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
                    Código Materia
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="text"
                      placeholder="Codigo Materia"
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
                    Nombre Materia
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="text"
                      placeholder=" Nombre Materia"
                      onChange={(e) => {
                        setNombreMateria(e.target.value);
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
                    Código Profesor
                  </Form.Label>
                  <Col sm="5">
                    <Form.Control
                      type="text"
                      placeholder="Código Profesor"
                      onChange={(e) => {
                        setCodProfesor(e.target.value);
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
                    Seleccione los grupos
                  </Form.Label>
                  <Col sm="5">
                    <div>
                      {[6, 7, 8, 9, 10, 11].map((checkbox, i) => (
                        <>
                          <label>{checkbox}</label>{" "}
                          <Checkbox
                            initialState={true}
                            id={checkbox}
                            onChange={onCheckboxClicked}
                            inline
                          />
                          {"  "}
                        </>
                      ))}
                    </div>
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
                  InsertMateria(e);
                  console.log("Materia actualizada");
                }}
              >
                Insertar Grupo
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setCodProfesor();
                  setNombreMateria();
                  setCodigo();
                  setSeis();
                  setSiete();
                  setOcho();
                  setNueve();
                  setDiez();
                  setOnce();
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

export default InsertarMateria;
