import React, { useContext } from "react";
import { ThemeContext } from "./ContextComp";

const ContextFunc = () => {
  const context = useContext(ThemeContext);
  return <div>ContextFunc - {context}</div>;
};

export default ContextFunc;
