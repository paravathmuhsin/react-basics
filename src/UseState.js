import React, { useState } from "react";

const UseState = () => {
  const [state, setState] = useState("Rekha");
  const [country, setCountry] = useState("");
  const nameUpdate = () => {
    setState("Shiva");
    setCountry("India");
  };
  return (
    <div>
      UseState - {state} from {country}
      <button onClick={nameUpdate}>update</button>
    </div>
  );
};

export default UseState;
