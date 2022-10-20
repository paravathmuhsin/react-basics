import React, { Component } from "react";
import { withMyContextHOC } from "./Context";

class ContextClass extends Component {
  render() {
    return <div>ContextClass - {this.props.context.theme}</div>;
  }
}
export default withMyContextHOC(ContextClass);
