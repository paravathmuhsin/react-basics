import { memo, useEffect } from "react";

const ChildMemo = () => {
  useEffect(() => {
    console.log("child memo rendered");
  });
  return <div>ChildMemo</div>;
};

export default memo(ChildMemo);
