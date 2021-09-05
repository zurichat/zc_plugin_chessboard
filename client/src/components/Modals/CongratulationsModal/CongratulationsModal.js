import React, { useState } from "react";
import Button from "../../Button/Button";
import "./CongratulationsModal.css";

const CongratulationsModal = (props) => {
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
            <span>Congratulations</span> @EseMonday
          </p>
          <p>You won this round</p>
        </div>
        <div className="btn-group">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default CongratulationsModal;
