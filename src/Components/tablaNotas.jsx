import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getFromLocal } from "../functions/localstorage";
import { Container, Table } from "react-bootstrap";
import {Modal, ModalHeader, ModalFooter} from "reactstrap";

function TablaGrados() {
  const id = getFromLocal("id_usuario");
  const codigo = getFromLocal("cod_grupo");
  const grupo = getFromLocal("id_grupo");
  console.log(id);
  console.log(codigo);

  const dataEstudiante = [
    {id: 1, nombre: "Santiago",seguimiento: 3.2,conocimiento:3.0,bimensual:4.2,autoevaluacion: 4.3, notafinal: 4.0}
  ];

  const [notas, setNotas] = useState([]);
  const [estudianteSeleccionado, setEstudianteSeleccionado] = useState({
      id: "",
      nombre: "",
      seguimiento: "",
      conocimiento: "",
      bimensual: "",
      autoevaluacion: "",
      notafinal: ""
    });
  const [modalEditar, setModalEdital] = useState(false);

  const seleccionarEstudiante = (elemento, caso) => {
      setEstudianteSeleccionado(elemento);
      (caso === "Editar") && setModalEdital(true)
  };

  const handleChange = e =>{
      const {name,value} = e.target;
      setEstudianteSeleccionado((prevState)=>({
          ...prevState,
          [name]: value
      }));
  }

  const editar = () =>{
    var dataNueva = data;
    dataNueva.map(estudiante =>{
        if(estudiante.id === estudianteSeleccionado.id){
            
        }
    })      
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/profesor-notas/${id}/${grupo}/${codigo}`)
      .then((res) => {
        setNotas(res.data.rows);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      <div>
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
          
          {notas.map((notas) => {
            return (
              <tr key={notas._id}>
                <td>{notas.cod_estudiante}</td>
                <td>{notas.nombre_completo}</td>
                <td>{Number(notas.seguimiento).toFixed(2)}</td>
                <td>{Number(notas.bimensual_1).toFixed(2)}</td>
                <td>{Number(notas.bimensual_2).toFixed(2)}</td>
                <td>{Number(notas.autoevaluacion).toFixed(2)}</td>
                <td>{Number(notas.nota_promedio).toFixed(2)}</td>
                <td>
                  <button className="btn btn-success">Editar Notas</button>
                </td>
              </tr>
            );
          })} 
        </tbody>
      </Table>
    </Container>
    <Modal>
        
    </Modal>
    </div>
  );
}

export default TablaGrados;
