import { Link, NavLink, Outlet } from "react-router";
import "./Header.scss";
import { useAppContext } from "./AppContext";

const Header = () => {
  const { theme, setTheme } = useAppContext();
  const switchTheme = () => {
    setTheme((state) => (state === "light" ? "dark" : "light"));
  };
  return (
    <div className={theme === "light" ? "" : "dark"}>
      <nav className={"appNav"}>
        {/* <Link className={classes.NavLink} to="/">
          Home
        </Link>
        <Link className={classes.NavLink} to="/jsx">
          JSX
        </Link>
        <Link className={classes.NavLink} to="/users/44">
          User 44
        </Link>
        <Link className={classes.NavLink} to="/form">
          Form general
        </Link>
        <Link to="/form/controller">Form controlled</Link> */}
        {/* <Link to="/form/uncontroller">Form uncontrolled</Link> */}
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/jsx"
        >
          JSX
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/form/controller"
        >
          Form controlled
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/form/uncontroller"
        >
          Form uncontrolled
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/form"
          end
        >
          Form
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/users/44"
        >
          User 44
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/context"
        >
          Context
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/api"
        >
          API
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/counter"
        >
          Counter
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/memo"
        >
          Memo
        </NavLink>
        <button onClick={switchTheme}>{theme}</button>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
