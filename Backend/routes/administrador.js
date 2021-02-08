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

    const updateGrupo = cnn_postgreSQL.query(
      "UPDATE grupo SET cod_grupo = $1, jornada = $2, descripcion = $3 WHERE id_grupo = $4;",
      [codigo, jornada, descripcion, id_grupo]
    );

    res.json("Grupo actualizado con éxito");
  } catch (error) {
    console.error(error.message);
  }
});

administrador.delete("/eliminar-grupo/:id", (req, res) => {
  console.log(req.params);
  try {
    const id_grupo = req.params.id;

    console.log(req.body);

    const deleteGrupo = cnn_postgreSQL.query(
      "delete from grupo where id_grupo = $1 ",
      [id_grupo]
    );

    res.json("Grupo borrado con éxito");
  } catch (error) {
    console.error(error.message);
  }
});

administrador.post("/registro-materia", (req, res) => {
  console.log(req.body);
  const {
    codigo,
    nombreMateria,
    codProfesor,
    seis,
    siete,
    ocho,
    nueve,
    diez,
    once,
  } = req.body;

  cnn_postgreSQL.query(
    `insert into materia values (nextval('materia_id_seq'), $1, $2, $3, $4, $5, $6, $7, $8, $9)`,
    [codigo, nombreMateria, codProfesor, seis, siete, ocho, nueve, diez, once],
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

administrador.get("/administrador-materia/", (req, res) => {
  cnn_postgreSQL.query(`select * from materia`, (err, rows, fields) => {
    if (err) {
      return res.status(500).json({ message: "Información Incorrecta" });
    } else {
      console.log(rows);
      return res.json(rows);
    }
  });
});

administrador.get("/administrador-usuario/", (req, res) => {
  cnn_postgreSQL.query(`select * from usuario`, (err, rows, fields) => {
    if (err) {
      return res.status(500).json({ message: "Información Incorrecta" });
    } else {
      console.log(rows);
      return res.json(rows);
    }
  });
});

administrador.post("/registro-usuario/", (req, res) => {
  
  const {
    tipo_documento,
    documento,
    nombre_completo,
    genero,
    fecha_nacimiento,
    direccion,
    ciudad,
    telefono,
    celular,
    correo,
    contraseña,
    rol,
    foto,
    pdf_documento,
  } = req.body;

  console.log(req.body);

  cnn_postgreSQL.query(
    `insert into usuario values (nextval('usuario_id_seq'), $1, $2, $3, $4, $5, $6, $7, $8,  $9, $10, $11, $12, $13, $14);`,
    [
      tipo_documento,
      documento,
      nombre_completo,
      genero,
      fecha_nacimiento,
      direccion,
      ciudad,
      telefono,
      celular,
      correo,
      contraseña,
      rol,
      foto,
      pdf_documento,
    ],
    (err, rows, fields) => {
      if (err) {
        return res.status(500).json({ message: "Información Incorrecta" });
      } else {
        console.log(rows);
        return res.json(rows);
      }
    })
  ;
});


administrador.get("/administrador-usuario/", (req, res) => {
  cnn_postgreSQL.query(`select * from usuario`, (err, rows, fields) => {
    if (err) {
      return res.status(500).json({ message: "Información Incorrecta" });
    } else {
      console.log(rows);
      return res.json(rows);
    }
  });
});

administrador.patch("/editar-usuario/", (req, res) => {
  
  const {
    tipo_documento,
    documento,
    nombre_completo,
    genero,
    fecha_nacimiento,
    direccion,
    ciudad,
    telefono,
    celular,
    correo,
    contraseña,
    rol,
    foto,
    pdf_documento,
    id_usuario,
    id_grupo
  } = req.body;

  console.log(req.body);

  cnn_postgreSQL.query(
    `update  usuario set tipo_documento = $1, documento = $2, nombre_completo = $3, genero = $4, fecha_nacimiento = $5, direccion =$6, ciudad = $7, telefono = $8, celular = $9, correo = $10, contraseña = $11, rol= $12, foto= $13, pdf_documento= $14 where id_usuario =$15;`,
    [
      tipo_documento,
      documento,
      nombre_completo,
      genero,
      fecha_nacimiento,
      direccion,
      ciudad,
      telefono,
      celular,
      correo,
      contraseña,
      rol,
      foto,
      pdf_documento,
      id_usuario
    ],
    (err, rows, fields) => {
      if (err) {
        return res.status(500).json({ message: "Información Incorrecta" });
      } else {
        console.log(rows);
        return res.json(rows);
      }
    })
  ;
});

administrador.post("/registro-profesor/", (req, res) => {
  
  const {
    id_usuario
  } = req.body;

  console.log(req.body);

  cnn_postgreSQL.query(
    `insert into profesor values (nextval('cod_profesor_seq'), $1);`,
    [
      id_usuario
    ],
    (err, rows, fields) => {
      if (err) {
        return res.status(500).json({ message: "Información Incorrecta" });
      } else {
        console.log(rows);
        return res.json(rows);
      }
    })
  ;
});

administrador.post("/registro-estudiante/", (req, res) => {
  
  const {
    id_usuario,
    id_grupo
  } = req.body;

  console.log(req.body);

  cnn_postgreSQL.query(
    `insert into estudiante values (nextval('estudiante_id_seq'), $1, nextval('cod_estudiante_seq'), $2 );`,
    [
      id_usuario,
      id_grupo
    ],
    (err, rows, fields) => {
      if (err) {
        return res.status(500).json({ message: "Información Incorrecta" });
      } else {
        console.log(rows);
        return res.json(rows);
      }
    })
  ;
});

administrador.patch("/registro-usuario/", (req, res) => {
  
  const {
    id_usuario,
    tipo_documento,
    documento,
    nombre_completo,
    genero,
    fecha_nacimiento,
    direccion,
    ciudad,
    telefono,
    celular,
    correo,
    contraseña,
    rol,
    foto,
    pdf_documento,
    id_grupo
  } = req.body;

  console.log(req.body);

  cnn_postgreSQL.query(
    `update  usuario set  tipo_documento = $1, documento = $2, nombre_completo = $3, genero = $4, fecha_nacimiento = $5, direccion = $6, ciudad = $7, telefono = $8, celular = $9, correo = $10, contraseña = $11, rol = $12, foto = $13, pdf_documento = $14 where id_usuario = $15;`,
    [
      tipo_documento,
      documento,
      nombre_completo,
      genero,
      fecha_nacimiento,
      direccion,
      ciudad,
      telefono,
      celular,
      correo,
      contraseña,
      rol,
      foto,
      pdf_documento,
      id_usuario
    ],
    (err, rows, fields) => {
      if (err) {
        return res.status(500).json({ message: "Información Incorrecta" });
      } else {
        console.log(rows);
        return res.json(rows);
      }
    })
  ;
});

administrador.delete("/eliminar-materia/:id", (req, res) => {
  console.log(req.params);
  try {
    const id_materia = req.params.id;

    console.log(req.body);

    const deleteMateria = cnn_postgreSQL.query(
      "delete from materia where id_materia = $1 ",
      [id_materia]
    );

    res.json("Materia borrado con éxito");
  } catch (error) {
    console.error(error.message);
  }
});

administrador.delete("/eliminar-usuario/:id", (req, res) => {
  console.log(req.params);
  try {
    const id = req.params.id;

    console.log(req.body);

    const deleteMateria = cnn_postgreSQL.query(
      "delete from usuario where id_usuario = $1 ",
      [id]
    );

    res.json("Materia borrado con éxito");
  } catch (error) {
    console.error(error.message);
  }
});

administrador.patch("/editar-materia", (req, res) => {
  console.log(req.body);
  const {
    codigo,
    nombreMateria,
    codProfesor,
    seis,
    siete,
    ocho,
    nueve,
    diez,
    once,
    id_materia,
  } = req.body;

  cnn_postgreSQL.query(
    `update  materia set cod_materia = $1, nombre_materia = $2, cod_profesor = $3, sexto = $4, septimo = $5, octavo = $6, noveno = $7, decimo = $8, once = $9 where id_materia = $10`,
    [
      codigo,
      nombreMateria,
      codProfesor,
      seis,
      siete,
      ocho,
      nueve,
      diez,
      once,
      id_materia,
    ],
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