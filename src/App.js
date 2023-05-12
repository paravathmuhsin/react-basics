import React, { Component } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
class App extends Component {
  // constructor() {
  //   super();
  // }
  name = "Test";
  render() {
    return (
      <AppRouter>
        {/* <UseCallback />
        <UseMemo />
        <UseEffect /> */}
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
      </AppRouter>
    );
  }
}

export default App;
