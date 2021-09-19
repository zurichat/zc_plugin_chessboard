import React from "react";
import SquareAvatar from "./profile.png";
import "./RequestRematch.css";

const DeclineRematch = () => {
    return (
        <div className="RequestRematch__container">
          <div className="RequestRematch__modal">
            <article className="RequestRematch__header">
              <div className="profile">
                <img src={SquareAvatar} alt="profile" />
              </div>
            </article>
            <section className="RequestRematch__content">
              <p className="RequestRematch__text">
              @Felipe has declined your request.
              </p>
            </section>  
          </div>
        </div>
    
      );
    };
    

export default DeclineRematch;