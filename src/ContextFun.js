import React from "react";
import { useMyContext } from "./Context";

const ContextFun = () => {
  const { theme } = useMyContext();
  return <div>ContextFun - {theme}</div>;
};

export default ContextFun;
