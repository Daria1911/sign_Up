import React from "react";
import { NavBtn } from "../../components/NavBtn";
import "./style.css";
import {StatusUnclicked} from "../../icons/StatusUnclicked";
import * as PropTypes from "prop-types";
import {ButtonWeb} from "../../components/ButtonWeb";
import {ProgressBar} from "../../components/ProgressBar";
import {TextfieldWeb} from "../../components/TextfieldWeb";


export const BirthdaySelection = () => {
  return (
    <div className="birthday-selection">

      <header className="header">
        <div className="final-proposed-logo">
          <div className="group">
            <img className="image" alt="Image" src="" />
            <div className="div">REEL TALK</div>
          </div>
          <div className="text-wrapper-2">Browse</div>
          <div className="text-wrapper-2">Community</div>
        </div>
        <div className="search-bar">
          <StatusUnclicked className="search-icon" />
          <div className="text-wrapper-3">Search</div>
        </div>
        <div className="frame-2">
          <NavBtn
            className="design-component-instance-node"
            divClassName="nav-btn-instance"
            property1="variant-2"
            text="Login"
          />
          <NavBtn className="design-component-instance-node" property1="default" text="Signup" />
        </div>
      </header>
      <div className="frame-wrapper">
        <div className="frame-3">
          <ProgressBar className="progress-bar-instance" property1="three" />
          <div className="frame-4">
            <div className="frame-5">
              <div className="frame-6">
                <p className="please-provide-your">
                  <span className="span">Please provide your date of birth </span>
                  <span className="span">🎂</span>
                </p>
                <p className="date-of-birth-will">
                  Date of birth will allow us to tailor age-appropriate content <br />
                  and will not be shared with any third parties.
                </p>
              </div>
              <TextfieldWeb className="design-component-instance-node" property1="default" />
            </div>
            <img className="frame-7" alt="Frame" src="/img/frame-258.png" />
          </div>
          <div className="frame-8">
            <ButtonWeb className="design-component-instance-node" text="Back" type="social" />
            <ButtonWeb className="design-component-instance-node" text="Next" type="disabled" />
          </div>
        </div>
      </div>
    </div>
  );
};
