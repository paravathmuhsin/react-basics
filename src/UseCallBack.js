import React, { useCallback, useState } from "react";
import MemoChild from "./MemoChild";

const UseCallBack = () => {
  const [first, setfirst] = useState("Hii");
  const testFun = useCallback(() => {
    console.log("Test Func");
  }, []);
  return (
    <div>
      UseCallBack - {first}
      <button
        onClick={() => {
          setfirst("Hello");
        }}
      >
        update
      </button>
      <MemoChild name={testFun} />
    </div>
  );
};

export default UseCallBack;
