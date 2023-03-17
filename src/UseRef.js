import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const ref = useRef();
  useEffect(() => {
    console.log(ref.current);
  }, []);
  return <div ref={ref}>UseRef</div>;
};

export default UseRef;
