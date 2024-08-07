import { memo, useEffect } from "react";

const Memo = ({ test }) => {
  useEffect(() => {
    console.log("Its from memo comp", test);
  });
  return <div>Memo - {test.message}</div>;
};

export default memo(Memo);
