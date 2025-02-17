import { createBrowserRouter, RouterProvider } from "react-router";

const appRouters = createBrowserRouter([
  {
    path: "/",
    element: <h2>Hiii</h2>,
    // errorElement: <h2>404 - not found</h2>
  },
  {
    path: "/jsx",
    element: <h2>JSX</h2>,
  },
  
  {
    path: "/*",
    element: <h2>404 - not found</h2>,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={appRouters} />;
};

export default AppRouter;
