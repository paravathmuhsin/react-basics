import React, { useState } from "react";
import Memo from "./Memo";

const MemoParent = () => {
  const [state, setState] = useState("Siva");
  const updateName = () => {
    setState("Rekha");
  };
  console.log("MemoParent render");
  return (
    <div>
      MemoParent - {state}
      <Memo />
      <button onClick={updateName}>Update</button>
    </div>
  );
};

export default MemoParent;
