import React from "react";
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import PDF from "../Components/Pdf"
import { Container } from "react-bootstrap";

 function Informe() {

  const styles = StyleSheet.create({
    section: {
      display:"block",
      margin: "auto",
      width:"50vw",
      height:"50vw",
      flexGrow: 1
    }
  });

   return(
     <Container className="mt-5">
       <PDFViewer style={styles.section}>
       <PDF />
     </PDFViewer>
     </Container>
   )
 }
export default Informe;