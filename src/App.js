import React, { Suspense } from "react";
import UseCallback from "./UseCallback";
import "./App.css";
import First from "./First";
import HOC from "./HOC";
import KeyProp from "./KeyProp";
import LifeCycle from "./LifeCycle";
import MemoParent from "./MemoParent";
import PropClass from "./PropClass";
import PropFun from "./PropFun";
import Ref from "./Ref";
import Second from "./Second";
import UseState from "./UseState";
import UseMemo from "./UseMemo";
import ContextClass from "./ContextClass";
import ContextFun from "./ContextFun";
import Ajax from "./Ajax";
import Axios from "./Axios";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const Header = React.lazy(() => import("./Header"));
const State = React.lazy(() => import("./State"));
const ErrorPage = React.lazy(() => import("./ErrorPage"));
const Event = React.lazy(() => import("./Event"));
const UseEffet = React.lazy(() => import("./UseEffet"));
const FormParent = React.lazy(() => import("./FormParent"));
const FormControl = React.lazy(() => import("./FormControl"));
const FormUncontrolled = React.lazy(() => import("./FormUncontrolled"));
const Redirect = React.lazy(() => import("./Redirect"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <State />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/effect/:value",
        element: <UseEffet />,
      },
      {
        path: "/form",
        element: <FormParent />,
        children: [
          {
            index: true,
            element: <h3>Welcome to form</h3>,
          },
          {
            path: "controlled",
            element: <FormControl />,
          },
          {
            path: "uncontrolled",
            element: <FormUncontrolled />,
          },
          {
            path: "redirect",
            element: <Redirect />,
          },
        ],
      },
    ],
  },
]);

function App() {
  // const name = "Siva";
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
    //   <h1>Welcome to our first app</h1>
    //   <Axios />
    //   {/* <Ajax /> */}
    //   <ContextFun />
    //   <ContextClass />
    //   <UseMemo />
    //   <UseCallback />
    //   <MemoParent />
    //   <UseEffet />
    //   <UseState />
    //   <FormUncontrolled />
    //   <FormControl />
    //   <HOC name="teenu" age={6} />
    //   <KeyProp />
    //   <Ref />
    //   {/* <LifeCycle /> */}
    //   <Event />
    //   <State />
    //   <PropFun country="india" state="bihar" />
    //   <PropClass name={name} age={55} />
    //   <First />
    //   <Second />
    // </div>
  );
}

export default App;
