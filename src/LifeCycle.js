import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = { name: "Hiii" };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate(newProps, newState) {
    console.log(newState, this.state);
    return newState.name !== this.state.name;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render");
    return (
      <div>
        LifeCycle
        <button
          onClick={() => {
            this.setState({ name: "Hello" });
          }}
        >
          {this.state.name}
        </button>
      </div>
    );
  }
}
