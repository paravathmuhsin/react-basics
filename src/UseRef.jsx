import { useEffect, useRef } from "react";
import UseImperativeHandle from "./UseImperativeHandle";

const UseRef = () => {
  const paraRef = useRef();
  useEffect(() => {
    console.log(paraRef.current);
  });
  return (
    <div>
      UseRef
      {/* <p ref={paraRef}>for ref</p> */}
      {/* <LifeCycle ref={paraRef}/> */}
      <UseImperativeHandle ref={paraRef}/>
    </div>
  );
};

export default UseRef;
