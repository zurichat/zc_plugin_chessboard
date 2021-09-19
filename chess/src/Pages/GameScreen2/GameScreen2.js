import React, { useState } from "react";

import ExitButton from "../../components/Button/ExitButton";
import ForfeitButton from "../../components/Button/forfeitButton";
import ChessBoard from "../../components/ChessBoard/ChessBoard";
import Comments from "../../components/Comments/Comments";
import Forfeit from "../../components/Modals/ForfeitModal/Forfeit";
import CongratulationsModal from "../../components/Modals/CongratulationsModal/CongratulationsModal";
import RequestRematchModal from "../../components/Modals/RequestRematchModal/RequestRematchModalPlayer";
import "./style.css";

const GameScreenWithComments = () => {
  const [openForfeitModal, setForfeitModal] = useState(false);
  const [openCongratulationsModal, setCongratulationsModal] = useState(true);
  const [openRequestRematchModal, setRequestRematchModal] = useState(false);


  const handleForfeitClick = () => {
    setForfeitModal(!openForfeitModal);
  };
  const handleRequestRematchModal = () => {
    setRequestRematchModal(!openRequestRematchModal);
    setCongratulationsModal(!openCongratulationsModal);
  };

  return (
    <main>
      <Forfeit isYes={openForfeitModal} handleClick={handleForfeitClick} />
      <CongratulationsModal isYes={openCongratulationsModal} handleRematchclick={setRequestRematchModal}/>
      <RequestRematchModal isYes={openRequestRematchModal} handleClick={handleRequestRematchModal} />

      <div id="chessboard_container">

        <ChessBoard type="player" />
      </div>
      <div id="side_container">
        <div className="btn_container">
          {" "}
          <ForfeitButton handleClick={handleForfeitClick} />
        </div>
        <Comments />
      </div>
    </main>
  );
};

export default GameScreenWithComments;
