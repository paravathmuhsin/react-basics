import { useCallback, useMemo, useState } from "react";
import ChildMemo from "./ChildMemo";

const TestMemo = () => {
  const [name, setName] = useState("John");
  const age = useMemo(() => {
    return { value: 44 };
  }, []);

  const testFunc = useCallback(() => {}, []);
  return (
    <div>
      TestMemo - {name}
      <button
        onClick={() => {
          setName("David");
        }}
      >
        update name
      </button>
      <ChildMemo age={age} fun={testFunc} />
    </div>
  );
};

export default TestMemo;
