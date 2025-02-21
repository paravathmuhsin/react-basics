import { useCallback, useMemo, useState } from "react";
import MemoComp from "./MemoComp";

const MemoParentComp = () => {
  const [count, setCount] = useState(0);
  //h94ght9g43yh9ty49trefew
  const a = useMemo(() => {
    return { name: "David" };
  }, []);

  const getName = useCallback(() => {
    return "David";
  }, []);

  return (
    <div>
      MemoParentComp <MemoComp test={a} getName={getName} />
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
