import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [first, setfirst] = useState("Hii");
  const getValue = useMemo(() => {
    console.log("getValue");
    return first + "Test";
  }, [first]);
  return (
    <>
      <h2>
        UseMemo - {first} - {getValue}
      </h2>
      <button
        onClick={() => {
          setfirst("Hello..");
        }}
      >
        update
      </button>
    </>
  );
};

export default UseMemo;
