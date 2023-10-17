import React from "react";

const Keys = () => {
  const ar = [
    <h2 key={1}>Hii</h2>,
    <h2 key={2}>Hellooo</h2>,
    <h2 key={3}>Koooo</h2>,
  ];
  return <div>Keys - {ar}</div>;
};

export default Keys;
