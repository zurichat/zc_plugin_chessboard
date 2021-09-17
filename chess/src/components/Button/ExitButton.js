import React from "react";
import "./Button.css";

function ExitButton({ handleClick }) {
  return (
    <div>
      <button className="exit-button" onClick={() => handleClick()}>
        Exit Game{" "}
      </button>
    </div>
  );
}

export default ExitButton;
