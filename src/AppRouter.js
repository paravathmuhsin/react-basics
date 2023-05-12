import React, { Suspense } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const UseState = React.lazy(() => import("./UseState"));
const RouteParam = React.lazy(() => import("./RouteParam"));
const Loop = React.lazy(() => import("./Loop"));
const FormControlled = React.lazy(() => import("./FormControlled"));
const Event = React.lazy(() => import("./Event"));
const LifeCycles = React.lazy(() => import("./LifeCycles"));
const Header = React.lazy(() => import("./Header"));
const FormUnControlled = React.lazy(() => import("./FormUnControlled"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <h2>404 not found</h2>,
    children: [
      {
        index: true,
        element: <LifeCycles />,
      },
      {
        path: "user/:id",
        element: <RouteParam />,
      },
      {
        path: "state",
        element: <UseState />,
      },
      {
        path: "loop",
        element: <Loop />,
      },
      {
        path: "event",
        element: <Event />,
      },

      {
        path: "/form",
        element: (
          <>
            <h2>Form</h2>
            <Outlet />
          </>
        ),
        children: [
          {
            index: true,
            element: <h3>Parent form element</h3>,
          },
          {
            path: "controlled",
            element: <FormControlled />,
          },
          {
            path: "un-controlled",
            element: <FormUnControlled />,
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<h3>Loading....</h3>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
