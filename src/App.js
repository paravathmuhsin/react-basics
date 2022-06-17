import React from "react";
import Ref from "./Ref";
import ClassComp from "./ClassComp";
import EventClass from "./EventClass";
import Events from "./Events";
import FuncComp from "./FuncComp";
import LifeCycle from "./LifeCycle";
import PropsClass from "./PropsClass";
import PropsFunc from "./PropsFunc";
import State from "./State";
import Loop from "./Loop";
import HOC from "./HOC";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Welcome so my first App</h3>
      <HOC name="Muhsin" />
      <Loop />
      <Ref />
      {/* <LifeCycle /> */}
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
