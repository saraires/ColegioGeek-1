import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

function Grupo() {
    const dataGrupos = [
        { id: 2021001, profesor: "Fabio Leon Restrepo", jornada: "Tarde" },
        { id: 2021002, profesor: "Jaime Alberto Giraldo", jornada: "Mañana" },
        { id: 2021003, profesor: "Adriana Maria Zuluaga", jornada: "Mañana" },
        { id: 2021004, profesor: "Fabiola Ramirez", jornada: "Tarde" },
        { id: 2021005, profesor: "Maria Dolores Smith", jornada: "Mañana" }
    ];

    const [data, setData] = useState(dataGrupos);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [grupoSeleccionado, setGrupoSeleccionado] = useState({
        id: "",
        profesor: "",
        jornada: ""
    });

    const seleccionarGrupo = (elemento, caso) => {
        setGrupoSeleccionado(elemento);
        (caso === "Editar") ? setModalEditar(true) : setModalEliminar(true)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setGrupoSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const editar = () => {
        var dataNueva = data;
        dataNueva.map(grupo => {
            if (grupo.id === grupoSeleccionado.id) {
                grupo.profesor = grupoSeleccionado.profesor;
                grupo.jornada = grupoSeleccionado.jornada;
            }
        });
        setData(dataNueva);
        setModalEditar(false);
    }

    const eliminar = () => {
        setData(data.filter(grupo => grupo.id !== grupoSeleccionado.id));
        setModalEliminar(false);
    }

    const abrirModalInsertar = () => {
        setGrupoSeleccionado(null);
        setModalInsertar(true);
    }

    const insertar = () => {
        var valorInsertar = grupoSeleccionado;
        valorInsertar.id = data[data.length - 1].id + 1;
        var dataNueva = data;
        dataNueva.push(valorInsertar);
        setData(dataNueva);
        setModalInsertar(false);
    }

    return (
        <div className="Container">
            <Container className="text-center m-5">
            <h1 className="m-3">Grupos</h1>
            
            <button className="btn btn-success" onClick={() => abrirModalInsertar()}>Insertar</button>
            </Container>
            <Container>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Profesor</th>
                        <th>Jornada</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(elemento => (
                        <tr>
                            <td>{elemento.id}</td>
                            <td>{elemento.profesor}</td>
                            <td>{elemento.jornada}</td>
                            <td><button className="btn btn-success" onClick={() => seleccionarGrupo(elemento, "Editar")}>Editar Grupo</button>{"   "}
                                <button className="btn btn-danger" onClick={() => seleccionarGrupo(elemento, "Eliminar")}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </Container>
            <Modal isOpen={modalEditar}>
                <ModalHeader>
                    <div>
                        <h3>Editar Grupo</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>ID</label>
                        <input className="form-control" readOnly type="text" name="id" value={grupoSeleccionado && grupoSeleccionado.id} />
                        <br/>

                        <label>Profesor</label>
                        <input className="form-control" type="text" name="profesor" value={grupoSeleccionado && grupoSeleccionado.profesor} onChange={handleChange} />
                        <br/>

                        <label>Jornada</label>
                        <input className="form-control" type="text" name="jornada" value={grupoSeleccionado && grupoSeleccionado.jornada} onChange={handleChange} />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary"  onClick={()=>editar()}>Actualizar</button>
                    <button className="btn btn-danger" onClick={()=>setModalEditar()}>Cancelar</button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={modalEliminar}>
                <ModalBody>¿Estás seguro que deseas eliminar el grupo {grupoSeleccionado && grupoSeleccionado.id}?</ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={()=>eliminar()}>Sí</button>
                    <button className="btn btn-secondary" onClick={()=>setModalEliminar(false)}>No</button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={modalInsertar}>
                <ModalHeader>
                    <div>
                        <h3>Insertar grupo</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>ID</label>
                        <input className="form-control" readOnly type="text" name="id" value={data[data.length-1].id+1} />
                        <br/>

                        <label>Profesor</label>
                        <input className="form-control" type="text" name="profesor" value={grupoSeleccionado ? grupoSeleccionado.profesor : ""} onChange={handleChange} />
                        <br/>

                        <label>Jornada</label>
                        <input className="form-control" type="text" name="jornada" value={grupoSeleccionado ? grupoSeleccionado.jornada : ""} onChange={handleChange} />
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={()=>insertar()}>Insertar</button>
                    <button className="btn btn-danger" onClick={()=>setModalInsertar(false)}>Cancelar</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Grupo;