import React from "react";

//React.js
// eventHandler(event)

const Event = () => {
  const eventHandler = (e, a) => {
    console.log(e, a);
  };
  return (
    <div>
      Event
      {/* <button onClick={eventHandler}>Click me</button> */}
      <input
        type="text"
        onChange={(e)=>{
            eventHandler(e, 66);
        }}
      />
    </div>
  );
};

export default Event;
