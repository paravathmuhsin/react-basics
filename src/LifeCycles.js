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
  shouldComponentUpdate(props, state) {
    console.log("shouldComponentUpdate", props, state, this.state);
    return this.state.name !== state.name;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  clickHandler = () => {
    this.setState({ name: "John" });
  };
  render() {
    console.log("render");
    return <h2 onClick={this.clickHandler}>LifeCycles - {this.state.name}</h2>;
  }
}
