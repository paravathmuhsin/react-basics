import React, { forwardRef, useImperativeHandle } from "react";

const ForwardRef = forwardRef((props, ref) => {
  const ss = () => {
    console.log("SS");
  };
  useImperativeHandle(
    ref,
    () => {
      return {
        // ... your methods ...
        ss,
      };
    },
    []
  );
  return <div>ForwardRef</div>;
});

export default ForwardRef;
