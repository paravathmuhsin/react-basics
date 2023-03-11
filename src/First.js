import React, { Component } from "react";
import FuncComp from "./FuncComp";
import withHOC from "./withHOC";

class First extends Component {
  ss(e) {
    console.log("ddd", e);
  }
  render() {
    // console.log(this.props);
    const { name, age, children } = this.props;

    return (
      <div>
        First -{children} {name}@{age}
        <FuncComp country="India" ss={this.ss}>
          Country
        </FuncComp>
      </div>
    );
  }
}
export default withHOC(First);
