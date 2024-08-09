import { Navigate, useNavigate } from "react-router-dom";

const Redirect = () => {
  const nav = useNavigate();
  const clickHandler = () => {
    nav("/state");
  };
  return (
    <>
      {/* <Navigate to={'/effect'} /> */}
      <div onClick={clickHandler}>Redirect</div>
    </>
  );
};

export default Redirect;
