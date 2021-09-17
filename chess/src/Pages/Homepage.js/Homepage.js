import React from "react";
import MiniBoard from "../../components/MiniBoard/MiniBoard";
import "./Homepage.css";
import Header from "../../components/Header/Header";

function Homepage({ setPlayerWait }) {
  return (
    <div className="chesshome-container">
      <Header />
      <div className="chesshome-rules-holder">
        <button className="chesshome-rules">Game Rules</button>
      </div>
      <div className="app__container">
        <div className="mini-one">
          <MiniBoard
            id="234"
            playerOne="Emmie4sure"
            playerTwo="techlead"
            playerWait={setPlayerWait}
          />
        </div>
        <div className="mini-two">
          <MiniBoard
            id="234"
            playerOne="simideletaiwo"
            playerTwo="techyNkem"
            playerWait={setPlayerWait}
          />
        </div>
        <div className="mini-three">
          <MiniBoard
            id="234"
            playerOne="whynotdoris"
            playerTwo="trustieee"
            playerWait={setPlayerWait}
          />
        </div>
        <div className="mini-four">
          <MiniBoard
            id="234"
            playerOne="dejavu"
            playerTwo=""
            playerWait={setPlayerWait}
          />
        </div>
        <div className="mini-five">
          <MiniBoard
            id="234"
            playerOne="pgirl"
            playerTwo=""
            playerWait={setPlayerWait}
          />
        </div>
        <div className="mini-six">
          <MiniBoard
            id="234"
            playerOne=""
            playerTwo=""
            playerWait={setPlayerWait}
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
