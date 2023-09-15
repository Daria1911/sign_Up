import React from "react";
import { ButtonWeb } from "../../components/ButtonWeb";
import { LongerTextField } from "../../components/LongerTextField";
import { ProfileWeb } from "../../components/ProfileWeb";
import { ProgressBar } from "../../components/ProgressBar";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <ProgressBar className="progress-bar-instance" property1="two" />
      <div className="div">
        <div className="text-wrapper-2">Customize your profile</div>
        <p className="p">
          Personalizing your profile will enable us to suggest like-minded users and nearby communities for exciting
          watch parties and movie premiere gatherings.
        </p>
      </div>
      <div className="div-2">
        <div className="div-2">
          <div className="div-3">
            <ProfileWeb className="profile-web-instance" />
            <div className="div-4">
              <div className="div-5">
                <div className="text-wrapper-3">karl.www</div>
                <img className="vector" alt="Vector" src="https://c.animaapp.com/ReQL7LGI/img/vector-2.svg" />
              </div>
              <div className="div-6">
                <div className="div-7">
                  <div className="div-wrapper">
                    <div className="text-wrapper-4">📍 Unknown location</div>
                  </div>
                  <img className="vector-2" alt="Vector" src="https://c.animaapp.com/ReQL7LGI/img/vector-1@2x.png" />
                </div>
                <img className="vector" alt="Vector" src="https://c.animaapp.com/ReQL7LGI/img/vector-2.svg" />
              </div>
            </div>
          </div>
        </div>
        <LongerTextField
          className="longer-text-field-instance"
          divClassName="design-component-instance-node"
          text="I’m a huge horror movie buff that favors MCU over DC any day. I also love Crime shows and my favorite hero is Spiderman …"
        />
      </div>
      <div className="div-2">
        <div className="div-8">
          <ButtonWeb className="button-web-instance" text="Back" type="social" />
          <ButtonWeb className="button-web-instance" text="Skip" type="social" />
        </div>
      </div>
    </div>
  );
};
