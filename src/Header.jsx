import { Link, Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <ul className="Header">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to="/state">State</Link>
        </li>
        <li>
          <Link to="/effect">Effect</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Header;
