import React from "react";
import { useThemeContext } from "./App";

const Context = () => {
    // useContext(ThemeContext);
  const context = useThemeContext();
  return <div>Context - {context}</div>;
};

export default Context;
