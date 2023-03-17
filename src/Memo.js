import React, { useState } from "react";
import MemoChild from "./MemoChild";
import UseEffect from "./UseEffect";

const Memo = () => {
  const [first, setfirst] = useState("Muhsin");
  return (
    <div>
      Memo - {first}
      <button
        onClick={() => {
          setfirst("david");
        }}
      >
        update
      </button>
      <MemoChild />
    </div>
  );
};

export default Memo;
