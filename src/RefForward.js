import React, { forwardRef, useImperativeHandle } from "react";

const RefForward = (props, ref) => {
  useImperativeHandle(ref, () => ({
    name: "David",
  }));
  return <div>RefForward</div>;
};
export default forwardRef(RefForward);
