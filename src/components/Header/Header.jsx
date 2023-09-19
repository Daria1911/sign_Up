import React, {useState} from "react";
import { StatusUnclicked } from "../../icons/StatusUnclicked";
import "./style.css";
import {NavBtn} from "../NavBtn";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {isDisabled} from "bootstrap/js/src/util";

export const Header = () => {

    const [search, setSearch] = useState("")

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    return (

        <div className="header">
            <div className="final-proposed-logo">
                <div className="group">
                    <img className="image" alt="Image" src="https://c.animaapp.com/AMpxFugs/img/image-38@2x.png" />
                    <div className="text-wrapper">REEL TALK</div>
                </div>
                <a className="div" href="#about">Browse</a>
                <a className="div" href="#comunity">Community</a>
            </div>
            <div className="search-bar">
                <StatusUnclicked className="search-icon" />
                <input className="text-wrapper-2" value={search} placeholder={"Search"} onChange={updateSearch}></input>
            </div>
            <div className="frame-header">
                <NavBtn
                    className="nav-btn-instance"
                    divClassName="design-component-instance-node"
                    property1="variant-2"
                    text="Login"
                />
                <NavBtn className="nav-btn-instance" property1="default" text="Signup" />
            </div>
        </div>
    );
};
