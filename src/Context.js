import React from "react";
import { useThemeContext } from "./App";

const Context = () => {
  const context = useThemeContext();
  return <div>Context - {context}</div>;
};

export default Context;
