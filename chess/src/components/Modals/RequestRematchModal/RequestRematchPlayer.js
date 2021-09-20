import React from "react";
import SquareAvatar from "./profile.png";
import "./RequestRematch.css";


const RequestRematchPlayer = () => {
 
    return (
        <div className="RequestRematch__container">
          <div className="RequestRematch__modal">
          <article className="RequestRematch__header">
          <div className="profile">
            <img src={SquareAvatar} alt="profile" />
          </div>
        </article>
            <div className="RequestRematch__content">
              <p>
            @simideletaiwo! is requesting for a rematch.
          </p>
            </div>
            <footer className="RequestRematch__footer">
            <button className="RequestRematch__button RequestRematch__button--Accept">Accept</button>
          <button className="RequestRematch__button RequestRematch__button--Decline">Decline</button>
        </footer>
          </div>
        </div>
    
      );
    };
    

export default RequestRematchPlayer;