import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor() {
    super();
    console.log("constructor");
  }
  state = {
    name: "Teenu",
  };
  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate", newState, this.state);
    return this.state.name !== newState.name;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  clickHandler = () => {
    this.setState({ name: "Siva" });
  };
  render() {
    console.log("render");
    return (
      <div>
        LifeCycle - {this.state.name}
        <button onClick={this.clickHandler}>Update</button>
      </div>
    );
  }
}
