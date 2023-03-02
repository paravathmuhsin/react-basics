import React from "react";

const FuncComp = ({ country, children }) => {
  // console.log(props);
  // const { country, children } = props;
  return (
    <div>
      FuncComp - {children}:{country}
    </div>
  );
};

export default FuncComp;
