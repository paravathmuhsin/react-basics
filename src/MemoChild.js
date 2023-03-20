import React, { memo } from "react";

const MemoChild = () => {
  console.log("MemoChild");
  return <div>MemoChild</div>;
};

export default memo(MemoChild);
