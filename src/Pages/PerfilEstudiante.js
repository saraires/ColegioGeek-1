import React from "react";

import {  Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardPerfil from "../Components/CardPerfil"
import MenuEstudiante from "../Components/menuEstudiante";

function PerfilEstudiante() {
  const { id } = useParams(); //organizar id con la info que se recibe
  console.log(useParams());

  return (
    <>
      <MenuEstudiante />
      <Container className="mt-5 d-flex justify-content-center">
        <CardPerfil id={id} />
      </Container>
    </>
  );
}

export default PerfilEstudiante;
