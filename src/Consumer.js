import React from "react";
import { useAppContext } from "./ContextComp";

const Consumer = () => {
  const { theme } = useAppContext();
  return <h2>Consumer - {theme}</h2>;
};

export default Consumer;
