import { useState } from "react";

const UseState = () => {
  const [state, setState] = useState("David"); //[]
  const [age, setAge] = useState(44); //[]
  const clickHandler = () => {
    setState("John");
    setAge(55);
  };
  return (
    <div onClick={clickHandler}>
      UseState - {state}@{age}
    </div>
  );
};

export default UseState;
