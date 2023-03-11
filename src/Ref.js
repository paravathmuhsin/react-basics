import React, { Component, createRef } from "react";
import First from "./First";
import FuncComp from "./FuncComp";

export default class Ref extends Component {
//   constructor() {
//     super();
//     // console.log(this.pRef);
//   }
  pRef = createRef();
  componentDidMount() {
    console.log(this.pRef.current);
  }
  render() {
    return (
      <div>
        Ref
        <p ref={this.pRef}>Hiiii</p>
        {/* <First ref={this.pRef} /> */}
        {/* <FuncComp ref={this.pRef} /> */}
      </div>
    );
  }
}
