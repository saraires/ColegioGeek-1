import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import axios from 'axios'
import { getFromLocal, saveToLocal } from '../functions/localstorage';
import { Container, Table } from 'react-bootstrap';


/* NOTAS
En el boton editar notas: Guardar el codigo de estudiante (preferiblemente id_estudiante) 
y llamar una funcion en donde estan las const que haga una peticion al backend (En rutas profesor hay una peticion put)
la cual traiga los datos previos a la edicion
es decir hacer un select de la tabla de notas de ese estudiante.

los valores de id_materia hay que traerlos desde la tabla de "tabla grados", a traves del get que hay en el back
(agregue ese campo en el Select que hiciste) y la idea es que al recibir la respuesta, en algun lado del localStorage se guarde
para reemplazar ese valor en el query y pues si

Ya en el modal hay que hacer que los "values", dentro del modalbody, capturen los datos que hay ahi para que sean visibles por lo que se va a cambiar
No se si me hago entender, pero pues, a idea es que no aparesca un input vacio para editar sino que si ahi en la nota habia un 3,5 pues que se siga 
viendo hasta que se edite (Algo como un placehorlder)

Con ese dato de id_materia de traido del getlocal, los dos botones del modal footer pues la idea es que ese "aceptar" haga que se ejecute el put que hay
en el back con este insert:

(INSERT INTO notas(id_notas, id_materia, id_estudiante, seguimiento, 
bimensual_1, bimensual_2, autoevaluacion) 
VALUES(nextval('notas_id_seq'), 1, 1, 2.5, 3.0, 
5.0, 5.0);)

para actualizar los campos nuevos

y el de cancelar pues solo cierra el modal y no llama al put :T

No se si me hice entender, perdon no haber podido hacer mas :c


(lo de las rutas creo que es mas facil enviarlo por params)
 */




function TablaGrados() {
    const id = getFromLocal("id_usuario");
    const codigo = getFromLocal("cod_grupo");
    const grupo = getFromLo/cal("id_grupo")
    const id_grupo = getFromLocal("cod_grupo")

    console.log(id);
    console.log(codigo);

    // const [estudianteSeleccionado, setEstudianteSeleccionado] = useState();
    // const url_grupo = 
    // const grupo = 
    // const desc_grupo = grupo[0];

    const [modalEditar, setModalEditar] = useState(false);
    const [notas, setNotas] = useState([]);
    // const [estudianteSeleccionado, setEstudianteSeleccionado] = useState({})
    const seleccionarEstudiante = (caso) => {
        (caso === "Editar") && setModalEditar(true);
        axios.put(`http://localhost:5000/profesor-notas/${id}/${grupo}/${codigo}`)
    }

    // const editarRegistro = () => {//Hacer peticion en backend

    // const nuevosDatos = notas;
    // nuevosDatos.map(nuevo => {
    //     nuevo.seguimiento = nuevoSeleccionado.profesor;
    //     nuevo.bimensual_1 = nuevoSeleccionado.jornada;
    //     nuevo.bimensual_2 = nuevoSeleccionado.jornada;
    //     nuevo.autoevaluacion = nuevoSeleccionado.jornada;

    // });

    // setData(dataNueva);
    // setModalEditar(false);

    // const nuevosDatos = notas;
    // nuevosDatos.map(nuevo => {
    //     if (nuevosDatos.cod_estudiante === id) {

    //     }
    // })

    useEffect(() => {

        axios.get(`http://localhost:5000/profesor-notas/${id}/${grupo}/${codigo}`).then((res) => {
            setNotas(res.data.rows);
            console.log(res.data);

        }).catch((err) => {
            console.log(err);
        });

    }, []);

    return (
        <Container>
            <Table striped hover size="md" className="table-responsive ">
                <thead className="text-info text-center table-bordered">
                    <tr className="table-info">
                        <th scope="col">Codigo Estudiante</th>
                        <th scope="col">Nombre Estudiante</th>
                        <th scope="col">Seguimiento</th>
                        <th scope="col">Conocimiento</th>
                        <th scope="col">Bimensual</th>
                        <th scope="col">Autoevaluación</th>
                        <th scope="col">Nota Final</th>
                        <th scope="col"></th>
                    </tr>
                </thead>

                <tbody className=" text-center table-bordered">
                    {
                        notas.map((notas) => {
                            return (
                                <tr key={notas._id}>
                                    <td>{notas.cod_estudiante}</td>
                                    <td>{notas.nombre_completo}
                                    </td>
                                    <td>{Number(notas.seguimiento).toFixed(2)}</td>
                                    <td>{Number(notas.bimensual_1).toFixed(2)}</td>
                                    <td>{Number(notas.bimensual_2).toFixed(2)}</td>
                                    <td>{Number(notas.autoevaluacion).toFixed(2)}</td>
                                    <td>{Number(notas.nota_promedio).toFixed(2)}</td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => saveToLocal("id_estudiante", notas.cod_estudiante), seleccionarEstudiante("Editar")}>
                                            Editar Notas
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
            <Modal isOpen={modalEditar}>
                <ModalHeader>
                    <div><h1>Editar notas</h1></div>
                </ModalHeader>
                <ModalBody>
                    <div>
                        <label>Seguimiento</label>
                        <input type="text" value={notas.seguimiento} />
                        <label>Conocimiento</label>
                        <input type="text" value={notas.conocimiento} />
                        <label>Bimensual</label>
                        <input type="text" value={notas.bimensual} />
                        <label>Autoevaluación</label>
                        <input type="text" value={notas.autoevaluacion} />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-success">Aceptar</button>
                    {/* <button className="btn btn-success" onClick={() => nuevosDatos()}>Aceptar</button> */}
                    <button clasName="btn btn-danger">Cancelar</button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}


export default TablaGrados;