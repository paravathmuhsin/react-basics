import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
// import ClassComp from "./ClassComp";
// import ConditionalRender from "./ConditionalRender";
// import Event from "./Event";
// import { FormControlled } from "./FormControlled";
// import { FormUnControlled } from "./FormUnControlled";
// import Fragment from "./Fragment";
// import FuncComp from "./FuncComp";
// import JSX from "./JSX";
// import LifeCycle from "./LifeCycle";
// import List from "./List";
// import Props from "./Props";
// import State from "./State";
// import Styling from "./Styling";
// import UseEffect from "./UseEffect";
// import UseRef from "./UseRef";
// import UseState from "./UseState";
// import Header from "./Header";
// import ProductDetails from "./ProductDetails";
// import DynamicNavigation from "./DynamicNavigation";

const Header = lazy(() => import("./Header.jsx"));
const Props = lazy(() => import("./Props.jsx"));
const Styling = lazy(() => import("./Styling.jsx"));
const DynamicNavigation = lazy(() => import("./DynamicNavigation.jsx"));
const UseRef = lazy(() => import("./UseRef.jsx"));
const UseState = lazy(() => import("./UseState.jsx"));
const UseEffect = lazy(() => import("./UseEffect.jsx"));
const LifeCycle = lazy(() => import("./LifeCycle.jsx"));
const JSX = lazy(() => import("./JSX.jsx"));
const ProductDetails = lazy(() => import("./ProductDetails.jsx"));
const Event = lazy(() => import("./Event.jsx"));
const Fetch = lazy(() => import("./Fetch.jsx"));

const appRouters = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <h3>404 - not found</h3>,
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
      {
        path: "navigation",
        element: <DynamicNavigation />,
      },
      {
        path: "fetch",
        element: <Fetch />,
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
  {
    path: "/products",
    element: (
      <>
        <h3>Product urls</h3>
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <div>
            <Link to="/products/mobile">Mobile</Link>
            <br />
            <Link to="/products/tv">TV</Link>
          </div>
        ),
      },
      {
        path: ":slug",
        element: <ProductDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<h2>Loading....</h2>}>
      <RouterProvider router={appRouters} />
    </Suspense>
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
