import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor() {
    super();
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate(prop, newStat) {
    console.log("shouldComponentUpdate", newStat, this.state);
    return this.state.name !== newStat.name;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  state = {
    name: "David",
  };

  render() {
    console.log("render");
    return (
      <div>
        LifeCycle - {this.state.name}
        <button
          onClick={() => {
            this.setState({ name: "Hari" });
          }}
        >
          update
        </button>
      </div>
    );
  }
}
