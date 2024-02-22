import React, { useState } from "react";
import MemoComp from "./MemoComp";

const UseStateComp = () => {
    const [state, setState] = useState("Hii");
    const [name, setName] = useState("David");
    const clickHandler = () => {
        setState("Hello");
    };
    const clickHandler2 = () => {
        setName("John");
  };
  return (
    <>
      <div onClick={clickHandler}>UseState - {state}</div>
      <span onClick={clickHandler2}> {name}</span>
      <MemoComp />
    </>
  );
};

export default UseStateComp;
