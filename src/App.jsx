import { createContext, lazy, Suspense, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import ClassComp from "./ClassComp";
// import Event from "./Event";
// import FormControlled from "./FormControlled";
// import FormUncontrolled from "./FormUncontrolled";
// import FuncComp from "./FuncComp";
// import Keys from "./Keys";
// import LifeCycle from "./LifeCycle";
// import Props from "./Props";
// import Ref from "./Ref";
// import StateComp from "./StateComp";
// import UseCallback from "./UseCallback";
// import UseEffect from "./UseEffect";
// import UseMemo from "./UseMemo";
// import UseState from "./UseState";
// import Header from "./Header";
// import Redirect from "./Redirect";

const Header = lazy(() => import("./Header"));
const UseMemo = lazy(() => import("./UseMemo"));
const UseEffect = lazy(() => import("./UseEffect"));
const UseState = lazy(() => import("./UseState"));
const Redirect = lazy(() => import("./Redirect"));
const FuncComp = lazy(() => import("./FuncComp"));
const HttpRequest = lazy(() => import("./HttpRequest"));
const Context = lazy(() => import("./Context"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <h2>404 - Page not found</h2>,
    children: [
      {
        index: true,
        element: <UseMemo />,
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
      {
        path: "wiki/:slug",
        element: <FuncComp />,
      },
      {
        path: "http-request",
        element: <HttpRequest />,
      },
      {
        path: "context",
        element: <Context />,
      },
    ],
  },
  // {
  //   path: "/grocery",
  //   element: (
  //     <>
  //       <h2 style={{ backgroundColor: "green" }}>Green Header</h2>
  //       <Outlet />
  //     </>
  //   ),
  //   children: [
  //     {
  //       path: "",
  //       element: <Event />,
  //     },
  //     {
  //       path: "life-cycle",
  //       element: <LifeCycle />,
  //     },
  //   ],
  // },
]);
const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

function App() {
  // const name = "John";
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <AppContext.Provider value={{ name: "David" }}>
          <RouterProvider router={router} />
        </AppContext.Provider>
      </Suspense>
      {/* <UseCallback /> */}
      {/* <UseMemo /> */}
      {/* <Ref />
      <UseEffect />
      <UseState />
      <FormUncontrolled />
      <FormControlled />
      <Event test="dd" />
      <Keys />
      <LifeCycle />
      <StateComp />
      <Props name={name} age={55}>
        Test
      </Props>
      <ClassComp name="David" />
      <FuncComp /> */}
    </>
  );
}

export default App;
