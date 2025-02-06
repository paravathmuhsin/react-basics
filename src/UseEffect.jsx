import { useEffect, useState } from "react";
import LifeCycle from "./LifeCycle";

const UseEffect = () => {
  const [state, setState] = useState("David");
  useEffect(() => {
    console.log("From useEffect 1", state);
  }, [state]);

  useEffect(() => {
    console.log("From useEffect 2");
  }, []);

  useEffect(() => {
    console.log("From useEffect 3");
  });

  const clickHandler = () => {
    setState("John");
  };

  console.log("UseEffect render");
  return (
    <div>
      UseEffect - {state} <button onClick={clickHandler}>Update state</button>
      {state === "David" && <LifeCycle />}
    </div>
  );
};

export default UseEffect;
