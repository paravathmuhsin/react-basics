import React from "react";

const FuncComp = ({ country, ss, children }) => {
  // console.log(ss);
  ss(5656957967);
  // const { country, children } = props;
  return (
    <div>
      FuncComp - {children}:{country}
    </div>
  );
};

export default FuncComp;
