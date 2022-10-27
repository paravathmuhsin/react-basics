import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  const [first, setfirst] = useState(false);
  const clickHandler = () => {
    navigate("/form");
  };
  const clickHandler2 = () => {
    setfirst(true);
  };
  return (
    <div>
      Form Redirect
      <button onClick={clickHandler}>Redirect to Form</button>
      <button onClick={clickHandler2}>Redirect to Form by using JSX</button>
      {first ? <Navigate to={"/form"} /> : null}
    </div>
  );
};

export default Redirect;
