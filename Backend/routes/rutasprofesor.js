const { Router, response } = require("express");
const { cnn_postgreSQL } = require("../DB/conexion");
const profesor = Router();

profesor.get("/profesor-perfil/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  cnn_postgreSQL.query(
    `select nombre_completo, documento, nombre_materia, descripcion from usuario u inner join profesor p on u.id_usuario=p.id_usuario inner join grupo g on p.cod_profesor=g.cod_profesor inner join materia m on m.cod_profesor=p.cod_profesor where u.id_usuario='${id}';`,
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
    `SELECT id_grupo, cod_grupo, descripcion, jornada, profesor.cod_profesor FROM grupo INNER JOIN profesor ON profesor.cod_profesor = grupo.cod_profesor INNER JOIN usuario ON usuario.id_usuario = profesor.id_usuario WHERE profesor.id_usuario = '${id}';`,
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
  cnn_postgreSQL.query(`SELECT cod_estudiante, n.id_nota, nombre_completo, seguimiento, conocimiento, bimensual, autoevaluacion, (seguimiento + conocimiento + bimensual + autoevaluacion)/4 as nota_promedio, p.cod_profesor, e.id_grupo, cod_grupo FROM estudiante e INNER JOIN usuario u ON e.id_usuario=u.id_usuario INNER JOIN notas n ON n.id_estudiante = e.id_estudiante INNER JOIN materia m ON m.id_materia = n.id_materia INNER JOIN profesor p ON p.cod_profesor = m.cod_profesor inner join grupo on grupo.cod_profesor=p.cod_profesor WHERE p.id_usuario='${id}' and e.id_grupo='${id_grupo}' and grupo.cod_grupo='${cod_grupo}';`,
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
      id_nota,
      id_estudiante,
      id_materia,
      conocimiento,
      bimensual,
      autoevaluacion,
    } = req.body;

    const updateNotas = cnn_postgreSQL.query(
      "UPDATE notas SET seguimiento = $1, conocimiento = $2, bimensual = $3, autoevaluacion = $4 WHERE id_nota = $5 and id_materia = $6 and id_estudiante = $7",
      [
        seguimiento,
        conocimiento,
        bimensual,
        autoevaluacion,
        id_nota,
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
    `SELECT n.id_estudiante, cod_estudiante, nombre_completo, seguimiento, conocimiento, bimensual, autoevaluacion, (seguimiento + conocimiento + bimensual + autoevaluacion)/4 nota_promedio,  p.cod_profesor, e.id_grupo, cod_grupo, m.id_materia, n.id_nota FROM estudiante e INNER JOIN usuario u ON e.id_usuario=u.id_usuario INNER JOIN notas n ON n.id_estudiante = e.id_estudiante INNER JOIN materia m ON m.id_materia = n.id_materia INNER JOIN profesor p ON p.cod_profesor = m.cod_profesor inner join grupo on grupo.cod_profesor=p.cod_profesor WHERE p.id_usuario='${id}' and e.id_grupo='${id_grupo}' and grupo.cod_grupo='${cod_grupo}';`,
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
