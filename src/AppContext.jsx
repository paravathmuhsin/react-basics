import { createContext, useContext, useState } from "react";

const Context = createContext("light");

export const useAppContext = () => useContext(Context);

const AppContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>
  );
};

export default AppContext;
