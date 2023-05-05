import React, { Component } from "react";

export default class Event extends Component {
  constructor() {
    super();
    // Event{}
    this.bindedFun = this.clickHandler.bind(this);
  }
  state = {
    name: "John",
  };
  clickHandler(e) {
    // console.log(this);
    this.setState({ name: "David" });
  }

  render() {
    return (
      <>
        <h2>Event - {this.state.name}</h2>
        <input onChange={this.clickHandler} type="text" />
        <button onClick={this.bindedFun}>Update</button>
      </>
    );
  }
}
