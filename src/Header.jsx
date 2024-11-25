import { Link, NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h3 style={{ backgroundColor: "blue" }}>Blue header</h3>
      <ul>
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
      </ul>
      <Outlet />
    </>
  );
};

export default Header;
