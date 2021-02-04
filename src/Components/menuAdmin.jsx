import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoAcademia from "../Images/LogoAcademia.png";
import { getFromLocal } from "../functions/localstorage";

function MenuAdministrador() {
  const administrador = {
    nombre: getFromLocal("nombre_completo"),
    genero: getFromLocal("genero"),
    rol: getFromLocal("rol"),
    id: getFromLocal("id_usuario"),
    correo: getFromLocal("correo"),
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand href="#home">
          <Link to="/administrador">
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
              to={`/administrador-grupo/`}
              eventKey={1}
            >
             Registrar Grupo
            </Nav.Link>

            <Nav.Link
              as={Link}
              to={`/administrador-grupo/`}
              eventKey={2}
            >
             Registrar Materia
            </Nav.Link>

            <Nav.Link
              as={Link}
              to={`/administrador-usuario/`}
              eventKey={3}
            >
             Registrar Usuario
            </Nav.Link>
            
            <Nav.Link
              as={Link}
              target="_blank"
              to={`/administrador-informe/${administrador.id}`}
              eventKey={4}
            >
              Informe Final
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to={`/administrador-perfil/${administrador.id}`}
              eventKey={5}
            >
              {administrador.nombre}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MenuAdministrador;
