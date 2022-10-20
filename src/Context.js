import React, { useContext } from "react";

const MyContext = React.createContext(null);
const contextValue = { theme: "dark" };

export const useMyContext = () => useContext(MyContext);

export const withMyContextHOC = (Comp) => {
  return (props) => {
    const context = useMyContext();
    return <Comp {...props} context={context} />;
  };
};

export const Context = ({ children }) => {
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

