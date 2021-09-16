import React, { useState } from "react";

import ExitButton from "../../components/Button/ExitButton";
import ChessBoard from "../../components/ChessBoard/ChessBoard";
import Exit from "../../components/Modals/ExitModal/Exit";
import Navbar from "../Homepage.js/Navbar";
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
    <main>
      <Exit isYes={openForfeitModal} handleClick={handleForfeitClick} />
      {/* <Forfeit isYes={openForfeitModal} handleClick={handleForfeitClick} /> */}
      <div id="chessboard_container">

       
         <GameScreenNav />

         <div className ="leave__mobile">
           <img src={LeftArrow} />
           <h2> Chess Room </h2>

           <h3  > Leave </h3>
           
         </div>

     


        <ChessBoard type="player" />
      </div>


      <div id="side_container">

        <div className="navbar-profilepix">
            
          <img src={profileOne} />
          </div>

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
