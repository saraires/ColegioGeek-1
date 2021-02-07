const { Router, response } = require("express");
const { cnn_postgreSQL } = require("../DB/conexion");
const profesor = Router();

profesor.get("/profesor-perfil/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  cnn_postgreSQL.query(
    `select nombre_completo, documento, nombre_materia, descripcion_grupo from usuario u inner join profesor p on u.id_usuario=p.id_usuario inner join grupo g on p.id_profesor=g.id_profesor inner join grado gr on g.id_grado=gr.id_grado inner join materia m on m.id_profesor=p.id_profesor where u.id_usuario='${id}';`,
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

profesor.get("/profesor-grupos/:id", async (req, res) => {
  const id = req.params.id;
  console.log(req.params);

  cnn_postgreSQL.query(
    `SELECT id_grupo, cod_grupo, descripcion_grupo, jornada FROM grupo INNER JOIN profesor ON profesor.id_profesor = grupo.id_profesor INNER JOIN usuario ON usuario.id_usuario = profesor.id_usuario WHERE profesor.id_usuario = '${id}';`,
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

profesor.get("/profesor-notas/:id/:id_grupo/:cod_grupo", async (req, res) => {
  const { id, id_grupo, cod_grupo } = req.params;
  console.log(req.params)
  console.log(req.body);
  cnn_postgreSQL.query(`SELECT cod_estudiante, nombre_completo, seguimiento, bimensual_1, bimensual_2, autoevaluacion, (seguimiento + bimensual_1 + bimensual_2 + autoevaluacion)/4 nota_promedio, p.id_profesor, e.id_grupo, cod_grupo FROM estudiante e INNER JOIN usuario u ON e.id_usuario=u.id_usuario INNER JOIN notas n ON n.id_estudiante = e.id_estudiante INNER JOIN materia m ON m.id_materia = n.id_materia INNER JOIN profesor p ON p.id_profesor = m.id_profesor inner join grupo on grupo.id_profesor=p.id_profesor WHERE p.id_usuario='${id}' and e.id_grupo='${id_grupo}' and grupo.cod_grupo='${cod_grupo}';`,
    (err, rows, fields) => {
      if (err) {
        return res.status(500).json({ message: "Información Incorrecta" });
      } else {
        console.log(rows)
        return res.json(rows);
      }
    }
  );
});

profesor.patch("/editar-notas/", (req, res) => {
  console.log(req.body);

  try {
    const {
      seguimiento,
      id_notas,
      id_estudiante,
      id_materia,
      bimensual_1,
      bimensual_2,
      autoevaluacion,
    } = req.body;

    const updateNotas = cnn_postgreSQL.query(
      "UPDATE notas SET seguimiento = $1, bimensual_1 = $2, bimensual_2 = $3, autoevaluacion = $4 WHERE id_notas = $5 and id_materia = $6 and id_estudiante = $7",
      [
        seguimiento,
        bimensual_1,
        bimensual_2,
        autoevaluacion,
        id_notas,
        id_materia,
        id_estudiante,
      ]
    );

    res.json("Nota actualizada con éxito");
  } catch (error) {
    console.error(error.message);
  }
});

profesor.get("/profesor-notas/:id/:id_grupo/:cod_grupo", async (req, res) => {
  const { id, id_grupo, cod_grupo } = req.params;
  console.log(req.params);

  console.log(req.body);
  cnn_postgreSQL.query(
    `SELECT n.id_estudiante, cod_estudiante, nombre_completo, seguimiento, bimensual_1, bimensual_2, autoevaluacion, (seguimiento + bimensual_1 + bimensual_2 + autoevaluacion)/4 nota_promedio,  p.id_profesor, e.id_grupo, cod_grupo, m.id_materia, n.id_notas FROM estudiante e INNER JOIN usuario u ON e.id_usuario=u.id_usuario INNER JOIN notas n ON n.id_estudiante = e.id_estudiante INNER JOIN materia m ON m.id_materia = n.id_materia INNER JOIN profesor p ON p.id_profesor = m.id_profesor inner join grupo on grupo.id_profesor=p.id_profesor WHERE p.id_usuario='${id}' and e.id_grupo='${id_grupo}' and grupo.cod_grupo='${cod_grupo}';`,
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


module.exports = profesor;
