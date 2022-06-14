import React, { Component } from "react";

export class PropsClass extends Component {
  render() {
    const { name, age, children } = this.props;
    return (
      <div>
        PropsClass {children} {name}@{age}
      </div>
    );
  }
}

export default PropsClass;
