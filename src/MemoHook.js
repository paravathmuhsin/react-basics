import React, { useMemo, useState } from "react";
import CallbackChild from "./CallbackChild";

const MemoHook = () => {
  const [name, setName] = useState("David");
  //cmw4584wy584y6nv54y
  const s = useMemo(() => {
    return { age: 77 };
  }, []);
  return (
    <div>
      MemoHook - {name}
      <button
        onClick={() => {
          setName("Hari");
        }}
      >
        update
      </button>
      <CallbackChild d={s} />
    </div>
  );
};

export default MemoHook;
