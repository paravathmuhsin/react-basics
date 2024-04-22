import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Navigation = () => {
  const nav = useNavigate();

  const clickHandler = () => {
    nav("/hoc");
  };
  return (
    <div>
      Navigation
      {false ? <Navigate to={"/hoc"} /> : null}
      <button onClick={clickHandler}> redirect into hoc page</button>
    </div>
  );
};

export default Navigation;
