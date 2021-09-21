import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Homepage.js/Homepage";
import GameScreenWithComments from "./Pages/GameScreen2/GameScreen2";
import MainGame from "./Pages/GameScreen/MainGame.js";
import InviteModal from "./components/Modals/InviteModal/InviteModal";
import GameScreenWithoutComments from "./Pages/GameScreen1/GameScreen1";
import Rules from "./Pages/Rules/Rules";
import AcceptDeclineModal from "./components/Modals/AcceptDeclineModal";
import RequestRematchPlayer from "./components/Modals/RequestRematchModal/RequestRematchPlayer";

// Zuri Cross Import
// import { GetUserInfo } from "@zuri/zuri-control";

function App() {
  return (
    <div className="App">
      <Router basename="/chess">
        <Switch>
          {/* View All Games */}
          <Route exact path="/" render={() => <HomePage />} />

          {/* ZC Main Comm Test Page */}
          {/* <Route
            exact
            path="/zc_main_test"
            render={() => console.log(GetUserInfo())}
          /> */}

          {/* Specatator Game View */}
          <Route exact path="/game/:id" render={() => <MainGame />} />

          {/* Actual Game Page for Player 1 and Player 2 */}
          <Route
            exact
            path="/game_nocomments/:id"
            render={() => <GameScreenWithoutComments />}
          />

          <Route
            exact
            path="/game_comments"
            render={() => <GameScreenWithComments />}
          />

          <Route exact path="/inviteplayer" render={() => <InviteModal />} />

          <Route exact path="/accept_invite" render={() => <AcceptDeclineModal showModal={true} />} />      

          {/* Rules Page */}
          <Route exact path="/rules" render={() => <Rules />} />

          {/* Request Rematch Modal */}
          <Route
            exact
            path="/request"
            render={() => <RequestRematchPlayer />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
