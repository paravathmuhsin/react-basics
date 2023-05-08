import React, { Component } from "react";

export default class PropsClass extends Component {
  test = "Hii";
  render() {
    // console.log(this.props);
    const { name, age, children } = this.props; // {name: 'David', age: 44}
    return (
      <h2>
        PropsClass - {name}@{age}
        <p>{children}</p>
      </h2>
    );
  }
}
