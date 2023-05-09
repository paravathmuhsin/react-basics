import React from "react";
import withHOC from "./withHOC";

const HOC = (props) => {
  console.log(props);
  return <div>HOC</div>;
};

export default withHOC(HOC);
