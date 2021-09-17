import React, { useState } from "react";

import ExitButton from "../../components/Button/ExitButton";
import LeaveButton from "../../components/Button/LeaveButton";
import ChessBoard from "../../components/ChessBoard/ChessBoard";
import Exit from "../../components/Modals/ExitModal/Exit";
import "./GameScreen1.css";
import GameScreenNav from "./GameScreenNav";
import profileOne from "../../assets/Rectangle 892.png";
import LeftArrow from "../../assets/left-arrow.png";

const GameScreenWithoutComments = () => {
  const [openForfeitModal, setForfeitModal] = useState(false);

  const handleForfeitClick = () => {
    setForfeitModal(!openForfeitModal);
  };

  return (
    <main id="game__screen__main">
      <Exit isYes={openForfeitModal} handleClick={handleForfeitClick} />
      {/* <Forfeit isYes={openForfeitModal} handleClick={handleForfeitClick} /> */}

      <div id="chessboard_container">
        <GameScreenNav />

        <div className="leave__mobile">
          <img src={LeftArrow} />
          <h2> Chess Room </h2>

          <LeaveButton handleClick={handleForfeitClick} />
        </div>

        <ChessBoard type="player" />
      </div>

      <div id="side_container">
        
        <div className="btn_container">
          {" "}
          <ExitButton handleClick={handleForfeitClick} />
          {/* <ForfeitButton handleClick={handleForfeitClick} /> */}
        </div>
        <div className="title">Comments</div>
      </div>
    </main>
  );
};

export default GameScreenWithoutComments;
