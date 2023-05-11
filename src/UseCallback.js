import React, { useCallback } from "react";

const UseCallback = () => {
  const test = useCallback(() => {}, []);
  return <div>UseCallback</div>;
};

export default UseCallback;
