import { useMemo, useState } from "react";
import Memo from "./Memo";

const UseMemo = () => {
  const [name, setName] = useState("David");
  const test = useMemo(() => {
    return { message: name };
  }, [name]);
  return (
    <div
      onClick={() => {
        setName("John");
      }}
    >
      UseMemo - {name}
      <Memo test={test} />
    </div>
  );
};

export default UseMemo;
