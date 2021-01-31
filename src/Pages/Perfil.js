import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardPerfil from "../Components/CardPerfil"

function Perfil() {
  const { id } = useParams(); //organizar id con la info que se recibe
  console.log(useParams());

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <CardPerfil id={id}/>
    </Container>
  );
}

export default Perfil;
