/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, {useState} from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom'

export const ButtonWeb = ({ type, className, text = "Next" , destination}) => {

    let navigate = useNavigate()
    const [color, setColor] = useState(type)
    const getNext = () => {
       navigate(`/${destination}`)
    }

    const getActiveButton = (e) => {
       if(color === 'disabled'){
           setColor('disabled')
       } else {
           setColor('primary')
       }
    }


  return (
    <button className={`button-web ${className}`}
            onMouseOver={getActiveButton}
            onMouseOut={() => setColor(type)} onClick={getNext}>
      <button className={`button ${color}`}>
        <div className="next">{text}</div>
      </button>
    </button>
  );
};

ButtonWeb.propTypes = {
  type: PropTypes.oneOf(["primary", "social", "secondary", "disabled"]),
  text: PropTypes.string,
};
