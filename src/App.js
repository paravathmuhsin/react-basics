import React, { Component } from "react";
import Event from "./Event";
import EventClass from "./EventClass";
import First from "./First";
import FormControl from "./FormControl";
import FormUnControlled from "./FormUnControlled";
import HOC from "./HOC";
import LifeCycle from "./LifeCycle";
import Loop from "./Loop";
import Memo from "./Memo";
import Ref from "./Ref";
import State from "./State";
import "./style.css";
import UseEffect from "./UseEffect";
import UseRef from "./UseRef";
import UseState from "./UseState";
class App extends Component {
  state = {
    show: true,
  };
  render() {
    return (
      // fragment
      <div className="App">
        <Memo />
        <UseRef />
        <button
          onClick={() => {
            this.setState((state) => ({ show: !state.show }));
          }}
        >
          click - {this.state.show ? "Showing" : "Hidden"}
        </button>
        {this.state.show && <UseEffect />}
        <UseState />
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
