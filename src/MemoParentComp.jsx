import { useState } from "react";
import MemoComp from "./MemoComp";

const MemoParentComp = () => {
  const [count, setCount] = useState(0);
  const a = {};
  return (
    <div>
      MemoParentComp <MemoComp test={a} />
      <button
        onClick={() => {
          setCount((state) => state + 1);
        }}
      >
        Count - {count}
      </button>
    </div>
  );
};

export default MemoParentComp;
