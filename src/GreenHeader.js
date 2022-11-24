import React from "react";
import { Outlet } from "react-router-dom";

const GreenHeader = () => {
  return (
    <>
      <div style={{ backgroundColor: "green" }}>GreenHeader</div>
      <Outlet />
    </>
  );
};

export default GreenHeader;
