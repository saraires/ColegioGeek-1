import React from "react";
import { getFromLocal } from "../functions/localstorage";
import {  Container } from "react-bootstrap";
import CardPerfil from "../Components/CardPerfil"
import MenuEstudiante from "../Components/menuEstudiante";

function PerfilEstudiante() {
 const id = getFromLocal("id_usuario")
  console.log(id);

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
