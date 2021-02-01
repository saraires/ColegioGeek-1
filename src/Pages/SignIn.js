import React from 'react';
import  axios  from 'axios';
import { Card, Container, Button } from "react-bootstrap";
import Logo from "../Images/LogoAcademia.png"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
  email: Yup.string().email('Correo Invalido').required('Ingrese un correo'),
  password: Yup.string().required('Ingrese contraseña').min(8, "La contraseña debe tener mínimo 8 caracteres").matches(/[a-z]/, 'Debe tener una letra en minúscula')
  .matches(/[A-Z]/, 'Debe tener una letra en mayuscula'),
  picked: Yup.number(!1 || !2 || !3).required("Escoja un rol"),
});

// const login = (values) =>{
//   console.log(values);
//   axios.post('http://localhost:5000',{
//     email: values.email,
//     password: values.password,
//     rol: values.rol
//   }).then((res)=>{
//     if(res.data.message === `Información Incorrecta`){
//       alert("Correo y/o contraseña incorrectos")
//     }else {
//       console.log(res.data);
//     }
//   })
// };

const FormFormik = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
        picked: '',
      }}
      validationSchema={signInSchema}
      onSubmit={async (values) => {
        axios.post('http://localhost:5000',{
          email: values.email,
          password: values.password,
          rol: values.rol
        }, {
          'Access-Control-Allow-Origin': '*',
      }).then((res)=>{
          return res
        }).catch(function (error) {
          console.log(error);
        });
        // // same shape as initial values
        // console.log('Se rellenaron todos los campos')
        // console.log(values);

        // localStorage.setItem("correo", values.email )
        // localStorage.setItem("password", values.password )
        // localStorage.setItem("rol", values.picked )
      }}
    >
      
      {({ errors, touched, values }) => (
        <Container className="mt-4">
          <Card className="d-flex m-auto my-auto pb-5 shadow-lg" style={{ width: "20rem" }}>
            <Card.Img className="pt-5 d-flex m-auto" variant="top" style={{width: "17rem"}} src={Logo} />
            <Form className="col-md-8 m-auto align-items-center">
              
              <Field className="mt-5 form-control" type="email" name="email" placeholder="Ingresa tu correo" />
              {errors.email && touched.email ? (
                <div style={{color: 'red'}}>{errors.email}</div>
              ) : null}
              <Field className="mt-5 form-control" type="password" name="password" placeholder="Ingresa tu contraseña" />
              {errors.password && touched.password ? (
                <div style={{color: 'red'}}>{errors.password}</div>
              ) : null}

              

              <div id="my-radio-group"></div>
              <div className="mt-4 form-check" role="group" aria-labelledby="my-radio-group">
                <p>
                  <Field type="radio" name="picked" value="1" /> Administrador
                </p>
                <p>
                  <Field type="radio" name="picked" value="2" /> Profesor
                </p>
                <p>
                  <Field type="radio" name="picked" value="3" /> Estudiante
                </p>
                <div className="mb-4" style={{color: 'red'}}>{errors.picked}</div>
              </div>
              <Button className="d-flex m-auto" variant="primary" type="submit">Enviar</Button>
            </Form>
          </Card>
        </Container>
      )}
    </Formik>
  </div>
)

export default FormFormik;