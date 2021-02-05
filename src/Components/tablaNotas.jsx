import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";
import { getFromLocal } from "../functions/localstorage";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";

function TablaGrados() {
  const id = getFromLocal("id_usuario");
  const codigo = getFromLocal("cod_grupo");
  const grupo = getFromLocal("id_grupo");
  const [notas, setNotas] = useState([]);

  //modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/profesor-notas/${id}/${grupo}/${codigo}`)
      .then((res) => {
        setNotas(res.data.rows);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <Container>
      <Table striped hover size="md" className="table-responsive ">
        <thead className="text-info text-center table-bordered">
          <tr className="table-info">
            <th scope="col">Codigo Estudiante</th>
            <th scope="col">Nombre Estudiante</th>
            <th scope="col">Seguimiento</th>
            <th scope="col">Conocimiento</th>
            <th scope="col">Bimensual</th>
            <th scope="col">Autoevaluación</th>
            <th scope="col">Nota Final</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody className=" text-center table-bordered">
          {notas.map((notas) => {
            return (
              <tr key={notas._id}>
                <td>{notas.cod_estudiante}</td>
                <td>{notas.nombre_completo}</td>
                <td>{Number(notas.seguimiento).toFixed(2)}</td>
                <td>{Number(notas.bimensual_1).toFixed(2)}</td>
                <td>{Number(notas.bimensual_2).toFixed(2)}</td>
                <td>{Number(notas.autoevaluacion).toFixed(2)}</td>
                <td>{Number(notas.nota_promedio).toFixed(2)}</td>
                <td>
                  <button className="btn btn-success" onClick={handleShow}>
                    Editar Notas
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Notas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Seguimiento</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese la nota de seguimiento"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default TablaGrados;
