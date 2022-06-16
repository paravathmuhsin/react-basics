import React, { Component } from "react";

export class EventClass extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }
  state = {
    name: "Muhsin",
  };
  clickHandler = function (e, name) {
    console.log(e, name);
    this.setState({ name: "Firu" });
  };
  render() {
    return (
      <div>
        <p>Events - {this.state.name}</p>
        <input type="text" />
        <button
          onClick={(e) => {
            this.clickHandler(e, "Muhsin");
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default EventClass;
