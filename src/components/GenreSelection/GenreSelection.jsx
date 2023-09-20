/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Tile } from "../Tile";
import "./style.css";

export const GenreSelection = ({ property1, className, isValid }) => {

    const getUpdates = () => {
        isValid
    }


  return (
    <div className={`genre-selection ${className}`}>
      <div className="div">
        <Tile status="default" text="Action 🔫" />
        <Tile status="default" text="Adventure 🪂" />
        <Tile checkboxClassName="tile-instance" status="default" text="Animation 🖍️" />
        <Tile status="default" text="Biography 📚" />
      </div>
      <div className="div">
        <Tile status="default" text="Comedy 😂" />
        <Tile status="default" text="Crime 🕵️‍♂️" />
        <Tile divClassName="tile-2" status="default" text="Documentary 🎥" />
        <Tile status="default" text="Drama 🎭" />
      </div>
      <div className="div">
        <Tile status="default" text="Family 👪" />
        <Tile status="default" text="Fantasy 🦄" />
        <Tile status="default" text="History 📜" />
        <Tile status="default" text="Horror 🧟" />
      </div>
      <div className="div">
        <Tile status="default" text="Mystery 🔎" />
        <Tile status="default" text="Reality-TV 🌎" />
        <Tile status="default" text="Romance ❤️" />
        <Tile status="default" text="Sci-Fi 👽" />
      </div>
      <div className="frame-2">
        <Tile status="default" text="Sport 🏈" />
        <Tile status="default" text="Thriller 😱" />
        <Tile status="default" text="War ⚔️" />
        <Tile status="default" text="Western 🤠" />
      </div>
      {property1 === "more" && (
        <>
          <div className="div">
            <Tile status="default" text="Adult 🔞" />
            <Tile status="default" text="Film-Noir 🎞️" />
            <Tile status="default" text="Game-Show 🎲" />
            <Tile status="default" text="Music 🎧" />
          </div>
          <div className="div">
            <Tile status="default" text="Musical 🎶" />
            <Tile status="default" text="News 📰" />
            <Tile status="default" text="Talk-Show 🗣" />
            <Tile status="default" text="Short ⚡⏳" />
          </div>
        </>
      )}

      <div className="frame-3">
        <div className={`show-less ${property1}`}>
          {property1 === "more" && <>show less</>}

          {property1 === "less" && <>show more</>}
        </div>
        <img className="icon-2" alt="Icon" src={property1 === "less" ? "/img/icon-1.svg" : "/img/icon.svg"} />
      </div>
    </div>
  );
};

GenreSelection.propTypes = {
  property1: PropTypes.oneOf(["less", "more"]),
};
