import React from "react";
import { useParams } from "react-router-dom";

const First = () => {
  const { id } = useParams(); // {id: 555}
  return <div>First - {id}</div>;
};

export default First;
