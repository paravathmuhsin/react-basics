import React, { memo } from "react";

const CallbackChild = (props) => {
  console.log("Its from child component", props);
  return <div>CallbackChild</div>;
};

export default memo(CallbackChild);
