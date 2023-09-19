import React from "react";
import { ButtonWeb } from "../../components/ButtonWeb";
import { MovieArrayWeb } from "../../components/MovieArrayWeb";
import { ProgressBar } from "../../components/ProgressBar";
import { SearchBar } from "../../components/SearchBar";
import "./favorite.css";

export const Favorite = () => {
    return (

        <div className="frame">
            <div className="frame-wrapper">
            <div className="div-2">
                <ProgressBar className="progress-bar-instance" property1="five" />
                <div className="div-3">
                    <div className="div-4">
                        <p className="text-wrapper-3">Select your top 5 movies</p>
                        <p className="text-wrapper-4">
                            Selecting your top 5 movies will enable us to suggest like-minded users and nearby communities for
                            exciting watch parties and movie premiere gatherings.
                        </p>
                    </div>
                    <SearchBar property1="selection" />
                </div>
                <div className="div-5">
                    <MovieArrayWeb className="design-component-instance-node" />
                    <ButtonWeb className="design-component-instance-node" text="Show more" type="secondary" />
                </div>
                <div className="div-6">
                    <div className="div-7">
                        <ButtonWeb className="design-component-instance-node" text="Back" type="social" destination="third"/>
                        <ButtonWeb className="design-component-instance-node" text="Skip" type="social" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};
