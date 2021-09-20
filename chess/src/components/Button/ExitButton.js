import React from "react";
import "./Button.css";

function ExitButton({ handleClick }) {
  return (
    <div className="exit_button_real">
      <button className="exit-button" onClick={() => handleClick()}>
        Exit{" "}
      </button>
    </div>
  );
}

export default ExitButton;
