import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

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
            <NavLink
              style={({ isActive, isPending }) =>
                isActive
                  ? { color: "red" }
                  : isPending
                  ? { color: "green" }
                  : { color: 'black'}
              }
              to={`/form/controlled`}
            >
              Form Controlled
            </NavLink>
          </li>
          <li>
            <Link to={`/form/uncontrolled`}>Form un Controlled</Link>
          </li>
          <li>
            <Link to={`/form/redirect`}>Redirect</Link>
          </li>
        </ul>
      </nav>
      <h2>Green Header</h2>
      <Outlet />
    </div>
  );
};

export default FormParent;
