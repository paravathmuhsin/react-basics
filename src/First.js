import React, { Component } from "react";

class First extends Component {
  constructor() {
    super();
    this.d = "sdsdsd";
  }
  render() {
    return (
      <>
        <h3>First - {this.d}</h3>
        <h4>First desc</h4>
      </>
    );
  }
}

export default First;
