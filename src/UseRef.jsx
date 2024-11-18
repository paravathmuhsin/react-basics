import { useEffect, useRef } from "react";
import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";

const UseRef = () => {
  const paraRef = useRef();
  useEffect(() => {
    console.log(paraRef.current);
  });
  return (
    <div>
      UseRef
      <p ref={paraRef}>Hii</p>
      {/* <ClassComp ref={paraRef} /> */}
      {/* <FuncComp ref={paraRef} /> */}
    </div>
  );
};

export default UseRef;
