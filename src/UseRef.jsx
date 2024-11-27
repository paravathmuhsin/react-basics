import { useEffect, useRef } from "react";
import ClassComp from "./ClassComp";
import ForwardRefComp from "./ForwardRefComp";

const UseRef = () => {
  const paraRef = useRef();
  useEffect(() => {
    console.log(paraRef);
  });
  return (
    <div>
      UseRef
      {/* <p ref={paraRef}>Hii</p>
      <ClassComp ref={paraRef} /> */}
      <ForwardRefComp ref={paraRef} />
    </div>
  );
};

export default UseRef;
