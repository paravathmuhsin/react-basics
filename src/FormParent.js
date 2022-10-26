import React from "react";
import { Link, Outlet } from "react-router-dom";

const FormParent = () => {
  return (
    <div>
      <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/event`}>Event</Link>
            </li>
            <li>
              <Link to={`/effect/12313`}>Effet</Link>
            </li>
            <li>
              <Link to={`/form/controlled`}>Form Controlled</Link>
            </li>
            <li>
              <Link to={`/form/uncontrolled`}>Form un Controlled</Link>
            </li>
          </ul>
        </nav>
      <h2>Green Header</h2>
      <Outlet />
    </div>
  );
};

export default FormParent;
