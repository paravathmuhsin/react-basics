import React, { useState } from "react";

const UseState = () => {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(44);
  return (
    <h2>
      UseState - {name}@{age}
      <button
        onClick={() => {
          setName("David");
        }}
      >
        Update
      </button>
      <button
        onClick={() => {
          setAge(99);
        }}
      >
        Update Age
      </button>
    </h2>
  );
};

export default UseState;
