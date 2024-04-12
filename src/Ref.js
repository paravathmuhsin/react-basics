import React, { Component, createRef } from "react";
import StateClass from "./StateClass";
// import Event from "./Event";

export default class Ref extends Component {
  paraRef = createRef(null);
  componentDidMount() {
    // document.getElementById()
    console.log(this.paraRef);
    // this.paraRef.current.style.color = "red";
  }
  render() {
    return (
      <div>
        <p>Ref</p>
        <StateClass ref={this.paraRef} />
        {/* <Event ref={this.paraRef} /> */}
      </div>
    );
  }
}
