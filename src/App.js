import React, { Component } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import ContextComp from "./ContextComp";
class App extends Component {
  // constructor() {
  //   super();
  // }
  name = "Test";
  render() {
    return (
      <ContextComp>
        <AppRouter />
      </ContextComp>
    );
  }
}

export default App;
