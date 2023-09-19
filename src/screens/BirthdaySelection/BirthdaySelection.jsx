import React from "react";
import { NavBtn } from "../../components/NavBtn";
import "./style.css";
import {StatusUnclicked} from "../../icons/StatusUnclicked";
import * as PropTypes from "prop-types";
import {ButtonWeb} from "../../components/ButtonWeb";
import {ProgressBar} from "../../components/ProgressBar";
import {TextfieldWeb} from "../../components/TextfieldWeb";
import {Header} from "../../components/Header/Header";


export const BirthdaySelection = ({stage}) => {
  return (

    <div className="birthday-selection">
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
            <img className="frame-7" alt="Frame" src="https://c.animaapp.com/7KGUQ1NE/img/frame-258.png" />
          </div>
          <div className="frame-8">
            <ButtonWeb className="design-component-instance-node" text="Back" type="social" destination="second"/>
            <ButtonWeb className="design-component-instance-node" text="Next" type="disabled" destination="fifth"/>
          </div>
        </div>
      </div>
    </div>
  );
};
