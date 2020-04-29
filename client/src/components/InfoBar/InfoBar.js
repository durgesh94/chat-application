import React from "react";

import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

import './InfoBar.css';

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" width="20px" height="20px" src={onlineIcon} alt="Online" />
                <h3>{room}</h3>
            </div>
            <div className="rigthInnerContainer">
                <a href="/"><img width="30px" height="30px" src={closeIcon} alt="Close" /></a>
            </div>
        </div>
    )
}

export default InfoBar;