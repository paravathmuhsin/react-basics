import React, { useEffect, useState } from "react";

const Effect = () => {
  const [state, setState] = useState({ name: "Muhsin" });
  const [address, setAddress] = useState({ state: "kerala" });

  const clickHandler = () => {
    setState({ name: "Aruna" });
  };

  const clickHandler2 = () => {
    setAddress({ state: "TN" });
  };

  useEffect(() => {
    console.log("useEffect comonent did mont");
  }, []);

  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("effect return");
    };
  }, [state]);

  useEffect(() => {
    console.log("useEffect 2");
  }, [address]);

  return (
    <div>
      Effect - {state.name} - {address.state}-
      <button onClick={clickHandler}>update</button>
      <button onClick={clickHandler2}>update2</button>
    </div>
  );
};

export default Effect;
