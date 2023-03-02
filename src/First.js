import React, { Component } from "react";
import FuncComp from "./FuncComp";

export default class First extends Component {
  render() {
    // console.log(this.props);
    const { name, age, children } = this.props;
    return (
      <div>
        First -{children} {name}@{age}
        <FuncComp country="India">Country</FuncComp>
      </div>
    );
  }
}
