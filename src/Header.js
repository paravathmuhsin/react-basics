import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

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
      </ul>
    </div>
  );
};

export default Header;
