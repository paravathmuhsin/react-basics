import React from "react";
import { Outlet } from "react-router-dom";

const FormParent = () => {
  return (
    <div>
      <h3 style={{ color: "green" }}>FormParent</h3>
      <Outlet />
    </div>
  );
};

export default FormParent;
