import { memo } from "react";

const MemoComp = () => {
  console.log("rendred");
  return <div>MemoComp</div>;
};

export default memo(MemoComp);
