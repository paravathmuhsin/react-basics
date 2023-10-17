import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(3);
  useEffect(() => {
    // api
    console.log("Hii");
    return () => {
      console.log("will unmount");
    };
  }, []);
  return (
    <div>
      UseEffect - {state} - {state2}
      <button
        onClick={() => {
          setState(1);
        }}
      >
        update
      </button>
    </div>
  );
};

export default UseEffect;
