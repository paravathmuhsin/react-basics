import React, { Component, createRef } from "react";
import Event from "./Event";
import FunComp from "./FunComp";

export default class Ref extends Component {
  paraRef = createRef(null);
  componentDidMount() {
    console.log(this.paraRef.current);
  }
  render() {
    return (
      <div>
        Ref
        <p>This is sample paragraph</p>
        <FunComp ref={this.paraRef} />
      </div>
    );
  }
}
