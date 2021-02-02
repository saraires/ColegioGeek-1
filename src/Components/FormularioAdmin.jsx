import React from 'react';
import { useFormik } from 'formik';
import { Card, Container, Button } from "react-bootstrap";
import Logo from "../Images/LogoAcademia.png"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  doctype: Yup.string(!"TI" || !"CC" || !"NUIP").required("Por favor escoja un tipo de documento"),
  docnum: Yup.string().min(10, "Revisa que tu documento este bien escrito").required("No puedes dejar este campo vacio"),
  name: Yup.string().min(2, "Tu nombre es muy corto, revisa de nuevo").required("No puedes dejar este campo vacio"),
  direccion: Yup.string().min(5, "Revisa que si estes colocando una direccion valida").required("No puedes dejar este campo vacio"),
  ciudad: Yup.string().min(2, "Ingresa el nombre de tu ciudad").required("No puedes dejar este campo vacio"),
  nacimiento: Yup.date().required("No puedes dejar este campo vacio"),
  genero: Yup.string(!"H" || !"M").required("Escoge tu genero"),
  picked: Yup.number(!1 || !2 || !3).required("Escoja un rol"), // Este es el rol
  email: Yup.string().email('Correo Invalido').required('Ingrese una direccion de correo electronico'),
  telefono: Yup.number().min(7, "Ingresa un numero de telefono valido").required("No puedes dejar este campo vacio"),
  celular: Yup.number().min(10, "Ingresa un numero de celular valido").required("No puedes dejar este campo vacio"),
  password: Yup.string().min(8, "La contraseña debe tener mínimo 8 caracteres").required('Ingrese contraseña valida de minimo 8 caracteres'),
});

const FormFormik = () => (
  <div>
    <Formik
      initialValues={{
        doctype: '',
        docnum: '',
        name: '',
        direccion: '',
        ciudad: '',
        nacimiento: '',
        genero: '',
        picked: '',
        email: '',
        telefono: '',
        celular: '',
        password: '',
      }}
      validationSchema={signUpSchema}
      onSubmit={async (values) => {
        // same shape as initial values
        await new Promise((r) => setTimeout(r, 500));
        console.log(values);
      }}
    >
      {({ errors, touched, values }) => (
        <Container className="mt-4">
          <Card className="d-flex m-auto my-auto pb-5 shadow-lg align-content-center" style={{width: "30rem"}}>
            <Form className="col-8 m-auto">
              <div className="form-row mt-5">
                <div id="my-radio-group " className="col-8">Tipo de Documento
                <div className="mt-3 form-check" role="group" aria-labelledby="my-radio-group">
                    <p>
                      <Field type="radio" name="doctype" value="TI" /> Tarjeta de Identidad
                    </p>
                    <p>
                      <Field type="radio" name="doctype" value="CC" /> Cédula de Ciudadania
                    </p>
                    <p>
                      <Field type="radio" name="doctype" value="NUIP" /> NUIP
                    </p>
                    <div className="mb-4" style={{ color: 'red' }}>{errors.doctype}</div>
                  </div>
                </div>
                <Field className="form-control col-8 mt-2" type="number" name="docnum" placeholder="Numero de Documento" />
                {errors.docnum && touched.docnum ? (
                  <div style={{ color: 'red' }}>{errors.docnum}</div>
                ) : null}
                <Field className="form-control col-8 mt-3" type="text" name="name" placeholder="Nombre Completo" />
                {errors.name && touched.name ? (
                  <div style={{ color: 'red' }}>{errors.name}</div>
                ) : null}
                <Field className="form-control col-8 mt-3" type="text" name="direccion" placeholder="Direccion de Residencia" />
                {errors.direccion && touched.direccion ? (
                  <div style={{ color: 'red' }}>{errors.direccion}</div>
                ) : null}
                <Field className="form-control col-8 mt-3" type="text" name="ciudad" placeholder="Ciudad de Residencia" />
                {errors.ciudad && touched.ciudad ? (
                  <div style={{ color: 'red' }}>{errors.ciudad}</div>
                ) : null}
                <Field className="form-control col-8 mt-3" type="date" name="nacimiento" placeholder="Fecha de Nacimiento" />
                {errors.nacimiento && touched.nacimiento ? (
                  <div style={{ color: 'red' }}>{errors.nacimiento}</div>
                ) : null}
                <div id="my-radio-group" className=" mt-3 col-8">Selecciona un genero
                <div className="mt-3 form-check" role="group" aria-labelledby="my-radio-group">
                    <p>
                      <Field type="radio" name="genero" value="H" /> Masculino
                    </p>
                    <p>
                      <Field type="radio" name="genero" value="M" /> Femenino
                    </p>
                    <div className="mb-4" style={{ color: 'red' }}>{errors.genero}</div>
                  </div>
                </div>
                <div></div>
                <div id="my-radio-group" className="mt-3 col-8">Selecciona un rol
                  <div className="mt-3 form-check" role="group" aria-labelledby="my-radio-group">
                    <p>
                      <Field type="radio" name="picked" value="1" /> Administrador
                    </p>
                    <p>
                      <Field type="radio" name="picked" value="2" /> Profesor
                    </p>
                    <p>
                      <Field type="radio" name="picked" value="3" /> Estudiante
                    </p>
                    <div className="mb-4" style={{ color: 'red' }}>{errors.picked}</div>
                  </div>
                </div>
                <Field className="form-control col-8 mt-3" type="email" name="email" placeholder="Direccion de Correo" />
                {errors.email && touched.email ? (
                  <div style={{ color: 'red' }}>{errors.email}</div>
                ) : null}
                <Field className="form-control col-8 mt-3" type="number" name="telefono" placeholder="Telefono" />
                {errors.telefono && touched.telefono ? (
                  <div style={{ color: 'red' }}>{errors.telefono}</div>
                ) : null}
                <Field className="form-control col-8 mt-3" type="number" name="celular" placeholder="Celular" />
                {errors.celular && touched.celular ? (
                  <div style={{ color: 'red' }}>{errors.celular}</div>
                ) : null}

                <Field className="form-control col-8 mt-3" type="password" name="password" placeholder="Ingresa tu contraseña" />
                {errors.password && touched.password ? (
                  <div style={{ color: 'red' }}>{errors.password}</div>
                ) : null}

              </div>
              <br />
              <br />
              <Button className="d-flex m-auto" variant="primary" type="submit">Enviar</Button>
            </Form>
          </Card>
        </Container>
      )}
    </Formik>
  </div>
)

export default FormFormik;