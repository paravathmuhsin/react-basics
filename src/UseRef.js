import React, { useEffect, useRef } from "react";
import ForwardRef from "./ForwardRef";

const UseRef = () => {
  const sampleRef = useRef(null);
  useEffect(() => {
    console.log(sampleRef.current.ss());
  }, []);
  return (
    <div>
      UseRef
      <ForwardRef ref={sampleRef} />
    </div>
  );
};

export default UseRef;
