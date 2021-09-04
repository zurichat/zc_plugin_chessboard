import React from "react";
import "./PlayerName.css";
import Avatar from "../../assets/user.png";

const PlayerName = (props) => {
  return (
    <div className="player__details" style={props.style}>
      <img src={Avatar} alt="" />
      <p>@{props.name}</p>
    </div>
  );
};

export default PlayerName;
