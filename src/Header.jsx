import { Link, NavLink, Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <ul className="Header">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/state"
          >
            State
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/effect"
          >
            Effect
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/redirect"
          >
            Redirect
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Header;
