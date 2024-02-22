import React, { useMemo, useState } from "react";
import MemoComp from "./MemoComp";

const UseMemoComp = (props) => {
  const [name, setName] = useState("David");
  // reference
  const obj = useMemo(()=>{
    return {test: name}
  }, [name]);
  return (
    <div>
      <p
        onClick={() => {
          setName("John");
        }}
      >
        UseMemoComp - {name}
      </p>
      <MemoComp adhsa={obj} />
    </div>
  );
};

export default UseMemoComp;
