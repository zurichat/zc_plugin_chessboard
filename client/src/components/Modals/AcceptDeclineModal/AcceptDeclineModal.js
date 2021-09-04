import React from "react";
import "./AcceptDeclineModal.css";
import ModalContent from "./ModalContent";
import PopUp from "./PopUp";

const AcceptDeclineModal = ({ showModal, setShowModal }) => {
  return (
    <PopUp showModal={showModal} hideModal={setShowModal}>
      <ModalContent />
    </PopUp>
  );
};

export default AcceptDeclineModal;
