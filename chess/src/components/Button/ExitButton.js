import React from "react";
import "./Button.css";

function ExitButton({ handleClick }) {
  return (
<<<<<<< HEAD
    <div>
      <button className="exit-button" onClick={() => handleClick()}>
        Exit Game{" "}
=======
    <div className="exit_button_real">
      <button
        className="exit-button"
        onClick={() => handleClick()}
      >
        Exit{" "}
>>>>>>> fb14809d5503998b575d9cf7705855fecc4af666
      </button>
    </div>
  );
}

export default ExitButton;
