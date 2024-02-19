import React, { useState } from "react";

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
    </>
  );
};

export default UseStateComp;
