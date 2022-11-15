import React, { Component } from "react";

export default class Event extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }
  user = {
    name: "Muhsin",
  };
  clickHandler(e, param) {
    console.log(this.user, param);
  }
  //   clickHandler = (e) => {
  //     console.log(this.user);
  //   };
  onChangeHandler = (e) => {
    console.log(e);
  };
  render() {
    return (
      <div>
        Event
        <input type="text" onChange={this.onChangeHandler} />
        <button
          onClick={(e) => {
            this.clickHandler(e, "hiii");
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
//
