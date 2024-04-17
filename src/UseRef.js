import React, { useEffect, useRef } from "react";
import RefForwardComp from "./RefForwardComp";

const UseRef = () => {
  const refDiv = useRef(null);
  useEffect(() => {
    console.log(refDiv.current);
  }, []);
  return (
    <div>
      UseRef
      <RefForwardComp ref={refDiv} />
    </div>
  );
};

export default UseRef;
