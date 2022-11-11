import React from "react";

const FunComp = () => {
  const name = [4, 7];
  const className = "test";
  const getName = () => {
    return "Muhsin";
  };
  return (
    <h2 className={className}>
      This is fom functional component - {getName()}
    </h2>
  );
};

export default FunComp;
