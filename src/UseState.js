import React, { useState } from "react";

const UseState = () => {
  const [name, setName] = useState("Muhsin");
//   const [age, setAge] = useState("4");
  console.log("ddddd");
  return (
    <div>
      UseState - {name}
      <button
        onClick={() => {
          setName("David");
        }}
      >
        update
      </button>
    </div>
  );
};

export default UseState;
