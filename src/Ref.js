import React, { useRef } from "react";
import ClassComp from "./ClassComp";

const Ref = () => {
  const paraRef = useRef();
  const clickHandler = () => {
    console.log(paraRef.current);
  };
  return (
    <div>
      Ref
      <p onClick={clickHandler}>reference element</p>
      <ClassComp ref={paraRef} />
    </div>
  );
};

export default Ref;
