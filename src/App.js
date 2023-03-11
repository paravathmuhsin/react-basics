import React, { Component } from "react";
import Event from "./Event";
import EventClass from "./EventClass";
import First from "./First";
import FormControl from "./FormControl";
import FormUnControlled from "./FormUnControlled";
import HOC from "./HOC";
import LifeCycle from "./LifeCycle";
import Loop from "./Loop";
import Ref from "./Ref";
import State from "./State";
import "./style.css";
class App extends Component {
  render() {
    return (
      // fragment
      <div className="App">
        <FormControl />
        <FormUnControlled />
        <HOC name="ddd" />
        <Loop />
        <Ref />
        <LifeCycle />
        <Event />
        <EventClass />
        <State />
        <First name="muhsin" age={88}>
          Helllo
        </First>
      </div>
    );
  }
}

export default App;
