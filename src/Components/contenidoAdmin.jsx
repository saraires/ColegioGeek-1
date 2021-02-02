import React from 'react';
import Admin from '../Images/Admin.jpg';
import Cita from "../Components/Quote";

function Contenido() {
    return (
        <>
            <div className="container-fluid row" style={{ display: "flex", marginTop: "50px" }}>
                <div>
                    <img src={Admin} className="ajuste" alt="..."/>
                </div>

                <div className="col">
                    <div className="frase">
                    <br />
                    <br />
                    <h1 className="card-tittle">Frase del día</h1>
                    <Cita />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contenido;