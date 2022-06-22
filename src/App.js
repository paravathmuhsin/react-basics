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
import FormControl from "./FormControl";
import FormUncontrol from "./FormUncontrol";
import StateHooks from "./StateHooks";
import Effect from "./Effect";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="effect">Effect</Link> |{" "}
        <Link to="form-control">form control</Link> |{" "}
        <Link to="user/1">user 1</Link> |{" "}
        <Link to="user/2">user 2</Link> |{" "}
      </nav>
      <Routes>
        <Route path="/" element={<StateHooks />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/form-control" element={<FormControl />} />
        <Route path="/user/:id" element={<Loop />} />
      </Routes>
    </BrowserRouter>
    // <div style={{ textAlign: "center" }}>
    //   <h3>Welcome so my first App</h3>
    //   <Effect />
    //   <StateHooks />
    //   <FormUncontrol />
    //   <FormControl />
    //   <HOC name="Muhsin" />
    //   <Loop />
    //   <Ref />
    //   {/* <LifeCycle /> */}
    //   <EventClass />
    //   {/* <Events /> */}
    //   <State />
    //   <PropsFunc name="Yadhu" age={23}>
    //     Hi....
    //   </PropsFunc>
    //   <PropsClass name="Antony" age={55}>
    //     Hello...
    //   </PropsClass>
    //   <ClassComp />
    //   <FuncComp />
    // </div>
  );
}

export default App;
