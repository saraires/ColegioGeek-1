import React, { useState } from "react";
import axios from "axios";
import { getFromLocal } from "../../functions/localstorage";
import { Form, Row, Col } from "react-bootstrap";

function EditarMateria({ materias }) {
  const [codigo, setCodigo] = useState(materias.cod_materia);
  const [nombreMateria, setNombreMateria] = useState(materias.nombre_materia);
  const [codProfesor, setCodProfesor] = useState(materias.cod_profesor);
  const [seis, setSeis] = useState(materias.sexto);
  const [siete, setSiete] = useState(materias.septimo);
  const [ocho, setOcho] = useState(materias.octavo);
  const [nueve, setNueve] = useState(materias.noveno);
  const [diez, setDiez] = useState(materias.decimo);
  const [once, setOnce] = useState(materias.once);
  const [id_materia, setId_Materia] = useState(materias.id_materia)

  console.log(materias);

  const Checkbox = ({ initialState, id, onChange }) => {
    const [checked, setChecked] = useState(initialState);

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
          id ={id}
          name = {id}
          for
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

  const udpateMaterias = async (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:5000/editar-materia/`, {
        codigo: codigo,
        nombreMateria: nombreMateria,
        codProfesor: codProfesor,
        seis: seis,
        siete: siete,
        ocho: ocho,
        nueve: nueve,
        diez: diez,
        once: once,
        id_materia: materias.id_materia
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
        className="btn btn-success"
        data-toggle="modal"
        data-target={`#id${materias.id_materia}`}
      >
        Editar
      </button>
      <div className="modal" id={`id${materias.id_materia}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Materia</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setCodigo(materias.cod_materia);
                  setNombreMateria(materias.nombre_materia);
                  setCodProfesor(materias.cod_profesor);
                  setSeis(materias.sexto);
                  setSiete(materias.septimo);
                  setOcho(materias.octavo);
                  setNueve(materias.noveno);
                  setDiez(materias.decimo);
                  setOnce(materias.once);
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
                      value={codigo}
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
                      value={nombreMateria}
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
                      value={codProfesor}
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
                      {[6 , 7, 8 ,9 ,10, 11].map(
                        (checkbox, i) => (
                          <>
                            <label>{checkbox}</label>{" "}
                            <Checkbox
                              initialState={false}
                              id={`${i}-${checkbox}`}
                              onChange={onCheckboxClicked}
                              inline
                              name={`id-${checkbox}`}
                              value={checkbox}
                              for={`${i}-${checkbox}`}

                            />
                            {"  "}
                          </>
                        )
                      )}
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
                  udpateMaterias(e);
                  console.log("Materia actualizada");
                }}
              >
                Editar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                    setCodigo(materias.cod_materia);
                    setNombreMateria(materias.nombre_materia);
                    setCodProfesor(materias.cod_profesor);
                    setSeis(materias.sexto);
                    setSiete(materias.septimo);
                    setOcho(materias.octavo);
                    setNueve(materias.noveno);
                    setDiez(materias.decimo);
                    setOnce(materias.once);
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

export default EditarMateria;
