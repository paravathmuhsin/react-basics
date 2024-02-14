import React from "react";

const FunComp = (props) => {
    console.log(props)
  return <div>FunComp - {props.children} {props.name}@{props.age}</div>;
};

export default FunComp;
