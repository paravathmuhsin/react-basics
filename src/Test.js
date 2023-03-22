import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Test = () => {
  const { id } = useParams();
  const [first, setfirst] = useState(false);
  // const navigate = useNavigate();
  // const clickHandler = () => {
  //   navigate("/life-cycle");
  // };
  return first ? (
    <Navigate to={'/life-cycle'} />
  ) : (
    <div>
      Test - {id}
      <button
        onClick={() => {
          setfirst(true);
        }}
      >
        Redirect to life cycle pages
      </button>
    </div>
  );
};

export default Test;
