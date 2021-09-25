import React from "react";

// Import Assets for this page
import winnerimage from "../../../assets/modal/winner_image.png";

//  Import CSS for this page
import "./RequestRematch.css";


const RequestRematch = () => {
 
    return (
        <div className="RequestRematch__container">
          <div className="RequestRematch__modal">
          <article className="RequestRematch__header">
          <div className="profile">
            <img src={winnerimage} alt="profile" />
          </div>
        </article>
            <div className="RequestRematch__content">
              <p>
              simideletaiwo! is requesting for a rematch.
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
     

export default RequestRematch;