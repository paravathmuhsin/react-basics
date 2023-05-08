import React, { Component, createRef } from "react";
import PropsClass from "./PropsClass";
import PropsFun from "./PropsFun";

export default class Ref extends Component {
  testRef = createRef();
  componentDidMount() {
    console.log(this.testRef.current);
  }
  render() {
    return (
      <div>
        Ref
        <PropsClass  ref={this.testRef} />
        {/* <PropsFun ref={this.testRef} /> */}
      </div>
    );
  }
}
