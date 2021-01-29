import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  }
});

// Create Document Component
const MyPdf = () => (
  <Document>
  <Page size="A4" style={styles.page}>
    <View style={styles.section}>
      <Text  style={styles.title}>
        INFORME 
      </Text>
    </View>
    <View style={styles.section}>
      <Text></Text>
    </View>
  </Page>
</Document>
);

export default MyPdf;
