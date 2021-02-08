import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoAcademia from "../Images/LogoAcademia.png";
import { getFromLocal } from "../functions/localstorage";

function MenuProfesor() {
  const profesor = {
    nombre: getFromLocal("nombre_completo"),
    genero: getFromLocal("genero"),
    rol: getFromLocal("rol"),
    id: getFromLocal("id_usuario"),
    correo: getFromLocal("correo"),
    codigo: getFromLocal("codigo")
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand href="#home">
          <Link to="/profesor">
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
            <Nav.Link
              as={Link}
              to={`/profesor-grupos/${profesor.codigo}`}
              eventKey={1}
            >
              Ver Grupos
            </Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to={`/profesor-perfil/${profesor.id}`}
              eventKey={4}
            >
              {profesor.nombre}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MenuProfesor;
