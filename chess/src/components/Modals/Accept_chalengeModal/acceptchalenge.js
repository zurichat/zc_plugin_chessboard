import "./acceptchalenge.css";

import React from "react";
import avatar from "./avatar.png";

function Acceptchallenge() {
  return (
    <div className="acceptOverlay">
      <div className="modalContainer">
        <header className="acceptHeader">
          <div className="img-container">
            <img src={avatar} alt="avatar" />
          </div>
        </header>
        <div className="main">
          <p>
            <span>&#64;simideletaiwo!</span> has challenged you to a game
          </p>
        </div>

        <div className="acceptbtns">
          <button className="green_btn">Accept</button>
          <button className="white_btn">Decline</button>
        </div>
      </div>
    </div>
  );
}

export default Acceptchallenge;
