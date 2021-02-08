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

administrador.post("/registro-grupo", (req, res) => {
  const { codigo, descripcion, jornada } = req.body;

  cnn_postgreSQL.query(
    `insert into grupo values (nextval('grupo_id_seq'), $1, $2, $3)`,
    [codigo, jornada, descripcion],
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

administrador.get("/administrador-grupo/", (req, res) => {
  cnn_postgreSQL.query(`select * from grupo`, (err, rows, fields) => {
    if (err) {
      return res.status(500).json({ message: "Información Incorrecta" });
    } else {
      console.log(rows);
      return res.json(rows);
    }
  });
});

administrador.patch("/editar-grupo/", (req, res) => {
  console.log(req.body);

  try {
    const { codigo, jornada, descripcion, id_grupo } = req.body;

    console.log(req.body);

    const updateNotas = cnn_postgreSQL.query(
      "UPDATE grupo SET cod_grupo = $1, jornada = $2, descripcion = $3 WHERE id_grupo = $4;",
      [codigo, jornada, descripcion, id_grupo]
    );

    res.json("Grupo actualizado con éxito");
  } catch (error) {
    console.error(error.message);
  }
});

administrador.get("/administrador-informe-final", (req, res) => {
  cnn_postgreSQL.query(`select * from grupo`, (err, rows, fields) => {
    if (err) {
      return res.status(500).json({ message: "Información Incorrecta" });
    } else {
      console.log(rows);
      return res.json(rows);
    }
  });
});

module.exports = administrador;
