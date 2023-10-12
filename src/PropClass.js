import React, { Component } from "react";

class PropClass extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        PropClass - {name}@{age}
      </div>
    );
  }
}

export default PropClass;
