import React from "react";
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import InformeFinal from "../Components/InformeFinal"

function InformeGeneral() {

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
          <InformeFinal />
        </PDFViewer>
    </>
  )
}
export default InformeGeneral;