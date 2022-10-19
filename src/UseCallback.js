import React, { useCallback, useState } from "react";

const UseCallback = () => {
  const [state, setState] = useState("Siva");
  const updateName = useCallback(() => {
    console.log(state)
    setState("Rekha");
  }, [state]);
  return (
    <div>
      UseCallback - {state}
      <button onClick={updateName}>Update</button>
    </div>
  );
};

export default UseCallback;
