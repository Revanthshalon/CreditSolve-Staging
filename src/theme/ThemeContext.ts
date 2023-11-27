import React from "react";

const ThemeContext = React.createContext({
  light: {
    primaryColor: "#f8f9fa",
    secondaryColor: "#6c757d",
    backgroundColor: "#fff",
    textColor: "#212529",
    highlightColor: "#673ab7",
    card: {
      backgroundColor: "#fff",
      textColor: "#212529",
      borderColor: "#ddd",
    },
    button: {
      backgroundColor: "#673ab7",
      textColor: "#fff",
      borderColor: "#673ab7",
    },
    input: {
      backgroundColor: "#fff",
      textColor: "#212529",
      borderColor: "#ccc",
    },
  },
  dark: {
    primaryColor: "#212529",
    secondaryColor: "#6c757d",
    backgroundColor: "#f8f9fa",
    textColor: "#212529",
    highlightColor: "#673ab7",
    card: {
      backgroundColor: "#36393f",
      textColor: "#f8f9fa",
      borderColor: "#212529",
    },
    button: {
      backgroundColor: "#673ab7",
      textColor: "#f8f9fa",
      borderColor: "#673ab7",
    },
    input: {
      backgroundColor: "#f8f9fa",
      textColor: "#212529",
      borderColor: "#6c757d",
    },
  },
});

export default ThemeContext;
