import React, { useRef } from "react";
import RefForward from "./RefForward";

const Ref = () => {
  const paraRef = useRef();
  const clickHandler = () => {
    console.log(paraRef);
  };
  return (
    <div>
      Ref -<p onClick={clickHandler}>Ref element</p>
      {/* <StateClass /> */}
      <RefForward ref={paraRef} />
    </div>
  );
};

export default Ref;
