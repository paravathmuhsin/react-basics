import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const refDiv = useRef(null);
  useEffect(() => {
    console.log(refDiv.current);
  }, []);
  return <div ref={refDiv}>UseRef</div>;
};

export default UseRef;
