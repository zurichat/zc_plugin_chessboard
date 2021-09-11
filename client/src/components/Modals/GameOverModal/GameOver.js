import React, { useState } from "react";
import Button from "../../Button/Button";
import "./GameOver.css";

const GameOverModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="container" onClick={props.onClose}>
      <div className="modal">
        <div className="modal-profile">
          <div className="modal-img"></div>
        </div>
        <div className="modal-content">
          <p>
            <span>Try again next time</span> @EseMonday
          </p>
          <p>You lost this round</p>
        </div>
        <div className="btn-group">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;
