import React, { Component } from "react";

export default class LifeCycles extends Component {
  constructor() {
    super();
    console.log("constructor");
  }
  state = {
    name: "David",
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate(currentProp, currentState) {
    console.log("shouldComponentUpdate", currentState, this.state);
    return currentState.name !== this.state.name;
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
      <h2>
        LifeCycles - {this.state.name}
        <button
          onClick={() => {
            this.setState({ name: "John" });
          }}
        >
          Click
        </button>
      </h2>
    );
  }
}
