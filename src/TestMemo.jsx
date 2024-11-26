import { useState } from "react";
import ChildMemo from "./ChildMemo";

const TestMemo = () => {
  const [name, setName] = useState("John");
  return (
    <div>
      TestMemo - {name}
      <button onClick={() => setName("David")}>click me</button>
      <ChildMemo />
    </div>
  );
};

export default TestMemo;
