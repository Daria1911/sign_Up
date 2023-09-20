/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, {useState} from "react";
import { TextfieldWebMonth } from "../TextfieldWebMonth";
import "./style.css";

export const TextfieldWeb = ({ property1, className, isActiveStage }) => {

    const [month, setMonth] = useState("")
    const [day, setDay] = useState("")
    const [year, setYear] = useState("")

    const handleChanges = () => {
        if(month && day && year){
            isActiveStage()
        }
    }

  return (
    <div className={`textfield-web ${property1}`}>
      <div className="frame">
        <div className="text-wrapper">Month</div>
          <div className={`textfield-web-month month`}>
              <div className={`MM unfilled-default`}>
                  <input type="text" value ={month}
                         className={ month ? "active": property1}
                         placeholder={"MM"}
                         onChange={(e) => setMonth(e.target.value)}/>
              </div>
          </div>
      </div>
      <div className="frame">
        <div className="text-wrapper">Day</div>
          <div className={`textfield-web-month month`}>
          <div className={`MM unfilled-`}>
              <input type="text" value ={day}
                     className={ day ? "active": property1}
                     placeholder={"DD"}
                     onChange={(e) => setDay(e.target.value)}/>
          </div>
          </div>
      </div>
      <div className="frame">
        <div className="text-wrapper">Year</div>
          <div className={`textfield-web-month month`}>
          <div className={`MM unfilled-default`}>
              <input type="text" value ={year}
                     className={ year ? "active": property1}
                     placeholder={"YYYY"}
                     onChange={(e) => setYear(e.target.value)}/>
          </div>
          </div>
      </div>
    </div>
  );
};

TextfieldWeb.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};
