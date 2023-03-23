import React from "react";
import { useAppContext } from "./Context";

const ContextComp = () => {
  const { title } = useAppContext();
  return <div>ContextComp - {title}</div>;
};

export default ContextComp;
