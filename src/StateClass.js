import React, { Component } from "react";

export default class StateClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "Hari",
    };
  }

  test = {
    age: 54,
  };

  clickHandler = () => {
    this.test.age = 77;
    this.setState({ name: "Shankar" });
    // this.test.age = 77;
    // console.log("clicked", this.test);
  };

  render() {
    return (
      <div>
        StateClass - {this.state.name}@{this.test.age}
        <button onClick={this.clickHandler}>update</button>
      </div>
    );
  }
}
