import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import {saveToLocal} from '../functions/localstorage'
import * as Yup from "yup";


const RegistroSchema = Yup.object().shape({
    codigo: Yup.string().email("Correo Invalido").required("Ingrese un correo"),
    profesor: Yup.string().required("Ingrese el nombre del consejero de grupo"),
    jornada: Yup.number(!1 || !2 || !3).required("Escoja un rol"),
});

const RegistroGrupo = () => {

    const [consejero, setConsejero] = useState([]);


    useEffect(() => {

        axios.post(`http://localhost:5000/profesor-grado-notas/${id}`,{"cod_grupo": id_grupo})
        .then((res) => {
            setNotas(res.data);
            console.log(res.data);

        }).catch((err) => {
            console.log(err);
        });

    }, []);

    <div>
        <Formik
            initialValues={{
                codigo: "",
                profesor: "",
                jornada: "",
            }}

            useEffect(() => {
                axios
                  .get(`http://localhost:5000/registro-grupo/${id}`)
                  .then((res) => {
                    setMateria(res.data.rows);
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }, [id]);
        >
            {({ errors, touched }) => (
                <Container className="mt-4">
                    <Card className="d-flex m-auto my-auto pb-5 shadow-lg" style={{ width: "30rem" }}>
                        <h1 className="ml-5 pl-5 pt-5">Registro de grupo</h1>
                        <Form className="col-md-9 m-auto align-items-center">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="codigo">Código</label>
                                    <input id="codigo" type="text" readonly class="form-control-plaintext" id="staticEmail2" value="" /> {/* El codigo es automaticamente generado por el sistema */}
                                </div>
                                <div id="my-radio-group"></div>
                                <div className="mt-4 form-check" role="group" aria-labelledby="my-radio-group">
                                    <p>
                                        <Field type="radio" name="jornada" value="Mañana" /> Mañana
                                    </p>
                                    <p>
                                        <Field type="radio" name="jornada" value="Tarde" /> Tarde
                                    </p>
                                    <div className="mb-4" style={{ color: "red" }}>
                                        {errors.jornada}
                                    </div>
                                </div>
                                <form className="m-3" >
                                    <div className="form-group">
                                        <label for="profesor">Profesor</label>
                                        <select id="inputProfesor" class="form-control">
                                        {
                                            consejero.map((consejero) => {
                                                return (
                                                    <tr key={consejero._id}>
                                                        <td>{consejero.id}</td>
                                                        <td>{consejero.cod_grupo}
                                                        <Link to ={`/profesor-grado-notas/${consejero.cod_grupo}`} style={{ float: "right", color:"#47525E" }}><button type="button" onClick={() => {saveToLocal("cod_grupo", consejero.cod_grupo)}} class="btn btn-outline-info">Ver notas</button></Link>                                  
                                                        </td>
                                                        <td>{consejero.descripcion_grupo}</td>
                                                        <td>{consejero.jornada}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </select>
                                    </div>
                                </form>
                                <Button className="d-flex m-auto" variant="primary" type="submit">
                                    Enviar
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </Container>
            )}
        </Formik>
    </div>

    return (

        <div >



            <div className="card col-10 row mx-auto mt-5">
                <form className="m-3" >
                    <div className="form-group">
                        <label for="profesor">Profesor</label>
                        <select id="inputProfesor" class="form-control">
                            <option selected></option>
                            <option>Fabio Leon Restrepo</option>
                            <option>Jaime Alberto Giraldo</option>
                            <option>Adriana Maria Zuluaga</option>
                            <option>Fabiola Ramirez</option>
                            <option>Maria Dolores Smith</option>
                            <option>Alberto Cañas</option>
                            <option>Alexander Restrepo</option>
                            <option>Aurora Martinez</option>
                            <option>Guillermo Alberto Marín</option>
                            <option>Fabio Ramirez Castaño</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Registrar
            </button>
                </form>
            </div>
        </div>
    );
}

export default RegistroGrupo;