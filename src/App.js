import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Ref from "./Ref";
import ClassComp from "./ClassComp";
import EventClass from "./EventClass";
import Events from "./Events";
import FuncComp from "./FuncComp";
import PropsClass from "./PropsClass";
import PropsFunc from "./PropsFunc";
import State from "./State";
import HOC from "./HOC";

const Loop = React.lazy(() => import("./Loop"));
const FormControl = React.lazy(() => import("./FormControl"));
const FormUncontrol = React.lazy(() => import("./FormUncontrol"));
const ContextFunc = React.lazy(() => import("./ContextFunc"));
const ContextClass = React.lazy(() => import("./ContextClass"));
const ContextComp = React.lazy(() => import("./ContextComp"));
const NotFound = React.lazy(() => import("./NotFound"));
const FormParent = React.lazy(() => import("./FormParent"));
const Effect = React.lazy(() => import("./Effect"));
const StateHooks = React.lazy(() => import("./StateHooks"));
const API = React.lazy(() => import("./API"));
const LifeCycle = React.lazy(() => import("./LifeCycle"));

function App() {
  return (
    <BrowserRouter>
      <ContextComp>
        <nav>
          <Link to="/">Home</Link> |<Link to="effect?name=muhsin">Effect</Link>{" "}
          | <Link to="form">form </Link> |{" "}
          <Link to="api">API</Link> |{" "}
          <Link to="context/class">context class</Link> |{" "}
          <Link to="context/func">context function</Link> |{" "}
          <Link to="form/control">form control</Link> |{" "}
          <Link to="form/uncontrol">form uncontrol</Link> |{" "}
          <Link to="life-cycle">Life cycle</Link> |{" "}
          <Link to="user/1">user 1</Link> | <Link to="user/2">user 2</Link> |{" "}
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<StateHooks />} />
            <Route path="/effect" element={<Effect />} />
            <Route path="/api" element={<API />} />
            <Route path="/life-cycle" element={<LifeCycle />} />
            <Route path="/form" element={<FormParent />}>
              <Route index element={<h4>Welcome to form</h4>} />
              <Route path="control" element={<FormControl />} />
              <Route path="uncontrol" element={<FormUncontrol />} />
            </Route>
            <Route path="/user/:id" element={<Loop />} />
            <Route path="/context/class" element={<ContextClass />} />
            <Route path="/context/func" element={<ContextFunc />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ContextComp>
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
