"use strict";

//En este doc hacemos la conexión a la base de datos

const Pool = require('pg').Pool
const poolConnection = new Pool({
  host: "104.196.49.247",
  user: "postgres",
  password: "colegiogeek",
  database: "postgres",
  port: 5432

  // host: "localhost",
  // user: "postgres",
  // password: "2704775123.",
  // database: "Colegio_Geek",
  // port: 5432

  // host: 'bh8bpuyytnjeozxdfrej-postgresql.services.clever-cloud.com',
  // user: 'uq2emsrhwkmvecsyktll',
  // password: 'L6YVOk7NAEexTZITTTlO',
  // database: 'bh8bpuyytnjeozxdfrej',
  // port: 5432
});

module.exports = { cnn_postgreSQL: poolConnection };
