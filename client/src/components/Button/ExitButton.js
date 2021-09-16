import React from "react";
import "./Button.css";


function ExitButton({ handleClick }) {
  return (
    <div className="exit__button">
      <button
        className="exit-button forfeit-button"
        onClick={() => handleClick()}
      >
        Exit{" "}
      </button>
    </div>
  );
}

export default ExitButton;
