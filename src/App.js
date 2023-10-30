import UseState from "./UseState";
import "./App.css";
// import Event from "./Event";
import First from "./First";
// import JSX from "./JSX";
// import Keys from "./Keys";
// import LifeCycle from "./LifeCycle";
// import PropClass from "./PropClass";
// import PropsFun from "./PropsFun";
// import Ref from "./Ref";
// import Second from "./Second";
// import StateClass from "./StateClass";
import UseEffect from "./UseEffect";
// import CallbackHook from "./CallbackHook";
// import MemoHook from "./MemoHook";
import FormControlled from "./FormControlled";
import FormUncontrolled from "./FormUncontrolled";
import {
  Link,
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Redirect from "./Redirect";

function App() {
  // const name = "David";
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div className="nav">
            <ul>
              <li>
                {/* <Link to="/">Home</Link> */}
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/form-controlled"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Form Controlled
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/form-uncontrolled"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Form Uncontrolled
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user/66"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  User
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/state"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  State
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/effect"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Effect
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/redirect"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Redirect
                </NavLink>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      ),
      errorElement: <h2>404 Page not found</h2>,
      children: [
        {
          index: true,
          element: <h2>Hello..</h2>,
        },
        {
          path: "form-controlled",
          element: <FormControlled />,
        },
        {
          path: "form-uncontrolled",
          element: <FormUncontrolled />,
        },
        {
          path: "user/:id",
          element: <First />,
        },
        {
          path: "state",
          element: <UseState />,
        },
        {
          path: "effect",
          element: <UseEffect />,
        },
        {
          path: "redirect",
          element: <Redirect />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={appRouter} />
    // <div>
    //   <h1 className="App">Hiiii</h1>
    //   <FormControlled />
    //   <FormUncontrolled />
    //   <MemoHook />
    //   <CallbackHook />
    //   {/* <UseEffect /> */}
    //   <UseState />
    //   <Keys />
    //   <Ref />
    //   <Event />
    //   <LifeCycle />
    //   <JSX name="sddss" />
    //   <StateClass />
    //   <PropsFun name={name} age={44}>
    //     Hiiiiiii
    //   </PropsFun>
    //   <PropClass name={name} age={44} />
    //   <First />
    //   <Second />
    // </div>
  );
}

export default App;
