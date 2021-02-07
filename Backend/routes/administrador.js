const { Router } = require("express");
const { cnn_postgreSQL } = require("../DB/conexion");
// const authorize = require("../lib/authorize");
// const loginValidate = require("../models/login");
const administrador = Router();

administrador.get("/administrador-perfil/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    cnn_postgreSQL.query(
      `SELECT U.nombre_completo, U.documento FROM usuario U WHERE U.id_usuario='${id}';`,
      (err, rows, fields) => {
        if (err) {
          return res.status(500).json({ message: "Información Incorrecta" });
        } else {
          console.log(rows);
          return res.json(rows);
        }
      }
    );
  });

  // RUTAS INSCRIPCIÓN DE GRUPO

  administrador.get("/registro-grupo", (req, res) => {
    // const id = req.params.id;
    // console.log(id);
    cnn_postgreSQL.query(
      `SELECT grupo.cod_grupo, grupo.id_profesor FROM grupo;`,
      (err, rows, fields) => {
        if (err) {
          return res.status(500).json({ message: "Información Incorrecta" });
        } else {
          console.log(rows);
          return res.json(rows);
        }
      }
    );
  });


  module.exports = administrador;