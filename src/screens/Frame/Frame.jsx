import React, {useState} from "react";
import { ButtonWeb } from "../../components/ButtonWeb";
import { LongerTextField } from "../../components/LongerTextField";
import { ProfileWeb } from "../../components/ProfileWeb";
import { ProgressBar } from "../../components/ProgressBar";
import "./style.css";
import {Header} from "../../components/Header/Header";

export const Frame = () => {

  const [name, setName] = useState("Karl.www")
  const [location, setLocation] = useState("Unknown Location")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleLocation = (e) => {
    setLocation(e.target.value)
  }

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
                      <input className="text-wrapper-5" value={name} onChange={handleName}></input>
                    </div>
                    <div className="frame-9">
                      <div className="frame-10">
                        <div className="div-wrapper">
                          <div className="text-wrapper-icon">📍</div>
                          <input className="text-wrapper-6" value={location} onChange={handleLocation}></input>
                        </div>
                      </div>
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
