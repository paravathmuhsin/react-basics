import React from "react";
import withHoc from "./withHoc";

function HOC({ name, country }) {
  console.log(country);
  return (
    <div>
      HOC - {name} from {country}
    </div>
  );
}

export default withHoc(HOC);
