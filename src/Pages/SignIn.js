import React from "react";
import axios from "axios";
import { Card, Container, Button } from "react-bootstrap";
import Logo from "../Images/LogoAcademia.png";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { saveToLocal } from "../functions/localstorage";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
const swal = require('sweetalert2')

const signInSchema = Yup.object().shape({
  email: Yup.string().email("Correo Invalido").required("Ingrese un correo"),
  password: Yup.string()
    .required("Ingrese contraseña")
    .min(8, "La contraseña debe tener mínimo 8 caracteres")
    .matches(/[a-z]/, "Debe tener una letra en minúscula")
    .matches(/[A-Z]/, "Debe tener una letra en mayuscula"),
  picked: Yup.number(!1 || !2 || !3).required("Escoja un rol"),
});

const FormFormik = () => (
  <div>
    <Formik
      initialValues={{
        email: "",
        password: "",
        picked: "",
      }}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        axios
          .post("http://localhost:5000/", {
            correo: values.email,
            contraseña: values.password,
            rol: values.picked,
          })
          .then((res) => {
            if (res.data.rows[0]["correo"] === values.email) {

              const id = res.data.rows[0]["id_usuario"];
              saveToLocal("id_usuario", id);

              const nombre = res.data.rows[0]["nombre_completo"];
              saveToLocal("nombre_completo", nombre );

              const genero = res.data.rows[0]["genero"];
              saveToLocal("genero", genero );

              const rol = res.data.rows[0]["rol"];
              saveToLocal("rol", rol );

              if (res.data.rows[0]["rol"] === 1) {
                window.location.href = "administrado";
              } else if (res.data.rows[0]["rol"] === 2) {
                window.location.href = "/profesor";
              } else if (res.data.rows[0]["rol"] === 3) {
                window.location.href = "/estudiante"; //organizar ruta inicial de estudiante
              }

              swal.fire({
                title: 'Bienvenido!',
                text: 'Se pudo iniciar sesión correctamente',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
            }
          })
          .catch(function (error) {
            console.log(error);
            swal.fire({
              title: 'Error!',
              text: 'Correo, contraseña y/o rol erroneos',
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          });

        console.log(values);
      }}
    >
      {({ errors, touched, values }) => (
        <Container className="mt-4">
          <Card
            className="d-flex m-auto my-auto pb-5 shadow-lg"
            style={{ width: "30rem" }}
          >
            <Card.Img
              className="pt-5 d-flex m-auto"
              variant="top"
              style={{ width: "17rem" }}
              src={Logo}
            />
            <Form className="col-md-9 m-auto align-items-center">
              <Field
                className="mt-5 form-control"
                type="email"
                name="email"
                placeholder="Ingresa tu correo"
              />
              {errors.email && touched.email ? (
                <div style={{ color: "red" }}>{errors.email}</div>
              ) : null}
              <Field
                className="mt-5 form-control"
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
              />
              {errors.password && touched.password ? (
                <div style={{ color: "red" }}>{errors.password}</div>
              ) : null}

              <div id="my-radio-group"></div>
              <div
                className="mt-4 form-check"
                role="group"
                aria-labelledby="my-radio-group"
              >
                <p>
                  <Field type="radio" name="picked" value="1" /> Administrador
                </p>
                <p>
                  <Field type="radio" name="picked" value="2" /> Profesor
                </p>
                <p>
                  <Field type="radio" name="picked" value="3" /> Estudiante
                </p>
                <div className="mb-4" style={{ color: "red" }}>
                  {errors.picked}
                </div>
              </div>
              <Button className="d-flex m-auto" variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Card>
        </Container>
      )}
    </Formik>
  </div>
);

export default FormFormik;
