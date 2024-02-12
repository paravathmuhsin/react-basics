import React, { Component } from "react";

class ClassComp extends Component {
  // state managment
  name = "David";
  clickHandler = () => {
    console.log("ss");
    this.name = "John";
  };
  buttonClickHander = () => {
    console.log(this.name);
  };
  render() {
    return (
      <div>
        <div onClick={this.clickHandler}>ClassComp - {this.name}</div>
        <button onClick={this.buttonClickHander}>Click me</button>
      </div>
    );
  }
}

export default ClassComp;
