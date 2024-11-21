import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ClassComp from "./ClassComp";
import ConditionalRender from "./ConditionalRender";
import Event from "./Event";
import { FormControlled } from "./FormControlled";
import { FormUnControlled } from "./FormUnControlled";
import Fragment from "./Fragment";
import FuncComp from "./FuncComp";
import JSX from "./JSX";
import LifeCycle from "./LifeCycle";
import List from "./List";
import Props from "./Props";
import State from "./State";
import Styling from "./Styling";
import UseEffect from "./UseEffect";
import UseRef from "./UseRef";
import UseState from "./UseState";
import Header from "./Header";

const appRouters = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Props />,
      },
      {
        path: "style",
        element: <Styling />,
      },
      {
        path: "event",
        element: <Event />,
      },
    ],
  },
  {
    path: "/hooks",
    element: (
      <>
        <h3 style={{ backgroundColor: "green" }}>Green header</h3>
        <Outlet />
        <h3>Footer</h3>
      </>
    ),
    children: [
      {
        index: true,
        element: <h3>Index router</h3>,
      },
      {
        path: "ref",
        element: <UseRef />,
      },
      {
        path: "state",
        element: <UseState />,
      },
      {
        path: "effect",
        element: <UseEffect />,
      },
    ],
  },
  {
    path: "/life-cycle",
    element: <LifeCycle />,
  },
  {
    path: "/jsx",
    element: <JSX />,
  },
]);

function App() {
  return (
    <RouterProvider router={appRouters} />
    // <div>
    //   {/* <h1>Welcome to React</h1> */}
    //   {/* <Styling />
    //   <List /> */}
    //   {/* <ConditionalRender /> */}
    //   {/* <FormUnControlled /> */}
    //   {/* <FormControlled /> */}
    //   {/* <UseRef /> */}
    //   {/* <Event /> */}
    //   {/* <UseEffect /> */}
    //   {/* <UseState /> */}
    //   {/* <LifeCycle /> */}
    //   {/* <State /> */}
    //   {/* <Props name="David" age={44}>Hi,</Props> */}
    //   {/* <Fragment /> */}
    //   {/* <JSX /> */}
    //   {/* <FuncComp />
    //   <ClassComp /> */}
    // </div>
  );
}

export default App;
