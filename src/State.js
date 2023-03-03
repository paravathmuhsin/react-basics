import React, { Component } from "react";

export default class State extends Component {
  state = {
    name: "David",
    count: 0,
  };

  test = {
    name: "Rahul",
  };

  clickHandler = () => {
    this.test.name = "Gopi";
    this.setState((state, props) => {
      //   console.log(state, props);
      return { count: state.count + 1 };
    });
    console.log("clicked", this.test);
  };

  render() {
    console.log("rendered");
    return (
      <div>
        State - {this.state.count} {this.state.name} - {this.test.name}
        <button onClick={this.clickHandler}>Update Name</button>
      </div>
    );
  }
}
