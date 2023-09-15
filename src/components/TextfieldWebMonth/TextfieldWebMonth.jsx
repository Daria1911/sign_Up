/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TextfieldWebMonth = ({ month, unfilled }) => {
  return (
    <div className={`textfield-web-month ${month}`}>
      <div className={`MM unfilled-${unfilled}`}>
        {month === "month" && <>MM</>}

        {month === "day" && <>DD</>}

        {month === "year" && <>YYYY</>}
      </div>
    </div>
  );
};

TextfieldWebMonth.propTypes = {
  month: PropTypes.oneOf(["month", "year", "day"]),
  unfilled: PropTypes.oneOf(["filled", "default"]),
};
