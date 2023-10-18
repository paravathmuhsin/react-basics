import React, { useCallback, useState } from "react";
import CallbackChild from "./CallbackChild";

const CallbackHook = () => {
  const [name, setName] = useState("David");
  //fnhwnih3rf93w89r893
  const getName = useCallback(() => {
    return name;
  }, [name]);
  return (
    <div>
      CallbackHook - {name}
      <button
        onClick={() => {
          setName("Hari");
        }}
      >
        update
      </button>
      <CallbackChild getName={getName} />
    </div>
  );
};

export default CallbackHook;
