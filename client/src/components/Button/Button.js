import React from "react";
import "./Button.css";

function Button() {
    return (
        <div className="btn">
            <button className="request-challenge-btn">
        Request another Challenge
            </button>

            <button className="exit-btn">Exit</button>
        </div>
    );
}

export default Button;
