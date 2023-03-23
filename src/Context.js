import React, { createContext, useContext } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const Context = ({ children }) => {
  return (
    <AppContext.Provider value={{ title: "React Basic App", version: 1.0 }}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;
