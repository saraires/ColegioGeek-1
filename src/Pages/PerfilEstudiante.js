import React from "react";
import {  Container } from "react-bootstrap";
import CardPerfil from "../Components/CardPerfil"
import MenuEstudiante from "../Components/menuEstudiante";

function PerfilEstudiante() {
  return (
    <>
      <MenuEstudiante />
      <Container className="mt-5 d-flex justify-content-center">
        <CardPerfil/>
      </Container>
    </>
  );
}

export default PerfilEstudiante;
