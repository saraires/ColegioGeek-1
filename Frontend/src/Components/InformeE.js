import React, { useEffect, useState } from "react";
import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";
import { getFromLocal, saveToLocal } from "../functions/localstorage";
import axios from "axios";

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    backgroundColor: "#E4E4E4",
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    paddingLeft: 0,
    paddingTop: 50,
    paddingBottom: 50,
    fontSize: 12,
  },
  firma: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 12,
  },
  firmaTop: {
   marginTop:50
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  text: {
    margin: 20,
    fontSize: 12,
    textAlign: "justify",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 20,
    marginBottom: 30,
  },
  tableRow: { margin: "auto", flexDirection: "row" },
  tableCol: {
    width: "16.7%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  tableCell: { margin: "auto", marginTop: 0, marginLeft: 0, fontSize: 10 },
});

// Create Document Component
function MyPdf() {
  const id = getFromLocal("id_usuario");
  const nombre = getFromLocal("nombre_completo");
  const genero = getFromLocal("genero");
  const cod_estudiante = getFromLocal("cod_estudiante");
  const grupo = getFromLocal("grupo");
  const [informe, setInforme] = useState([]);
  console.log(grupo);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/estudiante-informe/${id}`)
      .then((res) => {
        setInforme(res.data.rows);
        saveToLocal("cod_estudiante", res.data.rows[0]["cod_estudiante"]);
       saveToLocal("grupo", res.data.rows[0]["descripcion"])
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View>
          <Text style={styles.section}>Medellín - Antioquía</Text>
        </View>
        <View>
          <Text style={styles.title}>COLEGIO GEEK</Text>
        </View>

        <View>
          <Text style={styles.title}>CERTIFICA</Text>
        </View>

        <View>
          <Text style={styles.text}>
            Que {genero === "Femenino" ? "la " : "el "}estudiante {nombre},{" "}
            {genero === "Femenino" ? "identificada" : "identificado"} con código{" "}
            {cod_estudiante} se encuentra{" "}
            {genero === "Femenino" ? "matriculada" : "matriculado"} en nuestro
            colegio en el grupo {grupo}. A continuación se describen el
            rendimiento academico, dando a conocer las notas por materia que se
            llevan del año activo 2021.
          </Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Materia</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Seguimiento</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Conocimiento</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Bimensuales</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Autoevaluación</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Nota Final</Text>
            </View>
          </View>

          {informe.map((item, index) => {
            return (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.nombre_materia}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {Number(item.seguimiento).toFixed(2)}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {Number(item.conocimiento).toFixed(2)}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {Number(item.bimensual).toFixed(2)}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {Number(item.autoevaluacion).toFixed(2)}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {Number(item.nota_promedio).toFixed(2)}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        <View>
          <Text style={styles.text}>
            El presente certificado se expide a solicitud del estudiante.
          </Text>
        </View>
        <View style={styles.firmaTop}>
          <Text style={styles.firma}>Directiva académica</Text>
        </View>
        <View>
          <Text style={styles.firma}>
            Firmado por el rector y director de grupo
          </Text>
        </View>
        <View>
          <Text style={styles.firma}>
            Reporte creado por el grupo de desarrollo de Colegio Geek
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export default MyPdf;
