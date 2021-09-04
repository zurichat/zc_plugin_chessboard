import React from "react";
import Avatar from "./acceptAvatar.svg";

const ModalContent = ({ closeModal }) => {
  const handleDecline = () => {
    closeModal();
  };

  return (
    <div className="accept_decline_modal_content_wrapper">
      <div className="accept_decline_modal_header">
        <img src={Avatar} alt="user" />
      </div>
      <div className="accept_decline_modal_body">
        <p> &#64;simideletaiwo! has challenged you to a game</p>
      </div>
      <div className="accept_decline_modal_footer">
        <button>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default ModalContent;
