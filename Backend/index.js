"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");

const estudiante = require("./routes/estudiante");
const profesor = require("./routes/rutasprofesor");
const administrador = require("./routes/administrador");

require("dotenv").config();
app.use(cors());

//Modo de uso de morgan "Middlewares"
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/', estudiante);
app.use('/', profesor);
app.use('/', administrador);


app.use(require('./mail'));
// app.use('/auth', require('./routes/jwtAuth'));
//app.use('/api/', require('./joi/routes'))

app.set("port", process.env.PORT || 5000);

// Levantamos el servidor
app.listen(app.get("port"), () => {
  console.log(`Aplicación corriendo en el puerto ${app.get("port")}!!`);
});

module.exports = app;
