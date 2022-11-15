import React, { Component } from "react";
import State from "./State";
import FunComp from "./FunComp";
import PropClass from "./PropClass";
import PropFun from "./PropFun";
import Event from "./Event";
class App extends Component {
  render() {
    const country = "India";
    return (
      <>
        <h1>Welcome to my first app</h1>
        <Event />
        <State />
        <PropClass country={country}>
          <p>Hello</p>
        </PropClass>
        <PropFun name="Muhsin" age={44} />
        <FunComp />
      </>
    );
  }
}
export default App;
  