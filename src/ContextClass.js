import React, { Component } from "react";
import { ThemeContext } from "./ContextComp";

export class ContextClass extends Component {
//   static contextType = ThemeContext;
  render() {
    return <div>ContextClass - {this.context}</div>;
  }
}
ContextClass.contextType = ThemeContext

export default ContextClass;
