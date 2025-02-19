import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
// import Events from "./Events";
// import JSX from "./JSX";
// import FormLayout from "./FormLayout";
// import FormControlled from "./FormControlled";
// import FormUncontrolled from "./FormUncontrolled";
// import FormGeneral from "./FormGeneral";
// import DynamicRouting from "./DynamicRouting";
// import Header from "./Header";
// import UseContext from "./UseContext";
// import API from "./API";
// import ErrorCheck from "./ErrorCheck";

const Events = lazy(() => import("./Events"));
const Header = lazy(() => import("./Header"));
const JSX = lazy(() => import("./JSX"));
const FormLayout = lazy(() => import("./FormLayout"));
const FormControlled = lazy(() => import("./FormControlled"));
const FormUncontrolled = lazy(() => import("./FormUncontrolled"));
const FormGeneral = lazy(() => import("./FormGeneral"));
const DynamicRouting = lazy(() => import("./DynamicRouting"));
const UseContext = lazy(() => import("./UseContext"));
const API = lazy(() => import("./API"));
const ErrorCheck = lazy(() => import("./ErrorCheck"));
const MemoParentComp = lazy(() => import("./MemoParentComp"));

const AppBrowserRouter = () => {
  return (
    <Suspense fallback={<h2>Loading....</h2>}>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route index element={<Events />} />
            <Route path="jsx" element={<JSX />} />

            <Route path="form" element={<FormLayout />}>
              <Route index element={<FormGeneral />} />
              <Route path="controller" element={<FormControlled />} />
              <Route path="uncontroller" element={<FormUncontrolled />} />
            </Route>
            <Route path="users/:id" element={<DynamicRouting />} />
            <Route path="context" element={<UseContext />} />
            <Route path="api" element={<API />} />
            <Route path="counter" element={<ErrorCheck />} />
            <Route path="memo" element={<MemoParentComp />} />

            <Route path="*" element={<h2>404- Not found</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppBrowserRouter;
