import React, { useState } from "react";

import ExitButton from "../../components/Button/ExitButton";
import ChessBoard from "../../components/ChessBoard/ChessBoard";
import Exit from "../../components/Modals/ExitModal/Exit";
import "./GameScreen1.css";

const GameScreenWithoutComments = () => {
  const [openForfeitModal, setForfeitModal] = useState(false);

  const handleForfeitClick = () => {
    setForfeitModal(!openForfeitModal);
  };

  return (
    <main>
    
       <Exit isYes={openForfeitModal} handleClick={handleForfeitClick} />
      {/* <Forfeit isYes={openForfeitModal} handleClick={handleForfeitClick} /> */}
      <div id="chessboard_container">
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
