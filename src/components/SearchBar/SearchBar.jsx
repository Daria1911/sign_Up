/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StatusUnclicked } from "../../icons/StatusUnclicked";
import "./style.css";

export const SearchBar = ({ property1 }) => {
  return (
    <div className={`search-bar ${property1}`}>
      {["nav", "selection"].includes(property1) && (
        <>
          <StatusUnclicked className="search-icon" color={property1 === "selection" ? "white" : "#6D6D6D"} />
          <div className="text-wrapper">Search</div>
        </>
      )}

      {property1 === "selection-selected" && (
        <>
          <div className="div-wrapper">
            <div className="div">Indi|</div>
          </div>
          <div className="film-listed-item">
            <div className="frame-2">
              <div className="text-wrapper-2">Indi (2017)</div>
              <div className="leandro-tadashi">Oleksandr Kirienko</div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-2">
              <p className="text-wrapper-2">Indiana Jones and the Dial of Destiny (2023)</p>
              <div className="leandro-tadashi">James Mangold</div>
            </div>
          </div>
          <div className="film-listed-item-2">
            <div className="frame-2">
              <p className="text-wrapper-2">Indiana Jones and the Last Crusade (1989)</p>
              <div className="leandro-tadashi">Steven Spielberg</div>
            </div>
          </div>
          <div className="film-listed-item-3">
            <div className="frame-2">
              <p className="text-wrapper-2">Indiana Jones and the Temple of Doom (1984)</p>
              <div className="leandro-tadashi">Steven Spielberg</div>
            </div>
          </div>
          <div className="film-listed-item-4">
            <div className="frame-2">
              <p className="text-wrapper-2">Indiana Jones and the Kingdom of the Crystal Skull (2008)</p>
              <div className="leandro-tadashi">Steven Spielberg</div>
            </div>
          </div>
          <div className="film-listed-item-5">
            <div className="frame-2">
              <div className="text-wrapper-2">India Song (1975)</div>
              <div className="leandro-tadashi">Marguerite Duras</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  property1: PropTypes.oneOf(["selection", "selection-selected", "nav"]),
};
