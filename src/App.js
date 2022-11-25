import React, { Component, createContext, Suspense } from "react";
// import State from "./State";
// import PropClass from "./PropClass";
// import PropFun from "./PropFun";
// import LifeCycle from "./LifeCycle";
// import Ref from "./Ref";
// import HOC from "./HOC";
// import FormControl from "./FormControl";
// import FormUncontrol from "./FormUncontrol";
// import StateHook from "./StateHook";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Effect = React.lazy(() => import("./Effect"));
const Header = React.lazy(() => import("./Header"));
const Nav = React.lazy(() => import("./Nav"));
const GreenHeader = React.lazy(() => import("./GreenHeader"));
const UseRef = React.lazy(() => import("./UseRef"));
const Event = React.lazy(() => import("./Event"));
const Loop = React.lazy(() => import("./Loop"));
const FunComp = React.lazy(() => import("./FunComp"));

export const ThemeContext = createContext(null);

class App extends Component {
  router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      errorElement: <h2>404- Not found</h2>,
      children: [
        {
          index: true,
          element: <div>Hello world!</div>,
        },
        {
          path: "effect",
          element: <Effect />,
        },
        {
          path: "navigation",
          element: <Nav />,
        },
        {
          path: "product",
          element: <GreenHeader />,
          children: [
            {
              index: true,
              element: <UseRef />,
            },
            {
              path: "event",
              element: <Event />,
            },
            {
              path: "loop",
              element: <Loop />,
            },
            {
              path: ":value",
              element: <FunComp />,
            },
          ],
        },
      ],
    },
  ]);
  render() {
    const country = "India";
    return (
      <ThemeContext.Provider value="dark">
        <Suspense fallback={<h3>Loading....</h3>}>
          <RouterProvider router={this.router} />
        </Suspense>
      </ThemeContext.Provider>
      // <>
      //   <h1>Welcome to my first app</h1>
      //   <UseRef />
      //   <Effect />
      //   <StateHook />
      //   <FormUncontrol />
      //   <FormControl />
      //   <HOC country="IND" />
      //   <Loop />
      //   <Ref />
      //   <LifeCycle />
      //   <Event />
      //   <State />
      //   <PropClass country={country}>
      //     <p>Hello</p>
      //   </PropClass>
      //   <PropFun name="Muhsin" age={44} />
      //   <FunComp />
      // </>
    );
  }
}
export default App;
