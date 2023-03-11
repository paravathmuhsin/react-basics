import React, { Component } from "react";

export default class Event extends Component {
  constructor() {
    super();
    // console.log(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
  state = {
    count: 0,
  };
  clickHandler(a, e) {
    console.log(a, e);
    this.setState((state) => ({ count: state.count + 1 }));
  }

  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.clickHandler(55, e);
          }}
        >
          Click - {this.state.count}
        </button>
      </div>
    );
  }
}
