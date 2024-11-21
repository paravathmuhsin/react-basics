import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h3 style={{ backgroundColor: "blue" }}>Blue header</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/style">Style</Link>
        </li>
        <li>
          <Link to="/event">Event</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Header;
