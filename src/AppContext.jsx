import { use } from "react";
import { createContext, useContext, useState } from "react";

const Context = createContext("light");

// export const useAppContext = () => useContext(Context);
export const useAppContext = () => use(Context);

const AppContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    // <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>
    <Context value={{ theme, setTheme }}>{children}</Context>
  );
};

export default AppContext;
