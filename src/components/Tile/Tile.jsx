/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, {useState} from "react";
import "./style.css";

export const Tile = ({ status, text = "Get started", checkboxClassName, divClassName }) => {
    const [isChecked, setIsChecked] = useState(false)
  return (
    <div className={`tile ${isChecked ? "status-2" : status}`}>
      <div className={`get-started ${isChecked ? "status-2" : divClassName}}`}>
          <input className={`checkbox ${isChecked ? "checked" : ""}`}
                 type="checkbox"
                 name={text}
                 onChange={() => setIsChecked((prev) => !prev)} />
          <label>{text}</label>
      </div>
    </div>
  );
};

Tile.propTypes = {
  status: PropTypes.oneOf(["status-2", "default"]),
  text: PropTypes.string,
};
