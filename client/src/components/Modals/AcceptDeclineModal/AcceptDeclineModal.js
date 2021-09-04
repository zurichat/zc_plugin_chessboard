import React from "react";
import "./AcceptDeclineModal.css";
import Avatar from "./acceptAvatar.svg";

const AcceptDeclineModal = () => {
  return (
    <>
      <div className="accept_decline_modal_header">
        <img src={Avatar} alt="user" />
      </div>
      <div className="accept_decline_modal_body">
        <p> &#64;simideletaiwo! has challenged you to a game</p>
      </div>
      <div className="accept_decline_modal_footer">
        <button>Accept</button>
        <button>Decline</button>
      </div>
    </>
  );
};

export default AcceptDeclineModal;
