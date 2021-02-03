import React from "react";
import { Col, Container } from "react-bootstrap";
import MenuEstudiante from "../Components/menuEstudiante";
import Student from "../Components/Student";
import Table from "../Components/Table";

function Materias() {
  return (
    <>
      <MenuEstudiante />
      <Container className="mb-5">
        <Student />
        <div className="row m-0 d-flex">
          <Col className="p-0">
            <Table />
          </Col>
        </div>
      </Container>
    </>
  );
}

export default Materias;
