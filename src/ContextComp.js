import React, { createContext, useContext } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const ContextComp = ({ children }) => {
  return (
    <AppContext.Provider value={{ theme: "Dark" }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextComp;
