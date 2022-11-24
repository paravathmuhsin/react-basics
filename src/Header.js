import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/effect?name=sooraj">Effect</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/navigation">Navigation</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/product/event">Event</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/product/loop">Loop</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/product/sdsfdsf">Product generl</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Header;
