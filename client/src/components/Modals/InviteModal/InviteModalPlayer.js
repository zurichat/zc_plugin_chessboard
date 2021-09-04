import React from "react";
import "./inviteModal.css";
import icon from "../../../assets/invite-modal/invitation-player.png";
import sendIcon from "../../../assets/invite-modal/send.svg";

const InviteModalPlayer = (props) => {
  return props.players.map((player) => (
    <div className="invite-player__player">
      <div className="invite-player__player--info">
        <div className="invite-player__player--img">
          <img src={icon} alt="img.."></img>
        </div>
        <div className="invite-player__player--details">
          <p className="invite-player__player--name">{player.name}</p>
          <p>{player.designation}</p>
        </div>
      </div>
      <div className="invite-player__player--cta">
        <p>Send Invite</p>
        <img src={sendIcon}></img>
      </div>
    </div>
  ));
};

export default InviteModalPlayer;
