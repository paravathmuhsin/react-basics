import React, { Component } from "react";

export default class State extends Component {
  constructor() {
    super();
    this.state = {
      name: "Muhsin",
      count: 0,
    };
    this.test = {
      country: "IN",
    };
  }
  render() {
    console.log("render");
    return (
      <>
        <h2>
          State - {this.state.name}@{this.test.country}
        </h2>
        <button
          onClick={() => {
            this.test.country = "US";
            // async
            this.setState((state, props) => {
              return { count: state.count + 1 };
            });
            console.log("clicked", this.state);
          }}
        >
          Click - {this.state.count}
        </button>
      </>
    );
  }
}
