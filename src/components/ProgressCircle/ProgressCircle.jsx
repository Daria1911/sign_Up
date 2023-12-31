/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ProgressCircle = ({ property1, className }) => {
  return (
    <div className={`progress-circle ${property1} ${className}`}>
      {property1 === "active" && <div className="ellipse" />}
    </div>
  );
};

ProgressCircle.propTypes = {
  property1: PropTypes.oneOf(["not-started", "done", "active"]),
};
