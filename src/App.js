import React, { Component, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Event from "./Event";
// import EventClass from "./EventClass";
// import First from "./First";
// import FormControl from "./FormControl";
// import FormParent from "./FormParent";
// import FormUnControlled from "./FormUnControlled";
// import Header from "./Header";
// import HOC from "./HOC";
// import LifeCycle from "./LifeCycle";
// import Loop from "./Loop";
// import Memo from "./Memo";
// import Ref from "./Ref";
// import State from "./State";
import "./style.css";
// import Test from "./Test";
// import UseCallBack from "./UseCallBack";
// import UseEffect from "./UseEffect";
// import UseMemo from "./UseMemo";
// import UseRef from "./UseRef";
// import UseState from "./UseState";

const Header = React.lazy(() => import("./Header"));
const Event = React.lazy(() => import("./Event"));
const LifeCycle = React.lazy(() => import("./LifeCycle"));
const Test = React.lazy(() => import("./Test"));
const FormParent = React.lazy(() => import("./FormParent"));
const Loop = React.lazy(() => import("./Loop"));
const FormControl = React.lazy(() => import("./FormControl"));
const FormUnControlled = React.lazy(() => import("./FormUnControlled"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      errorElement: <h4>Not found</h4>,
      children: [
        {
          index: true,
          element: <Event />,
        },
        {
          path: "life-cycle",
          element: <LifeCycle />,
        },

        {
          path: "test/:id",
          element: <Test />,
        },
      ],
    },

    {
      path: "/form",
      element: <FormParent />,
      children: [
        {
          index: true,
          element: <Loop />,
        },
        {
          path: "controlled",
          element: <FormControl />,
        },
        {
          path: "un-controlled",
          element: <FormUnControlled />,
        },
      ],
    },
  ]);
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <RouterProvider router={router} />
    </Suspense>
    // fragment
    // <div className="App">
    //   <UseCallBack />
    //   <UseMemo />
    //   <Memo />
    //   <UseRef />
    //   <button
    //     onClick={() => {
    //       this.setState((state) => ({ show: !state.show }));
    //     }}
    //   >
    //     click - {this.state.show ? "Showing" : "Hidden"}
    //   </button>
    //   {this.state.show && <UseEffect />}
    //   <UseState />
    //   <FormControl />
    //   <FormUnControlled />
    //   <HOC name="ddd" />
    //   <Loop />
    //   <Ref />
    //   <LifeCycle />
    //   <Event />
    //   <EventClass />
    //   <State />
    //   <First name="muhsin" age={88}>
    //     Helllo
    //   </First>
    // </div>
  );
};

export default App;
