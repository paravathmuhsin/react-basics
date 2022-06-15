import React from "react";
import ClassComp from "./ClassComp";
import EventClass from "./EventClass";
import Events from "./Events";
import FuncComp from "./FuncComp";
import PropsClass from "./PropsClass";
import PropsFunc from "./PropsFunc";
import State from "./State";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Welcome so my first app</h3>
      <EventClass />
      {/* <Events /> */}
      <State />
      <PropsFunc name="Yadhu" age={23}>
        Hi....
      </PropsFunc>
      <PropsClass name="Antony" age={55}>
        Hello...
      </PropsClass>
      <ClassComp />
      <FuncComp />
    </div>
  );
}

export default App;
