import { useEffect, useState } from "react";

const UseEffect = () => {
  const [state, setState] = useState({ name: "David", age: 44 });
  useEffect(() => {
    console.log("from useEffect");
    return () => {
      console.log("will unmount");
    };
  }, []);
  useEffect(() => {
    console.log("from useEffect with depd");
  }, [state]);
  return (
    <>
      <div
        onClick={() => {
          setState({ ...state, name: "John" });
        }}
      >
        UseEffect - {state.name}@{state.age}
      </div>
      <p>{JSON.stringify(state)}</p>
    </>
  );
};

export default UseEffect;
