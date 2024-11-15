import { useState } from "react";

const UseState = () => {
  const [state, setState] = useState("David"); // [state, update state func]
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setState("John");
  };
  const countClickHandler = () => {
    setCount((s) => s + 1);
  };
  return (
    <>
      <div onClick={clickHandler}>UseState - {state}</div>
      <button onClick={countClickHandler}>count - {count}</button>
    </>
  );
};

export default UseState;
