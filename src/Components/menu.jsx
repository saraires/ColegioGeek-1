import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { getFromLocal } from "../functions/localstorage";
import LogoAcademia from '../Images/LogoAcademia.png';

function MenuProfesor() {
    const [profesor, setEstudiante] = useState({
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
          <Nav.Link as={Link} to={`/profesor`} eventKey={1}>
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to={`/profesor-perfil/${profesor.id}`} eventKey={1}>
              Ver perfil
            </Nav.Link>
            <Nav.Link as={Link} to={`/profesor-grupos/${profesor.id}`} eventKey={2}>
              Ver Grupos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
    );
}
export default MenuProfesor;
