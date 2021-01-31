import React from "react";
import { Col, Container} from "react-bootstrap";
import Quote from "../Components/Quote";
import Student from "../Components/Student";
import Table from "../Components/Table";


function Materias() {

  return (
    <Container className="mb-5">
      <Student/>
      <div className="row m-0 d-flex">
        <Col className="mb-2 p-0 col-sm-4 d-flex align-items-center">
          <Quote />
        </Col>
        <Col  className="p-0 col-sm-7 ">
          <Table />
        </Col>
      </div>
    </Container>
  );
}

export default Materias;