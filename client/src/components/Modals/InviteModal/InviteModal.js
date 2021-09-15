import React, { useState } from "react";
import "./inviteModal.css";

import InviteModalPlayer from "./InviteModalPlayer";

const dummyData = [
  {
    name: "Bombos",
    designation: "UI/UX || Creative Design",
  },
  {
    name: "dami",
    designation: "FrontEnd developer",
  },
  {
    name: "Tutuman",
    designation: "FrontEnd developer",
  },
  {
    name: "Soi",
    designation: "Mobile developer",
  },
];

const InviteModal = () => {
  const [playersDetails, setPlayersDetails] = useState([...dummyData]);
  const [tempPlayersDetails, setTempPlayersDetails] = useState([...dummyData]);
  const [noUser, setNoUser] = useState(false);

  const handleInput = (e) => {
    let obj = playersDetails;

    obj = tempPlayersDetails.filter((player) =>
      player.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (obj.length === 0) {
      setNoUser(true);
    } else {
      setNoUser(false);
    }
    setPlayersDetails(obj);
  };

  return (
    <div className="invite-player__backdrop">
      <div className="invite-player__modal">
        <h3>Invite colleagues to your game</h3>
        <p>You can invite your colleagues to play chess with you</p>
        <form className="invite-player__form">
          <input
            type="text"
            autoComplete="off"
            name="text"
            onChange={handleInput}
            placeholder="Search User..."
          />
        </form>

        <div className="invite-player__players">
          {!noUser && <InviteModalPlayer players={playersDetails} />}
          {noUser && (
            <p className="invite-player__no-user">No player found..</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InviteModal;
