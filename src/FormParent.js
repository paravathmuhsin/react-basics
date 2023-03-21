import React from "react";
import { Outlet } from "react-router-dom";

const FormParent = () => {
  return (
    <div>
      <div style={{ backgroundColor: "green" }}>Green Header</div>
      <Outlet />
    </div>
  );
};

export default FormParent;
