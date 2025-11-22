import { StyleSheet } from "@react-pdf/renderer";

// Estilos
// 2. Definir estilos para react-pdf
export const styles = StyleSheet.create({
  normalText: {
    fontSize: 24,
    fontWeight: "normal",
  },
  italicText: {
    fontStyle: "italic",
  },

  page: {
    padding: 40,
    fontSize: 10,
    lineHeight: 1.5,
    fontWeight: 300,
  },
  section: {
    marginBottom: 40,
  },
  h1: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "semibold",
  },

  primary: {
    color: "#007bff", // Reemplaza con tu color primary
  },
  secondary: {
    color: "#6c757d", // Reemplaza con tu color secondary
  },
  white: {
    color: "#ffffff",
  },
  error: {
    color: "#dc3545",
  },
  bold: {
    fontWeight: "bold",
  },
  semibold: {
    fontWeight: "semibold",
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },

  flexRow: {
    display: "flex",
    gap: 4,
    flexDirection: "row",
  },
  flexCol: {
    display: "flex",
    gap: 4,
    flexDirection: "column",
  },

  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },

  border: {
    borderBottom: "1px solid #101010",
  },

  skill: {
    padding: "4px 8px 1px 8px",
    border: "1px solid #d3d3d3",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  customBullet: {
    position: "relative", // relative
    marginLeft: 4,
    paddingLeft: 4,
  },
  bullet: {
    position: "absolute",
    top: 10,
    left: -4,
    width: 3,
    height: 3,
    backgroundColor: "#000000",
    borderRadius: 8,
  },
});
