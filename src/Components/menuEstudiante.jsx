import React, { useState, useEffect } from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoAcademia from "../Images/LogoAcademia.png";
import { getFromLocal } from "../functions/localstorage";

function MenuEstudiante() {
  const [estudiante, setEstudiante] = useState({
    nombre: getFromLocal("nombre_completo"),
    genero: getFromLocal("genero"),
    rol: getFromLocal("rol"),
    id: getFromLocal("id_usuario"),
    correo: getFromLocal("correo")
  });


  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand href="#home">
          <Link to="/estudiante">
            <img
              src={LogoAcademia}
              width="120"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={`/estudiante-materia/${estudiante.id}`} eventKey={1}>
              Materias
            </Nav.Link>
            <Nav.Link as={Link} to={`/estudiante-nota/${estudiante.id}`} eventKey={2}>
              Notas
            </Nav.Link>
            <Nav.Link as={Link} to={`/estudiante-informe-final/${estudiante.id}`} eventKey={3}>
              Informe Final
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={`/estudiante-perfil/${estudiante.id}`} eventKey={4}>
              {estudiante.nombre} 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MenuEstudiante;
