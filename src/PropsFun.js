import React from "react";

const PropsFun = ({ name, age, children }) => {
  return (
    <div>
      PropsFun - {name}@{age} - {children}
    </div>
  );
};

export default PropsFun;
