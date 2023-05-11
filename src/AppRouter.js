import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import First from "./First";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
