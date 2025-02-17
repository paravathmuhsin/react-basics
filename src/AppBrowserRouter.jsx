import { BrowserRouter, Route, Routes } from "react-router";
import Events from "./Events";
import JSX from "./JSX";
import FormLayout from "./FormLayout";
import FormControlled from "./FormControlled";
import FormUncontrolled from "./FormUncontrolled";
import FormGeneral from "./FormGeneral";
import DynamicRouting from "./DynamicRouting";
import Header from "./Header";

const AppBrowserRouter = () => {
  return (
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

          <Route path="*" element={<h2>404- Not found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppBrowserRouter;
