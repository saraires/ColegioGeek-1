import React from "react";
import { Col } from "react-bootstrap";
import "../Css/styles.css";

function Footer() {
  return (
    <div className="bg-info p-2 m-0 row d-flex align-items-center text-light">
      <Col className="p-5  d-flex flex-column align-items-center">
        <h5>Colegio Geek</h5>
        <h6>Medellín - Colombia </h6>
      </Col>

      <Col className=" ml-5 p-3">
        <p className="">Copyright © </p>
        <ul className="m-0">
          Actores:
          <li>Juan Cardenas</li>
          <li>Laura Osorio</li>
          <li>Sarai Restrepo</li>
          <li>Sebastian Restrepo </li>
        </ul>
      </Col>
    </div>
  );
}

export default Footer;
