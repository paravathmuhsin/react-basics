import React, { Component } from "react";
import EventClass from "./EventClass";
import First from "./First";
import State from "./State";
import "./style.css";
class App extends Component {
  render() {
    return (
      // fragment
      <div className="App">
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
