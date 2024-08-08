import { useCallback, useState } from "react";
import Memo from "./Memo";

const UseCallback = () => {
  const [name, setName] = useState("David");
  const test = useCallback(() => {
    return { message: name };
  }, [name]);
  return (
    <div
      onClick={() => {
        setName("John");
      }}
    >
      UseCallback - {name}
      <Memo test={test} />
    </div>
  );
};

export default UseCallback;
