import React, {useState} from "react";
import { ButtonWeb } from "../../components/ButtonWeb";
import { LongerTextField } from "../../components/LongerTextField";
import { ProfileWeb } from "../../components/ProfileWeb";
import { ProgressBar } from "../../components/ProgressBar";
import "./style.css";
import {Header} from "../../components/Header/Header";

export const Frame = () => {

  return (
      <div className="display-name">
        <div className="overlap">
          <div className="frame-3">
            <ProgressBar className="progress-bar-instance" property1="two" />
            <div className="frame-4">
              <div className="text-wrapper-4">Customize your profile</div>
              <p className="p">
                Personalizing your profile will enable us to suggest like-minded users and nearby communities for exciting
                watch parties and movie premiere gatherings.
              </p>
            </div>
            <div className="frame-5">
              <div className="frame-5">
                <div className="frame-6">
                  <ProfileWeb className="profile-web-instance" />
                  <div className="frame-7">
                    <div className="frame-8">
                      <div className="text-wrapper-5">karl.www</div>
                      <img className="vector" alt="Vector" src="https://c.animaapp.com/Jg1s5q7K/img/vector-2.svg" />
                    </div>
                    <div className="frame-9">
                      <div className="frame-10">
                        <div className="div-wrapper">
                          <div className="text-wrapper-6">📍 Unknown location</div>
                        </div>
                        <img
                            className="vector-2"
                            alt="Vector"
                            src="https://c.animaapp.com/Jg1s5q7K/img/vector-1@2x.png"
                        />
                      </div>
                      <img className="vector" alt="Vector" src="https://c.animaapp.com/Jg1s5q7K/img/vector-2.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <LongerTextField
                  className="longer-text-field-instance"
                  divClassName="longer-text-field-2"
                  text="I’m a huge horror movie buff that favors MCU over DC any day. I also love Crime shows and my favorite hero is Spiderman …"
              />
            </div>
            <div className="frame-5">
              <div className="frame-11">
                <ButtonWeb className="design-component-instance-node" text="Back" type="social" />
                <ButtonWeb className="design-component-instance-node" text="Skip" type="social" destination="third"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
