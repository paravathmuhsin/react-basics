import { Navigate, useNavigate } from "react-router-dom";

const DynamicNavigation = () => {
  const nav = useNavigate();
  const gotoHomePage = () => {
    nav("/");
  };
  return true ? (
    <div>
      DynamicNavigation
      <p onClick={gotoHomePage}>Click me to redirect to home page</p>
    </div>
  ) : (
    <Navigate to={"/"} />
  );
};

export default DynamicNavigation;
