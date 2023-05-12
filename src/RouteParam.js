import React from "react";
import { useParams } from "react-router-dom";

const RouteParam = () => {
  const { id } = useParams();
  return <div>RouteParam - {id}</div>;
};

export default RouteParam;
