import React, { useState } from "react";
import UseEffect from "./UseEffect";

const UseState = () => {
  const [state, setState] = useState(0); //[point to value, func to update thisa state]
  const clickHandler = () => {
    setState((currentState) => currentState + 1);
  };
  return (
    <div>
      UseState - {state}
      <button onClick={clickHandler}>Update</button>
      {state % 2 ? <UseEffect /> : null}
    </div>
  );
};

export default UseState;
