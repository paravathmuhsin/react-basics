import React, { useEffect, useState } from "react";

const UseEffectComp = () => {
  const [state, setState] = useState("David");
  const [state2, setState2] = useState("David");
  useEffect(() => {
    console.log("from use effect", state);
    return () => {
      console.log("will umount");
    };
  }, [state, state2]);


  // depn - not used - useEffect wil execute as componentDidMount and componentDidUpdate
  // deps - [] - this will execute only intially(as a componentDidMount)
  // depn - [somevalue]  - This will execute initally and this also exceute when you update the deps variable like componentdidupdate
  return (
    <div
      onClick={() => {
        setState2("John");
      }}
    >
      UseEffect - {state2}
    </div>
  );
};

export default UseEffectComp;
