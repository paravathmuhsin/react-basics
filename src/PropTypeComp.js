import React from "react";
import PropTypes from "prop-types";

const PropTypeComp = ({ fname, lname }) => {
  return <div>PropTypeComp - {fname + lname}</div>;
};

PropTypeComp.propTypes = {
  fname: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
};

export default PropTypeComp;
