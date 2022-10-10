import React, { Component } from "react";

class PropClass extends Component {
  render() {
    return (
      <div>
        PropClass - {this.props.name}@{this.props.age}
      </div>
    );
  }
}

export default PropClass;
