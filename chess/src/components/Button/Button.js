import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="btn">
             
        <Link to="/game" className="button-1">
          <button className="request-challenge-btn"> 
            Request another Challenge
          </button>
        </Link>
      
      
        <Link to="/" className="button-2">
          <button className="exit-btn">
            Exit
          </button>
        </Link>
       
    </div>
  );
}

export default Button;
