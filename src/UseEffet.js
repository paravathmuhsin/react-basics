import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const UseEffet = () => {
  const [state, setState] = useState("Rekha");
  const {value} = useParams();
  console.log(value);
  const divRef = useRef(null);
  const nameUpdate = () => {
    setState("Shiva");
  };
  useEffect(() => {
    console.log("from useEffect", divRef.current);
    return () => {
      console.log("useeffet leaving");
    };
  });
  return (
    <div>
      UseEffet - {state}
      <button ref={divRef} onClick={nameUpdate}>
        update
      </button>
    </div>
  );
};

export default UseEffet;
