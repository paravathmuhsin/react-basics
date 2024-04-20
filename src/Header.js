import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
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
            to="/form-state"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Form State
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/form-ref"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Form Ref
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hoc"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            HOC
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/effect"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Use Effect
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/state"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Use State
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ref"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Use Ref
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/77"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nav"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Nav
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
