import React from "react";
import {  Container } from "react-bootstrap";
import CardAdmin from "../Components/CardAdmin";
import MenuAdministrado from "../Components/menuAdmin";

function PerfilAdministrado() {
  return (
    <>
      <MenuAdministrado />
      <Container className="mt-5 d-flex justify-content-center">
       <CardAdmin/>
      </Container>
    </>
  );
}

export default PerfilAdministrado;