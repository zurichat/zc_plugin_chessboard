import React from "react";
import SquareAvatar from "./Rectangle 892.png";
import "./RequestRematch.css";

const RequestRematchPlayer = () => {
    return (
        <div className="RequestRematch__container">
          <div className="RequestRematch__modal">
            <article className="RequestRematch__header">
              <div className="profile">
                <img src={SquareAvatar} alt="profile"/>
              </div>
            </article>
            <section className="RequestRematch__content">
              <p className="RequestRematch__text">
              @simideletaiwo! is requesting for a rematch.
              </p>
            </section>
            <footer className="RequestRematch__footer">
            <button className="RequestRematch__button RequestRematch__button--Accept">Accept</button>
          <button className="RequestRematc__button RequestRematc__button--Decline">Decline</button>
        </footer>
          </div>
        </div>
    
      );
    };
    

export default RequestRematchPlayer;