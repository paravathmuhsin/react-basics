import React, { useState } from "react";

const StateHook = () => {
  const [state, setState] = useState("Muhsin");
  const [country, setCountry] = useState("India");
  return (
    <div>
      StateHook - {state}@{country}
      <button
        onClick={() => {
          setState("Sooraj");
          setCountry("IND");
        }}
      >
        update
      </button>
    </div>
  );
};

export default StateHook;
