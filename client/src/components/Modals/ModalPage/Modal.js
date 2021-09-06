import React, { useState } from "react";
import CongratulationsModal from "../CongratulationsModal/CongratulationsModal";
import GameOverModal from "../GameOverModal/GameOver"

export default function Modal() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Show Congratulations Modal</button>
      <CongratulationsModal onClose={() => setShow(false)} show={show} />

      <button onClick={() => setShow(true)}>Show Game-Over Modal</button>
      <GameOverModal onClose={() => setShow(false)} show={show} />
  </div>
  );
}
