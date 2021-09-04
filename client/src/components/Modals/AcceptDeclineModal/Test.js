import React, { useState } from "react";
import AcceptDeclineModal from "./AcceptDeclineModal";

const TestModal = () => {
  const [showModal, setShowModal] = useState(false);

  // handle modal display
  const handleModal = () => setShowModal(!showModal);
  const style = {
    "text-align": "center",
    "margin-top": "2%",
    cursor: "pointer",
  };
  return (
    <>
      <p style={style} onClick={handleModal}>
        Click to Open Modal
      </p>
      <AcceptDeclineModal showModal={showModal} setShowModal={handleModal} />
    </>
  );
};

export default TestModal;
