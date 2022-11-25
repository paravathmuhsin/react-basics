import React, { Component } from "react";
import { ThemeContext } from "./App";

class Event extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }
  // static contextType = ThemeContext;
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
        Event - {this.context}
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
Event.contextType = ThemeContext;
export default Event;
//
