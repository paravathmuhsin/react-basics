import { memo } from "react";

const MemoComp = ({ test }) => {
  console.log("rendred", test);
  return <div>MemoComp</div>;
};

export default memo(MemoComp);
