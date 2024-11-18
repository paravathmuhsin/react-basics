import { Component } from "react";

class ClassComp extends Component {
  name = "Test"
  render() {
    return <h2>This is from class component {this.name}</h2>;
  }
}

export default ClassComp;
