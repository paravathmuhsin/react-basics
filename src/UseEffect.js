import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [state, setState] = useState("Muhsin");
  const [age, setAge] = useState(66);
  useEffect(() => {
    // component did mount / component did update
    console.log("useEffect state");
    return ()=>{
        console.log("useEffect state return");
    }
  }, [state]);
  useEffect(() => {
    // component did mount / component did update
    console.log("useEffect age");
  }, [age]);
  return (
    <div>
      UseEffect - {state}@{age}
      <button
        onClick={() => {
          setState("David");
        }}
      >
        update
      </button>
      <button
        onClick={() => {
          setAge(88);
        }}
      >
        update age
      </button>
    </div>
  );
};

export default UseEffect;
