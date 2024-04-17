import React, { useCallback, useMemo, useState } from "react";
import LowLevel from "./LowLevel";

const TopLevel = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount((state) => state + 1);
  };
  console.log("TopLevel");
  // wgef8732rt32e23623623
  const test = useMemo(() => {
    return { name: "Test" };
  }, []);

  const getTest = useCallback(() => {
    console.log("dddd");
  }, []);
  return (
    <div>
      TopLevel
      <button onClick={clickHandler}>counter - {count}</button>
      <LowLevel count={test} getTest={getTest} />
    </div>
  );
};

export default TopLevel;
