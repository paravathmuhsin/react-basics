import React from "react";

//react

const Event = () => {
  const clickHandler = (e, type) => {
    console.log(e, type);
  };
  return (
    <div>
      Event
      {/* <button onClick={clickHandler}>Click</button> */}
      <input
        type="text"
        onChange={(e) => {
          clickHandler(e, "text");
        }}
      />
    </div>
  );
};

export default Event;
