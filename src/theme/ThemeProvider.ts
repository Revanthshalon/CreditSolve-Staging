// import React from "react";
// import ThemeContext from "./ThemeContext";

// type Props = {
//   children: React.ReactNode;
// };

// const ThemeProvider = ({ children }: Props) => {
//   const [currentTheme, setCurrentTheme] = React.useState("dark");

//   const toggleTheme = () => {
//     setCurrentTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
//   };

//   return (
//     <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;
