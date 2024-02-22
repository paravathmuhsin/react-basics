import React, { useCallback, useState } from "react";
import MemoComp from "./MemoComp";

const UseCallbackComp = () => {
  const [name, setName] = useState("David");
  // fererence
  const func = useCallback(() => {
    console.log("hh");
  }, []);
  return (
    <div>
      <p
        onClick={() => {
          setName("John");
        }}
      >
        UseCallbackComp - {name}
      </p>
      <MemoComp adhsa={func} />
    </div>
  );
};

export default UseCallbackComp;
