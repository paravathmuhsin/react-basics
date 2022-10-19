import React, { memo } from "react";

const Memo = () => {
  console.log("Memo render");
  return <div>Memo</div>;
};

export default memo(Memo);
