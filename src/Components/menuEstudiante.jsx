import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoAcademia from "../Images/LogoAcademia.png";

function MenuEstudiante() {

  const [estudiante, setEstudiante] = useState([]);
  const id = 1;

  useEffect(() => {
    axios.get(`http://localhost:3004/estudiantes/${id}`).then((res) => {
      setEstudiante(res.data);
      console.log(res.data);
    });
  }, []);


  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" >
        <Navbar.Brand href="#home">
          <Link to="/">
            <img
              src={LogoAcademia}
              width="100"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/estudiante-materias" eventKey={1}>
              Materias
            </Nav.Link>
            <Nav.Link as={Link} to="/estudiante-notas" eventKey={2}>
              Notas
            </Nav.Link>
            <Nav.Link as={Link} to="/estudiante-informe-final" eventKey={3}>
              Informe Final
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={`/estudiante-perfil/${id}`} eventKey={4}>
              {estudiante.nombre} {estudiante.apellido}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MenuEstudiante;
