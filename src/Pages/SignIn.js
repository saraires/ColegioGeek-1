import React, { Component, useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import Logo from "../Images/LogoAcademia.png"

function SignIn() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    email: "",
    password: "",
    rol: "",
  });

  const handleChange = async (e) => {
    e.persist();
    await setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
    console.log(form);
  };

  const handleSubmit = (e) => {
    //Para que no se recargue la página cuando le de click en guardar
    e.preventDefault();
  };

  return (
    <Container className="mt-5">
      <Card
        className="d-flex m-auto my-auto pb-5 align-items-center"
        style={{ width: "18rem" }}
      >
        <Card.Img className="mt-5" variant="top" src={Logo} />
        <Form className="col-12 m-auto" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="mt-5" onChange={handleChange}>
              Correo
            </Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              onChange={handleChange}
              value={form.email}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              onChange={handleChange}
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              value={form.password}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Rol</Form.Label>
            <Form.Control
            className="mb-5"
              as="select"
              id="rol"
              name="rol"
              onChange={handleChange}
              value={form.rol}
            >
              <option selected>Choose...</option>
              <option value="1">Administrador</option>
              <option value="2">Profesor</option>
              <option value="3">Estudiante</option>
            </Form.Control>
          </Form.Group>

          <Button className="d-flex m-auto " variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default SignIn;
