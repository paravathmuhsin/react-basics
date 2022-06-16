import React, { Component, createRef } from "react";
import LifeCycle from "./LifeCycle";
import Events from "./Events";

export class Ref extends Component {
  lifeRef = createRef();
  componentDidMount() {
    console.log(this.lifeRef);
  }
  render() {
    return (
      <div>
        <p >Ref</p>
        <Events ref={this.lifeRef}  />
        <LifeCycle  />
      </div>
    );
  }
}

export default Ref;
