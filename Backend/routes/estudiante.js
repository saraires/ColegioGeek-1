const { Router } = require("express");
const { cnn_postgreSQL } = require("../DB/conexion");
const authorize = require("../lib/authorize");
// const loginValidate = require("../models/login");
const estudiante = Router();

estudiante.post("/", async (req, res) => {
  const { correo, contraseña, rol } = req.body;
  console.log(req.body);
  cnn_postgreSQL.query(
    `SELECT * FROM usuario WHERE correo='${correo}' AND contraseña='${contraseña}' AND rol='${rol}';`,
    (err, rows, fields) => {
      if (err) {
        return res.status(500).json({ message: "Información Incorrecta" });
      } else {
        return res.json(rows);
      }
    }
  );
});

estudiante.get("/estudiante-perfil/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  cnn_postgreSQL.query(
    `SELECT U.nombre_completo, U.documento, G.descripcion_grupo, E.cod_estudiante, GC.estado FROM usuario U INNER JOIN estudiante E ON U.id_usuario = E.id_usuario INNER JOIN grado_cursado GC ON E.id_estudiante = GC.id_estudiante INNER JOIN grupo G on G.id_grupo = E.id_grupo WHERE U.id_usuario='${id}';`,
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

estudiante.get("/estudiante-materia/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  cnn_postgreSQL.query(
    `select cod_materia,nombre_materia, id_profesor, round(avg(seguimiento) + avg(bimensual_1) + avg(bimensual_2) + avg(autoevaluacion))/4 nota_promedio from estudiante inner join notas on estudiante.id_estudiante = notas.id_estudiante INNER JOIN materia on materia.id_materia=notas.id_materia INNER JOIN usuario on usuario.id_usuario=estudiante.id_usuario where estudiante.id_usuario='${id}' GROUP BY materia.cod_materia, materia.nombre_materia, materia.id_profesor;`,
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

estudiante.get("/estudiante-nota/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  cnn_postgreSQL.query(
    `select estudiante.id_usuario, cod_materia, nombre_materia, avg(seguimiento) seguimiento, avg(bimensual_1) as "bimensual_1", avg(bimensual_2) as "bimensual_2", avg(notas.autoevaluacion) autoevaluacion, (avg(seguimiento) + avg(bimensual_1) + avg(bimensual_2) + avg(autoevaluacion))/4 nota_final from notas INNER JOIN materia on materia.id_materia=notas.id_materia inner join estudiante on estudiante.id_estudiante=notas.id_estudiante where estudiante.id_usuario='${id}' GROUP BY cod_materia, nombre_materia, estudiante.id_usuario;`,
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

estudiante.get("/estudiante-informe/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  cnn_postgreSQL.query(
    `select cod_materia,nombre_materia,  materia.id_profesor, estudiante.cod_estudiante, descripcion_grupo, avg(seguimiento) seguimiento, avg(bimensual_1) as "bimensual_1", avg(bimensual_2) as "bimensual_2", avg(notas.autoevaluacion) autoevaluacion, round(avg(seguimiento) + avg(bimensual_1) + avg(bimensual_2) + avg(autoevaluacion))/4 nota_promedio from estudiante inner join notas on estudiante.id_estudiante = notas.id_estudiante INNER JOIN materia on materia.id_materia=notas.id_materia INNER JOIN usuario on usuario.id_usuario=estudiante.id_usuario inner join grupo on grupo.id_grupo=estudiante.id_grupo where estudiante.id_usuario='${id}' GROUP BY materia.cod_materia, materia.nombre_materia, materia.id_profesor, estudiante.cod_estudiante, descripcion_grupo;`,
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

estudiante.post("/verify", (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = estudiante;
