import React, { Component } from "react";

export default class Event extends Component {
  clickHandler = () => {
    console.log('sdsd')
  };
  render() {
    return <div onClick={this.clickHandler}>Event</div>;
  }
}
