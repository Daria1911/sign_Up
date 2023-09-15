/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ProgressCircle } from "../ProgressCircle";
import "./style.css";

export const ProgressBar = ({ property1, className }) => {
  return (
    <div className={`progress-bar ${className}`}>
      <div className="overlap-group">
        <img
          className="line-stroke"
          alt="Line stroke"
          src={
            property1 === "one"
              ? "https://c.animaapp.com/ReQL7LGI/img/line-58--stroke--34.svg"
              : "https://c.animaapp.com/ReQL7LGI/img/line-58--stroke--29.svg"
          }
        />
        <img
          className="img"
          alt="Line stroke"
          src={
            ["one", "two"].includes(property1)
              ? "https://c.animaapp.com/ReQL7LGI/img/line-58--stroke--34.svg"
              : "https://c.animaapp.com/ReQL7LGI/img/line-58--stroke--29.svg"
          }
        />
        <img
          className="line-stroke-2"
          alt="Line stroke"
          src={
            ["five", "four", "six"].includes(property1)
              ? "https://c.animaapp.com/ReQL7LGI/img/line-58--stroke--29.svg"
              : "https://c.animaapp.com/ReQL7LGI/img/line-58--stroke--34.svg"
          }
        />
        <img
          className="line-stroke-3"
          alt="Line stroke"
          src={
            ["five", "six"].includes(property1)
              ? "https://c.animaapp.com/ReQL7LGI/img/line-58--stroke--29.svg"
              : "https://c.animaapp.com/ReQL7LGI/img/line-58--stroke--34.svg"
          }
        />
        <img
          className="line-stroke-4"
          alt="Line stroke"
          src={
            property1 === "six"
              ? "https://c.animaapp.com/ReQL7LGI/img/line-58--stroke--29.svg"
              : "https://c.animaapp.com/ReQL7LGI/img/line-58--stroke--34.svg"
          }
        />
        <ProgressCircle className="progress-circle-instance" property1={property1 === "one" ? "active" : "done"} />
        <ProgressCircle
          className="instance-node"
          property1={property1 === "one" ? "not-started" : property1 === "two" ? "active" : "done"}
        />
        <ProgressCircle
          className="progress-circle-2"
          property1={["one", "two"].includes(property1) ? "not-started" : property1 === "three" ? "active" : "done"}
        />
        <ProgressCircle
          className="progress-circle-3"
          property1={property1 === "four" ? "active" : ["five", "six"].includes(property1) ? "done" : "not-started"}
        />
        <ProgressCircle
          className="progress-circle-4"
          property1={property1 === "five" ? "active" : property1 === "six" ? "done" : "not-started"}
        />
        <ProgressCircle className="progress-circle-5" property1={property1 === "six" ? "active" : "not-started"} />
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  property1: PropTypes.oneOf(["two", "three", "four", "one", "five", "six"]),
};
