import React, { Suspense, lazy } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import FirstClass from "./FirstClass";
// import Second from "./Second";
// import StateClass from "./StateClass";
// import LifeCycles from "./LifeCycles";
// import Event from "./Event";
// import Ref from "./Ref";
// import Loop from "./Loop";
// import UseStateComp from "./UseStateComp";
// import UseEffectComp from "./UseEffectComp";
// import UseRef from "./UseRef";
// import TopLevel from "./TopLevel";
// import HOC from "./HOC";
// import FormState from "./FormState";
// import FormRef from "./FormRef";
// import Header from "./Header";
// import User from "./User";
// import Navigation from "./Navigation";

// class App extends React.Component {
//   render() {
//     return <h1>Hiii</h1>;
//   }
// }

const Header = lazy(() => import("./Header"));
const LifeCycles = lazy(() => import("./LifeCycles"));
const FormRef = lazy(() => import("./FormRef"));
const HOC = lazy(() => import("./HOC"));
const UseEffectComp = lazy(() => import("./UseEffectComp"));
const UseStateComp = lazy(() => import("./UseStateComp"));
const UseRef = lazy(() => import("./UseRef"));
const User = lazy(() => import("./User"));
const Navigation = lazy(() => import("./Navigation"));
const FormState = lazy(() => import("./FormState"));
const HTTP = lazy(() => import("./HTTP"));
const PropTypeComp = lazy(() => import("./PropTypeComp"));

const appRouters = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    errorElement: <h2>404 - Not Found</h2>,
    children: [
      {
        index: true,
        element: <LifeCycles />,
      },
      {
        path: "form-state",
        element: <FormState />,
      },
      {
        path: "form-ref",
        element: <FormRef />,
      },
      {
        path: "hoc",
        element: <HOC />,
      },
      {
        path: "effect",
        element: <UseEffectComp />,
      },
      {
        path: "state",
        element: <UseStateComp />,
      },
      {
        path: "ref",
        element: <UseRef />,
      },
      {
        path: "user/:id",
        element: <User />,
      },

      {
        path: "nav",
        element: <Navigation />,
      },
      {
        path: "http",
        element: <HTTP />,
      },
      {
        path: "type",
        element: <PropTypeComp fname={3} lname={8} />,
      },
      {
        path: "*",
        element: <h2>404 - Not Found ---</h2>,
      },
    ],
  },
]);

function App() {
  const name = [3, 7, "dddd"];
  const test = "Test";
  const getName = () => {
    return name;
  };
  const link = "https://google.com";
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <RouterProvider router={appRouters} />
    </Suspense>
    // <div>
    //   <FormRef />
    //   {/* <FormState />
    //   <HOC name={name} />
    //   <UseRef />
    //   <TopLevel />
    //   <UseEffectComp />
    //   <UseStateComp />
    //   <Loop />
    //   <Ref />
    //   <Event />
    //   <LifeCycles />
    //   <h1>Hiii {getName()}</h1>
    //   <a href={link}>Link</a>
    //   <StateClass />
    //   <FirstClass propTest={test} /> */}
    //   <Second propTest={test}>jfdhgfh </Second>
    // </div>
  );
}

export default App;
