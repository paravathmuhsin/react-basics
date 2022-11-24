import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Nav = () => {
  const nav = useNavigate();
  return (
    <div>
      Nav
      {/* <Navigate to={'/effect'} /> */}
      <button
        onClick={() => {
          nav("/product");
        }}
      >
        to product
      </button>
    </div>
  );
};

export default Nav;
