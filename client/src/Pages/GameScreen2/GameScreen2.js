import React, { useState } from "react";

// import ExitButton from "../../components/Button/ExitButton";
import ForfeitButton from "../../components/Button/forfeitButton";
import ChessBoard from "../../components/ChessBoard/ChessBoard";
import Comments from "../../components/Comments/Comments";
import Forfeit from "../../components/Modals/ForfeitModal/Forfeit";
import "./style.css";

const GameScreenWithComments = () => {
  const [openForfeitModal, setForfeitModal] = useState(false);

  const handleForfeitClick = () => {
    setForfeitModal(!openForfeitModal);
  };

  return (
    <main>
      <Forfeit isYes={openForfeitModal} handleClick={handleForfeitClick} />
      <div id="chessboard_container">
        <ChessBoard />
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
