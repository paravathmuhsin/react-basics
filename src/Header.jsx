import { Link, NavLink, Outlet } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <h3 style={{ backgroundColor: "blue" }}>Blue header</h3>
      <ul className={classes.header}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/style"
          >
            Style
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/event"
          >
            Event
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/navigation"
          >
            Navigation
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/fetch"
          >
            Fetch
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/effect"
          >
            Life cycle
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/async-await"
          >
            Async/Await
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/memo"
          >
            Memo
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Header;
