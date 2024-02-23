import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

//react

const Event = () => {
  const nav = useNavigate();
  const clickHandler = (e, type) => {
    console.log(e, type);
    nav('/hoc')
  };
  return (
    <div>
      Event
      <button onClick={clickHandler}>Click</button>
      {false ? <Navigate to={'/'} /> : null }
      {/* <input
        type="text"
        onChange={(e) => {
          clickHandler(e, "text");
        }}
      /> */}
    </div>
  );
};

export default Event;
