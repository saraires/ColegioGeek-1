const router = require("express").Router();
const { cnn_postgreSQL } = require("../DB/conexion");
const { encryptPassword, matchPassword } = require("../lib/helpers");
const jwtGenerator = require("../lib/jwtGenerator");
const authorize = require("../lib/authorize");

router.post("/signup", async (req, res) => {
  const {
    tipo_doc,
    documento,
    nombre_completo,
    genero,
    fecha_nacimiento,
    direccion,
    ciudad,
    telefon,
    celular,
    correo,
    contrasena,
    rol,
  } = req.body;

  try {
    const user = await cnn_postgreSQL.query(
      "SELECT * FROM Usuario WHERE correo = $1",
      [correo]
    );

    if (user.rows.length > 0) {
      return res.status(401).json("El usuario ya existe");
    }

    const encryptedPass = await encryptPassword(contrasena);

    let newUser = await cnn_postgreSQL.query("query", [
      tipo_doc,
      documento,
      nombre_completo,
      genero,
      fecha_nacimiento,
      direccion,
      ciudad,
      telefon,
      celular,
      correo,
      encryptedPass,
      rol,
    ]);

    const jwtToken = jwtGenerator(newUser.rows[0].id_usuario);

    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/login", async (req, res) => {
  const { correo, contrasena, rol } = req.body;
  console.log(req.body);

  try {
    const user = await cnn_postgreSQL.query(
      `SELECT * FROM Usuario WHERE correo='${correo}';`
    );

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    }

    const validPassword = await matchPassword(
      contrasena,
      user.rows[0].contrasena
    );

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }

    const jwtToken = jwtGenerator(user.rows[0].id_usuario);
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/verify", authorize, (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
