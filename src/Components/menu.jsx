import React from 'react';
import LogoAcademia from '../Images/LogoAcademia.png';

function MenuProfesor() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
                <div className="container-fluid">
                    <img src={LogoAcademia} alt="foto" width="120px" href="/profesor" style={{ marginRight: "20px" }} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/profesor" style={{ color: "black" }}>Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/profesor-perfil" style={{ color: "black" }}>Ver mi Perfil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/profesor-grupos" style={{ color: "black" }}>Ver Grupos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default MenuProfesor;