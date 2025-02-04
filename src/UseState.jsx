import { useState } from "react";

const UseState = () => {
  const [state, setState] = useState("David"); // [state, setState]
  const [count, setCount] = useState(0); // [state, setState]

  const clickHandler = () => {
    setState("John");
  };
  const clickHandler2 = () => {
    setCount((ss) => ss + 1);
  };

  return (
    <div>
      UseState - {state}
      <button onClick={clickHandler}>Update state</button>
      <button onClick={clickHandler2}>counter - {count}</button>
    </div>
  );
};

export default UseState;
