import React from 'react';
import Profesor from '../Images/Profesor.jpg';


function Contenido() {
    return (
        <>
            <div className="container-fluid row" style={{ display: "flex", marginTop: "50px" }}>
                <div>
                    <img src={Profesor} className="ajuste" alt="..."/>
                </div>

                <div className="col">
                    <div className="frase">
                    <br />
                    <br />
                    <h1 className="card-tittle">Frase del día</h1>
                    <br/>
                    <p className="card-text" style={{ fontSize: "20px"}}>«No puedes acelerar tu vida para que transcurra más rápido. Por muy urgente que parezca
                    tu situación, las cosas se darán cuando se den, ni un minuto antes. Ten paciencia contigo mismo. Ten paciencia con
                    los demás. Ten paciencia con la vida. La paciencia siempre rinde buenos dividendos.»
                    </p>
                    <p className="card-text">Iyanla Vanzant</p>
                    <br/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contenido;