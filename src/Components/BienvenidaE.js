import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { getFromLocal } from "../functions/localstorage";
import Quote from "./Quote";
import niño from "../Images/estudiante-nino.jpg";
import niña from "../Images/estudiante-nina.jpg";
import profe from "../Images/Profesor.jpg";
function BienvennidaE() {
  const nombre = getFromLocal("nombre_completo");
  const genero = getFromLocal("genero");
  const rol = getFromLocal("rol");

  return (
    <Container>
      <div className="text-center">
        {genero === "Hombre" ? (
          <h1 className="d-flex justify-content-center mt-5 mb-5">
            {" "}
            Bienvenido {nombre}!
          </h1>
        ) : (
          <h1 className="d-flex justify-content-center mt-5 mb-5">
            {" "}
            Bienvenida {nombre}!
          </h1>
        )}
      </div>
      <Row className="col-12 m-auto">
        <Col xs={12} md={6} className="p-0  ">
          {rol === "1" ? (
            <Image src="" thumbnail style={{ width: "18rem" }} />
          ) : rol === "2" ? (
            <Image src={profe} thumbnail style={{ width: "50rem" }} />
          ) : rol === "3" && genero === "Hombre" ? (
            <Image src={niño} thumbnail style={{ width: "50rem" }} />
          ) : rol === "3" && genero === "Mujer" ? (
            <Image src={niña} thumbnail style={{ width: "50rem" }} />
          ) : null}
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center pl-5 mt-4">
          <Quote />
        </Col>
      </Row>
    </Container>
  );
}

export default BienvennidaE;
