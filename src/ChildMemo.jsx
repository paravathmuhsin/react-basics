import { memo, useEffect } from "react";

const ChildMemo = ({ age }) => {
  useEffect(() => {
    console.log("child memo rendered");
  });
  return <div>ChildMemo - {age.value}</div>;
};

export default memo(ChildMemo);
