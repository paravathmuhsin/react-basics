import React, { Component } from "react";

class State extends Component {
  state = {
    count: 0,
  };
  copyState = {
    name: "Rkha",
    age: 55,
  };
  clickHandler = () => {
    this.copyState = {
      name: "sdsdsd",
    };
    console.log(this.copyState);
    // asyc
    this.setState((state, prop) => {
      return {
        count: state.count + 1,
      };
    });
  };
  render() {
    return (
      <div onClick={this.clickHandler}>
        State Component - {this.state.count} --- {this.copyState.name}
      </div>
    );
  }
}

export default State;
