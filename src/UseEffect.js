import React, { useCallback, useEffect, useState } from "react";
import Memo from "./Memo";

const UseEffect = () => {
  const [first, setFirst] = useState("Hii");
  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("will unmount");
    };
  }, []);
  const test = useCallback(() => {
    console.log("ddd");
  }, []);
  return (
    <h2>
      UseEffect - {first}
      <Memo name={test} />
      <button
        onClick={() => {
          setFirst("Hello");
        }}
      >
        click
      </button>
    </h2>
  );
};

export default UseEffect;
