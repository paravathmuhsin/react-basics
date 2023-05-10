import React, { memo } from "react";

const Memo = () => {
  console.log("render");
  return <h2>Memo</h2>;
};

export default memo(Memo);
