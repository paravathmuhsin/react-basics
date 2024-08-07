import { forwardRef, useImperativeHandle } from "react";

const ForwardRef = (props, ref) => {
  useImperativeHandle(
    ref,
    () => {
      return {
        name: "David",
      };
    },
    []
  );
  return <div>ForwardRef</div>;
};

export default forwardRef(ForwardRef);
