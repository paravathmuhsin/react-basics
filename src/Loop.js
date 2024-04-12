import React from "react";

const Loop = () => {
  const arr = [
    <p key="1">Para 1</p>,
    <p key="2">Para 2</p>,
    <p key="3">Para 3</p>,
  ];
  const arr2 = [3, 4, 5, 6];
  return (
    <div>
      Loop -{/* [<p>3</p>,<p>4</p>,<p>5</p>,<p>6</p>] */}
      {arr2.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default Loop;
