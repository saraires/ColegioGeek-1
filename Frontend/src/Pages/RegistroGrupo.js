import React, { useState } from 'react';
import axios from "axios";
import { Card, Container, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const RegistroSchema = Yup.object().shape({
    codigo: Yup.string().email("Correo Invalido").required("Ingrese un correo"),
    profesor: Yup.string().required("Ingrese el nombre del consejero de grupo"),
    jornada: Yup.string(!"Mañana" || !"Tarde").required("Escoja una jornada"),
});

const RegistroGrupo = () => {

    const [consejero, setConsejero] = useState([]);

    return (
        <div>
            <Formik
                initialValues={{
                    codigo: "",
                    profesor: "",
                    jornada: "",
                }}

                validationSchema={RegistroSchema}
                onSubmit={async (values) => {
                    axios.get(`http://localhost:5000/registro-grupo/`).then((res) => {
                        setConsejero(res.data.rows);
                        console.log(`data ${res.data}`);

                    })
                }}
            >
                {({ errors, touched }) => (
                    <Container className="mt-4">
                        <Card className="d-flex m-auto my-auto pb-5 shadow-lg align-items-center" style={{ width: "30rem" }}>
                            <h1 className="mt-4">Registro de grupo</h1>
                            <Form className="col-12 m-auto">
                                <div className=" align-content-center">
                                    <div className="form-row col-md-9 mt-4">
                                        <div className="form-row">
                                            <div className="col-8">
                                                <div id="my-radio-group" className="form-group">Jornada</div>
                                                <div className="mt-2 form-check" role="group" aria-labelledby="my-radio-group">
                                                    <p>
                                                        <Field type="radio" name="jornada" value="Mañana" /> Mañana
                                                </p>
                                                    <p>
                                                        <Field type="radio" name="jornada" value="Tarde" /> Tarde
                                                </p>
                                                    <div className="mb-4" style={{ color: "red" }}>{errors.jornada}</div>
                                                </div>
                                            </div>
                                            <div className="form-group col">
                                                <label for="codigo">Código</label>
                                                <input id="codigo" type="text" readonly class="form-control-plaintext" id="staticEmail2"
                                                    value="2021601" /> {/* El codigo es automaticamente generado por el sistema */}
                                            </div>
                                        </div>
                                        <div className="form-group col-12">
                                            <div id="my-radio-group" className="form-group">Profesor
                                            <div className="mt-2 form-check" role="group" aria-labelledby="my-radio-group">
                                                    {consejero.map((consejero, index) => {
                                                        return (
                                                            <>
                                                            <p key={index} id={index}>
                                                                <Field type="radio" name="jornada" value="Tarde">{consejero.profesor}</Field>
                                                            </p>
                                                            </>
                                                        );
                                                    })}
                                                    <div className="mb-4" style={{ color: "red" }}>{errors.consejero}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="d-flex m-auto" variant="primary" type="submit">Enviar</Button>
                                </div>
                            </Form>
                        </Card>
                    </Container>
                )}
            </Formik>
        </div>
    );
}

export default RegistroGrupo;

//     render() {

//         return (

//             <div >
//                 <MenuAdmin/>
//                 <h1 className="ml-5 pl-5 pt-5">Registro de grupo</h1>

//                 <div className="card col-10 row mx-auto mt-5">
//                     <form className="m-3" >
//                         <div className="form-row">
//                             <div className="form-group col-md-6">
//                                 <label for="codigo">Código</label>
//                                 <input id="codigo" type="text" readonly class="form-control-plaintext" id="staticEmail2" value="2021001" /> {/* El codigo es automaticamente generado por el sistema */}
//                             </div>
//                             <div className="form-group col-md-6">
//                                 <label for="jornada">Jornada</label>
//                                 <select id="inputJornada" class="form-control">
//                                     <option selected></option>
//                                     <option>Tarde</option>
//                                     <option>Mañana</option>
//                                 </select>
//                             </div>
//                         </div>
                        // <div className="form-group">
                        //     <label for="profesor">Profesor</label>
                        //     <select id="inputProfesor" class="form-control">
                        //         <option selected></option>
                        //         <option>Fabio Leon Restrepo</option>
                        //         <option>Jaime Alberto Giraldo</option>
                        //         <option>Adriana Maria Zuluaga</option>
                        //         <option>Fabiola Ramirez</option>
                        //         <option>Maria Dolores Smith</option>
                        //         <option>Alberto Cañas</option>
                        //         <option>Alexander Restrepo</option>
                        //         <option>Aurora Martinez</option>
                        //         <option>Guillermo Alberto Marín</option>
                        //         <option>Fabio Ramirez Castaño</option>
                        //     </select>
                        // </div>
                        // <button type="submit" className="btn btn-primary"> Registrar</button>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

// export default RegistroGrupo;