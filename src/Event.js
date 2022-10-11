import React, { Component } from "react";

export default class Event extends Component {
  constructor() {
    super();
    // this.bindedClickHandler = this.clickHandler.bind(this);
  }
  state = {
    name: "Teenu",
  };
  clickHandler = (e, target) => {
    console.log(e, target);
  };
  render() {
    return (
      <>
        <div
          onClick={(e) => {
            this.clickHandler(e, "Event 1");
          }}
        >
          Event 1
        </div>
        <div onClick={(e) => {
            this.clickHandler(e, "Event 2");
          }}>Event 2</div>
      </>
    );
  }
}
