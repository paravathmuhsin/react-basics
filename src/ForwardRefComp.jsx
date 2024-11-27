import { forwardRef, useImperativeHandle } from "react";

const ForwardRefComp = (prop, ref) => {
  useImperativeHandle(
    ref,
    () => {
      return { name: "George" };
    },
    []
  );
  return <div>ForwardRef</div>;
};

export default forwardRef(ForwardRefComp);
