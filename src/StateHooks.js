import React, { useState } from "react";

const StateHooks = () => {
  const [state, setState] = useState({ name: "Muhsin" });
  const [address, setAddress] = useState({ state: "kerala" });

  const clickHandler = () => {
    setState({ name: "Aruna" });
    setAddress({ state: "TN" });
  };
  return (
    <div>
      StateHooks - {state.name} - {address.state}
      <button onClick={clickHandler}>update</button>
    </div>
  );
};

export default StateHooks;
