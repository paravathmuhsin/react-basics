import React, { Fragment } from "react";
import withHOC from "./HOC";

const JSX = (props) => {
  console.log(props)
  const add = (a, b) => a + b;
  const name = {
    fname: "David",
    lname: "John",
  };

  return (
    // React fragment
    <>
      <div>JSX - {name.fname + " " + name.lname}</div>
      <div> {add(4, 7)}</div>
    </>
  );
};

export default withHOC(JSX);
