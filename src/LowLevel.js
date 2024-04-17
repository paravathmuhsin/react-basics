import React, { memo } from "react";

const LowLevel = (props) => {
  console.log("LowLevel", props);
  return <div>LowLevel</div>;
};

export default memo(LowLevel);

// memo
