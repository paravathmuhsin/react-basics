import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/state"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              State
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/loop"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Loop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/event"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Event
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/form/controlled"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Form controlled
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/form/un-controlled"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Form un controlled
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/context"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Context
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/api"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              API
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/effect"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Effect
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
