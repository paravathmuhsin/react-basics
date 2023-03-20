import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState("ss");
  const getName = useMemo(() => {
    console.log("ddd");
    return second.length + "$";
  }, [second.length]);
  return (
    <div>
      UseMemo - {first} - {getName}
      <button
        onClick={() => {
          setfirst((prev) => prev + 1);
        }}
      >
        Update
      </button>
      <button
        onClick={() => {
          setsecond("dfdrgr");
        }}
      >
        Update 2
      </button>
    </div>
  );
};

export default UseMemo;
