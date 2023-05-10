import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const divRef = useRef(null);
  useEffect(() => {
    console.log(divRef.current);
  });
  return <div ref={divRef}>UseRef</div>;
};

export default UseRef;
