import React, { useMemo } from "react";

const UseMemo = ({ first, second }) => {
  const add = (a, b) => {
    return a + b;
  };
  const addMemo = useMemo(() => add(first, second), [first, second]);
  return <div>UseMemo - {addMemo}</div>;
};

export default UseMemo;
