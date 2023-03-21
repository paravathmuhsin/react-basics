import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/life-cycle">Life Cycle</Link>
          </li>
          <li>
            <Link to="/test/444">Test</Link>
          </li>
          <li>
            <Link to="/form/controlled">controlled</Link>
          </li>
          <li>
            <Link to="/form/un-controlled">un-controlled</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
