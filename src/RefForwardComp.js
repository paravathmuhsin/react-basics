import React, { forwardRef, useImperativeHandle } from "react";

const RefForwardComp = (props, ref) => {
  useImperativeHandle(
    ref,
    () => {
      return { test: "Hoo" };
    },
    []
  );
  return <div>RefForwardComp</div>;
};

export default forwardRef(RefForwardComp);
