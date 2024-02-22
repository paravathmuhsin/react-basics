import React from "react";
import withHOC from "./HOC";

const HocComp = (props) => {
  console.log(props);
  return <div>HocComp</div>;
};

export default withHOC(HocComp);
