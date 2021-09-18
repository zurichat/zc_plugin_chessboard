import React from "react";
import "./Button.css";

function LeaveButton({ handleClick }) {
  return (
    <div className="leave__button">
      <h3 onClick={() => handleClick()}> Leave </h3>
    </div>
  );
}

export default LeaveButton;
