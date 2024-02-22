import React, { forwardRef, useImperativeHandle } from "react";

const RefFunc = (props, ref) => {
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
};

export default forwardRef(RefFunc);
