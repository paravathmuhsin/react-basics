import React, { Component } from "react";
import "./App.css";
import First from "./First";
import Func from "./Func";
import Props from "./Props";
class App extends Component {
  // constructor() {
  //   super();
  // }
  name = "Test";
  render() {
    return (
      <>
        <Props />
        <Func />
        <First />
        <h1 className={this.name}>
          HIii - {[<p>sss</p>, <span>frfrfrr</span>]}
        </h1>
      </>
    );
  }
}

export default App;
