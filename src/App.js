import React, { Children, Component } from "react";
import State from "./State";
import FunComp from "./FunComp";
import PropClass from "./PropClass";
import PropFun from "./PropFun";
import Event from "./Event";
import LifeCycle from "./LifeCycle";
import Ref from "./Ref";
import Loop from "./Loop";
import HOC from "./HOC";
import FormControl from "./FormControl";
import FormUncontrol from "./FormUncontrol";
import StateHook from "./StateHook";
import Effect from "./Effect";
import UseRef from "./UseRef";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GreenHeader from "./GreenHeader";
import Header from "./Header";
import Nav from "./Nav";
class App extends Component {
  router = createBrowserRouter([
    {
      path:"/",
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
      ]
    }
  ]);
  render() {
    const country = "India";
    return (
      <RouterProvider router={this.router} />
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
