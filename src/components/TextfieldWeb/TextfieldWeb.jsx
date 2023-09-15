/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TextfieldWebMonth } from "../TextfieldWebMonth";
import "./style.css";

export const TextfieldWeb = ({ property1, className }) => {
  return (
    <div className={`textfield-web ${className}`}>
      <div className="frame">
        <div className="text-wrapper">Month</div>
        <TextfieldWebMonth month="month" unfilled="default" />
      </div>
      <div className="frame">
        <div className="text-wrapper">Day</div>
        <TextfieldWebMonth month="day" unfilled="default" />
      </div>
      <div className="frame">
        <div className="text-wrapper">Year</div>
        <TextfieldWebMonth month="year" unfilled="default" />
      </div>
    </div>
  );
};

TextfieldWeb.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};
