import React, {useState} from "react";
import { ButtonWeb } from "../../components/ButtonWeb";
import { GenreSelection } from "../../components/GenreSelection";
import { ProgressBar } from "../../components/ProgressBar";
import "./style.css";

export const Genre = () => {
    return (

        <div className="frame">
            <div className="frame-wrapper">
                <div className="div-2">
                    <ProgressBar className="progress-bar-instance" property1="four" />
                    <p className="text-wrapper">Select your top 3 genres for movies and TV</p>
                    <GenreSelection className="design-component-instance-node" property1="less"/>
                    <div className="div-3">
                        <ButtonWeb className="design-component-instance-node" text="Back" type="social" destination="third"/>
                        <ButtonWeb className="design-component-instance-node" text="Next" type="disabled" destination="fifth" />
                    </div>
                </div>
            </div>
        </div>
    );
};
