import React from 'react';
import Profesor from '../Images/Profesor.jpg';


function Contenido() {
    return (
        <>
            <div className="container-fluid" style={{ display: "flex", marginTop: "50px" }}>
                <img src={Profesor} className="img-responsive" alt="..." width="700px" />
                <div>
                    <h1 className="card-tittle">Frase del día</h1>
                    <br />
                    <p className="card-text" style={{ fontSize: "20px" }}>«No puedes acelerar tu vida para que transcurra más rápido. Por muy urgente que parezca
                    tu situación, las cosas se darán cuando se den, ni un minuto antes. Ten paciencia contigo mismo. Ten paciencia con
                    los demás. Ten paciencia con la vida. La paciencia siempre rinde buenos dividendos.»
                    </p>
                    <p className="card-text"> -- Iyanla Vanzant</p>
                </div>
            </div>
        </>
    );
}

export default Contenido;