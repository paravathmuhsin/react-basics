import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "./App";

const FunComp = () => {
  const context = useContext(ThemeContext);
  const { value } = useParams();
  const name = [4, 7];
  const className = "test";
  const getName = () => {
    return "Muhsin";
  };
  return (
    <h2 className={className}>
      This is fom functional component - {getName()} - {value} - {context}
    </h2>
  );
};

export default FunComp;
