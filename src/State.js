import React, { Component } from "react";

export class State extends Component {
  state = {
    counter: 0,
    name: "Aruna",
    age: 55,
  };

  user = {
    name: "Yadhu",
  };
  clickHandler = () => {
    this.user.name = "Muhsin";
    //   async
    // this.setState({ ...this.state, name: "Muhsin" });
    this.setState((state, props) => {
      return { ...state, counter: state.counter + 1 };
    });
  };
  render() {
    // console.log(this.state);
    return (
      <div>
        State - {this.state.name}
        <br />
        User - {this.user.name}
        <br />
        <button onClick={this.clickHandler}>
          count - {this.state.counter}
        </button>
      </div>
    );
  }
}

export default State;
