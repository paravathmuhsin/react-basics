import React, { Component, PureComponent } from "react";

export default class LifeCycle extends PureComponent {
  constructor() {
    super();
    console.log("constructor");
  }
  state = {
    country: "India",
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
//   shouldComponentUpdate(props, state) {
//     console.log("shouldComponentUpdate", state, this.state);
//     return this.state.country !== state.country;
//   }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render");
    return (
      <div
        onClick={() => {
          this.setState({ country: "IND" });
        }}
      >
        LifeCycle - {this.state.country}
      </div>
    );
  }
}