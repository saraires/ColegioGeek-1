"use strict";

//En este doc hacemos la conexión a la base de datos
const process = require('process');
const Pool = require('pg').Pool
const poolConnection = new Pool({
  host: "104.196.49.247",
  user: "postgres",
  password: "colegiogeek",
  database: "postgres",
  port: 5432
});

module.exports = { cnn_postgreSQL: poolConnection };
