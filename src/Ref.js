import React, { Component, createRef } from "react";
import LifeCycle from "./LifeCycle";
import Second from "./Second";

export default class Ref extends Component {
  refElem = createRef(null);
  componentDidMount() {
    console.log(this.refElem);
  }
  render() {
    return (
      <div>
        <p >Ref</p>
        <LifeCycle ref={this.refElem}  />
        {/* <Second  ref={this.refElem} /> */}
      </div>
    );
  }
}
