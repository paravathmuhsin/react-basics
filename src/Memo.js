import React, { memo } from "react";

const Memo = () => {
  console.log("Memo");
  return <div>Memo</div>;
};

export default memo(Memo);
