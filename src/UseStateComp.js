import React, { useState } from "react";

const UseStateComp = () => {
//   const [state, setState] = useState("David"); //
  const [count, setCount] = useState(0); //
  const clickHandler = () => {
    // setState("John");
    setCount((ss) => ss + 1);
  };
  return <div onClick={clickHandler}>UseStateComp - {count}</div>;
};

export default UseStateComp;
