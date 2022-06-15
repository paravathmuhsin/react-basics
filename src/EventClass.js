import React, { Component } from "react";

export class EventClass extends Component {
  constructor() {
      super();
      this.clickHandler = this.clickHandler.bind(this);
  }
  state = {
    name: "Muhsin",
  };
  clickHandler = function (e) {
    // console.log(this);
    this.setState({ name: "Firu" });
  };
  render() {
    return (
      <div>
        <h3>Events - {this.state.name}</h3>
        <input type="text" />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventClass;
