/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
// import { CheckCircle } from "../../icons/CheckCircle";
import "./style.css";

export const MovieSelectionWeb = ({ status, className }) => {
  return (
    <div className={`movie-selection-web ${className}`}>
      <div className={`overlap-group-wrapper ${status}`}>
        <div className="overlap-group-2">
          <img
            className="indiana-jones"
            alt="Indiana jones"
            src={status === "unselected" ? "/img/p1381339291-8.png" : "/img/indiana-jones-9.png"}
          />
          <img
            className="p"
            alt="P"
            src={status === "selected" ? "/img/p1381339291-9.png" : "/img/p1784592701-7.png"}
          />
          <img
            className="p-2"
            alt="P"
            src={status === "selected" ? "/img/p1784592701-8.png" : "/img/p462657443-6.png"}
          />
          <img
            className="p-3"
            alt="P"
            src={status === "selected" ? "/img/p462657443-7.png" : "/img/p501177648-5.png"}
          />
          <img
            className="p-4"
            alt="P"
            src={status === "selected" ? "/img/p501177648-6.png" : "/img/p1461851991-1-4.png"}
          />
          <img
            className="p-5"
            alt="P"
            src={status === "selected" ? "/img/p1461851991-1-5.png" : "/img/p1454261925-1-3.png"}
          />
          <img
            className="p-6"
            alt="P"
            src={status === "unselected" ? "/img/p513344864-1-2.png" : "/img/p1454261925-1-4.png"}
          />
          <img
            className="p-7"
            alt="P"
            src={status === "selected" ? "/img/p513344864-1-3.png" : "/img/p480747492-1.png"}
          />
          {status === "selected" && (
            <>
              <img className="p-8" alt="P" src="/img/p480747492-2.png" />
              <CheckCircle className="check-circle" />
            </>
          )}
        </div>
      </div>
      <div className="the-shawshank">
        The Shawshank <br />
        Redemption (1994)
      </div>
    </div>
  );
};

MovieSelectionWeb.propTypes = {
  status: PropTypes.oneOf(["selected", "unselected"]),
};
