import React from "react";

const PropsFun = ({ country, state, children }) => {
  return (
    <h2>
      PropsFun - {state}@{country}
      <p>{children}</p>
    </h2>
  );
};

export default PropsFun;
