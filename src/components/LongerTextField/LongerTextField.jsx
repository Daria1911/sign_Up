/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, {useState} from "react";
import "./style.css";

export const LongerTextField = ({ className, divClassName, text = "Indi" }) => {
    const [comment, setComment] = useState(text)

    const updateComment = (e) => {
        setComment(e.target.value)
    }

    return (
    <div className={`longer-text-field ${className}`}>
      <div className="indi-wrapper">
        <textarea className={`indi ${divClassName}`} value={comment} onChange={updateComment} cols="40" rows="50"></textarea>
      </div>
    </div>
  );
};

LongerTextField.propTypes = {
  text: PropTypes.string,
};
