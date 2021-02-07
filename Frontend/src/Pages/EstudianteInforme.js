import React from "react";
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import InformeE from "../Components/InformeE"

function Informe() {

  const styles = StyleSheet.create({
    section: {
      display: "block",
      width: "100%",
      height: 800
    },
  });

  return (
    <>
        <PDFViewer style={styles.section}>
          <InformeE />
        </PDFViewer>
    </>
  )
}
export default Informe;