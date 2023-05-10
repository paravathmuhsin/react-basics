import React, { Component } from "react";
import "./App.css";
import First from "./First";
import Func from "./Func";
import Props from "./Props";
import State from "./State";
import LifeCycles from "./LifeCycles";
import Event from "./Event";
import Ref from "./Ref";
import Loop from "./Loop";
import HOC from "./HOC";
import FormControlled from "./FormControlled";
import FormUnControlled from "./FormUnControlled";
import UseState from "./UseState";
import UseRef from "./UseRef";
import UseEffect from "./UseEffect";
class App extends Component {
  // constructor() {
  //   super();
  // }
  name = "Test";
  render() {
    return (
      <>
        <UseEffect />
        {/* <UseRef />
        <UseState />
        <FormUnControlled />
        <FormControlled />
        <HOC name="test" />
        <Loop />
        <Ref />
        <Event />
        <LifeCycles />
        {/* <State /> */}
        {/* <Props />
        <Func />
        <First />
        <h1 className={this.name}>HIii</h1> */}
      </>
    );
  }
}

export default App;
