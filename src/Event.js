import React from "react";

// clickHandler(event, 'click');

const Event = () => {
  const eventHandler = (e, type) => {
    console.log(e, type);
  };
  return (
    <div>
      Event
      <input
        onChange={(e) => {
          eventHandler(e, "change");
        }}
      />
      <button
        onClick={(e) => {
          eventHandler(e, "click");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Event;
