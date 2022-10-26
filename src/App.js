import UseCallback from "./UseCallback";
import "./App.css";
import Event from "./Event";
import First from "./First";
import FormControl from "./FormControl";
import FormUncontrolled from "./FormUncontrolled";
import HOC from "./HOC";
import KeyProp from "./KeyProp";
import LifeCycle from "./LifeCycle";
import MemoParent from "./MemoParent";
import PropClass from "./PropClass";
import PropFun from "./PropFun";
import Ref from "./Ref";
import Second from "./Second";
import State from "./State";
import UseEffet from "./UseEffet";
import UseState from "./UseState";
import UseMemo from "./UseMemo";
import ContextClass from "./ContextClass";
import ContextFun from "./ContextFun";
import Ajax from "./Ajax";
import Axios from "./Axios";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import FormParent from "./FormParent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <State />,
    errorElement: <ErrorPage />,
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
        path: "",
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
    ],
  },
]);

function App() {
  // const name = "Siva";
  return (
    <div className="App">
      <RouterProvider router={router} />
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
