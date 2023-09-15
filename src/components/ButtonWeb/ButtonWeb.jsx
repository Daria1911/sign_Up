/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonWeb = ({ type, className, text = "Next" }) => {
  return (
    <button className={`button-web ${className}`}>
      <button className={`button ${type}`}>
        <div className="next">{text}</div>
      </button>
    </button>
  );
};

ButtonWeb.propTypes = {
  type: PropTypes.oneOf(["primary", "social", "secondary", "disabled"]),
  text: PropTypes.string,
};
