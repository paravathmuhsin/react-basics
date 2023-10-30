import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Redirect = () => {
  const nav = useNavigate();
  const clickHandler = () => {
    nav("/state");
  };
  return (
    <div>
      {/* <Navigate to={'/effect'} /> */}
      Redirect - <button onClick={clickHandler}>click me</button>
    </div>
  );
};

export default Redirect;
