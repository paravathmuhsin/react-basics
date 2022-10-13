import React from "react";
import withHOC from "./withHOC";

const HOC = ({ user, name, age }) => {
  console.log(age);
  return <div>HOC</div>;
};

export default withHOC(HOC);
