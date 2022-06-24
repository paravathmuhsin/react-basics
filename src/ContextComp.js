import React from "react";

export const ThemeContext = React.createContext('light');

const ContextComp = ({ children }) => {
  return (
    <ThemeContext.Provider value="Dark">
      {children}
    </ThemeContext.Provider>
  );
};

export default ContextComp;
