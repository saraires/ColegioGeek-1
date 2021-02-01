import React, { useState, useEffect } from "react";
import LogoAcademia from '../Images/LogoAcademia.png';
import axios from 'axios'


function MenuEstudiante() {

    const [estudiante, setEstudiante] = useState([]);
    const id = 1;

    useEffect(() => {
        axios.get(`http://localhost:3001/estudiantes/${id}`).then((res) => {
            setEstudiante(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid" collapseOnSelect>
                <div className="container-fluid">
                    <img src={LogoAcademia} alt="foto" width="120px" href="/profesor" style={{ marginRight: "20px" }} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/estudiante-materias" style={{ color: "black" }}>Materias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/estudiante-notas" style={{ color: "black" }}>Notas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/estudiante-informe-final" style={{ color: "black" }}>Informe final</a>
                            </li>
                            {/* 
                            <li>
                                <Nav>
                                    <Nav.Link as={Link} to={`/estudiante-perfil/${id}`} eventKey={4}>
                                        {estudiante.nombre} {estudiante.apellido}
                                    </Nav.Link>
                                </Nav>
                            </li>
                            */}
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}
export default MenuEstudiante;
