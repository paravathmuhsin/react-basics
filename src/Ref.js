import React, { useRef } from "react";
import PropsFun from "./PropsFun";

const Ref = () => {
  const paraRef = useRef();
  const clickHandler = () => {
    console.log(paraRef);
  };
  return (
    <div>
      Ref -
      <p ref={paraRef} onClick={clickHandler}>
        Ref element
      </p>
      {/* <StateClass /> */}
      <PropsFun />
    </div>
  );
};

export default Ref;
