import React, { forwardRef, useImperativeHandle } from "react";

const RefFunc = forwardRef((props, ref) => {
  useImperativeHandle(
    ref,
    () => {
      return {
        test: 'Hiii'
      };
    },
    []
  );
  return <div>RefFunc</div>;
});

export default RefFunc;
