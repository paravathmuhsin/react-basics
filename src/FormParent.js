import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const FormParent = () => {
  return (
    <div>
      <h2>Green Header</h2>
      <Outlet />
    </div>
  );
};

export default FormParent;
