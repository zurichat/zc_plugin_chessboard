import React, { useState } from "react";

import ExitButton from "../../components/Button/ExitButton";
import ChessBoard from "../../components/ChessBoard/ChessBoard";
// import Comments from "../../components/Comments/Comments";
import Header from "../../components/Header/Header";
import Exit from "../../components/Modals/ExitModal/Exit";
import "./GameScreen1.css";

const GameScreenWithoutComments = ({ playerWait }) => {
  const [openForfeitModal, setForfeitModal] = useState(false);

  const handleForfeitClick = () => {
    setForfeitModal(!openForfeitModal);
  };


  return (
    <main>
      <Exit isYes={openForfeitModal} handleClick={handleForfeitClick} />
      {/* <Forfeit isYes={openForfeitModal} handleClick={handleForfeitClick} /> */}
      <div id="chessboard_container">
        <div className="gameheader-container">
        <Header/>
        </div>
        <ChessBoard type="player" playerWait={playerWait}/>
      </div>
      <div id="side_container">
        {/* <div className="btn_container"> */}
          {" "}
          {/* <ForfeitButton handleClick={handleForfeitClick} /> */}
        {/* </div> */}


        <div className="title">
          <p>Comments</p>
        </div>
        <div className="dummy">
          {/* comments can go in here */}
        </div>
        <div className="exit_btn_container">
        <ExitButton handleClick={handleForfeitClick} />
        </div>
      </div>
      
    </main>
  );
};

export default GameScreenWithoutComments;
