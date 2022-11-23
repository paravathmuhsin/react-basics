import React from "react";
import { useParams } from "react-router-dom";

const FunComp = () => {
  const { value } = useParams();
  const name = [4, 7];
  const className = "test";
  const getName = () => {
    return "Muhsin";
  };
  return (
    <h2 className={className}>
      This is fom functional component - {getName()} - {value}
    </h2>
  );
};

export default FunComp;
