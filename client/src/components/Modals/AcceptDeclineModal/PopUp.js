import React from "react";

const PopUp = ({ children, showModal, hideModal }) => {
  return (
    <div
      className={
        showModal ? "accept_decline_modal_active" : "accept_decline_modal"
      }
    >
      <div className="accept_decline_modal_backdrop" onClick={hideModal}></div>
      <div className="accept_decline_modal_content">{children}</div>
    </div>
  );
};

export default PopUp;
