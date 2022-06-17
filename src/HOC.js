import React from "react";
import withHoc from "./HocFunction";

const HOC = (prop) => {
  console.log(prop);
  return <div>HOC</div>;
};

export default withHoc(HOC);
