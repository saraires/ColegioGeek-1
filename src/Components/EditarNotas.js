import React, { useState } from "react";
import axios from "axios";
import { getFromLocal, saveToLocal } from "../functions/localstorage";

const EditarNotas = ({ notas }) => {
  const [seguimiento, setSeguimiento] = useState(notas.seguimiento);

  const updateNotas = async () => {
    // e.preventDefault();

    try {
        
      await fetch(
        `http://localhost:5000/profesor-editar-notas/${notas.id_estudiante}/${notas.id_notas}/${notas.id_materia}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              "id_notas":10,
              "id_materia": 3,
              "id_estudiante": 3,
             "seguimiento": seguimiento,
             "bimensual_1":3.0,
             "bimensual_2":2.0,
             "autoevaluacion": 5.0
          })
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        data-toggle="modal"
        data-target={`#id${notas.id_estudiante}`}
      >
        Editar Notas
      </button>

      {/*
           Example => id = id10
        */}
      <div
        className="modal"
        id={`id${notas.id_estudiante}`}
        onClick={() => setSeguimiento(notas.seguimiento)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Notas</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setSeguimiento(notas.seguimiento)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <h3>{notas.nombre_completo}</h3>
              <h6>Codigo Estudiante: {notas.cod_estudiante}</h6>
              <label>Seguimiento</label>
              <input
                type="text"
                className="form-control"
                value={seguimiento}
                onChange={(e) => {
                  setSeguimiento(e.target.value);
                }}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => {
                  updateNotas(e);
                  console.log("Nota actualizada");
                }}
              >
                Editar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setSeguimiento(notas.seguimiento)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarNotas;
