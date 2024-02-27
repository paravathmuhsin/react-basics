import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { AppContext } from "./App";

const Header = () => {
  const { theme, setTheme } = useContext(AppContext);
  const clickHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className={`Header ${theme}`}>
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
            to="/form-state"
          >
            Form State
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/form-ref"
          >
            Form Ref
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/hoc"
          >
            HOC
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/user/6"
          >
            User
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
            to="/use-callback"
          >
            Use callback
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/api"
          >
            API
          </NavLink>
        </li>
        <li className="theme-switch">
          <button onClick={clickHandler}>{theme}</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
