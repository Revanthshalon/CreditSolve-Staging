import React from "react";

const ThemeContext = React.createContext({
  dark: {
    primaryColor: "#212529",
    secondaryColor: "#6c757d",
    backgroundColor: "#f8f9fa",
    textColor: "#212529",
    highlightColor: "#39b54a",
    card: {
      backgroundColor: "#36393f",
      textColor: "#f8f9fa",
      borderColor: "#6c757d",
    },
    button: {
      backgroundColor: "#39b54a",
      textColor: "#f8f9fa",
      borderColor: "#39b54a",
    },
    input: {
      backgroundColor: "#f8f9fa",
      textColor: "#212529",
      placeholderColor: "#6c757d",
      borderColor: "#6c757d",
    },
  },
});

// const ThemeContext = React.createContext({
//   light: {
//     primaryColor: "#f8f9fa",
//     secondaryColor: "#6c757d",
//     backgroundColor: "#fff",
//     textColor: "#212529",
//     highlightColor: "#673ab7",
//     card: {
//       backgroundColor: "#fff",
//       textColor: "#212529",
//       borderColor: "#ddd",
//     },
//     button: {
//       backgroundColor: "#673ab7",
//       textColor: "#fff",
//       borderColor: "#673ab7",
//     },
//     input: {
//       backgroundColor: "#fff",
//       textColor: "#212529",
//       borderColor: "#ccc",
//     },
//   },
//   dark: {
//     primaryColor: "#212529",
//     secondaryColor: "#6c757d",
//     backgroundColor: "#f8f9fa",
//     textColor: "#212529",
//     highlightColor: "#39b54a",
//     card: {
//       backgroundColor: "#36393f",
//       textColor: "#f8f9fa",
//       borderColor: "#6c757d",
//     },
//     button: {
//       backgroundColor: "#39b54a",
//       textColor: "#f8f9fa",
//       borderColor: "#39b54a",
//     },
//     input: {
//       backgroundColor: "#f8f9fa",
//       textColor: "#212529",
//       placeholderColor: "#6c757d",
//       borderColor: "#6c757d",
//     },
//   },
// });

export default ThemeContext;
