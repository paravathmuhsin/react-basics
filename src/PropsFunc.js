import React from "react";

const PropsFunc = ({ name, age, children }) => {
  return (
    <div>
      PropsFunc {children} {name}@{age}
    </div>
  );
};

export default PropsFunc;
